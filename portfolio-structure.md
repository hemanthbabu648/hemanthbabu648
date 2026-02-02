# Portfolio Website Structure - hemanthbabu648

## Overview

A modern, professional portfolio website for **Hemanth Babu Setti** - Full-Stack Developer. Built with Next.js 15 (App Router), React 19, and TypeScript 5.

---

## Tech Stack

| Category   | Technology                  |
| ---------- | --------------------------- |
| Framework  | Next.js 15.3.3 (App Router) |
| Language   | TypeScript 5                |
| UI Library | React 19.0.0                |
| Styling    | Tailwind CSS 4              |
| Animations | Framer Motion 12.17         |
| Forms      | React Hook Form + Zod       |
| Email      | EmailJS                     |
| Icons      | React Icons, Lucide React   |
| Deployment | Vercel (optimized)          |

---

## Folder Structure

```
/src
├── /app                          # Next.js App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Home page (all sections)
│   ├── globals.css              # Global styles & gradients
│   ├── robots.ts                # SEO robots.txt
│   ├── sitemap.xml              # SEO sitemap
│   ├── not-found.tsx            # 404 page
│   └── /about-me
│       └── page.tsx             # Dedicated about page
│
├── /components
│   ├── GlobalHeader.tsx         # Responsive navigation
│   ├── GlobalFooter.tsx         # Footer with links
│   └── /home                    # Home section components
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experiences.tsx
│       ├── Projects.tsx
│       ├── ProjectCard.tsx
│       ├── TechSkills.tsx
│       ├── Contact.tsx
│       ├── Blogs.tsx
│       ├── BlogCard.tsx
│       ├── NewsLetter.tsx
│       └── ViewAllCard.tsx
│
├── /constants
│   ├── home.tsx                 # Static data (services, tech, experiences)
│   ├── navigation.ts            # Navigation links
│   └── emailJS.ts               # EmailJS configuration
│
├── /hooks
│   ├── SectionWrapper.tsx       # Framer Motion stagger wrapper
│   ├── NoMotionSectionWrapper.tsx
│   └── useEmail.ts              # EmailJS custom hook
│
├── /services
│   ├── projects.ts              # Projects API calls
│   └── blogs.ts                 # Blogs API calls
│
├── /utils
│   ├── motion.js                # Animation variants
│   └── StringUtils.ts           # Date formatting, color utils
│
└── types.ts                     # TypeScript interfaces

/public
├── /images
│   ├── developer.jpeg
│   ├── developer.webp
├── /docs
│   └── hemanth_babu_setti_resume.pdf
├── logo.svg
└── site.webmanifest
```

---

## Website Sections (Top to Bottom)

### 1. Global Header / Navigation

| Element     | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| Logo        | Portfolio branding                                             |
| Nav Links   | Home, About, Experience, Projects, Tech Skills, Blogs, Contact |
| Mobile Menu | Hamburger toggle for responsive nav                            |
| Background  | Pattern image with sticky positioning                          |

**File:** `src/components/GlobalHeader.tsx`

---

### 2. Hero Section

| Element         | Description                             |
| --------------- | --------------------------------------- |
| Headline        | Animated gradient text introduction     |
| Developer Image | Profile photo with fade-in animation    |
| CTA Button      | "Download Resume" with bounce animation |
| Animation       | Spring-based text reveal                |

**File:** `src/components/home/Hero.tsx`

---

### 3. About Section

| Element       | Description                                   |
| ------------- | --------------------------------------------- |
| Overview      | Professional summary                          |
| Service Cards | 4 cards with Tilt effect                      |
| Services      | Web Dev, Mobile Dev, Content Creator, Learner |
| Link          | Navigate to detailed `/about-me` page         |

**File:** `src/components/home/About.tsx`

**Service Cards Data:** `src/constants/home.tsx`

---

### 4. Work Experience Section

| Element   | Description                          |
| --------- | ------------------------------------ |
| Layout    | Vertical timeline visualization      |
| Entries   | 2 professional experiences           |
| Details   | Company logos, titles, bullet points |
| Animation | Timeline scroll reveal               |

**File:** `src/components/home/Experiences.tsx`

**Library:** `react-vertical-timeline-component`

**Experience Data:** `src/constants/home.tsx`

---

### 5. Projects Section

