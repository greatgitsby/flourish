import React from 'react';
import Image from 'next/image';
import ProductImageCarousel from './ui/ProductImageCarousel';

interface ProductCardProps {
  name: string;
  description: string;
  gradientColors: string;
  images?: string[];
}

export default function ProductCard({ name, description, gradientColors, images }: ProductCardProps) {
  const hasImages = images && images.length > 0;

  return (
    <div className="group cursor-default">
      <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        {/* Product Image or Gradient Placeholder */}
        <div className="aspect-[4/3] overflow-hidden relative">
          {hasImages ? (
            images.length === 1 ? (
              // Single image: render simple Image component
              <Image
                src={images[0]}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              // Multiple images: render carousel
              <ProductImageCarousel
                images={images}
                alt={name}
                gradientColors={gradientColors}
                productName={name}
              />
            )
          ) : (
            // No images: render gradient fallback
            <div
              className={`w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${gradientColors}`}
            >
              <span
                className="text-white text-2xl font-semibold opacity-50 select-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {name}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3
            className="text-2xl mb-2 text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            {name}
          </h3>
          <p
            className="text-[var(--color-charcoal)] opacity-75 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
