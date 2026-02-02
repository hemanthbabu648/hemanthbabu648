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
