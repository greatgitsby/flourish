import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

interface FeaturedPostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
  tags?: string[];
}

export default function FeaturedPost({
  title,
  date,
  excerpt,
  slug,
  featuredImage,
  tags,
}: FeaturedPostProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-96 md:h-auto overflow-hidden">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-golden-crust)] to-[var(--color-warm-amber)]" />
            )}
          </div>

          {/* Content */}
          <div className="p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-sm tracking-widest uppercase text-[var(--color-golden-crust)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Featured
              </span>
              <span className="text-sm text-[var(--color-charcoal)]/50">•</span>
              <time
                className="text-sm text-[var(--color-charcoal)]/60"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                {formattedDate}
              </time>
            </div>

            <h2
              className="text-4xl lg:text-5xl text-[var(--color-charcoal)] mb-6 group-hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h2>

            <p
              className="text-lg text-[var(--color-charcoal)]/70 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {excerpt}
            </p>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[var(--color-sage-green)]/10 text-[var(--color-sage-green)] rounded-full text-sm"
                    style={{ fontFamily: 'var(--font-accent)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span
              className="text-[var(--color-golden-crust)] font-medium inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Read the story
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 4L13 10L7 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-transform group-hover:translate-x-1"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
