import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

import { Project } from '@/types';
import { fadeIn } from '@/utils/motion';
import { getRandomColor } from '@/utils/StringUtils';

import { APPS_BASE_URL } from '../../../config';

const ProjectCard = ({ index, project }: { index: number; project: Project }) => {
  const { name, description, category, tags, image, sourceCodeLink, projectUrl } = project;
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-space-black p-5 rounded-2xl sm:w-[360px] w-full min-h-[450px]"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={`${APPS_BASE_URL}${image}`}
            alt={name}
            fill
            className="object-fill rounded-md"
            sizes="(max-width: 1024px) 100vw, 320px"
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3">
            <div
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <FaGithub size={30} className="text-white" />
            </div>
            <div
              onClick={() => window.open(projectUrl, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <Laptop size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.map((category: string) => (
              <span
                key={category}
                className="rounded-[10px] px-[5px] py-[2px] text-white"
                style={{
                  backgroundColor: getRandomColor(category, 'bg'),
                }}
              >
                {category}
              </span>
            ))}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="text-sm" style={{ color: getRandomColor(tag, 'text') }}>
              #{tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
