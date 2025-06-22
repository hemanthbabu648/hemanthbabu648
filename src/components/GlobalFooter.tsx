'use client';

import Link from 'next/link';
import React from 'react';

import { socialIcons } from '@/constants/home';
import { globalFooterNavLinks } from '@/constants/navigation';

const GlobalFooter = () => (
  <footer className="w-full py-8 bg-black-100 border-t border-gray-800 mt-10 text-gray-400 bg-image-pattern bg-cover bg-no-repeat bg-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Navigation */}
      <nav className="flex gap-5 text-sm">
        {globalFooterNavLinks.map(link => (
          <Link key={link.title} href={link.href} className="hover:text-white transition-colors">
            {link.title}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex gap-4">
        {socialIcons.map(({ url, icon: Icon }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center text-sm text-gray-500 mt-6">
      &copy; {new Date().getFullYear()} Hemanth Babu Setti. All rights reserved.
    </div>
  </footer>
);

export default GlobalFooter;