| Element     | Description                                           |
| ----------- | ----------------------------------------------------- |
| Data Source | External API (`apps.hemanthbabu648.com/api/projects`) |
| Card Design | Tilt effect, image, tags, links                       |
| Features    | GitHub link, Live demo link                           |
| Tag Colors  | Random color generation                               |
| CTA         | "View All" card to full projects                      |

**Files:**

- `src/components/home/Projects.tsx`
- `src/components/home/ProjectCard.tsx`
- `src/components/home/ViewAllCard.tsx`
- `src/services/projects.ts`

---

### 6. Tech Skills Section

| Element     | Description                             |
| ----------- | --------------------------------------- |
| Display     | Grid layout of 20+ technologies         |
| Interaction | Proficiency % shown on hover            |
| Categories  | Languages, Frameworks, Tools, Databases |
| Responsive  | Adaptive grid sizing                    |

**File:** `src/components/home/TechSkills.tsx`

**Skills Data:** `src/constants/home.tsx`

---

### 7. Blogs Section

| Element     | Description                                         |
| ----------- | --------------------------------------------------- |
| Data Source | External API (`blogs.hemanthbabu648.com/api/blogs`) |
| Card Design | Cover image, title, excerpt, read time              |
| Metadata    | Author, date, tags                                  |
| Newsletter  | Subscription form integrated                        |
| CTA         | "View All" card to full blog                        |

**Files:**

- `src/components/home/Blogs.tsx`
- `src/components/home/BlogCard.tsx`
- `src/components/home/NewsLetter.tsx`
- `src/services/blogs.ts`

---

### 8. Contact Section

| Element     | Description           |
| ----------- | --------------------- |
| Form Fields | Name, Email, Message  |
| Validation  | Zod schema validation |
| Submission  | EmailJS integration   |
| Feedback    | Success/error alerts  |

**Files:**

- `src/components/home/Contact.tsx`
- `src/hooks/useEmail.ts`
- `src/constants/emailJS.ts`

---

### 9. Social Links Sidebar

| Element    | Description                                      |
| ---------- | ------------------------------------------------ |
| Position   | Fixed left sidebar                               |
| Visibility | Hidden on mobile                                 |
| Links      | LinkedIn, Instagram, Twitter, WhatsApp, Telegram |
| Style      | Gradient background, glow on hover               |

**Data:** `src/constants/home.tsx` (socials array)

---

### 10. Global Footer

| Element      | Description                 |
| ------------ | --------------------------- |
| Navigation   | Quick links to sections     |
| Social Icons | Repeated social media links |
| Copyright    | Year and name               |

**File:** `src/components/GlobalFooter.tsx`

---

## Design System

### Color Scheme

| Usage         | Value     | Variable         |
| ------------- | --------- | ---------------- |
| Background    | `#050816` | Primary dark     |
| Space Black   | `#151030` | Card backgrounds |
| Violet Accent | `#915eff` | Primary accent   |
| Orange Accent | `#f97316` | Secondary accent |
| Black 100     | `#100d25` | Dark variant     |
| Black 200     | `#090325` | Darker variant   |

### Gradients (globals.css)

```css
.black-gradient    /* Black radial gradient */
.violet-gradient   /* Purple gradient */
.orange-gradient   /* Orange gradient */
.green-pink-gradient /* Cyan to magenta */

/* Text Gradients */
.orange-text-gradient
.blue-text-gradient
.green-text-gradient
.pink-text-gradient
```

### Typography

- **Primary Font:** Poppins (Google Fonts)
- **Font Weights:** 100-900
- **Style:** Modern sans-serif

### Animations (utils/motion.js)

| Function                                    | Description                 |
| ------------------------------------------- | --------------------------- |
| `textVariant()`                             | Text slide-up with fade     |
| `fadeIn(direction, type, delay, duration)`  | Directional fade-in         |
| `zoomIn(delay, duration)`                   | Scale animation             |
| `slideIn(direction, type, delay, duration)` | Full slide from edges       |
| `staggerContainer()`                        | Sequential child animations |

---

## API Integration

### Configuration (`config.ts`)

```typescript
// Production
APPS_API_URL: https://apps.hemanthbabu648.com/api
BLOGS_API_URL: https://blogs.hemanthbabu648.com/api

// Development
APPS_API_URL: http://localhost:3001/api
BLOGS_API_URL: http://localhost:3002/api
```

### Endpoints

| Service  | Endpoint    | Purpose                  |
| -------- | ----------- | ------------------------ |
| Projects | `/projects` | Fetch portfolio projects |
| Blogs    | `/blogs`    | Fetch blog posts         |
| News     | `/news`     | Fetch news items         |

