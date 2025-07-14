import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type ContactInfo = {
  type: 'Email' | 'Phone';
  value: string;
  icon: LucideIcon;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  imageHint: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

type PersonalData = {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  socials: SocialLink[];
  contacts: ContactInfo[];
  projects: Project[];
  experience: Experience[];
};

export const personalData: PersonalData = {
  name: 'Shakthivel S',
  title: 'Software Engineer',
  bio: 'A passionate software engineer specializing in creating robust and scalable applications. Experienced in both mobile and web development, with a knack for turning complex problems into elegant solutions.',
  skills: [
    'Flutter',
    'Dart',
    'Node.js',
    'Express.js',
    'MySQL',
    'Firebase',
    'Firestore',
    'Firebase Authentication',
    'Cloud Functions',
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/shakthivel2002', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shakthivel-s-6761b6210', icon: Linkedin },
  ],
  contacts: [
    { type: 'Email', value: 'shakthivelswami@gmail.com', icon: Mail },
    { type: 'Phone', value: '+91 63800 51766', icon: Smartphone },
  ],
  projects: [
    {
      title: 'Construction Management App',
      description: 'A comprehensive mobile application built with Flutter to streamline construction project management. Features include task tracking, resource allocation, and real-time progress monitoring.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
      link: '#',
      image: 'https://placehold.co/600x400.png',
      imageHint: 'construction blueprint',
    },
    {
      title: 'ERP App for IAS Academy',
      description: 'An Enterprise Resource Planning (ERP) system for an IAS academy to manage student records, course schedules, and administrative tasks. Developed using Node.js and Express.js with a MySQL database.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'React'],
      link: '#',
      image: 'https://placehold.co/600x400.png',
      imageHint: 'education academy',
    },
  ],
  experience: [
    {
      role: 'Junior Software Engineer',
      company: 'Bharat Clouds Private Limited',
      period: '2024 - Present',
      description: 'Led the development of cross-platform mobile applications using Flutter. Collaborated with product managers and designers to deliver high-quality software solutions. Mentored junior developers.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'RansoftWorks Technologies',
      period: '2023 - 2023',
      description: 'Developed and maintained backend services using Node.js and Express.js. Worked with MySQL and Firebase for data storage and management. Contributed to several web applications.',
    },
  ],
};
