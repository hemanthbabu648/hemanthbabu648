'use client';

import { Github, Instagram, Linkedin, LucideIcon, Menu, Twitter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { PROFILE } from '@/constants/common';
import { navLinks, socialLinks } from '@/constants/navigation';

import ThemeToggle from './ThemeToggle';

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-muted)]/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scroll(0, 0);
          }}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="object-contain rounded-full"
          />
          <p className="text-white text-base sm:text-xl font-semibold md:font-extrabold cursor-pointer sm:hidden lg:block">
            {PROFILE.name}
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-sm transition-colors ${
                active === link.name
                  ? 'text-white border-b-2 border-[var(--accent-purple)] pb-1'
                  : 'link hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-t border-[var(--border-muted)]">
          <nav className="flex flex-col p-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 text-lg transition-colors ${
                  active === link.name
                    ? 'text-white border-b-2 border-[var(--accent-purple)] w-fit'
                    : 'link hover:text-white'
                }`}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t border-[var(--border-muted)]">
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
          </nav>
        </div>
      )}
    </header>
  );
}
