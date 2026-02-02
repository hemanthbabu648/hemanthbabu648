import DotPattern from '@/components/layout/DotPattern';
import SocialSidebar from '@/components/layout/SocialSidebar';
import AboutPreview from '@/components/sections/AboutPreview';
import BlogsPreview from '@/components/sections/BlogsPreview';
import ContactsPreview from '@/components/sections/ContactsPreview';
import Hero from '@/components/sections/Hero';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import Quote from '@/components/sections/Quote';
import SkillsPreview from '@/components/sections/SkillsPreview';

export default function Home() {
  return (
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
  );
}
