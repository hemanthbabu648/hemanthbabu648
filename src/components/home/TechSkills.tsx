import { motion } from 'framer-motion';

import { technologies, Technology } from '@/constants/home';
import SectionWrapper from '@/hooks/SectionWrapper';

const TechnologyCard = ({ technology }: { technology: Technology }) => {
  const Icon = technology.icon;

  return (
    <div className="group relative flex items-center justify-center cursor-pointer">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 bg-gray-900
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        flex items-center justify-center
        transition-transform duration-300 group-hover:scale-105"
        aria-label={technology.name}
      >
        <Icon className="text-white w-2/3 h-2/3" />
      </motion.div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center
        rounded-full bg-white opacity-0 group-hover:opacity-90
        transition duration-300 ease-in-out"
      >
        <p className="text-xl sm:text-2xl font-bold text-black">{technology.value}%</p>
      </div>
    </div>
  );
};

const TechSkills = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center md:text-left  xl:px-10 xl:space-y-0">
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-[5px] uppercase text-2xl">
        Technologies
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a technology for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-10">
        {technologies?.map(technology => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(TechSkills, '');
