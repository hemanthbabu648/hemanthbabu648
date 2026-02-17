import { Github, Instagram, Linkedin, LucideIcon, Twitter } from 'lucide-react';
import Link from 'next/link';

import { PROFILE } from '@/constants/common';
import { socialLinks } from '@/constants/navigation';

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-muted)]/50 py-10 mt-20 relative">
      {/* Gradient Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-purple)] to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-[var(--text-primary)] font-bold text-xl inline-flex items-center gap-1"
            >
              {PROFILE.name}
            </Link>
            <p className="text-[var(--text-secondary)] text-sm mt-2">{PROFILE.role[0]}</p>
          </div>

          {/* Right: Media */}
          <div className="text-center md:text-right">
            <p className="text-[var(--text-primary)] text-sm mb-4 font-medium">Media</p>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map(social => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-purple)] transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[var(--text-muted)] text-sm mt-10">
          © Copyright {new Date().getFullYear()}. Made with{' '}
          <span className="text-[var(--accent-purple)]">♥</span> {PROFILE.name}.
        </p>
      </div>
    </footer>
  );
}
