'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] mx-auto bg-image-pattern bg-cover bg-no-repeat bg-center">
      <div
        className="px-4 sm:px-6 lg:px-12 xl:px-16 absolute inset-0 top-[20px] sm:top-[80px] max-w-7xl
      mx-auto flex flex-row items-start gap-5"
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-450" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="sm:w-1/2">
            <h1 className="font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I&apos;m <span className="text-violet-450">HEMANTH BABU SETTI</span>
            </h1>
            <p className="text-violet-200 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              I build sleek, responsive user interfaces and dynamic web apps, along with
              high-quality mobile applications — backed by{' '}
              <span className="orange-text-gradient">2.5+ years</span> of front-end expertise.
            </p>

            <motion.button
              className="orange-gradient px-5 font-semibold tex-sm sm:text-xl py-2 rounded-se-xl rounded-br-lg mt-5 sm:mt-10 flex items-center gap-2 animate-bounce"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <span>Download Resume</span>
              <Download className="w-6 h-6" />
            </motion.button>
          </div>
          <div className="flex justify-center items-center sm:flex-1">
            <motion.img
              initial={{
                x: 200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              src="/images/developer.jpeg"
              alt="hemanth babu setti"
              className="w-full h-full rounded-e-full flex-shrink-0 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
