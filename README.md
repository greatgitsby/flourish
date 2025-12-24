# Flourish Bread Company

A modern single-page website for Flourish Bread Company, an artisan sourdough bakery based in Turlock, California. The site showcases handcrafted sourdough products, bakery information, and presence at the local farmer's market.

## Tech Stack

- **Next.js 16** - App Router with server-first architecture
- **React 19** - Latest React with TypeScript support
- **TypeScript 5** - Full type safety
- **Tailwind CSS v4** - New PostCSS plugin architecture
- **Custom Animations** - Scroll-triggered animations using IntersectionObserver

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.

### Build

Create a production build:

```bash
npm run build
npm start
```

### Lint

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
app/
├── layout.tsx              # Root layout with fonts and metadata
├── page.tsx                # Homepage (single-page app)
├── globals.css             # Global styles, CSS variables, animations
└── components/
    ├── HeroSection.tsx           # Landing section
    ├── ProductsSection.tsx       # Product showcase
    ├── AboutSection.tsx          # Bakery information
    ├── InstagramSection.tsx      # Social media integration
    ├── ContactSection.tsx        # Contact/location
    ├── ChristmasBanner.tsx       # Seasonal banner
    ├── ui/
    │   ├── AnimatedElement.tsx   # Scroll animation wrapper
    │   ├── Button.tsx            # Reusable button
    │   └── SectionContainer.tsx  # Section layout wrapper
    ├── Logo.tsx                  # SVG logo component
    └── ProductCard.tsx           # Product display card
```

## Styling System

### Colors
Custom earth-tone palette defined as CSS variables in `globals.css`:
- `--color-golden-crust` (#C17A3A)
- `--color-warm-amber` (#8B5A2B)
- `--color-cream-white` (#FFF8E7)
- Plus sage greens, burgundy, natural wood tones, and more

Use in Tailwind: `bg-[var(--color-golden-crust)]`

### Typography
Three Google Fonts loaded via `next/font`:
- **Playfair Display** - Headings (`var(--font-heading)`)
- **Inter** - Body text (`var(--font-body)`)
- **Marcellus** - Accent text (`var(--font-accent)`)

### Textures
- `.texture-linen` - Subtle crosshatch overlay
- `.texture-wood` - Vertical wood grain

### Animations
Custom animation variants in `globals.css`:
- `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scaleIn`
- Controlled by `<AnimatedElement>` component
- Respects `prefers-reduced-motion`

## Key Features

- Server-first architecture with minimal client components
- Responsive design optimized for mobile and desktop
- Scroll-triggered animations for visual engagement
- Custom color palette inspired by artisan bread and natural materials
- SEO optimized with proper metadata and OpenGraph tags
- Path aliases (`@/*`) for clean imports

## Notes

- Uses Tailwind CSS v4 with new `@tailwindcss/postcss` plugin (no `tailwind.config.js`)
- Configuration in `@theme` blocks within CSS files
- TypeScript strict mode enabled
- ESLint configured for Next.js and TypeScript best practices
