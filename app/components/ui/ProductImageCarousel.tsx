'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductImageCarouselProps {
  images: string[];
  alt: string;
  gradientColors?: string;
  productName?: string;
}

export default function ProductImageCarousel({
  images,
  alt,
  gradientColors,
  productName,
}: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    // Fallback to gradient
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center ${gradientColors}`}
      >
        <p className="text-white text-2xl font-[family-name:var(--font-heading)] text-center px-4">
          {productName}
        </p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Product image carousel"
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <div className="relative w-full h-full" aria-live="polite">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 carousel-image-transition ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1} of ${images.length}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators - only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              className={`carousel-dot ${
                index === currentIndex ? 'carousel-dot-active' : ''
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
