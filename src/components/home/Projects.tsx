import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Tilt } from 'react-tilt';

import { projects } from '@/constants/home';
import SectionWrapper from '@/hooks/SectionWrapper';
import { fadeIn, textVariant } from '@/utils/motion';

import ProjectCard from './ProjectCard';

const Projects = () => {
  const lastIndex = projects.length - 1;
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-[5px] uppercase">
          PROJECTS
        </h4>
        <p className="sm:text-[18px] text-[14px] text-slate-300 uppercase tracking-wider">
          PROJECTS THAT I HAVE DONE SO FAR
        </p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}

        <motion.div variants={fadeIn('up', 'spring', lastIndex * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 25,
              scale: 1,
              speed: 300,
            }}
            className="min-h-[450px] bg-gradient-to-br from-violet-700 to-indigo-900 p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-xl transition flex flex-col justify-center items-center"
          >
            <div className="text-center">
              <p className="text-white text-xl font-semibold mb-4">View All Projects</p>
              <Link
                href="/allApps"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
              >
                Explore More <ArrowRight size={18} />
              </Link>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
