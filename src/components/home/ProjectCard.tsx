import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

import { Project, Tag } from '@/constants/home';
import { fadeIn } from '@/utils/motion';

const ProjectCard = ({ index, project }: { index: number; project: Project }) => {
  const { name, description, tags, image, source_code_link } = project;
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
            src={image}
            alt={name}
            fill
            className="object-fill rounded-md"
            sizes="(max-width: 1024px) 100vw, 320px"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center
              items-center cursor-pointer"
            >
              <Laptop size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: Tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
