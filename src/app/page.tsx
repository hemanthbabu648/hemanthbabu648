'use client';

import About from '@/components/home/About';
import Experiences from '@/components/home/Experiences';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import { socialIcons } from '@/constants/home';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="hidden fixed top-[30%] right-0 w-16 h-80 z-30 bg-green-500 rounded-l-2xl sm:flex items-center">
        <div className="space-y-4 flex flex-col items-center w-full">
          {socialIcons.map(({ title, url, icon: Icon }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="p-2 rounded-full bg-white hover:bg-gray-200 transition-all"
            >
              <Icon size={30} className="text-green-800" />
            </a>
          ))}
        </div>
      </div>
      <Experiences />
      <Projects />
    </>
  );
}

export default Home;
