import { MY_WEBSITES } from '@/constants/common';

type EnvType = 'development' | 'production';

const env: EnvType = 'development';

export const localhost = 'http://localhost:3001';

export const devSiteConfig = {
  BLOGS_BASE_URL: localhost,
  APPS_BASE_URL: localhost,
};

export const prodSiteConfig = {
  BLOGS_BASE_URL: MY_WEBSITES.blogs,
  APPS_BASE_URL: MY_WEBSITES.apps,
};

const prodConfig = {
  BLOGS_API_URL: `${prodSiteConfig.BLOGS_BASE_URL}/api`,
  APPS_API_URL: `${prodSiteConfig.APPS_BASE_URL}/api`,
};

const devConfig = {
  BLOGS_API_URL: `${devSiteConfig.BLOGS_BASE_URL}/api`,
  APPS_API_URL: `${devSiteConfig.APPS_BASE_URL}/api`,
};

export const isProd = process.env.NODE_ENV !== env;

const config = isProd ? prodConfig : devConfig;

export default config;
