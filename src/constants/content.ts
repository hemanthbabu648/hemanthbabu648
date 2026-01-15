import { PROFILE } from './common';

export const HERO_SECTION = {
  name: PROFILE.name,
  role: PROFILE.role,
  yearsOfExperience: PROFILE.yearsOfExperience,
  description: [
    'I build sleek, responsive user interfaces and dynamic web apps, along with high-quality mobile applications — backed by',
    'of front-end expertise.',
  ],
  resumeUrl: PROFILE.resumeUrl,
  currentCompany: PROFILE.currentCompany,
};

export const QOUTE = {
  text: 'Code is like humor. When you have to explain it, it’s bad.',
  author: 'Cory House',
};

interface Skill {
  category: string;
  items: string[];
}

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frameworks',
    items: ['React JS', 'Next.js', 'React Native', 'Redux Toolkit', 'TanStack Query'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Ant Design', 'Mantine UI', 'Material UI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'npm', 'Yarn', 'Vercel', 'Jest'],
  },
  {
    category: 'Platforms',
    items: ['Linux', 'Windows', 'macOS'],
  },
];
