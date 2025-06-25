import { motion } from 'framer-motion';

import { latestBlogs, projects } from '@/constants/home';
import { BLOGS_SITE_URL } from '@/constants/navigation';
import SectionWrapper from '@/hooks/SectionWrapper';
import { fadeIn, textVariant } from '@/utils/motion';

import BlogCard from './BlogCard';
import NewsLetter from './NewsLetter';
import ViewAllCard from './ViewAllCard';

const Blogs = () => {
  const lastIndex = projects.length - 1;
  return (
    <>
      <motion.div variants={textVariant()}>
        <h4 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-[5px] uppercase">
          Blogs
        </h4>
        <p className="sm:text-[18px] text-[14px] text-slate-300 uppercase tracking-wider">
          Articles & Learnings I&apos;ve Written
        </p>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here you&apos;ll find a collection of my technical blogs where I explore front-end
          development, modern frameworks, performance optimization, and real-world coding practices.
          These articles reflect my learning, experimentation, and passion for web and mobile
          development.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {latestBlogs.map((blog, index) => (
          <BlogCard key={`blog-${blog.id}`} index={index} blog={blog} />
        ))}

        <ViewAllCard
          index={lastIndex}
          sectionName="blogs"
          para="Explore the full collection of my blogs, featuring insights on web development, productivity tips, and personal experiences in the tech industry."
          url={BLOGS_SITE_URL}
        />
      </div>
      <NewsLetter />
    </>
  );
};

export default SectionWrapper(Blogs, 'blogs');
