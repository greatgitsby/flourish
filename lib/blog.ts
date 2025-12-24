import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compareDesc } from 'date-fns';
import type { BlogPost, BlogPostFrontmatter } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Validate frontmatter data has all required fields
 */
function validateFrontmatter(data: any): BlogPostFrontmatter {
  if (!data.title || !data.date || !data.excerpt) {
    throw new Error(`Invalid frontmatter: missing required fields (title, date, excerpt)`);
  }

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    featuredImage: data.featuredImage || undefined,
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
}

/**
 * Get all post slugs from the blog directory
 */
export function getPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const frontmatter = validateFrontmatter(data);

    return {
      slug,
      ...frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);

  // Sort posts by date in descending order (newest first)
  return posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
}

/**
 * Get related posts by tag similarity
 */
export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllPosts();
  const currentTags = currentPost.tags || [];

  // Filter out current post and calculate tag overlap
  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const postTags = post.tags || [];
      const commonTags = postTags.filter((tag) => currentTags.includes(tag));
      return {
        post,
        score: commonTags.length,
      };
    });

  // Sort by score (most common tags first), then by date
  const sorted = postsWithScore.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return compareDesc(new Date(a.post.date), new Date(b.post.date));
  });

  // Return top N posts
  return sorted.slice(0, count).map((item) => item.post);
}

/**
 * Calculate estimated reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
