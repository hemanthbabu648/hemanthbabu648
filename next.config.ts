import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogs.hemanthbabu648.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blogs.hemanthbabu648.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apps.hemanthbabu648.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apps.hemanthbabu648.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
