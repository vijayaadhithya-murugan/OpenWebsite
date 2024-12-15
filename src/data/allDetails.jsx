import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiElasticsearch } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import { FaLinux } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";

export const contactDetails = {
  address: '2/2310 Y Graghathaiammal Nagar',
  city: 'Sivakasi',
  pincode: '626-123',
  mobile: '+91-9487476052',
  gmail: 'm.vijayaadhithya@gmail.com',
  linkedIn: 'https://linkedin.com/in/vijay-aadhithya',
  github: 'https://github.com/vijayaadhithya-murugan',
  twitter: 'https://twitter.com/aadhithya_vijay'
};

export const educationDetails = [
  {
    course: 'SSLC',
    institution: 'S.H.N.V.Higher Secondary School Sivakasi',
    grade: '92%',
    year: 'April 2017'
  },
  {
    course: 'HSC',
    institution: 'S.H.N.V.Higher Secondary School Sivakasi',
    grade: '79.6%',
    year: 'March 2019'
  },
  {
    course: 'B.E. Computer Science and Engineering',
    institution: 'Ramco Institute of Technology Rajapalayam',
    grade: '8.6 CGPA',
    year: 'May 2023'
  }
];

export const workExperience = [
  {
    company: 'Ramco Systems Limited',
    role: 'Project Trainee',
    'work-period': 'February 2023 - August 2023',
    duration: '7 months'
  },
  {
    company: 'Ramco Systems Limited',
    role: 'Analyst Programmer',
    'work-period': 'August 2023 - Present',
    duration: '1 year'
  }
];

export const skillSet = [
  {
    skill: 'React js',
    level: 'Advanced',
    icon: <FaReact />
  },
  {
    skill: 'MongoDB',
    level: 'Advanced',
    icon: <DiMongodb />
  },
  {
    skill: 'Python',
    level: 'Advanced',
    icon: <FaPython />
  },
  {
    skill: 'Node js',
    level: 'Advanced',
    icon: <FaNodeJs />
  },
  {
    skill: 'Elastic',
    level: 'Beginner',
    icon: <SiElasticsearch />
  },
  {
    skill: 'Python-Playwright',
    level: 'Beginner',
    icon: <TbBrandPython />
  },
  {
    skill: 'WSL',
    level: 'Beginner',
    icon: <FaLinux />
  },
  {
    skill: 'Docker',
    level: 'Beginner',
    icon: <FaDocker />
  }
];

export const personal = [
  {
    project: 'RTask',
    technology: 'MERN Stack',
    url: ''
  },
  {
    project: 'Video Chat App',
    technology: 'Node js',
    url: ''
  },
  {
    project: 'Black Jack Game',
    technology: 'Java AWT',
    url: ''
  },
  {
    project: 'Raise',
    technology: 'Python Playwright',
    url: ''
  }
];
