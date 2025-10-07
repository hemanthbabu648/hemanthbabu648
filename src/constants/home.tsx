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

export const YEARS_OF_EXPERIENCE = '3+';

export const SITE_LAST_UPDATED = '07 Oct 2025';

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
    url: 'https://www.linkedin.com/in/hemanthbabu648',
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
    url: 'https://wa.me/919490980700',
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
    title: 'SDE - I',
    company_name: 'Bytup Technologies',
    icon: '/images/companies/bytup.png',
    iconBg: '#E6DEDD',
    date: 'July 2023 - Present',
    points: [
      'Built dedicated dashboards for Agents and Admins with customized interfaces and features tailored to specific user roles.',
      'Implemented property listing management, real-time inquiry tracking, lead management, and performance analytics using Redux Toolkit and TanStack Query for efficient state and data handling.',
      'Developed robust administrative tools including role management, dynamic system settings, analytics dashboards, and content moderation with Open APIs and scalable front-end architecture.',
      'Wrote unit and integration tests with Jest, ensuring component reliability and optimizing performance for responsiveness, cross-browser compatibility, and accessibility.',
      'Created dynamic and nested routes in Next.js with SEO-friendly URLs, using route parameters to fetch and render API-driven content.',
      'Collaborated with design and backend teams to implement UI/UX designs and integrate front-end features with backend services.',
    ],
  },
  {
    title: 'Software Development Intern',
    company_name: 'Bytup Technologies',
    icon: '/images/companies/bytup.png',
    iconBg: '#383E56',
    date: 'Sept 2022 - Jun 2023',
    points: [
      'Contributed to the development of HTML templates for web and mobile applications, enhancing front-end functionality.',
      'Built responsive web pages using React JS, TailwindCSS, and Ant Design.',
      'Optimized codebase by reducing HTML template complexity through JSON construction and iteration, resulting in improved code maintainability.',
      'Integrated APIs to display dynamic content on dashboards.',
    ],
  },
];
