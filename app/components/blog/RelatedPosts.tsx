import type { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-[var(--color-cream-white)] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <h2
          className="text-4xl text-[var(--color-charcoal)] mb-16 text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          More from the Journal
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
              featuredImage={post.featuredImage}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
