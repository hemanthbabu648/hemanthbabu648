import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

import { Blog } from '@/types';
import { fadeIn } from '@/utils/motion';
import { formatDate } from '@/utils/StringUtils';

import { BLOGS_BASE_URL } from '../../../config';

const BlogCard = ({ index, blog }: { index: number; blog: Blog }) => {
  const { title, excerpt, url, coverImage, date, readTime, author } = blog;
  return (
    <motion.div
      variants={fadeIn('down', 'spring', index * 0.5, 0.75)}
      onClick={() => window.open(url, '_blank')}
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
            src={`${BLOGS_BASE_URL}${coverImage}`}
            alt={title}
            fill
            className="object-fill rounded-md"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] line-clamp-2">{title}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">{excerpt}</p>
        </div>

        <div className="my-3 flex flex-wrap gap-2">
          <span className="text-sm bg-pink-300 px-3 py-1 rounded-lg text-black-200">
            {readTime}
          </span>
          {author && (
            <span className="text-sm bg-blue-200 px-3 py-1 rounded-lg text-black-200">
              <b>Author :</b> {author}
            </span>
          )}
        </div>
        <span className="text-sm text-slate-400">Published on : {formatDate(date)}</span>
      </Tilt>
    </motion.div>
  );
};

export default BlogCard;
