'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tilt } from 'react-tilt';

import { services } from '../../constants/home';
import SectionWrapper from '../../hooks/SectionWrapper';
import { fadeIn, textVariant } from '../../utils/motion';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: React.ReactNode;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      className="w-full sm:w-[250px]"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-space-black rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          {icon}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[22px] tracking-[8px]">
          INTRODUCTION
        </p>
        <h4 className="sm:text-[18px] text-[14px] text-slate-300 uppercase tracking-wider">
          Overview
        </h4>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a passionate software developer with over 2.5 years of professional experience,
        specializing in front-end development for both web and mobile platforms. I have hands-on
        expertise in HTML, CSS, and JavaScript, working extensively with libraries like React, React
        Native (with Expo), and Node.js. I also leverage modern frameworks and tools such as
        Next.js, Tailwind CSS, Material UI, and Ant Design to build responsive, scalable, and
        maintainable applications. I&apos;m a fast learner who thrives on solving real-world
        problems and collaborating closely with clients to deliver impactful digital experiences
        that align with business goals.
      </motion.p>

      <motion.div variants={fadeIn('', '', 0.2, 1)} className="mt-6">
        <Link
          href="/about"
          className="inline-block px-6 py-2 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-semibold transition duration-300"
        >
          Know More About Me
        </Link>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
