import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { format } from 'date-fns';
import { getPostBySlug, getAllPosts, getRelatedPosts, calculateReadingTime } from '@/lib/blog';
import RelatedPosts from '@/app/components/blog/RelatedPosts';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Flourish Bread Company`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, 3);
  const readingTime = calculateReadingTime(post.content);
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  return (
    <main className="min-h-screen bg-[var(--color-cream-white)] pt-24 pb-32">
      <article className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-[var(--color-golden-crust)] hover:underline inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Back to Journal
            </Link>
          </nav>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <time
              className="text-sm text-[var(--color-charcoal)]/60"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              {formattedDate}
            </time>
            <span className="text-[var(--color-charcoal)]/30">•</span>
            <span
              className="text-sm text-[var(--color-charcoal)]/60"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              {readingTime} min read
            </span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-[var(--color-charcoal)]/30">•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--color-sage-green)]/10 text-[var(--color-sage-green)] rounded-full text-xs"
                      style={{ fontFamily: 'var(--font-accent)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-[var(--color-charcoal)] mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {post.title}
          </h1>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative h-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}
        </header>

        {/* Content - Styled Markdown */}
        <div className="prose-flourish">
          <MDXRemote source={post.content} />
        </div>

        {/* Author Note */}
        <div className="mt-16 pt-8 border-t border-[var(--color-charcoal)]/10">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/annie.jpg"
                alt="Annie"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h3
                className="text-xl text-[var(--color-charcoal)] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Annie
              </h3>
              <p
                className="text-[var(--color-charcoal)]/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Baker, sourdough enthusiast, and founder of Flourish Bread Company.
                Sharing stories from the bakery and the quiet magic of slow fermentation.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-24">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </main>
  );
}
