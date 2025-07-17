export const BLOGS_BASE_URL = 'https://blogs.hemanthbabu648.com';
export const APPS_BASE_URL = 'https://apps.hemanthbabu648.com';

const isProd = process.env.NODE_ENV === 'production';

const prodConfig = {
  BLOGS_API_URL: `${BLOGS_BASE_URL}/api`,
  APPS_API_URL: `${APPS_BASE_URL}/api`,
};

const devConfig = {
  BLOGS_API_URL: 'http://localhost:3001/api',
  APPS_API_URL: 'http://localhost:3002/api',
};

const config = isProd ? prodConfig : devConfig;

export default config;