### EmailJS Configuration

```typescript
SERVICE_ID: service_5railuc;
TEMPLATE_ID: template_sumtok9;
PUBLIC_KEY: Zm3b55iaafc6m07VZ;
```

---

## TypeScript Interfaces (`types.ts`)

```typescript
interface Blog {
  author: string;
  coverImage: string;
  date: string;
  excerpt: string;
  readTime: string;
  slug: string;
  tags: string[];
  title: string;
  url: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  category: string[];
  image: string;
  tags: string[];
  sourceCodeLink?: string;
  liveUrl?: string;
  projectUrl?: string;
  position?: number;
}
```

---

## Static Data (`constants/home.tsx`)

### Services (4 items)

1. Web Development
2. Mobile Development
3. Content Creator
4. Learner

### Technologies (20+ items)

- Languages: JavaScript, TypeScript, Python, etc.
- Frameworks: React, Next.js, Node.js, etc.
- Tools: Docker, AWS, Git, etc.
- Databases: MongoDB, PostgreSQL, etc.

### Experiences (2 entries)

- Company details with logos
- Role descriptions
- Accomplishments

### Social Links (5 items)

- LinkedIn, Instagram, Twitter, WhatsApp, Telegram

---

## SEO & Metadata

| Feature        | Implementation                |
| -------------- | ----------------------------- |
| Meta Tags      | Dynamic in `layout.tsx`       |
| Open Graph     | Configured for social sharing |
| Twitter Cards  | Supported                     |
| Robots.txt     | `robots.ts`                   |
| Sitemap        | `sitemap.xml`                 |
| Canonical URLs | Configured                    |

---

## Key Libraries & Dependencies

```json
{
  "next": "15.3.3",
  "react": "19.0.0",
  "typescript": "5.x",
  "tailwindcss": "4.x",
  "framer-motion": "12.17.0",
  "react-hook-form": "x.x.x",
  "zod": "x.x.x",
  "@emailjs/browser": "x.x.x",
  "react-tilt": "1.0.2",
  "react-vertical-timeline-component": "3.5.3",
  "react-icons": "x.x.x",
  "lucide-react": "x.x.x"
}
```

---

## Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint check
npm run prettier # Format code
```

---

## Responsive Breakpoints

| Breakpoint | Width   | Usage         |
| ---------- | ------- | ------------- |
| xs         | < 640px | Mobile        |
| sm         | 640px   | Small devices |
| md         | 768px   | Tablets       |
| lg         | 1024px  | Laptops       |
| xl         | 1280px  | Desktops      |

---

## Component Hierarchy

```
Layout (layout.tsx)
├── GlobalHeader
├── Main Content
│   └── Home Page (page.tsx)
│       ├── Hero
│       ├── About (with SectionWrapper)
│       ├── Experiences (with SectionWrapper)
│       ├── Projects (with SectionWrapper)
│       │   ├── ProjectCard (multiple)
│       │   └── ViewAllCard
│       ├── TechSkills (with SectionWrapper)
│       ├── Blogs (with SectionWrapper)
│       │   ├── BlogCard (multiple)
│       │   ├── NewsLetter
│       │   └── ViewAllCard
│       └── Contact (with SectionWrapper)
├── Social Links Sidebar
└── GlobalFooter
```

---

## Comparison with 0xgautam.xyz

| Feature        | hemanthbabu648     | 0xgautam.xyz          |
| -------------- | ------------------ | --------------------- |
| Framework      | Next.js 15         | Next.js               |
| Theme          | Dark (space theme) | Dark (terminal theme) |
| Animations     | Framer Motion      | Framer Motion         |
| Skills Display | Grid with % hover  | Terminal-style list   |
| Projects       | API-fetched        | Static/API            |
| Experience     | Vertical timeline  | Standard listing      |
| Blog           | Integrated         | Separate section      |
| Guestbook      | Not present        | Present               |
| GitHub Graph   | Not present        | Present               |
| Newsletter     | Present            | Not mentioned         |

---

## Summary

This portfolio is a well-structured, modern Next.js application with:

- **10 main sections** on the home page
- **Dynamic content** from external APIs
- **Rich animations** via Framer Motion
- **Interactive elements** (Tilt cards, hover effects)
- **Form handling** with validation and EmailJS
- **Responsive design** for all devices
- **SEO optimized** with metadata and sitemaps

**Target Audience:** Recruiters, potential clients, fellow developers
