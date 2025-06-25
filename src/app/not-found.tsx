'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center bg-black-100 text-white px-4">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-7xl font-black mb-4 text-violet-450 drop-shadow-lg"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
        className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground"
      >
        Oops! Page Not Found
      </motion.p>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1, type: 'spring', bounce: 0.5 }}
        className="mb-8"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            stroke="#fbbf24"
            strokeWidth="8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          <motion.circle
            cx="60"
            cy="60"
            r="30"
            stroke="#fff"
            strokeWidth="4"
            strokeDasharray="8 8"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
          <motion.circle
            cx="60"
            cy="60"
            r="10"
            fill="#fbbf24"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
      <Link
        href="/"
        className="mt-4 px-6 py-3 bg-violet-450 text-white font-semibold rounded-lg shadow hover:bg-violet-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
