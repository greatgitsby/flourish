'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Navigation() {

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Let default navigation handle it if not on homepage
    if (window.location.pathname !== '/') return;

    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream-white)]/95 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Logo size="sm" />
            <span
              className="hidden sm:block text-xl text-[var(--color-charcoal)] transition-colors group-hover:text-[var(--color-golden-crust)]"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Flourish
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
            <Link
              href="/"
              className="nav-link text-sm sm:text-base text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="nav-link text-sm sm:text-base text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Journal
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="hidden sm:block nav-link text-sm sm:text-base text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-3 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base bg-[var(--color-golden-crust)] text-white rounded-full hover:bg-[var(--color-warm-amber)] transition-all hover:shadow-lg"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Visit Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
