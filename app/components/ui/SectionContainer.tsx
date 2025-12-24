import React from 'react';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: 'cream-white' | 'pure-white' | 'sage-green' | 'warm-amber' | 'soft-gray' | 'cream';
  as?: 'section' | 'div';
}

const backgroundColors = {
  'cream-white': 'bg-[var(--color-cream-white)]',
  'pure-white': 'bg-[var(--color-pure-white)]',
  'soft-gray': 'bg-[var(--color-soft-gray)]',
  'sage-green': 'bg-[var(--color-sage-green)] bg-opacity-10',
  'warm-amber': 'bg-[var(--color-warm-amber)] text-[var(--color-cream-white)]',
  'cream': 'bg-[var(--color-cream-white)]',
};

export default function SectionContainer({
  children,
  className = '',
  background = 'cream-white',
  as: Component = 'section',
  ...rest
}: SectionContainerProps) {
  const bgClass = backgroundColors[background as keyof typeof backgroundColors] || backgroundColors['cream-white'];

  return (
    <Component className={`py-16 px-6 sm:py-20 md:py-24 lg:py-32 ${bgClass} ${className}`} {...rest}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </Component>
  );
}
