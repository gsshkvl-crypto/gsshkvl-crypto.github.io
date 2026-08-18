import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import profile from '../assets/shakthivel_image.jpg';

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
  bio: 'A passionate software engineer specializing in creating robust and scalable applications. Experienced in both mobile and web development, with a knack for turning complex problems into elegant solutions. Aspiring to become a full-cycle project owner, managing end-to-end delivery—from requirement analysis and UI/UX design to backend, frontend development, testing, deployment, and hosting—with a deep understanding of the complete product lifecycle.',
  skills: [
    // Programming & Frameworks
    'Flutter',
    'Dart',
    'Node.js',
    'Express.js',
    'MySQL',
    'Firebase',
    'Firestore',
    'Firebase Authentication',
    'Firebase Cloud Messaging (FCM)',
    'Cloud Functions',
    'REST API',
    'WebSocket',
    'Android (Java/XML)',
    
    // Tools & DevOps
    'Git',
    'GitHub',
    'Firebase Console',
    'Google Cloud Functions',
    
    // Workflow & Collaboration
    'Agile Scrum',
    'Jira',
    'API Documentation'
  ],  
  socials: [
    { name: 'GitHub', url: 'https://github.com/shakthivel2002', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shakthivel-s-6761b6210', icon: Linkedin },
  ],
  contacts: [
    { type: 'Email', value: 'shakthivelpkt@gmail.com', icon: Mail },
    { type: 'Phone', value: '+91 63800 51766', icon: Smartphone },
  ],
  projects: [
    {
      title: 'Construction Management App',
      description: 'A full-stack web and mobile application developed to streamline construction project tracking, resource allocation, and team coordination. Led frontend development using Flutter and Dart with a focus on performance and UI consistency. Built and integrated backend services using Node.js, Firebase Cloud Functions, and Firestore. Also contributed to database and API integrations, and implemented key features under the guidance of senior developers.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Functions', 'Firebase Authentication', 'Node.js', 'Express.js'],
      link: '#',
      image: 'https://placehold.co/600x400.png',
      imageHint: 'construction blueprint',
    },
    {
      title: 'ERP App for IAS Academy',
      description: 'A mobile/tablet ERP solution developed for an IAS academy to manage student records, course schedules, and administrative workflows. Solely built using Flutter (Dart) for the frontend and Node.js with MySQL for the backend, replicating an existing live web app. Integrated REST APIs, WebSocket for real-time data sync, and Firebase Cloud Messaging (FCM) for push notifications. The app is currently under internal testing.',
      technologies: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'WebSocket', 'Firebase Cloud Messaging', 'Mobile Application'],
      link: '#',
      image: 'https://placehold.co/600x400.png',
      imageHint: 'education academy',
    },   
    {
      title: 'School Management App',
      description: 'A comprehensive mobile app designed for school administrators, staff, students, and parents to manage daily operations and communication. Initially developed using native Android (Java/XML), the app was deployed and maintained solely by me on the Play Store. Regularly implementing new features and updates, handling bug fixes, and delivering production releases independently.',
      technologies: ['Android', 'Java', 'XML', 'REST API', 'Mobile Application', 'Play Store Deployment'],
      link: '#',
      image: 'https://placehold.co/600x400.png',
      imageHint: 'school management system',
    }    
  ],
  experience: [
    {
      role: 'Junior Software Engineer',
      company: 'Bharat Clouds Private Limited',
      period: '2024 - Present',
      description: "Developed mobile applications for Android & iOS using Flutter with GetX state management. Integrated Firebase Cloud Messaging (FCM) for push notifications in Flutter and Android (Java/XML). Working on an existing native Android project to fix bugs, implement features, and deploy on the Play Store. Implemented WebSocket and FCM in the ERP student app for real-time updates and notifications. Built and maintained Node.js + Express.js backend services with MySQL. Collaborated with design/product teams, followed Agile Scrum via Jira, and documented technical workflows. Contributed reusable UI components and improvements to internal codebase; transitioned from Graduate Trainee to full-stack mobile and backend development role.",
    },
    {
      role: 'Software Engineer Intern',
      company: 'RansoftWorks Technologies',
      period: '2023 - 2023',
      description: "Contributed to the development of a CRM product for the shipping industry, enhancing customer engagement. Assisted in building cross-platform mobile apps using Flutter and Dart, focusing on high performance and UI consistency. Contributed to backend systems with Node.js and supported database and API integrations. Developed key features and optimized performance under senior developers’ guidance."
    },
  ],
};
