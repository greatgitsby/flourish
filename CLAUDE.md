# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flourish Bread Company is a Next.js 16 website for an artisan sourdough bakery in Turlock, CA. The site is a single-page application showcasing the bakery's products and presence at the local farmer's market.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **React**: Version 19
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 (using new @tailwindcss/postcss plugin)
- **Fonts**: Google Fonts (Playfair Display, Inter, Marcellus)

## Architecture

### App Router Structure

This project uses Next.js App Router with a single-page layout:

- `app/layout.tsx` - Root layout with font configuration and metadata
- `app/page.tsx` - Main page composed of section components
- `app/components/` - Feature sections and UI components
- `app/globals.css` - Global styles, custom CSS variables, and animation classes

### Component Organization

**Top-level Section Components** (rendered in order on homepage):
1. `HeroSection` - Landing section with logo and CTA
2. `ProductsSection` - Product showcase
3. `AboutSection` - About the bakery
4. `InstagramSection` - Social media integration
5. `ContactSection` - Contact/location information

**UI Components** (`app/components/ui/`):
- `AnimatedElement` - Client-side scroll-triggered animations using IntersectionObserver
- `Button` - Reusable button component
- `SectionContainer` - Layout wrapper for sections

**Brand Components**:
- `Logo` - SVG logo component
- `ProductCard` - Product display card

### Styling System

**Custom Color Palette** (defined in `globals.css`):
- Brand colors are Instagram-inspired earth tones
- All colors defined as CSS variables (e.g., `--color-golden-crust`, `--color-cream-white`)
- Use `var(--color-name)` or `bg-[var(--color-name)]` in Tailwind classes

**Typography**:
- Heading font: Playfair Display (accessed via `var(--font-heading)`)
- Body font: Inter (accessed via `var(--font-body)`)
- Accent font: Marcellus (accessed via `var(--font-accent)`)
- Fonts are loaded in `layout.tsx` and exposed as CSS variables

**Custom Textures**:
- `.texture-linen` - Subtle crosshatch texture overlay
- `.texture-wood` - Vertical wood grain texture
- Applied via utility classes, implemented with `::before` pseudo-elements

**Animation System**:
- Custom animation classes defined in `globals.css`
- Variants: `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`
- Controlled by `AnimatedElement` component with delay support
- Respects `prefers-reduced-motion`

### Client vs Server Components

- **Server Components** (default): All section components, layout
- **Client Components** (marked with `'use client'`):
  - `AnimatedElement` - Requires `useEffect` and `useState` for IntersectionObserver
  - Any component using React hooks or browser APIs

## Important Notes

### Tailwind CSS v4
This project uses Tailwind CSS v4 with the new PostCSS plugin architecture:
- No `tailwind.config.js` file - configuration is in `@theme` blocks in CSS
- Import statement is `@import "tailwindcss";` in `globals.css`
- Custom theme values defined inline in CSS using `@theme inline { }`

### Path Aliases
- `@/*` maps to root directory (configured in `tsconfig.json`)
- Example: `import Button from '@/app/components/ui/Button'`

### ESLint Configuration
Uses Next.js recommended ESLint config with TypeScript support:
- Config file: `eslint.config.mjs` (flat config format)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Font Loading
Fonts are loaded using `next/font/google` with:
- `display: 'swap'` for better performance
- CSS variable naming pattern for consistent access
- Font variables applied to body in layout

## SEO & Metadata
All metadata configured in `app/layout.tsx` including:
- Page title and description
- Keywords for local SEO
- OpenGraph tags for social sharing
