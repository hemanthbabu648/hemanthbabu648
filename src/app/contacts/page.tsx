import { Coffee, Github, Instagram, Linkedin, MessageCircle, Send, Twitter } from 'lucide-react';

import DotPattern from '@/components/layout/DotPattern';
import SectionTitle from '@/components/new-portfolio/ui/SectionTitle';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    'Get in touch with Hemanth Babu Setti for freelance projects, job opportunities, or collaborations. Available for web and mobile app development projects.',
  keywords: [
    'Contact Hemanth Babu Setti',
    'Hire React Developer',
    'Freelance Web Developer',
    'Hire Full Stack Developer India',
    'Contact Developer Bangalore',
  ],
  openGraph: {
    title: 'Contact Me | Hemanth Babu Setti',
    description:
      'Get in touch with Hemanth Babu Setti for freelance projects, job opportunities, or collaborations.',
    url: 'https://www.hemanthbabu648.com/contacts',
  },
};

const allMedia = [
  {
    name: 'LinkedIn',
    handle: '@hemanthbabu648',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/hemanthbabu648',
    color: '#0077b5',
  },
  {
    name: 'GitHub',
    handle: '@hemanthbabu648',
    icon: Github,
    href: 'https://github.com/hemanthbabu648',
    color: '#f0f0f0',
  },
  {
    name: 'Twitter',
    handle: '@hemanthbabu648',
    icon: Twitter,
    href: 'https://twitter.com/hemanthbabu648',
    color: '#1da1f2',
  },
  {
    name: 'Instagram',
    handle: '@hemanthbabu648',
    icon: Instagram,
    href: 'https://www.instagram.com/hemanthbabu648',
    color: '#e4405f',
  },
  {
    name: 'WhatsApp',
    handle: '+91 9490980700',
    icon: MessageCircle,
    href: 'https://wa.me/919490980700',
    color: '#25d366',
  },
  {
    name: 'Telegram',
    handle: '@hemanthbabu648',
    icon: Send,
    href: 'https://t.me/hemanthbabu648',
    color: '#0088cc',
  },
];

export default function ContactsPage() {
  return (
    <main className="pt-24 pb-16 relative">
      {/* Decorative Elements */}
      <DotPattern position="right" />

      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--np-accent-purple)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--np-accent-cyan)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl font-bold mb-3">
            <span className="np-hashtag">/</span>contacts
          </h1>
          <p className="text-[var(--np-text-secondary)] text-lg">Get in touch with me</p>
        </div>

        {/* Contact Info Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Text with Code Block */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
              <div className="relative group mb-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)]/20 to-[var(--np-accent-cyan)]/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/30 transition-colors">
                  <p className="text-[var(--np-text-secondary)] mb-4 leading-relaxed">
                    I&apos;m interested in <span className="text-[var(--np-accent-purple)]">freelance opportunities</span>. However, if you
                    have other request or question, don&apos;t hesitate to contact
                    me.
                  </p>
                  <p className="text-[var(--np-text-secondary)] leading-relaxed">
                    Feel free to reach out through any of the platforms listed. I
                    typically respond within <span className="text-[var(--np-accent-cyan)]">24-48 hours</span>.
                  </p>
                </div>
              </div>

              {/* Decorative Code Block */}
              <div className="bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-lg p-4 border border-[var(--np-border-muted)] font-mono text-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[var(--np-border-muted)]">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-[var(--np-text-muted)] text-xs ml-2">contact.ts</span>
                </div>
                <div className="text-[var(--np-text-muted)]">
                  <span className="text-[var(--np-accent-purple)]">interface</span>{' '}
                  <span className="text-[var(--np-accent-cyan)]">Contact</span> {'{'}
                </div>
                <div className="text-[var(--np-text-muted)] ml-4">
                  status: <span className="text-green-400">&quot;available&quot;</span>;
                </div>
                <div className="text-[var(--np-text-muted)] ml-4">
                  response: <span className="text-green-400">&quot;fast&quot;</span>;
                </div>
                <div className="text-[var(--np-text-muted)] ml-4">
                  projects: <span className="text-[var(--np-accent-purple)]">string</span>[];
                </div>
                <div className="text-[var(--np-text-muted)]">{'}'}</div>
              </div>
            </div>

            {/* Right: Contact Boxes */}
            <div className="flex flex-col gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              {/* Support Box */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-cyan)] to-green-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
                <div className="relative bg-[var(--np-bg-secondary)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-cyan)]/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--np-accent-cyan)]/20 flex items-center justify-center">
                      <Coffee size={18} className="text-[var(--np-accent-cyan)]" />
                    </div>
                    <p className="text-white font-semibold">Support me here</p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-3 rounded-lg bg-[var(--np-bg-tertiary)]/50 hover:bg-[var(--np-accent-cyan)]/10 border border-transparent hover:border-[var(--np-accent-cyan)]/30 transition-all"
                  >
                    <Coffee size={16} className="text-[var(--np-accent-cyan)]" />
                    <span className="text-[var(--np-text-secondary)] text-sm">Buy me a coffee</span>
                  </a>
                </div>
              </div>

              {/* Message Box */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
                <div className="relative bg-[var(--np-bg-secondary)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--np-border-muted)] group-hover:border-[var(--np-accent-purple)]/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--np-accent-purple)]/20 flex items-center justify-center">
                      <Send size={18} className="text-[var(--np-accent-purple)]" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Message me here</p>
                      <p className="text-[var(--np-text-muted)] text-xs">I&apos;ll respond within 24-48 hours</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/hemanthbabu648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg bg-[var(--np-bg-tertiary)]/50 hover:bg-[var(--np-accent-purple)]/10 border border-transparent hover:border-[var(--np-accent-purple)]/30 transition-all group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--np-accent-purple)]/10 flex items-center justify-center">
                          <Linkedin size={16} className="text-[var(--np-accent-purple)]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">LinkedIn</p>
                          <p className="text-[var(--np-text-secondary)] text-xs">@hemanthbabu648</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/919490980700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg bg-[var(--np-bg-tertiary)]/50 hover:bg-[var(--np-accent-cyan)]/10 border border-transparent hover:border-[var(--np-accent-cyan)]/30 transition-all group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--np-accent-cyan)]/10 flex items-center justify-center">
                          <MessageCircle size={16} className="text-[var(--np-accent-cyan)]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">WhatsApp</p>
                          <p className="text-[var(--np-text-secondary)] text-xs">+91 9490980700</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Currently available for new projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* All Media Section */}
        <section className="opacity-0 animate-fade-in" style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}>
          <SectionTitle title="all-media" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden opacity-0 animate-fade-in"
                  style={{ animationDelay: `${500 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                  />

                  {/* Card */}
                  <div className="relative bg-[var(--np-bg-secondary)]/60 backdrop-blur-sm rounded-xl p-5 border border-[var(--np-border-muted)] group-hover:border-opacity-50 transition-all duration-300 h-full"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <Icon
                          size={22}
                          className="transition-colors duration-300"
                          style={{ color: social.color }}
                        />
                      </div>
                      <div>
                        <span className="text-white text-sm font-medium block">{social.name}</span>
                        <p className="text-[var(--np-text-muted)] text-xs mt-1 truncate max-w-full">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
