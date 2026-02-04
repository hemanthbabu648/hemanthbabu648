# Dark & Light Theme Implementation Guide

## Overview

Add light theme support to the portfolio site. The `ThemeToggle` component already handles theme switching via `data-theme` attribute on `<html>`. The main work is defining light theme CSS variables and replacing hardcoded `text-white` usage across components.

**Decisions:**

- Terminal chatbot keeps dark theme always
- Light mode uses warm off-white palette (#faf8f5, #f0ede8)

---

## Table of Contents

1. [Light Theme CSS Variables](#1-light-theme-css-variables)
2. [Theme Initialization Script](#2-theme-initialization-script)
3. [Component Updates](#3-component-updates)
4. [Utility Class Overrides](#4-utility-class-overrides)
5. [Files Modified](#5-files-modified)
6. [Verification Checklist](#6-verification-checklist)

---

## 1. Light Theme CSS Variables

**File:** `src/app/globals.css`

Add `[data-theme="light"]` block with warm off-white palette after the existing `:root` block:

```css
:root,
[data-theme='dark'] {
  /* Existing dark theme variables stay the same */
  --background: #050816;
  --foreground: #f3f3f3;
  --black-100: #100d25;
  --violet-450: #915eff;

  --bg-primary: #050816;
  --bg-secondary: #100d25;
  --bg-tertiary: #151030;
  --accent-purple: #915eff;
  --accent-violet: #804dee;
  --accent-cyan: #00cea8;
  --accent-pink: #bf61ff;
  --text-primary: #f3f3f3;
  --text-secondary: #aaa6c3;
  --text-muted: #6b7280;
  --border-color: #915eff;
  --border-muted: #2a2545;

  /* New variables for theme-aware utility classes */
  --glass-bg: rgba(16, 13, 37, 0.7);
  --glass-border: rgba(145, 94, 255, 0.2);
}

[data-theme='light'] {
  --background: #faf8f5;
  --foreground: #1a1a2e;
  --black-100: #f0ede8;
  --violet-450: #7c3aed;

  --bg-primary: #faf8f5;
  --bg-secondary: #f0ede8;
  --bg-tertiary: #e8e4dd;
  --accent-purple: #7c3aed;
  --accent-violet: #6d28d9;
  --accent-cyan: #059669;
  --accent-pink: #a855f7;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a5a;
  --text-muted: #8a8a9a;
  --border-color: #7c3aed;
  --border-muted: #d4d0c8;

  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(124, 58, 237, 0.2);
}
```

### Light Theme Color Palette Reference

| Variable           | Dark Value              | Light Value             | Purpose             |
| ------------------ | ----------------------- | ----------------------- | ------------------- |
| `--background`     | `#050816` (near black)  | `#faf8f5` (warm cream)  | Page background     |
| `--foreground`     | `#f3f3f3` (off white)   | `#1a1a2e` (dark blue)   | Default text        |
| `--bg-primary`     | `#050816`               | `#faf8f5`               | Primary surfaces    |
| `--bg-secondary`   | `#100d25`               | `#f0ede8`               | Card backgrounds    |
| `--bg-tertiary`    | `#151030`               | `#e8e4dd`               | Input backgrounds   |
| `--accent-purple`  | `#915eff`               | `#7c3aed` (deeper)      | Primary accent      |
| `--accent-cyan`    | `#00cea8`               | `#059669` (deeper)      | Secondary accent    |
| `--text-primary`   | `#f3f3f3` (light)       | `#1a1a2e` (dark)        | Headings, bold text |
| `--text-secondary` | `#aaa6c3` (muted light) | `#4a4a5a` (muted dark)  | Body text           |
| `--text-muted`     | `#6b7280`               | `#8a8a9a`               | Subtle text         |
| `--border-muted`   | `#2a2545` (dark purple) | `#d4d0c8` (warm gray)   | Borders             |
| `--glass-bg`       | `rgba(16,13,37,0.7)`    | `rgba(255,255,255,0.7)` | Glass card fill     |

---

## 2. Theme Initialization Script

**File:** `src/app/layout.tsx`

Add an inline `<script>` in `<head>` to prevent flash of wrong theme (FOWT):

```tsx
<head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          var theme = localStorage.getItem('theme');
          if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          document.documentElement.setAttribute('data-theme', theme);
        })();
      `,
    }}
  />
  {/* ...existing head content */}
</head>
```

This runs synchronously before the page renders, so there's no flash.

---

## 3. Component Updates

### 3.1 Replace `text-white` with `text-[var(--text-primary)]`

All instances of hardcoded `text-white` need to become theme-aware. Replace with `text-[var(--text-primary)]`.

For `hover:text-white`, replace with `hover:text-[var(--text-primary)]`.

For `text-white/90`, replace with `text-[var(--text-primary)]/90`.

#### Layout Components

| File                                            | Change                                                                      |
| ----------------------------------------------- | --------------------------------------------------------------------------- |
| `src/components/layout/Header.tsx` (line 43)    | Brand name: `text-white` -> `text-[var(--text-primary)]`                    |
| `src/components/layout/Header.tsx` (line 57)    | Active nav link: `text-white` -> `text-[var(--text-primary)]`               |
| `src/components/layout/Header.tsx` (line 58)    | Nav hover: `hover:text-white` -> `hover:text-[var(--text-primary)]`         |
| `src/components/layout/Header.tsx` (line 69)    | Mobile menu btn: `text-white` -> `text-[var(--text-primary)]`               |
| `src/components/layout/Header.tsx` (line 87)    | Mobile active nav: `text-white` -> `text-[var(--text-primary)]`             |
| `src/components/layout/Header.tsx` (line 88)    | Mobile nav hover: `hover:text-white` -> `hover:text-[var(--text-primary)]`  |
| `src/components/layout/Footer.tsx` (line 24)    | Brand name: `text-white` -> `text-[var(--text-primary)]`                    |
| `src/components/layout/Footer.tsx` (line 32)    | "Media" header: `text-white` -> `text-[var(--text-primary)]`               |
| `src/components/layout/ThemeToggle.tsx` (ln 29) | Hover: `hover:text-white` -> `hover:text-[var(--text-primary)]`             |
| `src/components/layout/ThemeToggle.tsx` (ln 40) | Hover: `hover:text-white` -> `hover:text-[var(--text-primary)]`             |
| `src/components/layout/SocialSidebar.tsx`       | Hover: `hover:text-white` -> `hover:text-[var(--text-primary)]`             |

#### Section Components

| File                                         | Change                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| `src/components/sections/Hero.tsx` (line 39) | Role text: `text-white/90` -> `text-[var(--text-primary)]/90`            |
| `src/components/sections/Hero.tsx` (line 95) | Company name: `text-white` -> `text-[var(--text-primary)]`               |
| `src/components/sections/Quote.tsx`          | Quote text: `text-white` -> `text-[var(--text-primary)]`                 |

#### UI Components

| File                                                   | Change                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| `src/components/ui/ProjectCard.tsx` (line 44)          | Small card title: `text-white` -> `text-[var(--text-primary)]` |
| `src/components/ui/ProjectCard.tsx` (line 119)         | Card title: `text-white` -> `text-[var(--text-primary)]`      |
| `src/components/ui/BlogCard.tsx` (line ~83)            | Title: `text-white` -> `text-[var(--text-primary)]`           |
| `src/components/ui/ContactCard.tsx` (line 54)          | Title: `text-white` -> `text-[var(--text-primary)]`           |
| `src/components/ui/ContactCard.tsx` (line 78)          | Link: `text-white` -> `text-[var(--text-primary)]`            |
| `src/components/ui/SkillsGrid.tsx` (line 22)           | Category: `text-white` -> `text-[var(--text-primary)]`        |
| `src/components/ui/ProfileImage.tsx` (line 52)         | Badge: `text-white` -> `text-[var(--text-primary)]`           |
| `src/components/ui/CodeSnippet.tsx` (line 23)          | Text: `text-white/60` -> `text-[var(--text-primary)]/60`      |

#### Page Files

| File                                        | Change                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| `src/app/about-me/page.tsx` (line 286)      | Heading: `text-white` -> `text-[var(--text-primary)]`         |
| `src/app/about-me/page.tsx` (line 313)      | Heading: `text-white` -> `text-[var(--text-primary)]`         |
| `src/app/not-found.tsx` (line 8)            | Text: `text-white` -> `text-[var(--text-primary)]`            |

### 3.2 Terminal Chatbot - No Changes

`src/components/TerminalChatbot/TerminalChatbot.tsx` keeps its dark theme always. No modifications needed.

### 3.3 Skeleton Components

**Files:**
- `src/components/ui/ProjectCardSkeleton.tsx`
- `src/components/ui/BlogCardSkeleton.tsx`

Ensure skeleton placeholder colors use `var(--bg-secondary)` / `var(--bg-tertiary)` instead of any hardcoded dark colors.

---

## 4. Utility Class Overrides

**File:** `src/app/globals.css`

### Glass Card Effect

Update `.glass` to use CSS variables:

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}
```

### Gradient Adjustments

The `.text-gradient` should work on both themes since it's a solid gradient on text.

The `.black-violet-gradient` may need a light theme override:

```css
[data-theme='light'] .black-violet-gradient {
  background: #7c3aed;
  background: linear-gradient(-180deg, #7c3aed 0%, rgba(124, 58, 237, 0) 70%);
}
```

### Button Hover Glow

`.btn-primary:hover` box-shadow opacity may need to be increased slightly for light mode for visibility, but the purple glow should still be visible on warm off-white backgrounds.

---

## 5. Files Modified

| # | File | Changes |
|---|------|---------|
| 1 | `src/app/globals.css` | Light theme variables + utility class overrides |
| 2 | `src/app/layout.tsx` | Theme init script |
| 3 | `src/components/layout/Header.tsx` | `text-white` -> `text-[var(--text-primary)]` (5 instances) |
| 4 | `src/components/layout/Footer.tsx` | `text-white` -> `text-[var(--text-primary)]` (2 instances) |
| 5 | `src/components/layout/ThemeToggle.tsx` | `hover:text-white` -> `hover:text-[var(--text-primary)]` (2 instances) |
| 6 | `src/components/layout/SocialSidebar.tsx` | `hover:text-white` -> `hover:text-[var(--text-primary)]` (1 instance) |
| 7 | `src/components/sections/Hero.tsx` | `text-white` replacements (2 instances) |
| 8 | `src/components/sections/Quote.tsx` | `text-white` -> `text-[var(--text-primary)]` (1 instance) |
| 9 | `src/components/ui/ProjectCard.tsx` | `text-white` replacements (2 instances) |
| 10 | `src/components/ui/BlogCard.tsx` | `text-white` replacement (1 instance) |
| 11 | `src/components/ui/ContactCard.tsx` | `text-white` replacements (2 instances) |
| 12 | `src/components/ui/SkillsGrid.tsx` | `text-white` replacement (1 instance) |
| 13 | `src/components/ui/ProfileImage.tsx` | `text-white` replacement (1 instance) |
| 14 | `src/components/ui/CodeSnippet.tsx` | `text-white/60` replacement (1 instance) |
| 15 | `src/components/ui/ProjectCardSkeleton.tsx` | Theme-aware skeleton colors |
| 16 | `src/components/ui/BlogCardSkeleton.tsx` | Theme-aware skeleton colors |
| 17 | `src/app/about-me/page.tsx` | `text-white` replacements (2 instances) |
| 18 | `src/app/not-found.tsx` | `text-white` replacement (1 instance) |

---

## 6. Verification Checklist

### Build & Lint

- [ ] Run `npm run build` - no errors
- [ ] Run `npm run lint` - no warnings

### Visual Testing - Dark Mode

- [ ] Homepage renders correctly (all sections)
- [ ] Header navigation works
- [ ] Footer displays properly
- [ ] Project cards look correct
- [ ] Blog cards look correct
- [ ] About page renders correctly
- [ ] 404 page renders correctly
- [ ] Terminal chatbot works
- [ ] Theme toggle shows Sun icon

### Visual Testing - Light Mode

- [ ] Click theme toggle switches to light
- [ ] Background changes to warm off-white (#faf8f5)
- [ ] All text is readable (dark on light)
- [ ] Accent colors (purple/cyan) are visible
- [ ] Glass cards have light glass effect
- [ ] Buttons are visible and styled
- [ ] Gradients look appropriate
- [ ] Project/Blog cards have proper contrast
- [ ] Header/Footer backgrounds work
- [ ] Terminal chatbot stays dark
- [ ] Theme toggle shows Moon icon

### Persistence

- [ ] Theme persists on page refresh
- [ ] Theme persists across pages
- [ ] System preference respected on first visit
- [ ] No flash of wrong theme on load
