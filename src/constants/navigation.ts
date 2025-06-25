export const APPS_SITE_URL = 'https://www.apps.hemanthbabu648.com';
export const BLOGS_SITE_URL = 'https://www.blogs.hemanthbabu648.com';

type GlobalHeaderNavLink = {
  id: string;
  title: string;
};

export const globalHeaderNavLinks: GlobalHeaderNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'blogs',
    title: 'Blogs',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

type GlobalFooterNavLink = {
  title: string;
  href: string;
};

export const globalFooterNavLinks: GlobalFooterNavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about-me' },
  { title: 'Projects', href: APPS_SITE_URL },
  { title: 'Blogs', href: BLOGS_SITE_URL },
];
