'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';

export default function ChristmasBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-burgundy-red)] text-[var(--color-cream-white)] py-4 px-6 animate-reveal animate-slide-down ${
        isVisible ? 'animate-reveal-visible' : 'animate-reveal-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          className="absolute top-0 right-0 sm:top-1/2 sm:-translate-y-1/2 w-8 h-8 flex items-center justify-center text-[var(--color-cream-white)] hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-cream-white)] focus:ring-offset-2 focus:ring-offset-[var(--color-burgundy-red)] rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="text-center sm:text-left pr-8 sm:pr-0">
          <p
            className="text-lg sm:text-xl font-semibold mb-1"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            🎄 Christmas Baskets Now Available!
          </p>
          <p className="text-sm sm:text-base opacity-90">
            Order festive gift baskets filled with our artisan sourdough breads
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <Button
            variant="secondary"
            href="https://forms.gle/PLAvpgkF5TCj5fgS6"
            external={true}
            className="!border-[var(--color-cream-white)] !text-[var(--color-cream-white)] hover:!bg-[var(--color-cream-white)] hover:!text-[var(--color-burgundy-red)]"
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}
