import React from 'react';
import Button from './ui/Button';
import AnimatedElement from './ui/AnimatedElement';
import Logo from './Logo';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-cream-white)] texture-linen px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedElement variant="scaleIn" delay={0}>
          <div className="mb-8">
            <Logo size="xl" color="dark" className="mx-auto" />
          </div>
        </AnimatedElement>

        <AnimatedElement variant="fadeUp" delay={200}>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Flourish Bread Company
          </h1>
        </AnimatedElement>

        <AnimatedElement variant="fadeUp" delay={400}>
          <p
            className="text-xl sm:text-2xl md:text-3xl mb-4 text-[var(--color-charcoal)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Handcrafted Sourdough & Baked Goods
          </p>
        </AnimatedElement>

        <AnimatedElement variant="fadeUp" delay={600}>
          <p
            className="text-lg sm:text-xl mb-10 text-[var(--color-charcoal)] opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Turlock, California
          </p>
        </AnimatedElement>

        <AnimatedElement variant="fadeUp" delay={800}>
          <Button variant="primary" href="#contact">
            Visit Us at the Farmer&apos;s Market
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
