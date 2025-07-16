import GlobalFooter from '@/components/GlobalFooter';
import GlobalHeader from '@/components/GlobalHeader';

import { poppins } from '../../public/fonts';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Hemanth Babu S | Portfolio',
    template: '%s | Hemanth Babu S | Portfolio',
  },
  description:
    'Showcasing a journey through code, creativity, and clean design — all in one place.',
  keywords: [
    'web development',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'programming',
    'portfolio',
    'Hemanth Babu S',
  ],
  authors: [{ name: 'Hemanth Babu S' }],
  creator: 'Hemanth Babu S',
  publisher: 'Hemanth Babu S',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.hemanthbabu648.com'),
  openGraph: {
    title: 'Hemanth Babu S | Portfolio',
    description:
      'Showcasing a journey through code, creativity, and clean design — all in one place.',
    url: '/',
    siteName: 'Hemanth Babu S | Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Hemanth Babu S | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hemanth Babu S | Portfolio',
    description:
      'Showcasing a journey through code, creativity, and clean design — all in one place.',
    images: ['/logo.svg'],
    creator: '@hemanthbabu648',
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
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/logo.svg' }],
    apple: [{ url: '/logo.svg' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <GlobalHeader />
        <main className="mt-16">{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
