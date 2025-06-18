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
  },
  {
    id: 'blogs',
    title: 'Blogs',
    path: 'https://blogs.hemanthbabu648.com/',
  },
  {
    id: 'apps',
    title: 'Apps',
    path: 'https://apps.hemanthbabu648.com/',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];
