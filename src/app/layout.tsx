import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import TerminalChatbot from '@/components/TerminalChatbot/TerminalChatbot';

import type { Metadata, Viewport } from 'next';

import './globals.css';

const siteConfig = {
  name: 'Hemanth Babu Setti',
  title: 'Hemanth Babu Setti - Full Stack Developer & Mobile App Developer',
  description:
    'Hemanth Babu Setti is a passionate Full Stack Developer with 3+ years of experience in React, Next.js, React Native, and TypeScript. Building responsive web applications and mobile apps. Based in Bangalore, India.',
  url: 'https://www.hemanthbabu648.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/hemanthbabu648',
    linkedin: 'https://www.linkedin.com/in/hemanthbabu648',
    twitter: 'https://twitter.com/hemanthbabu648',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#915eff' },
    { media: '(prefers-color-scheme: dark)', color: '#050816' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  // Comprehensive Keywords for SEO
  keywords: [
    // Name variations
    'Hemanth Babu Setti',
    'Hemanth Babu',
    'hemanthbabu648',

    // Job titles
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Mobile App Developer',
    'Web Developer',
    'Software Engineer',
    'UI Developer',

    // Technologies
    'React.js',
    'React Native',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Redux',
    'HTML5',
    'CSS3',

    // Location
    'Developer in Bangalore',
    'Developer in India',
    'Indian Developer',

    // Services
    'Web Application Development',
    'Mobile App Development',
    'Frontend Development',
    'Responsive Web Design',
    'UI/UX Development',

    // General
    'Portfolio',
    'Freelance Developer',
    'Hire Developer',
  ],

  // Author Information
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // Category
  category: 'technology',

  // Base URL for relative URLs
  metadataBase: new URL(siteConfig.url),

  // Open Graph - Facebook, LinkedIn, etc.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
        type: 'image/png',
      },
      {
        url: '/images/developer.webp',
        width: 800,
        height: 600,
        alt: siteConfig.name,
        type: 'image/webp',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    site: '@hemanthbabu648',
    creator: '@hemanthbabu648',
    images: {
      url: siteConfig.ogImage,
      alt: `${siteConfig.name} - Full Stack Developer Portfolio`,
    },
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
    },
  },

  // Verification - Add your verification codes here
  verification: {
    google: 'your-google-verification-code', // Replace with actual code from Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#915eff',
      },
    ],
  },

  // Web App Manifest
  manifest: '/site.webmanifest',

  // App Links
  appLinks: {
    web: {
      url: siteConfig.url,
      should_fallback: true,
    },
  },

  // Other meta tags
  other: {
    'msapplication-TileColor': '#050816',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteConfig.name,
  },

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hemanth Babu Setti',
  alternateName: 'hemanthbabu648',
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/developer.webp`,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
    'https://www.instagram.com/hemanthbabu648',
  ],
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Bytup Technologies',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressCountry: 'India',
  },
  knowsAbout: [
    'React.js',
    'React Native',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Tailwind CSS',
    'Web Development',
    'Mobile App Development',
  ],
};

// Website Structured Data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    '@type': 'Person',
    name: 'Hemanth Babu Setti',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://blogs.hemanthbabu648.com" />
        <link rel="preconnect" href="https://apps.hemanthbabu648.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="np-container antialiased">
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <TerminalChatbot />
      </body>
    </html>
  );
}
