import { Laptop2, PenLine, Search, Smartphone } from 'lucide-react';

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

export const socialIcons = [
  {
    title: 'Linked In',
    url: 'https://www.linkedin.com/in/hemanthbabu648/',
    network: 'linkedin',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/hemanthbabu648/',
    network: 'instagram',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/hemanthbabu648',
    network: 'twitter',
  },
  {
    title: 'Facebook',
    url: '',
    network: 'facebook',
  },
  {
    title: 'Telegram',
    url: 'https://t.me/s-hemanthbabu-648',
    network: 'telegram',
  },
];

// export const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//     value: 80
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//     value: 80
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//     value: 75
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//     value: 100
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//     value: 75
//   },
//   {
//     name: "Next JS",
//     icon: nextjs,
//     value: 75
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//     value: 75
//   },
//   {
//     name: "Bootstrap",
//     icon: bootstrap,
//     value: 100
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//     value: 80
//   },
//   {
//     name: "PHP",
//     icon: php,
//     value: 75
//   },
//   {
//     name: "My SQL",
//     icon: mysql,
//     value: 75
//   },
//   {
//     name: "git",
//     icon: git,
//     value: 75
//   },
//   {
//     name: "figma",
//     icon: figma,
//     value: 80
//   },
//   // {
//   //   name: "docker",
//   //   icon: docker,
//   //   value: 100
//   // },
// ];
