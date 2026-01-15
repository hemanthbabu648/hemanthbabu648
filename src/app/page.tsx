
import AboutPreview from '@/components//sections/AboutPreview';
import BlogsPreview from '@/components//sections/BlogsPreview';
import ContactsPreview from '@/components//sections/ContactsPreview';
import Hero from '@/components//sections/Hero';
import ProjectsPreview from '@/components//sections/ProjectsPreview';
import Quote from '@/components//sections/Quote';
import SkillsPreview from '@/components//sections/SkillsPreview';
import DotPattern from '@/components/layout/DotPattern';
import SocialSidebar from '@/components/layout/SocialSidebar';

// Homepage specific structured data for better SEO
const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Hemanth Babu Setti',
    alternateName: 'hemanthbabu648',
    description:
      'Full Stack Developer with 3+ years of experience in React, Next.js, React Native, and TypeScript.',
    image: 'https://www.hemanthbabu648.com/images/developer.webp',
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Bytup Technologies',
    },
    url: 'https://www.hemanthbabu648.com',
    sameAs: [
      'https://github.com/hemanthbabu648',
      'https://www.linkedin.com/in/hemanthbabu648',
      'https://twitter.com/hemanthbabu648',
      'https://www.instagram.com/hemanthbabu648',
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />

      <div className="relative">
        {/* Decorative Elements */}
        <DotPattern position="right" />
        <SocialSidebar />

        {/* Page Sections */}
        <Hero />
        <Quote />
        <ProjectsPreview />
        <SkillsPreview />
        <BlogsPreview />
        <AboutPreview />
        <ContactsPreview />
      </div>
    </>
  );
}
