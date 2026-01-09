import React from 'react';
import Image from 'next/image';
import SectionContainer from './ui/SectionContainer';
import AnimatedElement from './ui/AnimatedElement';

export default function AboutSection(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <SectionContainer background="soft-gray" as="section" {...props}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Annie's Photo */}
        <AnimatedElement variant="slideLeft">
          <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl relative">
            <Image
              src="/annie.jpg"
              alt="Annie Moen, founder of Flourish Bread Company"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </AnimatedElement>

        {/* Text Content */}
        <div>
          <AnimatedElement variant="slideRight">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl mb-6 text-[var(--color-deep-brown)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Meet Annie
            </h2>
          </AnimatedElement>

          <AnimatedElement variant="slideRight" delay={200}>
            <div
              className="space-y-6 text-lg leading-relaxed text-[var(--color-charcoal)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p>
                For eight years, Annie Moen has been crafting exceptional sourdough bread and baked
                goods in the heart of Central California. What started as a passion for traditional
                bread-making has flourished into a beloved bakery serving the Turlock community.
              </p>

              <p>
                Located in Turlock, surrounded by the dairies and almond orchards that define our
                agricultural region, Flourish Bread Company draws inspiration from the bounty of
                Central California. Every loaf is made with patience, care, and the time-honored
                techniques of artisan baking.
              </p>

              <p>
                Annie serves as president of the Turlock Farmer&apos;s Market board, where
                she&apos;s proud to connect directly with the community each week. With professional
                equipment including two Rofco steam ovens and commercial mixers, she maintains the
                highest standards of quality while preserving the handcrafted character that makes
                each product special.
              </p>

              <p>
                From naturally leavened sourdough to buttery scones and beyond, every item reflects
                a commitment to excellence and a love for the craft of baking.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SectionContainer>
  );
}
