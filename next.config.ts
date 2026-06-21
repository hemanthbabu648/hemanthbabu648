import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogs.hemanthbabu.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.blogs.hemanthbabu.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apps.hemanthbabu.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apps.hemanthbabu.com',
        pathname: '/**',
      },
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '3001',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
