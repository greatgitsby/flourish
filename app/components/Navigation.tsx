'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--color-cream-white)]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size="sm" />
            <span
              className="text-xl text-[var(--color-charcoal)] transition-colors group-hover:text-[var(--color-golden-crust)]"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              Flourish
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="nav-link text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="nav-link text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Journal
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="nav-link text-[var(--color-charcoal)] hover:text-[var(--color-golden-crust)] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-6 py-2 bg-[var(--color-golden-crust)] text-white rounded-full hover:bg-[var(--color-warm-amber)] transition-all hover:shadow-lg"
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
