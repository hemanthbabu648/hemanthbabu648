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

// New portfolio navigation
export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Blogs', href: '/#blogs' },
  { name: 'About Me', href: '/#about' },
  { name: 'Contacts', href: '/#contacts' },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram';
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/hemanthbabu648', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hemanthbabu648', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/hemanthbabu648', icon: 'twitter' },
  { name: 'Instagram', href: 'https://www.instagram.com/hemanthbabu648', icon: 'instagram' },
];
