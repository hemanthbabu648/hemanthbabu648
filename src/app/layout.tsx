import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import TerminalChatbot from '@/components/TerminalChatbot/TerminalChatbot';
import { jsonLd, websiteJsonLd } from '@/constants/seo';

import './globals.css';

export { metadata, viewport } from '@/constants/seo';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Theme initialization - prevents flash of wrong theme in this way */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        /> */}

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://blogs.hemanthbabu648.com" />
        <link rel="preconnect" href="https://apps.hemanthbabu648.com" />

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
      <body className="antialiased">
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
