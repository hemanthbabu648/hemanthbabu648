import { motion } from "motion/react";
import { useEffect, useState } from 'react';

import { APPS_SITE_URL } from '@/constants/navigation';
import NoMotionSectionWrapper from "@/hooks/NoMotionSectionWrapper";
import { getAllProjects } from '@/services/projects';
import { Project, ProjectsAPIResponse } from '@/types';
import { textVariant } from '@/utils/motion';

import ProjectCard from './ProjectCard';
import ViewAllCard from './ViewAllCard';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res: ProjectsAPIResponse = await getAllProjects();
      setProjects(res.data.projects || []);
    };
    fetchProjects();
  }, []);

  const lastIndex = projects.length - 1;

  return (
    <>
      <motion.div variants={textVariant(0)}>
        <h4 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-[5px] uppercase">
          PROJECTS
        </h4>
        <p className="sm:text-[18px] text-[14px] text-slate-300 uppercase tracking-wider">
          PROJECTS THAT I HAVE DONE SO FAR
        </p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={textVariant(0)}
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

        <ViewAllCard
          index={lastIndex}
          sectionName="projects"
          para="Explore the full list of my work, including web apps, mobile apps, and more."
          url={APPS_SITE_URL}
        />
      </div>
    </>
  );
};

export default NoMotionSectionWrapper(Projects, 'projects');
