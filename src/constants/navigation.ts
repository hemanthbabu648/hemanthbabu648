type GlobalHeaderNavLink = {
  id: string;
  title: string;
  path?: string;
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
    path: 'https://apps.hemanthbabu648.com/',
  },
  {
    id: 'blogs',
    title: 'Blogs',
    path: 'https://blogs.hemanthbabu648.com/',
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
  { title: 'Projects', href: '/projects' },
  { title: 'Blogs', href: '/blogs' },
  { title: 'Contact', href: '/contact' },
];
