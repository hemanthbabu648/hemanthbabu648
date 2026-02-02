import { PROFILE } from './common';

import type { Metadata, Viewport } from 'next';

const SEO_NAME = 'Hemanth Babu Setti';

export const siteConfig = {
  name: SEO_NAME,
  title: `${SEO_NAME} - ${PROFILE.role[0]}`,
  description: `${SEO_NAME} is a ${PROFILE.role[0]} with ${PROFILE.yearsOfExperience} years of hands-on experience in React, Next.js, React Native, and TypeScript, specializing in responsive web applications and cross-platform mobile apps.`,
  url: 'https://www.hemanthbabu648.com',
  ogImage: '/images/developer.jpeg',
  links: {
    github: PROFILE.github,
    linkedin: PROFILE.linkedin,
    twitter: PROFILE.twitter,
  },
};

// JSON-LD Structured Data for SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SEO_NAME,
  alternateName: 'hemanthbabu648',
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/developer.webp`,
  sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.twitter, PROFILE.instagram],
  jobTitle: PROFILE.role[0],
  worksFor: {
    '@type': 'Organization',
    name: PROFILE.currentCompany,
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'React Native',
    'Tailwind CSS',
    'Web Development',
    'Mobile App Development',
  ],
};

// Website Structured Data
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  author: {
    '@type': 'Person',
    name: SEO_NAME,
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
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',

  metadataBase: new URL(siteConfig.url),

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
        alt: `${siteConfig.name} - ${PROFILE.role[0]} Portfolio`,
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    site: '@hemanthbabu648',
    creator: '@hemanthbabu648',
    images: {
      url: siteConfig.ogImage,
      alt: `${siteConfig.name} - ${PROFILE.role[0]} Portfolio`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  // Verified via domain name provider (DNS). This meta tag method is optional
  // but kept as a secondary verification if needed in the future.
  // verification: {
  //   google: 'your-google-verification-code',
  // },

  // NOTE:One thing to keep in mind: if you want proper iOS home screen support and a classic favicon.ico
  // fallback for older browsers, you'd need to generate PNG versions from your SVG. Tools like realfavicongenerator.net
  //  can do that from a single SVG. But for modern browsers, this setup works.

  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/logo.svg', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/logo.svg', color: '#915eff' }],
  },

  manifest: '/site.webmanifest',

  other: {
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': siteConfig.name,
  },
};
