'use client';

import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HERO_SECTION } from '@/constants/content';

import Button from '../ui/Button';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % HERO_SECTION.role.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--np-accent-purple)] rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--np-accent-cyan)] rounded-full blur-[180px] opacity-10" />

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="order-2 md:order-1">
            <p className="text-[var(--np-accent-purple)] text-sm font-medium mb-2 tracking-wider">
              Hi, I&apos;m
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="np-text-gradient">{HERO_SECTION.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 font-medium mb-6 h-8 md:h-9">
              <span
                key={currentRoleIndex}
                className="inline-block animate-fade-in-up"
              >
                {HERO_SECTION.role[currentRoleIndex]}
              </span>
            </h2>
            <p className="text-[var(--np-text-secondary)] mb-8 text-base md:text-lg leading-relaxed">
              {HERO_SECTION.description[0]}
              &nbsp;
              <span className="text-[var(--np-accent-cyan)] font-semibold">{HERO_SECTION.yearsOfExperience} years</span>
              &nbsp;
              {HERO_SECTION.description[1]}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contacts">Contact me!</Button>
              <Link
                href={HERO_SECTION.resumeUrl}
                target="_blank"
                className="np-btn-secondary px-5 py-2.5 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Download size={18} />
                Download Resume
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--np-accent-purple)] to-[var(--np-accent-cyan)] rounded-lg blur-2xl opacity-30 scale-120" />

              {/* Developer Image */}
              <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/developer.webp"
                  alt="Hemanth Babu Setti"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--np-bg-primary)] via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-[var(--np-accent-purple)] rounded-lg translate-x-4 translate-y-4 -z-10 np-border-glow" />

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-0 right-0 mx-2">
                <div className="np-glass rounded-lg p-3 flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[var(--np-text-secondary)] text-sm">
                    Currently working at{' '}
                    <span className="text-white font-medium">{HERO_SECTION.currentCompany}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
