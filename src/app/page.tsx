'use client';

import About from '@/components/home/About';
import Blogs from '@/components/home/Blogs';
import Contact from '@/components/home/Contact';
import Experiences from '@/components/home/Experiences';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import TechSkills from '@/components/home/TechSkills';
import { socialIcons } from '@/constants/home';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="hidden fixed top-[30%] right-0 w-16 h-80 z-40 sm:flex items-center">
        <div className="w-full h-full flex flex-col justify-center items-center space-y-5 bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 border-l-2 border-green-300 shadow-[0_0_30px_#22c55e88] rounded-l-2xl backdrop-blur-md">
          {socialIcons.map(({ title, url, icon: Icon }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={title}
              className="group relative p-3 rounded-full bg-black/50 hover:bg-white transition duration-300 shadow-md hover:scale-110 hover:shadow-[0_0_15px_#22c55e88]"
            >
              <Icon
                size={22}
                className="text-green-300 group-hover:text-black transition-all duration-300"
              />
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </a>
          ))}
        </div>
      </div>
      <Experiences />
      <Projects />
      <TechSkills />
      <Blogs />
      <Contact />
    </>
  );
}

export default Home;
