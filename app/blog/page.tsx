import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import FeaturedPost from '@/app/components/blog/FeaturedPost';
import BlogCard from '@/app/components/blog/BlogCard';
import AnimatedElement from '@/app/components/ui/AnimatedElement';

export const metadata: Metadata = {
  title: "The Baker's Journal | Flourish Bread Company",
  description: 'Stories from the bakery, seasonal musings, and the quiet magic of sourdough baking from Turlock, California.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--color-cream-white)] pt-32 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-6xl md:text-7xl text-[var(--color-charcoal)] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The Baker's Journal
          </h1>
          <p
            className="text-xl text-[var(--color-charcoal)]/70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            New stories coming soon! Check back later.
          </p>
        </div>
      </main>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  // Alternate rotations for recipe card effect
  const rotations = ['card-tilt-left', 'card-tilt-right', '', 'card-tilt-left', 'card-tilt-right', ''];

  return (
    <main className="min-h-screen bg-[var(--color-cream-white)] pt-24 pb-32">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedElement variant="scaleIn">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl text-[var(--color-charcoal)] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The Baker's Journal
            </h1>
            <p
              className="text-xl text-[var(--color-charcoal)]/70 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Stories from the bakery, seasonal musings, and the quiet magic of sourdough
            </p>

            {/* Hand-drawn flourish decoration */}
            <div className="mt-8 flex justify-center">
              <svg width="120" height="12" viewBox="0 0 120 12" className="opacity-40">
                <path
                  d="M2 6 Q30 2, 60 6 T118 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-[var(--color-golden-crust)]"
                />
              </svg>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <AnimatedElement variant="fadeUp">
          <FeaturedPost
            title={featuredPost.title}
            date={featuredPost.date}
            excerpt={featuredPost.excerpt}
            slug={featuredPost.slug}
            featuredImage={featuredPost.featuredImage}
            tags={featuredPost.tags}
          />
        </AnimatedElement>
      </div>

      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedElement
                key={post.slug}
                variant="fadeUp"
                delay={index * 100}
              >
                <BlogCard
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  featuredImage={post.featuredImage}
                  tags={post.tags}
                  rotation={rotations[index % rotations.length]}
                />
              </AnimatedElement>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
