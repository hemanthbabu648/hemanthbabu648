import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

import { Blog } from '@/constants/home';
import { fadeIn } from '@/utils/motion';

const BlogCard = ({ index, blog }: { index: number; blog: Blog }) => {
  const { title, description, link, image, createdAt, category, subCategory } = blog;
  return (
    <motion.div
      variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
      onClick={() => window.open(link, '_blank')}
    >
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
            alt={title}
            fill
            className="object-fill rounded-md"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <p className="text-sm text-pink-300">
            {category}
            <br />
            {subCategory}
            <br />
            {createdAt}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default BlogCard;
