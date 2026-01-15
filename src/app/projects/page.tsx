
import ProjectCard from '@/components/ui/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore projects built by Hemanth Babu Setti - Web applications, mobile apps, and tools created using React, Next.js, React Native, and modern technologies.',
  keywords: [
    'Hemanth Babu Setti Projects',
    'React Projects',
    'Next.js Projects',
    'Web Development Portfolio',
    'Mobile App Projects',
    'Full Stack Projects',
  ],
  openGraph: {
    title: 'Projects | Hemanth Babu Setti',
    description:
      'Explore projects built by Hemanth Babu Setti - Web applications, mobile apps, and tools.',
    url: 'https://www.hemanthbabu648.com/projects',
  },
};

const completeApps = [
  {
    title: 'ChertNodes',
    description:
      'Minecraft server hosting platform with advanced management features',
    image: '/images/projects/project1.png',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Kahoot Answers',
    description: 'Get answers to your kahoot quiz instantly with our tool',
    image: '/images/projects/project2.png',
    tags: ['CSS', 'Express', 'Node.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'ProtectX',
    description: 'Discord anti-crash bot with advanced protection mechanisms',
    image: '/images/projects/project3.png',
    tags: ['React', 'Express', 'Discord.js', 'Node.js'],
    liveUrl: '#',
  },
  {
    title: 'Bot Kotik',
    description: 'Multi-purpose Discord bot with moderation and fun features',
    image: '/images/projects/project1.png',
    tags: ['Vue.js', 'TypeScript', 'Discord.js'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Elias Portfolio',
    description: 'Personal portfolio website with modern design',
    image: '/images/projects/project2.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    sourceUrl: '#',
  },
  {
    title: 'Portfolio',
    description: 'Another portfolio website project with unique features',
    image: '/images/projects/project3.png',
    tags: ['React', 'SCSS', 'Framer Motion'],
    sourceUrl: '#',
  },
];

const smallProjects = [
  {
    title: 'Bot boilerplate',
    description:
      'Start creating scalable Discord.js bots quickly and efficiently',
    tags: ['Discord.js', 'TS'],
    sourceUrl: '#',
  },
  {
    title: 'My blog',
    description: 'Front-end of my future blog website built with modern stack',
    tags: ['HTML', 'CSS', 'JS'],
    sourceUrl: '#',
  },
  {
    title: 'Chess pro',
    description: 'Chess rating tracker app with game history and statistics',
    tags: ['Figma'],
    liveUrl: '#',
  },
  {
    title: 'Crash protect website',
    description: 'Marketing website for ProtectX Discord bot',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: '#',
  },
  {
    title: 'CSS experiments',
    description: 'Collection of my different CSS animations and experiments',
    tags: ['HTML', 'CSS'],
    liveUrl: '#',
  },
  {
    title: 'Web Dev nvim config',
    description: 'Config for neovim editor perfect for web development',
    tags: ['Lua'],
    sourceUrl: '#',
  },
  {
    title: 'Ooku',
    description: 'Book list tracker with wishlist and reading progress',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    liveUrl: '#',
  },
  {
    title: 'School website',
    description: 'Design concept for a modern school website',
    tags: ['Figma'],
    liveUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            <span className="np-hashtag">/</span>projects
          </h1>
          <p className="text-[var(--np-text-secondary)]">List of my projects</p>
        </div>

        {/* Complete Apps */}
        <section className="mb-16">
          <SectionTitle title="complete-apps" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completeApps.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Small Projects */}
        <section>
          <SectionTitle title="small-projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {smallProjects.map((project) => (
              <ProjectCard key={project.title} {...project} isSmall />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
