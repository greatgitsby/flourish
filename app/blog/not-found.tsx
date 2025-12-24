import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-cream-white)] pt-32 pb-32 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1
          className="text-6xl md:text-7xl text-[var(--color-charcoal)] mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Post Not Found
        </h1>
        <p
          className="text-xl text-[var(--color-charcoal)]/70 mb-8"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Sorry, we couldn't find the blog post you're looking for. It may have been moved or doesn't exist.
        </p>
        <Link
          href="/blog"
          className="inline-block px-8 py-4 bg-[var(--color-golden-crust)] text-white rounded-full hover:bg-[var(--color-warm-amber)] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Back to Journal
        </Link>
      </div>
    </main>
  );
}
