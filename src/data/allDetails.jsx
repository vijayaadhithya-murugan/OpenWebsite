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
    id: 1,
    company: 'Ramco Systems Limited',
    role: 'Project Trainee',
    startDate: '2023-02',
    endDate: '2023-08',
    duration: '7 months',
    type: 'Internship',
    location: 'Chennai, India',
    responsibilities: [
      'Developed web applications using React.js and Node.js',
      'Collaborated with senior developers on enterprise projects',
      'Gained hands-on experience with MongoDB and Elasticsearch',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'Git'],
    achievements: [
      'Successfully completed 3 major project modules',
      'Reduced application load time by 20% through optimization'
    ]
  },
  {
    id: 2,
    company: 'Ramco Systems Limited',
    role: 'Analyst Programmer',
    startDate: '2023-08',
    endDate: null, // null indicates current position
    duration: '1+ years',
    type: 'Full-time',
    location: 'Chennai, India',
    responsibilities: [
      'Design and develop scalable web applications using MERN stack',
      'Implement automated testing using Python Playwright',
      'Work with Elasticsearch for data indexing and search functionality',
      'Mentor junior developers and conduct technical interviews',
      'Collaborate with cross-functional teams for product development'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Elasticsearch', 'Docker', 'WSL'],
    achievements: [
      'Led development of 5+ enterprise applications',
      'Improved system performance by 35% through code optimization',
      'Implemented CI/CD pipeline reducing deployment time by 50%',
      'Mentored 3 new team members successfully'
    ]
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
    id: 1,
    project: 'RTask',
    description: 'A comprehensive task management application built with the MERN stack. Features include user authentication, real-time updates, task categorization, and collaborative workspaces.',
    technology: 'MERN Stack',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    features: [
      'User authentication and authorization',
      'Real-time task updates using Socket.io',
      'Drag and drop task management',
      'Team collaboration features',
      'Responsive design for all devices'
    ],
    status: 'Completed',
    github: 'https://github.com/vijayaadhithya-murugan/rtask',
    demo: '',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    project: 'Video Chat App',
    description: 'A real-time video conferencing application built with Node.js and WebRTC. Supports multiple participants, screen sharing, and chat functionality.',
    technology: 'Node.js + WebRTC',
    technologies: ['Node.js', 'WebRTC', 'Socket.io', 'Express.js', 'HTML5', 'CSS3'],
    features: [
      'Real-time video and audio communication',
      'Screen sharing capabilities',
      'Text chat during video calls',
      'Room-based video conferences',
      'Mobile-responsive interface'
    ],
    status: 'Completed',
    github: 'https://github.com/vijayaadhithya-murugan/video-chat',
    demo: '',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    project: 'Black Jack Game',
    description: 'A classic BlackJack card game implementation using Java AWT. Features an intuitive GUI, game logic implementation, and score tracking system.',
    technology: 'Java AWT',
    technologies: ['Java', 'AWT', 'Swing', 'Object-Oriented Programming'],
    features: [
      'Interactive graphical user interface',
      'Complete BlackJack game logic',
      'Score tracking and statistics',
      'Card dealing animations',
      'Multiple difficulty levels'
    ],
    status: 'Completed',
    github: 'https://github.com/vijayaadhithya-murugan/blackjack-game',
    demo: '',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    project: 'Raise',
    description: 'An automated testing framework built with Python Playwright for web application testing. Includes custom reporting, cross-browser testing, and CI/CD integration.',
    technology: 'Python Playwright',
    technologies: ['Python', 'Playwright', 'pytest', 'HTML Reports', 'GitHub Actions'],
    features: [
      'Cross-browser automated testing',
      'Custom HTML test reports',
      'Page Object Model implementation',
      'CI/CD pipeline integration',
      'Parallel test execution'
    ],
    status: 'In Progress',
    github: 'https://github.com/vijayaadhithya-murugan/raise',
    demo: '',
    image: '/api/placeholder/400/250'
  }
];
