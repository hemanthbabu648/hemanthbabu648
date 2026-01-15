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
