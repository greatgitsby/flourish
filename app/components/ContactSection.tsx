import React from 'react';
import SectionContainer from './ui/SectionContainer';
import AnimatedElement from './ui/AnimatedElement';
import Button from './ui/Button';
import Logo from './Logo';

export default function ContactSection() {
  return (
    <SectionContainer background="warm-amber" as="section" className="scroll-mt-16 texture-wood relative" id="contact">
      {/* Logo Decoration */}
      <div className="absolute top-8 right-8 opacity-10 hidden md:block">
        <Logo size="xl" color="light" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative z-10">
        {/* Market Location & Hours */}
        <AnimatedElement variant="fadeUp">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Find Us at the Market
            </h2>

            <div
              className="space-y-4 text-lg leading-relaxed opacity-90"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <div>
                <h3
                  className="text-2xl mb-2 text-[var(--color-golden)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Turlock Farmer&apos;s Market
                </h3>
                <p>Downtown Turlock, California</p>
                <p>Central Valley&apos;s finest farmer&apos;s market</p>
              </div>

              <div>
                <h4
                  className="text-xl mb-2 text-[var(--color-golden)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Market Hours
                </h4>
                <p>Visit us weekly for fresh-baked goods</p>
                <p className="text-sm opacity-75 mt-2">
                  (Check Instagram for weekly availability and special items)
                </p>
              </div>

              <div className="pt-4">
                <p className="text-base opacity-90">
                  Located in the heart of Central California, surrounded by the almond orchards and
                  dairies that inspire our craft. We&apos;re proud to serve our community with the
                  freshest artisan breads and baked goods every market day.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Contact Information */}
        <AnimatedElement variant="fadeUp" delay={200}>
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get in Touch
            </h2>

            <div
              className="space-y-6 text-lg leading-relaxed opacity-90"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <div>
                <h3
                  className="text-2xl mb-3 text-[var(--color-golden)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Questions?
                </h3>
                <p className="mb-4">
                  The best way to reach us is through Instagram. Send us a direct message and
                  we&apos;ll get back to you as soon as possible!
                </p>
                <Button
                  variant="secondary"
                  href="https://www.instagram.com/flourishbreadcompany"
                  external
                  className="border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-deep-brown)]"
                >
                  Message Us on Instagram
                </Button>
              </div>

              <div className="pt-6">
                <h3
                  className="text-2xl mb-3 text-[var(--color-golden)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Special Orders
                </h3>
                <p>
                  Planning an event? We&apos;d love to provide fresh bread and baked goods for your
                  special occasion. Reach out via Instagram to discuss custom orders and
                  availability.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Footer */}
      <AnimatedElement variant="fadeIn" delay={400}>
        <div className="text-center mt-16 pt-12 border-t border-[var(--color-cream)] border-opacity-20">
          <p
            className="text-sm opacity-75"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &copy; {new Date().getFullYear()} Flourish Bread Company. Handcrafted with care in
            Turlock, California.
          </p>
        </div>
      </AnimatedElement>
    </SectionContainer>
  );
}
