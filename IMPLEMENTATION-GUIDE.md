# Portfolio Implementation Guide

## Design Reference: Elias Portfolio (Figma)

A terminal-inspired, minimalist developer portfolio with dark theme and clean aesthetics.

---

## Table of Contents

1. [Design System](#1-design-system)
2. [Project Structure](#2-project-structure)
3. [Step-by-Step Implementation](#3-step-by-step-implementation)
4. [Component Breakdown](#4-component-breakdown)
5. [Pages Implementation](#5-pages-implementation)
6. [Animations & Interactions](#6-animations--interactions)
7. [Responsive Design](#7-responsive-design)
8. [Final Checklist](#8-final-checklist)

---

## 1. Design System

### 1.1 Color Palette

```css
:root {
  /* Background Colors */
  --bg-primary: #1e1e2e; /* Main background */
  --bg-secondary: #282838; /* Card backgrounds */
  --bg-tertiary: #313244; /* Input/hover backgrounds */

  /* Text Colors */
  --text-primary: #ffffff; /* Main text */
  --text-secondary: #abb2bf; /* Muted text */
  --text-muted: #6b7280; /* Very muted text */

  /* Accent Colors */
  --accent-primary: #c778dd; /* Purple - primary accent */
  --accent-secondary: #ffffff; /* White - secondary accent */
  --accent-link: #c778dd; /* Links */

  /* Border Colors */
  --border-color: #abb2bf; /* Default borders */
  --border-muted: #3e4450; /* Subtle borders */

  /* Special */
  --hashtag-color: #c778dd; /* Section hashtags (#) */
  --dot-pattern: #3e4450; /* Decorative dots */
}
```

### 1.2 Typography

```css
/* Font Family */
--font-primary: 'Fira Code', monospace; /* Main font */
--font-secondary: 'Inter', sans-serif; /* Body text alternative */

/* Font Sizes */
--text-xs: 14px;
--text-sm: 16px;
--text-base: 18px;
--text-lg: 24px;
--text-xl: 32px;
--text-2xl: 48px;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 1.3 Spacing

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

### 1.4 Border Radius

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

---

## 2. Project Structure

```
/src
├── /app
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + CSS variables
│   ├── /projects
│   │   └── page.tsx            # Projects page
│   ├── /about-me
│   │   └── page.tsx            # About page
│   └── /contacts
│       └── page.tsx            # Contacts page
│
├── /components
│   ├── /layout
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Sidebar.tsx         # Mobile sidebar
│   │   ├── Footer.tsx          # Footer component
│   │   └── DotPattern.tsx      # Decorative dots
│   │
│   ├── /home
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Quote.tsx           # Quote block
│   │   ├── ProjectsPreview.tsx # Projects preview
│   │   ├── SkillsPreview.tsx   # Skills preview
│   │   ├── AboutPreview.tsx    # About preview
│   │   └── ContactsPreview.tsx # Contacts preview
│   │
│   ├── /projects
│   │   ├── ProjectCard.tsx     # Project card
│   │   └── ProjectGrid.tsx     # Projects grid
│   │
│   ├── /about
│   │   ├── Bio.tsx             # Biography section
│   │   ├── SkillsGrid.tsx      # Full skills grid
│   │   └── FunFacts.tsx        # Fun facts section
│   │
│   ├── /contacts
│   │   ├── ContactInfo.tsx     # Contact information
│   │   └── SocialLinks.tsx     # All social media
│   │
│   └── /ui
│       ├── Button.tsx          # Button component
│       ├── SectionTitle.tsx    # #section-title component
│       ├── Card.tsx            # Base card component
│       ├── Tag.tsx             # Tech tag component
│       └── StatusBadge.tsx     # "Currently working on" badge
│
├── /constants
│   ├── navigation.ts           # Nav links
│   ├── projects.ts             # Projects data
│   ├── skills.ts               # Skills data
│   ├── socials.ts              # Social links
│   └── personal.ts             # Personal info
│
├── /types
│   └── index.ts                # TypeScript interfaces
│
└── /styles
    └── animations.css          # Custom animations
```

---

## 3. Step-by-Step Implementation

### Phase 1: Setup & Configuration

#### Step 1.1: Update Tailwind Config

```bash
# Install Fira Code font
npm install @fontsource/fira-code
```

**File: `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#1E1E2E',
          secondary: '#282838',
          tertiary: '#313244',
        },
        accent: {
          purple: '#C778DD',
          white: '#FFFFFF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#ABB2BF',
          muted: '#6B7280',
        },
        border: {
          DEFAULT: '#ABB2BF',
          muted: '#3E4450',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
```

#### Step 1.2: Update Global CSS

**File: `src/app/globals.css`**

```css
@import '@fontsource/fira-code/400.css';
@import '@fontsource/fira-code/500.css';
@import '@fontsource/fira-code/600.css';
@import '@fontsource/fira-code/700.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary: #1e1e2e;
  --bg-secondary: #282838;
  --accent-purple: #c778dd;
}

body {
  background-color: var(--bg-primary);
  color: #ffffff;
  font-family: 'Fira Code', monospace;
}

/* Hashtag styling for section titles */
.hashtag {
  color: var(--accent-purple);
}

/* Decorative dot pattern */
.dot-pattern {
  background-image: radial-gradient(#3e4450 1px, transparent 1px);
  background-size: 16px 16px;
}
```

---

### Phase 2: Layout Components

#### Step 2.1: Create Header Component

**File: `src/components/layout/Header.tsx`**

```typescript
'use client'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'works', href: '/projects' },
  { name: 'about-me', href: '/about-me' },
  { name: 'contacts', href: '/contacts' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background-primary/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">Hemanth</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-white transition-colors"
            >
              <span className="text-accent-purple">#</span>
              {link.name}
            </Link>
          ))}
          <span className="text-text-secondary">EN</span>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
```

#### Step 2.2: Create Footer Component

**File: `src/components/layout/Footer.tsx`**

```typescript
import Link from 'next/link'

const socialLinks = [
  { name: 'GitHub', icon: '◐', href: 'https://github.com' },
  { name: 'LinkedIn', icon: '◑', href: 'https://linkedin.com' },
  { name: 'Twitter', icon: '◒', href: 'https://twitter.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-muted py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold">Hemanth</p>
            <p className="text-text-secondary text-sm">
              Web designer and front-end developer
            </p>
          </div>

          {/* Center: Media */}
          <div className="text-center">
            <p className="text-text-secondary text-sm mb-2">Media</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-text-secondary hover:text-white transition-colors"
                  target="_blank"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-text-muted text-sm mt-8">
          © Copyright 2024. Made by Hemanth
        </p>
      </div>
    </footer>
  )
}
```

#### Step 2.3: Create Dot Pattern Component

**File: `src/components/layout/DotPattern.tsx`**

```typescript
export default function DotPattern({ position }: { position: 'left' | 'right' }) {
  return (
    <div
      className={`fixed top-1/2 -translate-y-1/2 ${
        position === 'left' ? 'left-4' : 'right-4'
      } hidden lg:block`}
    >
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-text-muted/30"
          />
        ))}
      </div>
    </div>
  )
}
```

---

### Phase 3: UI Components

#### Step 3.1: Section Title Component

**File: `src/components/ui/SectionTitle.tsx`**

```typescript
interface SectionTitleProps {
  title: string
  subtitle?: string
  showViewAll?: boolean
  viewAllHref?: string
}

export default function SectionTitle({
  title,
  subtitle,
  showViewAll,
  viewAllHref,
}: SectionTitleProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">
          <span className="text-accent-purple">#</span>
          {title}
        </h2>
        {subtitle && (
          <span className="text-text-secondary">{subtitle}</span>
        )}
        <div className="hidden md:block w-64 h-px bg-accent-purple" />
      </div>
      {showViewAll && viewAllHref && (
        <a
          href={viewAllHref}
          className="text-text-secondary hover:text-white transition-colors"
        >
          View all ~~&gt;
        </a>
      )}
    </div>
  )
}
```

#### Step 3.2: Project Card Component

**File: `src/components/ui/ProjectCard.tsx`**

```typescript
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  sourceUrl?: string
  isSmall?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  sourceUrl,
  isSmall = false,
}: ProjectCardProps) {
  if (isSmall) {
    // Small project card (no image)
    return (
      <div className="border border-border-muted bg-background-secondary p-4">
        <div className="flex flex-wrap gap-2 mb-3 text-text-muted text-xs">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        <div className="flex gap-2">
          {sourceUrl && (
            <Link
              href={sourceUrl}
              className="px-3 py-1 border border-accent-purple text-accent-purple text-sm hover:bg-accent-purple/10 transition-colors"
            >
              GitHub &lt;~
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              className="px-3 py-1 border border-border text-white text-sm hover:bg-white/10 transition-colors"
            >
              Live &lt;~
            </Link>
          )}
        </div>
      </div>
    )
  }

  // Full project card (with image)
  return (
    <div className="border border-border-muted bg-background-secondary">
      {/* Image */}
      <div className="relative h-40 border-b border-border-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Tags */}
      <div className="px-4 py-2 border-b border-border-muted">
        <div className="flex flex-wrap gap-2 text-text-muted text-xs">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-4">{description}</p>
        <div className="flex gap-2">
          {liveUrl && (
            <Link
              href={liveUrl}
              className="px-3 py-1 border border-accent-purple text-accent-purple text-sm hover:bg-accent-purple/10 transition-colors"
            >
              Live &lt;~
            </Link>
          )}
          {sourceUrl && (
            <Link
              href={sourceUrl}
              className="px-3 py-1 border border-border text-white text-sm hover:bg-white/10 transition-colors"
            >
              Cached &gt;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
```

#### Step 3.3: Button Component

**File: `src/components/ui/Button.tsx`**

```typescript
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 text-sm font-medium transition-colors'

  const variants = {
    primary: 'border border-accent-purple text-accent-purple hover:bg-accent-purple/10',
    secondary: 'border border-border text-white hover:bg-white/10',
    outline: 'border border-border-muted text-text-secondary hover:text-white',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
```

#### Step 3.4: Skills Grid Component

**File: `src/components/ui/SkillsGrid.tsx`**

```typescript
interface Skill {
  category: string
  items: string[]
}

const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Go'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Tools',
    items: ['Docker', 'Git', 'Figma', 'AWS'],
  },
  {
    category: 'Other',
    items: ['HTML', 'CSS', 'REST', 'GraphQL'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind'],
  },
]

export default function SkillsGrid() {
  return (
    <div className="border border-border-muted">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {skills.map((skill, index) => (
          <div
            key={skill.category}
            className={`p-4 ${
              index < skills.length - 1 ? 'border-r border-border-muted' : ''
            }`}
          >
            <h4 className="text-white font-medium mb-3">{skill.category}</h4>
            <ul className="space-y-1">
              {skill.items.map((item) => (
                <li key={item} className="text-text-secondary text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

### Phase 4: Home Page Sections

#### Step 4.1: Hero Section

**File: `src/components/home/Hero.tsx`**

```typescript
import Image from 'next/image'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hemanth is a{' '}
              <span className="text-accent-purple">web designer</span> and{' '}
              <span className="text-accent-purple">front-end developer</span>
            </h1>
            <p className="text-text-secondary mb-8">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button href="/contacts">Contact me!</Button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/developer.webp"
                alt="Hemanth"
                width={400}
                height={400}
                className="relative z-10"
              />
              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="border border-border-muted bg-background-primary p-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-accent-purple rounded-full" />
                  <span className="text-text-secondary text-sm">
                    Currently working on{' '}
                    <span className="text-white">Portfolio</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Step 4.2: Quote Section

**File: `src/components/home/Quote.tsx`**

```typescript
export default function Quote() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Quote Box */}
          <div className="border border-border-muted p-6 relative">
            {/* Top Quote Mark */}
            <span className="absolute -top-3 left-6 bg-background-primary px-2 text-2xl text-text-muted">
              "
            </span>

            <p className="text-xl text-white text-center">
              With great power comes great electricity bill
            </p>

            {/* Bottom Quote Mark */}
            <span className="absolute -bottom-3 right-6 bg-background-primary px-2 text-2xl text-text-muted">
              "
            </span>
          </div>

          {/* Author */}
          <div className="flex justify-end mt-4">
            <div className="border border-border-muted px-4 py-2">
              <span className="text-text-secondary">- Dr. Who</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Step 4.3: Projects Preview Section

**File: `src/components/home/ProjectsPreview.tsx`**

```typescript
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'

const featuredProjects = [
  {
    title: 'ChertNodes',
    description: 'Minecraft server hosting',
    image: '/images/projects/chertnodes.png',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    image: '/images/projects/protectx.png',
    tags: ['React', 'Express', 'Discord.js', 'Node.js'],
    liveUrl: '#',
  },
  {
    title: 'Kahoot Answers',
    description: 'Get answers to your kahoot quiz',
    image: '/images/projects/kahoot.png',
    tags: ['CSS', 'Express', 'Node.js'],
    liveUrl: '#',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="projects"
          showViewAll
          viewAllHref="/projects"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

#### Step 4.4: Skills Preview Section

**File: `src/components/home/SkillsPreview.tsx`**

```typescript
import SectionTitle from '../ui/SectionTitle'
import SkillsGrid from '../ui/SkillsGrid'

export default function SkillsPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Decorative Dots */}
          <div className="hidden md:flex justify-center items-center">
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-text-muted/30"
                />
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <SectionTitle title="skills" />
            <SkillsGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Step 4.5: About Preview Section

**File: `src/components/home/AboutPreview.tsx`**

```typescript
import Image from 'next/image'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

export default function AboutPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="about-me" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-text-secondary mb-4">Hello, i'm Hemanth!</p>
            <p className="text-text-secondary mb-4">
              I'm a self-taught front-end developer based in India.
              I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences.
            </p>
            <p className="text-text-secondary mb-6">
              Transforming my creativity and knowledge into a website
              has been my passion for over 3 years. I have been helping
              various clients to establish their presence online.
            </p>
            <Button href="/about-me">Read more -&gt;</Button>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <Image
              src="/images/developer.webp"
              alt="Hemanth"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

#### Step 4.6: Contacts Preview Section

**File: `src/components/home/ContactsPreview.tsx`**

```typescript
import SectionTitle from '../ui/SectionTitle'

export default function ContactsPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title="contacts" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Text */}
          <div>
            <p className="text-text-secondary">
              I'm interested in freelance opportunities. However,
              if you have other request or question, don't hesitate
              to contact me.
            </p>
          </div>

          {/* Right: Contact Box */}
          <div className="flex justify-end">
            <div className="border border-border-muted p-4">
              <p className="text-white font-medium mb-4">Message me here</p>
              <ul className="space-y-2">
                <li className="text-text-secondary text-sm flex items-center gap-2">
                  <span>📧</span> hemanth@example.com
                </li>
                <li className="text-text-secondary text-sm flex items-center gap-2">
                  <span>💬</span> @hemanth_dev
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### Phase 5: Page Assembly

#### Step 5.1: Home Page

**File: `src/app/page.tsx`**

```typescript
import Hero from '@/components/home/Hero'
import Quote from '@/components/home/Quote'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import SkillsPreview from '@/components/home/SkillsPreview'
import AboutPreview from '@/components/home/AboutPreview'
import ContactsPreview from '@/components/home/ContactsPreview'
import DotPattern from '@/components/layout/DotPattern'

export default function HomePage() {
  return (
    <main>
      <DotPattern position="left" />
      <DotPattern position="right" />

      <Hero />
      <Quote />
      <ProjectsPreview />
      <SkillsPreview />
      <AboutPreview />
      <ContactsPreview />
    </main>
  )
}
```

#### Step 5.2: Projects Page

**File: `src/app/projects/page.tsx`**

```typescript
import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'

const completeApps = [
  // ... project data
]

const smallProjects = [
  // ... project data
]

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-accent-purple">/</span>projects
          </h1>
          <p className="text-text-secondary">List of my projects</p>
        </div>

        {/* Complete Apps */}
        <SectionTitle title="complete-apps" />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Project cards */}
        </div>

        {/* Small Projects */}
        <SectionTitle title="small-projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Small project cards */}
        </div>
      </div>
    </main>
  )
}
```

#### Step 5.3: About Page

**File: `src/app/about-me/page.tsx`**

```typescript
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'
import SkillsGrid from '@/components/ui/SkillsGrid'

const funFacts = [
  'I like mass media and how easy mass manipulation is',
  'I spend hours mass-pinging my friends on Discord',
  'My mass favorite movie is "Spider-Man"',
  'I am mass still in school',
  "I don't mass like mass ketchup",
]

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-accent-purple">/</span>about-me
          </h1>
          <p className="text-text-secondary">Who am I?</p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-text-secondary mb-4">Hello, i'm Hemanth!</p>
            <p className="text-text-secondary mb-4">
              I'm a self-taught front-end developer based in India...
            </p>
          </div>
          <div>
            <Image
              src="/images/developer.webp"
              alt="Hemanth"
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Skills */}
        <SectionTitle title="skills" />
        <SkillsGrid />

        {/* Fun Facts */}
        <div className="mt-16">
          <SectionTitle title="my-fun-facts" />
          <div className="flex flex-wrap gap-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="border border-border-muted px-4 py-2"
              >
                <p className="text-text-secondary text-sm">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
```

#### Step 5.4: Contacts Page

**File: `src/app/contacts/page.tsx`**

```typescript
import SectionTitle from '@/components/ui/SectionTitle'

const socialLinks = [
  { name: 'Discord', handle: '!Elias#4029' },
  { name: 'Email', handle: 'elias@example.com' },
  { name: 'Twitter', handle: '@elias_dev' },
  { name: 'GitHub', handle: '@eliasdev' },
]

export default function ContactsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-accent-purple">/</span>contacts
          </h1>
          <p className="text-text-secondary">Who am I?</p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-text-secondary">
              I'm interested in freelance opportunities. However,
              if you have other request or question, don't hesitate
              to contact me.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="border border-border-muted p-4">
              <p className="text-white font-medium mb-4">Support me here</p>
              {/* Support links */}
            </div>
            <div className="border border-border-muted p-4">
              <p className="text-white font-medium mb-4">Message me here</p>
              {/* Contact links */}
            </div>
          </div>
        </div>

        {/* All Media */}
        <SectionTitle title="all-media" />
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <div
              key={social.name}
              className="border border-border-muted px-4 py-2"
            >
              <span className="text-text-secondary text-sm">{social.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
```

#### Step 5.5: Root Layout

**File: `src/app/layout.tsx`**

```typescript
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hemanth - Web Designer & Developer',
  description: 'Portfolio of Hemanth, a web designer and front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

---

## 6. Animations & Interactions

### 6.1 Hover Effects

```css
/* Button hover */
.btn-primary:hover {
  background-color: rgba(199, 120, 221, 0.1);
}

/* Card hover */
.project-card:hover {
  border-color: var(--accent-purple);
  transform: translateY(-4px);
}

/* Link hover */
.nav-link:hover {
  color: #ffffff;
}
```

### 6.2 Page Transitions (Framer Motion)

```typescript
// Use existing Framer Motion setup
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
```

---

## 7. Responsive Design

### Breakpoints

| Breakpoint | Width   | Changes                       |
| ---------- | ------- | ----------------------------- |
| Mobile     | < 768px | Single column, hamburger menu |
| Tablet     | 768px   | Two columns, visible nav      |
| Desktop    | 1024px+ | Full layout, dot patterns     |

### Mobile Sidebar

- Slide-in from left
- Full navigation
- Social links
- Contact form (optional)
- Spotify integration (optional)

---

## 8. Final Checklist

### Phase 1: Setup

- [ ] Install Fira Code font
- [ ] Update Tailwind config with new colors
- [ ] Update globals.css with CSS variables
- [ ] Remove old components

### Phase 2: Layout

- [ ] Create new Header component
- [ ] Create new Footer component
- [ ] Create DotPattern component
- [ ] Create mobile Sidebar

### Phase 3: UI Components

- [ ] SectionTitle component
- [ ] ProjectCard component (full + small variants)
- [ ] Button component
- [ ] SkillsGrid component
- [ ] Tag component

### Phase 4: Home Page

- [ ] Hero section
- [ ] Quote section
- [ ] Projects preview
- [ ] Skills preview
- [ ] About preview
- [ ] Contacts preview

### Phase 5: Additional Pages

- [ ] Projects page (/projects)
- [ ] About page (/about-me)
- [ ] Contacts page (/contacts)

### Phase 6: Polish

- [ ] Add hover animations
- [ ] Add page transitions
- [ ] Test responsive design
- [ ] Optimize images
- [ ] Update metadata/SEO

---

## Migration Strategy

### Option A: Gradual Migration

1. Create new components alongside existing ones
2. Update pages one section at a time
3. Remove old components after migration

### Option B: Clean Rebuild

1. Create new branch
2. Build new design from scratch
3. Migrate data/content from old design
4. Replace main branch

**Recommended: Option A** - Allows testing and comparison

---

## Resources

- [Figma Design Reference](https://www.figma.com/design/ZfTG1MI1SG1cRG7BW4OAfN/)
- [Fira Code Font](https://fonts.google.com/specimen/Fira+Code)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
