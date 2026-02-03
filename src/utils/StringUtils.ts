import { localhost, prodSiteConfig, isProd } from '../../config';

type Site = 'APP' | 'BLOGS';

export const getSiteBaseUrl = (site: Site = 'APP', url: string): string => {
  const baseUrl = isProd
    ? site === 'APP'
      ? prodSiteConfig.APPS_BASE_URL
      : prodSiteConfig.BLOGS_BASE_URL
    : localhost;

  return `${baseUrl}${url}`;
};
