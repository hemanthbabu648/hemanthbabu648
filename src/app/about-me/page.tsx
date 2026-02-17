import Image from 'next/image';

import DotPattern from '@/components/layout/DotPattern';
import Button from '@/components/ui/Button';
import CodeSnippet from '@/components/ui/CodeSnippet';
import ProfileImage from '@/components/ui/ProfileImage';
import SectionTitle from '@/components/ui/SectionTitle';
import SkillsGrid from '@/components/ui/SkillsGrid';
import { PROFILE, MY_WEBSITES } from '@/constants/common';
import { SKILLS } from '@/constants/content';
import { siteConfig } from '@/constants/seo';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Discover ${siteConfig.name} — a ${PROFILE.role[0]} with ${PROFILE.yearsOfExperience} years of experience building modern web and mobile applications with React, Next.js, and React Native.`,
  openGraph: {
    title: `About Me | ${siteConfig.name}`,
    description: `Discover ${siteConfig.name} — a ${PROFILE.role[0]} specializing in React, Next.js, and modern web development.`,
    url: `${siteConfig.url}/about-me`,
  },
};

const funFacts = [
  {
    text: 'Passionate about exploring emerging technologies and crafting developer tools',
    icon: '💻',
  },
  {
    text: 'Finding joy in the art of debugging — every bug is a puzzle waiting to be solved',
    icon: '🐛',
  },
  {
    text: 'Reconnecting with nature through gardening and visits to agricultural farms',
    icon: '🌱',
  },
  {
    text: 'Committed to continuous learning — there is always something new to discover',
    icon: '📚',
  },
  { text: 'Sharing insights and experiences through technical writing and blogs', icon: '✍️' },
  { text: 'Transforming ideas into reality through creative side projects', icon: '🚀' },
];

const socialLinks = [
  { title: 'GitHub', url: PROFILE.github },
  { title: 'LinkedIn', url: PROFILE.linkedin },
  { title: 'Twitter', url: PROFILE.twitter },
  { title: 'Instagram', url: PROFILE.instagram },
];

export default function AboutMePage() {
  return (
    <main className="pt-24 pb-16 relative">
      {/* Decorative Elements */}
      <DotPattern position="left" />
      <DotPattern position="right" />

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-purple)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl font-bold mb-3">
            <span className="hashtag">/</span>about-me
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">The story behind the code</p>
        </div>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text with Glass Card */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/30 transition-colors">
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    Hey there! I&apos;m{' '}
                    <span className="text-[var(--accent-purple)] font-semibold">
                      {PROFILE.name}
                    </span>
                    .
                  </p>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    As a {PROFILE.role[0]} with{' '}
                    <span className="text-[var(--accent-purple)]">
                      {PROFILE.yearsOfExperience} years
                    </span>{' '}
                    of hands-on experience, I specialize in crafting seamless digital experiences
                    across web and mobile platforms. Currently based in{' '}
                    <span className="text-[var(--accent-cyan)]">Bangalore, India</span>.
                  </p>
                  <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                    My toolkit spans the modern JavaScript ecosystem — from building interactive UIs
                    with
                    <span className="text-[var(--accent-cyan)]"> React</span> and{' '}
                    <span className="text-[var(--accent-cyan)]">React Native</span> to server-side
                    development with <span className="text-[var(--accent-cyan)]">Node.js</span>. I
                    work with frameworks like{' '}
                    <span className="text-[var(--accent-cyan)]">Next.js</span> and{' '}
                    <span className="text-[var(--accent-cyan)]">Tailwind CSS</span> to deliver
                    performant, scalable applications.
                  </p>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    What drives me? Turning complex problems into elegant solutions. I thrive on
                    collaboration and am dedicated to building products that make a real difference
                    for users and businesses alike.
                  </p>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="mt-6">
                <CodeSnippet variableName="developer" items={PROFILE.role} animationDelay="400ms" />
              </div>
            </div>

            {/* Right: Profile Image */}
            <ProfileImage
              src="/images/developer.webp"
              alt={PROFILE.name}
              badge={`${PROFILE.yearsOfExperience} Years`}
              priority
            />
          </div>
        </section>

        {/* A Little More Section */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
        >
          <SectionTitle title="a-little-more" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group order-2 md:order-1">
              <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/developer.webp"
                alt={PROFILE.name}
                width={400}
                height={300}
                className="relative rounded-xl shadow-lg object-cover w-full max-w-md mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="relative group order-1 md:order-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/30 transition-colors">
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  Web development has been more than a career — it&apos;s a genuine passion that
                  drives me every day. I find immense satisfaction in experimenting with new
                  technologies, building tools that solve real problems, and constantly refining my
                  craft. While <span className="text-[var(--accent-cyan)]">Bangalore</span> is where
                  I work, my roots lie in my hometown, where I often return to reconnect with
                  agricultural life and explore the countryside.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Beyond the screen, you&apos;ll find me tending to my garden, caring for the family
                  farm, diving into a good book, or tackling DIY projects around the house. I
                  believe in embracing challenges head-on and never stopping the pursuit of new
                  skills and knowledge.
                </p>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-[var(--bg-tertiary)]/50 border border-[var(--border-muted)]">
                    <p className="text-2xl font-bold text-[var(--accent-purple)]">
                      {PROFILE.yearsOfExperience}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">Years Experience</p>
                  </div>
                  {/* TODO: Enable once project count is dynamic */}
                  {/* <div className="text-center p-3 rounded-lg bg-[var(--bg-tertiary)]/50 border border-[var(--border-muted)]">
                    <p className="text-2xl font-bold text-[var(--accent-cyan)]">20+</p>
                    <p className="text-xs text-[var(--text-muted)]">Projects Completed</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}
        >
          <SectionTitle title="skills" />
          <SkillsGrid />

          {/* Skills Code Snippet */}
          <div className="mt-8 flex justify-center">
            <div className="bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)]">
              <CodeSnippet
                variableName="techStack"
                items={SKILLS.flatMap(s => s.items).slice(0, 8)}
                animationDelay="600ms"
              />
            </div>
          </div>
        </section>

        {/* Featured Project Section */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <SectionTitle title="featured-project" />
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/30 transition-colors">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={`${MY_WEBSITES.apps}/projects/finance-tracker.png`}
                  alt="Finance Tracker Project"
                  width={600}
                  height={300}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 to-transparent" />
              </div>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                <span className="font-semibold text-[var(--accent-purple)]">Finance Tracker</span> —
                a comprehensive web application designed to simplify personal finance management.
                Built with Next.js, React, and Tailwind CSS, this project showcases my commitment to
                creating intuitive, user-centric applications that solve everyday problems.
              </p>
              <Button href={MY_WEBSITES.apps} variant="secondary">
                View All Projects →
              </Button>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section
          className="mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}
        >
          <SectionTitle title="my-fun-facts" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="group relative overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${600 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

                {/* Card */}
                <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-5 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/30 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {fact.icon}
                    </span>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {fact.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Find Me Online Section */}
        <section
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          <SectionTitle title="find-me-online" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-purple)]/20 to-[var(--accent-cyan)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-purple)]/30 transition-colors h-full">
                <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
                  Let&apos;s Connect
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map(link => (
                    <li key={link.title}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--accent-purple)]/10 transition-colors group/link"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[var(--accent-purple)]/10 flex items-center justify-center group-hover/link:bg-[var(--accent-purple)]/20 transition-colors">
                          <span className="text-[var(--accent-purple)] text-sm">@</span>
                        </span>
                        <span className="text-[var(--text-secondary)] group-hover/link:text-[var(--accent-purple)] transition-colors">
                          {link.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative bg-[var(--bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-muted)] group-hover:border-[var(--accent-cyan)]/30 transition-colors h-full">
                <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Reach Out</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                      <span className="text-[var(--accent-cyan)] text-sm">@</span>
                    </span>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                      <span className="text-[var(--accent-cyan)] text-sm">#</span>
                    </span>
                    <span className="text-[var(--text-secondary)]">{PROFILE.phoneNumber}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button href={PROFILE.resumeUrl} variant="primary" external>
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
