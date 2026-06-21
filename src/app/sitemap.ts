import { MetadataRoute } from 'next';

import { siteConfig } from '@/constants/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Only actual routes are listed here.
  // Section anchors (/#projects, /#skills, etc.) are excluded — Google strips
  // URL fragments and treats them as the homepage, making them redundant.
  // External subdomains (apps.hemanthbabu.com, blogs.hemanthbabu.com)
  // are excluded — sitemaps should only contain URLs from the same domain.
  // Each subdomain should have its own sitemap.

  return [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about-me`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
