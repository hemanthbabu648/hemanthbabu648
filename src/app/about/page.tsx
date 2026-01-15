import Image from 'next/image';

import DotPattern from '@/components/layout/DotPattern';
import SectionTitle from '@/components/new-portfolio/ui/SectionTitle';
import SkillsGrid from '@/components/new-portfolio/ui/SkillsGrid';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Hemanth Babu Setti - A passionate Full Stack Developer with 3+ years of experience in React, Next.js, React Native. Based in Bangalore, India.',
  keywords: [
    'About Hemanth Babu Setti',
    'Full Stack Developer',
    'React Developer',
    'Bangalore Developer',
    'Software Engineer India',
  ],
  openGraph: {
    title: 'About Me | Hemanth Babu Setti',
    description:
      'Learn more about Hemanth Babu Setti - A passionate Full Stack Developer with 3+ years of experience.',
    url: 'https://www.hemanthbabu648.com/about',
  },
};

const funFacts = [
  { text: 'I love hacking on new tech and building tools', icon: '💻' },
  { text: 'I spend hours debugging code (and loving it)', icon: '🐛' },
  { text: 'I enjoy gardening and visiting agriculture farms', icon: '🌱' },
  { text: 'I am always learning something new', icon: '📚' },
  { text: 'I love sharing knowledge through blogs', icon: '✍️' },
  { text: 'I enjoy building side projects', icon: '🚀' },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 relative">
      {/* Decorative Elements */}
      <DotPattern position="left" />

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--np-accent-purple)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--np-accent-cyan)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl font-bold mb-3">
            <span className="np-hashtag">/</span>about-me
          </h1>
          <p className="text-[var(--np-text-secondary)] text-lg">Who am I?</p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text with Glass Card */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)]/20 to-[var(--np-accent-cyan)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/30 transition-colors">
                  <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                    Hello, i&apos;m <span className="text-[var(--np-accent-purple)] font-semibold">Hemanth Babu Setti</span>!
                  </p>
                  <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                    I&apos;m a passionate software developer with over <span className="text-[var(--np-accent-purple)]">3+ years</span> of professional experience,
                    specializing in front-end development for both web and mobile platforms. Based in <span className="text-[var(--np-accent-cyan)]">Bangalore, India</span>.
                  </p>
                  <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                    I have hands-on expertise in HTML, CSS, and JavaScript, working extensively with libraries like
                    <span className="text-[var(--np-accent-cyan)]"> React</span>, <span className="text-[var(--np-accent-cyan)]">React Native</span> (with Expo), and <span className="text-[var(--np-accent-cyan)]">Node.js</span>. I leverage modern frameworks
                    like <span className="text-[var(--np-accent-cyan)]">Next.js</span>, <span className="text-[var(--np-accent-cyan)]">Tailwind CSS</span>, Material UI, and Ant Design.
                  </p>
                  <p className="text-[var(--np-text-secondary)] leading-relaxed">
                    I&apos;m a fast learner who thrives on solving real-world problems and collaborating closely
                    with clients to deliver impactful digital experiences that align with business goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image with Effects */}
            <div className="flex justify-center md:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--np-accent-purple)]/20 to-[var(--np-accent-cyan)]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Container */}
                <div className="relative w-72 h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/images/developer.webp"
                    alt="Hemanth"
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--np-bg-primary)]/80 via-transparent to-transparent" />

                  {/* Border Glow on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--np-accent-purple)]/50 rounded-lg transition-colors duration-300" />
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 border border-[var(--np-accent-purple)]/50 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300" />

                {/* Experience Badge */}
                <div className="absolute -bottom-3 -left-3 px-4 py-2 bg-[var(--np-bg-secondary)] rounded-lg border border-[var(--np-accent-purple)]/50 shadow-lg">
                  <p className="text-[var(--np-accent-purple)] font-bold text-lg">3+</p>
                  <p className="text-[var(--np-text-muted)] text-xs">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 opacity-0 animate-fade-in" style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}>
          <SectionTitle title="skills" />
          <SkillsGrid />
        </section>

        {/* Fun Facts Section */}
        <section className="opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          <SectionTitle title="my-fun-facts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

                {/* Card */}
                <div className="relative bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-xl p-5 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{fact.icon}</span>
                    <p className="text-[var(--np-text-secondary)] text-sm leading-relaxed">{fact.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
