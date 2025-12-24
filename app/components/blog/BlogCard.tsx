import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  featuredImage?: string;
  tags?: string[];
  rotation?: string;
}

export default function BlogCard({
  title,
  date,
  excerpt,
  slug,
  featuredImage,
  tags,
  rotation = '',
}: BlogCardProps) {
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');

  return (
    <Link href={`/blog/${slug}`} className={`block group ${rotation}`}>
      <article className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-0 h-full flex flex-col">
        {/* Image */}
        {featuredImage && (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date */}
          <time
            className="text-sm text-[var(--color-charcoal)]/50 mb-3 block"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            {formattedDate}
          </time>

          {/* Title */}
          <h3
            className="text-2xl text-[var(--color-charcoal)] mb-3 group-hover:text-[var(--color-golden-crust)] transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-[var(--color-charcoal)]/70 mb-4 leading-relaxed flex-1 line-clamp-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {excerpt}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[var(--color-cream-white)] text-[var(--color-charcoal)]/60 rounded-full text-xs"
                  style={{ fontFamily: 'var(--font-accent)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
