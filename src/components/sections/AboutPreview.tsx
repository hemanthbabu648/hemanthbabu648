import { PROFILE } from '@/constants/common';

import Button from '../ui/Button';
import ProfileImage from '../ui/ProfileImage';
import SectionTitle from '../ui/SectionTitle';

export default function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--np-accent-purple)]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <SectionTitle title="about-me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text with Glass Card */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            {/* Glass Card Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)]/30 to-[var(--np-accent-cyan)]/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
              <div className="relative bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/30 transition-colors">
                <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                  Hello, I&apos;m <span className="text-[var(--np-accent-purple)] font-semibold">Setti Hemanth Babu</span>!
                </p>
                <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                  A dedicated {PROFILE.role[0]} with <span className="text-[var(--np-accent-cyan)]">{PROFILE.yearsOfExperience} years</span> of hands-on experience
                  delivering high-quality web and mobile applications. I transform complex requirements into elegant,
                  user-centric solutions.
                </p>
                <p className="text-[var(--np-text-secondary)] mb-6 leading-relaxed">
                  My expertise spans <span className="text-[var(--np-accent-cyan)]">React</span>, <span className="text-[var(--np-accent-cyan)]">React Native</span>, <span className="text-[var(--np-accent-cyan)]">Next.js</span>, and the modern JavaScript ecosystem.
                  I&apos;ve successfully shipped production applications, collaborated with cross-functional teams,
                  and consistently delivered clean, maintainable code that scales.
                </p>
                <Button href="/about">Read more -&gt;</Button>
              </div>
            </div>
          </div>

          {/* Right: Image with Effects */}
          <ProfileImage src="/images/developer.webp" alt="Hemanth" badge="3+ Years" />
        </div>
      </div>
    </section>
  );
}
