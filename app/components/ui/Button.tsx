import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

const variantStyles = {
  primary:
    'bg-[var(--color-golden-crust)] text-white hover:bg-[var(--color-warm-amber)] px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg',
  secondary:
    'border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream-white)] px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105',
  link:
    'text-[var(--color-golden-crust)] hover:text-[var(--color-warm-amber)] font-medium underline decoration-2 underline-offset-4 transition-colors duration-200',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  external = false,
}: ButtonProps) {
  const baseStyles = variantStyles[variant];
  const classes = `inline-flex items-center justify-center gap-2 ${baseStyles} ${className} focus:outline-none focus:ring-2 focus:ring-[var(--color-golden-crust)] focus:ring-offset-2`;

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {content}
    </button>
  );
}
