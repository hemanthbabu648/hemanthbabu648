import Image from "next/image";
import Link from "next/link";
import React from "react";

import { socialIcons } from "@/constants/home";

export default function AboutMePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-10 flex flex-col items-center text-center">
        <Image
          src="/images/developer.jpeg"
          alt="Hemanth Babu Setti"
          width={320}
          height={220}
          className="rounded-2xl shadow-lg mb-6 object-cover w-48 h-48"
        />
        <h1 className="text-4xl font-extrabold mb-2 text-violet-450 tracking-tight">
          Hey, I&apos;m Hemanth Babu Setti
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Web Developer, Mobile Developer, Content Creator, Learner and <br /> Re-Searcher from India 🇮🇳
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
            JavaScript
          </span>
          <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
            React
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
            React Native
          </span>
          <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="inline-block bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-medium">
            Expo
          </span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          I build sleek, responsive user interfaces and dynamic web apps, along
          with high-quality mobile applications — backed by 2.5+ years of
          front-end expertise.
        </p>
      </section>

      {/* The Skinny */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-violet-450">The Skinny…</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          I&apos;m a web developer, mobile developer and content creator from India. I&apos;ve
          been making websites for over 2.5+ years and mobile apps just 6 months! My main focus is React.js,
          Next.js, React Native, Expo, Node.js, and building modern, scalable web and mobile apps.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          I love sharing knowledge through blogs. I&apos;m always learning and enjoy solving
          real-world problems with technology.
        </p>
      </section>

      {/* A little more */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-violet-450">
          A little more…
        </h2>
        <Image
          src="/images/developer.webp"
          alt="Hemanth Babu Setti and family"
          width={320}
          height={220}
          className="rounded-xl shadow mb-4 object-cover w-full max-w-md mx-auto"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          I&apos;ve been in love with web development for most of my life. I
          enjoy hacking on new tech, building tools, and making things work
          better. I live in Bangalore often goes to home town and love spending time
          at agriculture farms and exploring new places.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          My hobbies include gardening, looking the farm, some times reading books, and fixing things
          around the house. I&apos;m always up for a challenge and love learning
          new skills.
        </p>
      </section>


      {/* Featured Project/Course */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-violet-450">
          Featured Project
        </h2>
        <Image
          src="/images/Projects/finance-tracker.png"
          alt="Finance Tracker Project"
          width={400}
          height={200}
          className="rounded-xl shadow mb-4 object-cover w-full max-w-md mx-auto"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <span className="font-semibold">Finance Tracker</span> is a modern web
          app to help you manage your expenses and income, built with Next.js,
          React, and Tailwind CSS. It&apos;s a great example of my approach to
          building practical, user-friendly applications.
        </p>
        <Link
          href="/"
          className="inline-block mt-2 text-violet-450 hover:underline font-semibold"
        >
          View Project
        </Link>
      </section>

      {/* Additional Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-violet-450">
          Find Me Online
        </h2>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a
              href="https://github.com/hemanthbabu648"
              target="_blank"
              rel="noopener"
              className="hover:underline text-gray-700 dark:text-gray-200"
            >
              GitHub
            </a>
          </li>
          {socialIcons.map((icon) => (
            <li key={icon.title}>
              <a
                href={icon.url}
                target="_blank"
                rel="noopener"
                className={icon.className}
              >
                {icon.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}