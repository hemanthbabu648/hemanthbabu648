import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Tilt } from 'react-tilt';

import { fadeIn } from '@/utils/motion';

type ViewAllCardProps = {
  index: number;
  sectionName: string;
  para: string;
  url: string;
};

const ViewAllCard: React.FC<ViewAllCardProps> = ({ index, sectionName, para, url }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-space-black p-5 rounded-2xl sm:w-[360px] w-full min-h-[450px] flex flex-col justify-between"
      >
        {/* Placeholder image height */}
        <div className="relative w-full h-[230px] flex items-center justify-center bg-gradient-to-br from-violet-700 to-indigo-900 rounded-md">
          <p className="text-white text-lg font-semibold text-center px-2">
            Ready for more? Dive into all my {sectionName}!
          </p>
        </div>

        {/* Content area */}
        <div className="mt-5 text-center">
          <h3 className="text-white font-bold text-[24px] capitalize">View All {sectionName}</h3>
          <p className="mt-2 text-secondary text-[14px]">{para}</p>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={url}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
          >
            Explore More <ArrowRight size={18} />
          </Link>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ViewAllCard;
