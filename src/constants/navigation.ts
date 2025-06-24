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
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Blogs', href: '/blogs' },
];
