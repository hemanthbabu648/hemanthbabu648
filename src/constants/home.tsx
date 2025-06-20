// TODO: Have to find package for icons that have brands or generate svgs for social icons
import {
  Laptop2,
  PenLine,
  Search,
  Smartphone,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Send,
} from 'lucide-react';

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
    title: 'Researcher',
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
    icon: Linkedin,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/hemanthbabu648/',
    icon: Instagram,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/hemanthbabu648',
    icon: Twitter,
  },
  {
    title: 'Facebook',
    url: 'https://twitter.com/hemanthbabu648',
    icon: Facebook,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/s-hemanthbabu-648',
    icon: Send,
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
