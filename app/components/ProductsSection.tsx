import React from 'react';
import SectionContainer from './ui/SectionContainer';
import ProductCard from './ProductCard';
import AnimatedElement from './ui/AnimatedElement';

const products: Array<{
  name: string;
  description: string;
  gradientColors: string;
  images?: string[];
}> = [
  {
    name: 'Sourdough Boules & Loaves',
    description:
      'Our signature naturally leavened sourdough bread, baked to golden perfection with a crispy crust and tender, airy crumb.',
    gradientColors: 'bg-gradient-to-br from-[#C17A3A] to-[#8B5A2B]',
    images: ['/sourdough-bread.jpg', '/bread1.jpg', '/loaf1.jpg'],
  },
  {
    name: 'Scones',
    description:
      'Buttery, flaky scones in rotating flavors including blueberry, chocolate chip, and double chocolate. Perfect with your morning coffee or afternoon tea.',
    gradientColors: 'bg-gradient-to-br from-[#D4A04C] via-[#C17A3A] to-[#6B7F5B]',
    images: ['/blueberry-scone.jpg'],
  },
  {
    name: 'Sourdough Pizza Crusts',
    description:
      'Take our artisan sourdough home for your own pizza night. Pre-baked and ready for your favorite toppings.',
    gradientColors: 'bg-gradient-to-br from-[#FFF8E7] to-[#D4A04C]',
    images: ['/pizza-crusts.jpg', '/pizza1.jpg', '/pizza2.jpg'],
  },
  {
    name: 'Chocolate Chip Cookies',
    description:
      'Classic cookies with a perfect balance of crispy edges and chewy centers, loaded with chocolate chips.',
    gradientColors: 'bg-gradient-to-br from-[#D4A04C] to-[#8B5A2B]',
    images: ['/chocolate-chip-cookies.jpg', '/cookies1.jpg', '/cookies2.jpg'],
  },
  {
    name: 'Corn Cookies',
    description:
      'A unique sweet treat with a delicate corn flavor and tender texture. These cookies are a delightful surprise.',
    gradientColors: 'bg-gradient-to-br from-[#F4D03F] to-[#D4A04C]',
    images: ['/corn-cookies.jpg'],
  },
  {
    name: 'Granola',
    description:
      'House-made granola with toasted oats, nuts, and dried fruits. Perfect for breakfast or snacking.',
    gradientColors: 'bg-gradient-to-br from-[#C9963B] to-[#A0826D]',
    images: ['/granola.jpg'],
  },
];

export default function ProductsSection() {
  return (
    <SectionContainer background="pure-white" className="scroll-mt-16" as="section">
      <AnimatedElement variant="fadeUp">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl text-center mb-4 text-[var(--color-charcoal)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Artisan Breads & Treats
        </h2>
      </AnimatedElement>

      <AnimatedElement variant="fadeUp" delay={200}>
        <p
          className="text-center text-lg sm:text-xl text-[var(--color-charcoal)] opacity-75 mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Every item is handcrafted with care using traditional techniques and the finest ingredients.
        </p>
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <AnimatedElement key={product.name} variant="fadeUp" delay={index * 100}>
            <ProductCard
              name={product.name}
              description={product.description}
              gradientColors={product.gradientColors}
              images={product.images}
            />
          </AnimatedElement>
        ))}
      </div>
    </SectionContainer>
  );
}
