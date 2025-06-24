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
  FaFacebook,
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
};

export const socialIcons: SocialNav[] = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hemanthbabu648/',
    icon: FaLinkedin,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/hemanthbabu648/',
    icon: FaInstagram,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/hemanthbabu648',
    icon: FaTwitter,
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/hemanthbabu648',
    icon: FaFacebook,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/s-hemanthbabu-648',
    icon: FaTelegramPlane,
  },
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

export type Tag = {
  name: string;
  color: string;
};

export type Project = {
  date: string;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  live_url: string;
};

export const projects: Project[] = [
  {
    date: '2023-09-01',
    name: 'E-Library',
    description: "It's a place where you find the all resources at free of  Cost, Just Sign In",
    tags: [
      {
        name: 'Next Js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongooDB',
        color: 'green-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'pink-text-gradient',
      },
      {
        name: 'REST APIs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: '/images/Projects/finance-tracker.png',
    source_code_link: 'https://github.com/fsdhemanth648/E-Library',
    live_url: 'https://e-library-fsdhemanth648.vercel.app/',
  },
  {
    date: '2023-04-01',
    name: 'Personal Portfolio',
    description: "It's a web application that basically showcase the portfolio of a person",
    tags: [
      {
        name: 'Next Js',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: '/images/Projects/finance-tracker.png',
    source_code_link: 'https://github.com/fsdhemanth648/portfolio',
    live_url: 'https://portfolio-fsdhemanth648-gmailcom.vercel.app/',
  },
  {
    date: '2023-03-01',
    name: 'Medium Blog',
    description:
      'Web application but also responsive for mobile and it is place to post medium sized blog and showcase the blogs of you.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '/images/Projects/finance-tracker.png',
    source_code_link: 'https://github.com/fsdhemanth648/blogClone',
    live_url: 'https://blogclone-hemanthbabus.vercel.app/',
  },
  {
    date: '2022-09-01',
    name: 'Tic Tac Toe',
    description: 'Web application that enables users to play a simple GAME',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: '/images/Projects/finance-tracker.png',
    source_code_link: 'https://github.com/fsdhemanth648/',
    live_url: 'https://hemanthtic-tac-toe.netlify.app/',
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

export type Blog = {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  link: string;
  image: string;
  createdAt: string;
};

export const latestBlogs: Blog[] = [
  {
    id: '680b4275f512a2ca2c82ee1e',
    title: '🐙 How to Set Up Multiple GitHub Accounts on the Same Machine',
    description:
      'Managing multiple GitHub accounts (like personal and work) on the same machine can be tricky if not set up properly. This guide walks you through setting up separate SSH keys, configuring Git, and switching seamlessly between accounts.',
    category: 'TECH',
    subCategory: '',
    link: 'https://radiant-ways.blogspot.com/2025/04/how-to-set-up-multiple-github-accounts.html',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimKH5wY-9GS_NWuCFbntWj-cfBEhrQRKFwvNTuL5f6vgEL-Yq5LVDEhZXmzjkT-4nTl8CRwJUiTlORwwQ5RW_H0nYloTMMKoYYJg4uWuioLh0-nJB_sDWrp1ksTeMidksfU4illlSrwOJlUYUECA00aph-PWg4H55agYN1IRIJLcqw2Mo_r-7QTt_cBMs/w640-h426-rw/1_1PIaRDHg-TSUQK2UqaUGCQ.webp',
    createdAt: 'April 25, 2025',
  },
  {
    id: '680b4373f512a2ca2c82ee20',
    title: 'Frontend Developer Roadmap 2025: A Clear Path from Zero to Pro',
    description: 'Importance of front-end development in today’s web ecosystem.',
    category: 'TECH',
    subCategory: 'CAREER',
    link: 'https://radiant-ways.blogspot.com/2025/04/frontend-developer-roadmap-2025-clear.html',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW6KteRR4hHobV2OZ4c1Kbg1kTqRc9M98jM4_XKXrGvxi5tPD7wZnfgQD3ve30EEVEY5x3tApWRKTba1Nvu4moAHaG3g033gnq3cWzd7cBpi2BqRnJyLFNRJ6jjFV_kUnSECGCt8MAFrI89B_SftiZFgDGOSDrC-GjUwLv28ezxb7VWSmlJKrZn6xPAXc/w640-h360-rw/1_Kalw2Q-gkpyU2wcgq2ZoDA.png',
    createdAt: 'April 25, 2025',
  },
  {
    id: '680b4436f512a2ca2c82ee22',
    title: '🍋 Lemon Farming: A Complete Guide to Profitable Citrus Cultivation',
    description: 'Importance of front-end development in today’s web ecosystem.',
    category: 'AGRICULTURE',
    subCategory: '',
    link: 'https://radiant-ways.blogspot.com/2025/04/lemon-farming-complete-guide-to.html',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjecF3HSNk72V7O8Xwraz7KDyFU7h3U9YmoKuFWc9QP2r_o_JPxhZlAwybnC13CijpggI8fJ1wutYn1ulcp1UF3IHY24LAXPbMqcE5SoSHx-HGKjPpkhliUEPdAEBxkzOCOlYx4vuusqeWl6GmRlObAray9q3PdN92fBDhglnppn1ttlOxHizvVyD8BCPA/w640-h426-rw/istockphoto-1281291706-612x612.jpg',
    createdAt: 'April 25, 2025',
  },
  {
    id: '680b44b7f512a2ca2c82ee24',
    title: '⚡ VS Code Tips & Shortcuts to Boost Your Productivity (2025 Edition)',
    description:
      'Visual Studio Code (VS Code) is one of the most powerful code editors out there — not just because of what it can do, but how fast it lets you do it. Whether you’re a beginner or a seasoned developer, mastering shortcuts and hidden gems in VS Code can drastically boost your productivity.',
    category: 'PRODUCTIVITY',
    subCategory: '',
    link: 'https://radiant-ways.blogspot.com/2025/04/vs-code-tips-shortcuts-to-boost-your.html',
    image:
      'https://blogger.googleusercontent.com/img/a/AVvXsEiaTFbzs0femMLxKp4iuDgWP_7f3Paw1iQKAmsW07mBQikp3vFx5cq79Y4OJ_YwFvIh8XINMzTOezsjQcyMywH0Z7TPjlMNOJqBmWTkUH1cd3Pr7kYp3hADVdQbnR4TSfCw7tV0uNHRMatE5_A5KVMbJChAnMmvWJOyJSBvXi3oS0kK-sAVCHD6TL3g2AM=w640-h386-rw',
    createdAt: 'April 25, 2025',
  },
];
