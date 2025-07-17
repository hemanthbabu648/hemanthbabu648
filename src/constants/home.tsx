import { Laptop2, PenLine, Search, Smartphone } from 'lucide-react';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaWindows,
  FaApple,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
} from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiVercel,
  SiJest,
  SiAntdesign,
  SiPostman,
  SiNpm,
  SiYarn,
} from 'react-icons/si';
import { TbBrandMantine } from 'react-icons/tb';

import type { IconType } from 'react-icons';

type Service = {
  title: string;
  icon: React.ReactNode;
};

export const services: Service[] = [
  {
    title: 'Web Developer',
    icon: <Laptop2 size={50} />,
  },
  {
    title: 'Mobile Developer',
    icon: <Smartphone size={50} />,
  },
  {
    title: 'Content Creator',
    icon: <PenLine size={50} />,
  },
  {
    title: 'Learner & Researcher',
    icon: <Search size={50} />,
  },
];

type SocialNav = {
  title: string;
  url: string;
  icon: React.ElementType;
  className?: string;
};

export const socialIcons: SocialNav[] = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hemanthbabu648/',
    icon: FaLinkedin,
    className: 'hover:underline text-blue-300',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/hemanthbabu648',
    icon: FaInstagram,
    className: 'hover:underline text-pink-400',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/hemanthbabu648',
    icon: FaTwitter,
    className: 'hover:underline text-blue-400',
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/919989191478',
    icon: FaWhatsapp,
    className: 'hover:underline text-orange-200 ',
  },
  {
    title: 'Telegram',
    url: 'https://t.me/hemanthbabu648',
    icon: FaTelegramPlane,
    className: 'hover:underline text-emerald-200',
  },
];

export type Technology = {
  name: string;
  icon: IconType;
  value: number;
};

export const technologies: Technology[] = [
  // Languages
  { name: 'HTML 5', icon: FaHtml5, value: 80 },
  { name: 'CSS 3', icon: FaCss3Alt, value: 80 },
  { name: 'JavaScript', icon: RiJavascriptFill, value: 80 },
  { name: 'TypeScript', icon: BiLogoTypescript, value: 60 },

  // Frameworks & Libraries
  { name: 'React JS', icon: SiReact, value: 80 },
  { name: 'Next JS', icon: SiNextdotjs, value: 75 },
  { name: 'Redux Toolkit', icon: SiRedux, value: 75 },
  { name: 'TanStack Query', icon: SiPostman, value: 70 },
  { name: 'Mantine UI', icon: TbBrandMantine, value: 90 },

  // Styling
  { name: 'Tailwind CSS', icon: SiTailwindcss, value: 80 },
  { name: 'Ant Design', icon: SiAntdesign, value: 70 },

  // Tools & Platforms
  { name: 'Git', icon: FaGitAlt, value: 80 },
  { name: 'Figma', icon: FaFigma, value: 50 },
  { name: 'npm', icon: SiNpm, value: 75 },
  { name: 'yarn', icon: SiYarn, value: 75 },
  { name: 'Vercel', icon: SiVercel, value: 60 },

  // Testing
  { name: 'Jest', icon: SiJest, value: 65 },

  // Operating Systems
  { name: 'Linux', icon: FaLinux, value: 80 },
  { name: 'Windows', icon: FaWindows, value: 90 },
  { name: 'macOS', icon: FaApple, value: 80 },
];

export type Experience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Front-end Developer',
    company_name: 'Bytup Technologies Pvt Ltd',
    icon: '/images/companies/bytup.png',
    iconBg: '#E6DEDD',
    date: 'Feb 2025 - Present',
    points: [
      'Developed AI-driven mock interview platform (PrepAce) using Next.js, Tailwind CSS, Redux Toolkit, Server Actions, and Generative APIs.',
      'Implemented advanced feedback mechanisms and integrated video recording features for enhanced user analysis.',
      'Integrated real-time analytics and performance insights to improve user progress tracking.',
      "Led the development of 'Any UNI', a university discovery platform with SEO-optimized routing, mentorship programs, and real-time application tracking.",
      'Collaborated closely with designers and back-end teams to ship scalable and accessible features.',
      'Actively participated in code reviews to ensure clean, maintainable code across projects.',
    ],
  },
  {
    title: 'Junior Front-end Developer',
    company_name: 'Bytup Technologies Pvt Ltd',
    icon: '/images/companies/bytup.png',
    iconBg: '#383E56',
    date: 'Aug 2023 - Jan 2025',
    points: [
      'Built admin and agent dashboards for a property management system (Real) using React, Tailwind CSS, Redux Toolkit, and TanStack Query.',
      'Implemented real-time inquiry tracking, listing management, and performance analytics with Open APIs.',
      'Contributed to core administrative tools such as user roles, system settings, and moderation features.',
      'Wrote unit and integration tests using Jest to maintain component reliability and app performance.',
      'Participated in sprint planning and QA sessions to improve feature delivery cycles.',
    ],
  },
  {
    title: 'Trainee Front-end Developer',
    company_name: 'Bytup Technologies Pvt Ltd',
    icon: '/images/companies/bytup.png',
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - July 2023',
    points: [
      'Contributed to the development of an E-learning platform using Next.js, Tailwind CSS, and Strapi CMS.',
      'Implemented dashboards with personalized learning progress tracking and course management features.',
      'Worked on course discovery UX by integrating advanced filtering and search functionality.',
      'Collaborated with the design and back-end teams to deliver pixel-perfect, mobile-first responsive components.',
      'Learned version control, component structure, and responsive design fundamentals in real-world projects.',
    ],
  },
];
