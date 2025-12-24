import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'dark' | 'light';
  className?: string;
}

const sizeMap = {
  sm: 40,
  md: 80,
  lg: 120,
  xl: 160,
};

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const dimension = sizeMap[size];

  return (
    <Image
      src="/logo.png"
      alt="Flourish Bread Company Logo"
      width={dimension}
      height={dimension}
      className={className}
      priority
    />
  );
}
