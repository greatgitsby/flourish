# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flourish Bread Company is a Next.js 16 website for an artisan sourdough bakery in Turlock, CA. The site features a homepage with product showcase and bakery information, plus a blog section called "The Baker's Journal" for sharing stories and recipes.

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
- **Blog**: File-based markdown with gray-matter, next-mdx-remote, date-fns

## Architecture

### App Router Structure

The project uses Next.js App Router with both single-page and multi-page routes:

**Homepage (single-page app)**:
- `app/layout.tsx` - Root layout with Navigation, font configuration, and metadata
- `app/page.tsx` - Homepage composed of section components
- `app/components/` - Feature sections and UI components

**Blog pages**:
- `app/blog/page.tsx` - Blog listing page with featured post and grid
- `app/blog/[slug]/page.tsx` - Individual blog post pages (dynamic routes)
- `app/blog/not-found.tsx` - 404 page for missing posts
- `content/blog/*.md` - Markdown blog posts with frontmatter
- `lib/blog.ts` - Blog utilities for reading/parsing posts
- `types/blog.ts` - TypeScript interfaces for blog data

**Other**:
- `app/globals.css` - Global styles, custom CSS variables, and animation classes
- `app/sitemap.ts` - Dynamic sitemap generation including blog posts

### Component Organization

**Top-level Section Components** (rendered in order on homepage):
1. `HeroSection` - Landing section with logo and CTA
2. `ProductsSection` - Product showcase
3. `AboutSection` - About the bakery (accepts `id` prop for anchor links)
4. `InstagramSection` - Social media integration
5. `ContactSection` - Contact/location information (accepts `id` prop for anchor links)

**Navigation**:
- `Navigation` - Fixed header with smooth scrolling, responsive design
  - Shows logo + "Flourish" text on desktop, logo only on mobile
  - Links: Home, Journal, About (hidden on mobile), Visit Us button
  - Scroll detection changes background from transparent to cream with blur

**Blog Components** (`app/components/blog/`):
- `BlogCard` - Reusable post card with image, date, title, excerpt, tags
- `FeaturedPost` - Large hero treatment for newest post (split layout)
- `RelatedPosts` - Grid of related posts based on tag similarity

**UI Components** (`app/components/ui/`):
- `AnimatedElement` - Client-side scroll-triggered animations using IntersectionObserver
- `Button` - Reusable button component with variants
- `SectionContainer` - Layout wrapper for sections (accepts `id` and other HTML props)

**Brand Components**:
- `Logo` - SVG logo component
- `ProductCard` - Product display card

### Blog System

**Content Management**:
- Blog posts are markdown files in `content/blog/` directory
- Each post has YAML frontmatter with required fields: `title`, `date`, `excerpt`
- Optional frontmatter: `featuredImage` (path to image in /public/), `tags` (array)
- Content is parsed with `gray-matter` and rendered with `next-mdx-remote`

**Key Functions** (`lib/blog.ts`):
- `getPostSlugs()` - Get all post filenames
- `getPostBySlug(slug)` - Read and parse single post
- `getAllPosts()` - Get all posts sorted by date (newest first)
- `getRelatedPosts(slug, count)` - Get related posts by tag similarity
- `calculateReadingTime(content)` - Estimate reading time in minutes

**Static Generation**:
- Blog listing and individual posts use server components
- `generateStaticParams()` creates static pages for all blog posts at build time
- `generateMetadata()` creates dynamic SEO metadata for each post
- **Important**: In Next.js 16, `params` is a Promise and must be awaited:
  ```typescript
  export default async function BlogPost({ params }: Props) {
    const { slug } = await params; // Must await!
    const post = getPostBySlug(slug);
    // ...
  }
  ```

**Blog Styling**:
- `.prose-flourish` class in `globals.css` styles all blog post content (headings, paragraphs, links, blockquotes, code, images)
- Staggered animations on blog grid using `.animate-stagger-*` classes
- Card tilt effects with `.card-tilt-left` and `.card-tilt-right`

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

**Navigation Hover Effects**:
- `.nav-link` class provides animated underline on hover
- Defined in `globals.css` with `::after` pseudo-element

### Client vs Server Components

- **Server Components** (default): All section components, layout, blog pages
- **Client Components** (marked with `'use client'`):
  - `Navigation` - Requires scroll event listeners and `useState`
  - `AnimatedElement` - Requires `useEffect` and `useState` for IntersectionObserver
  - Any component using React hooks or browser APIs

### Responsive Design

**Mobile Considerations**:
- Navigation reduces spacing and hides some elements on mobile
- "Flourish" text hidden below `sm` breakpoint (logo only)
- "About" link hidden on mobile to prevent crowding
- Button and text sizes reduced on mobile
- Blog grid switches to single column on mobile

**Breakpoints** (Tailwind defaults):
- `sm:` 640px and up
- `md:` 768px and up
- `lg:` 1024px and up

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

### Section ID Props
`AboutSection` and `ContactSection` accept HTML attributes including `id` prop for anchor links:
```typescript
<AboutSection id="about" />
<ContactSection id="contact" />
```
This is implemented by accepting `props: React.HTMLAttributes<HTMLElement>` and spreading to `SectionContainer`.

## SEO & Metadata
- Main metadata configured in `app/layout.tsx` (title, description, keywords, OpenGraph tags)
- Blog posts have dynamic metadata via `generateMetadata()` in `app/blog/[slug]/page.tsx`
- Sitemap generated dynamically in `app/sitemap.ts` including all blog posts
