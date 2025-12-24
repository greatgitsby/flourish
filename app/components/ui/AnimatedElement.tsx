'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses = {
  fadeUp: 'animate-fade-up',
  fadeIn: 'animate-fade-in',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleIn: 'animate-scale-in',
};

export default function AnimatedElement({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as: Component = 'div',
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClass = variantClasses[variant];
  const visibilityClass = isVisible ? 'animate-reveal-visible' : 'animate-reveal-hidden';

  return (
    <Component
      ref={elementRef as any}
      className={`animate-reveal ${animationClass} ${visibilityClass} ${className}`}
    >
      {children}
    </Component>
  );
}
