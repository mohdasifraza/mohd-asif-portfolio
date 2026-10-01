import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/foodiland.jpg';
import projectImg3 from '../assets/crudimg.jpg';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
 {
  title: "E-Commerce Platform",
  description:
    "A full-stack e-commerce platform with product management, user authentication, shopping cart, order management, and secure REST APIs.",
  image: projectImg1,
  tech: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs",
    "Postman"
  ],
  icons: [
    FaReact,
    FaNodeJs,
    FaDatabase
  ],
  demo: "#",
  code: "#",
},
  // {
  //   title: "Task Management App",
  //   description: "A productivity application with drag-and-drop functionality and real-time updates.",
  //   image: projectImg2,
  //   tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
  //   icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },

 {
  title: "Foodi Land",
  description:
    "A responsive food website designed with a modern layout to showcase food items and provide a clean, attractive, and user-friendly browsing experience.",
  image: projectImg2,
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
  ],
  icons: [FaCode],
  demo: "https://mohdasifraza.github.io/FoodRecipe/",
  code: "https://github.com/mohdasifraza/FoodRecipe",
},
  // {
  //   title: "Fitness Tracker",
  //   description: "A mobile app for tracking workouts, nutrition, and health metrics.",
  //   image: projectImg3,
  //   tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
{
  title: "MERN CRUD Application",
  description:
    "A full-stack CRUD application built with the MERN stack for creating, viewing, updating, and deleting records through RESTful APIs with a responsive interface.",
  image: projectImg3,
  tech: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "REST APIs",
    "JavaScript"
  ],
  icons: [
    FaReact,
    FaNodeJs,
    FaDatabase
  ],
  demo: "#",
  code: "https://github.com/mohdasifraza/CRUD_PROJECT",
},
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
  
];


// export const workData = [
//   {
//     role: "Senior Frontend Developer",
//     company: "TechCorp Inc.",
//     duration: "2020 - Present",
//     description:
//       "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
//     color: "purple"
//   },
//   {
//     role: "Web Developer",
//     company: "Digital Solutions LLC",
//     duration: "2018 - 2020",
//     description:
//       "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
//     color: "pink"
//   },
//   {
//     role: "Junior Developer",
//     company: "StartUp Ventures",
//     duration: "2016 - 2018",
//     description:
//       "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
//     color: "blue"
//   }
// ];

export const workData = [
  {
    role: "MERN Stack Developer",
    company: "Sipher Web Pvt. Ltd., Lucknow",
    duration: "6 Months",
    description:
      "Developed responsive and user-friendly web applications using React.js and Tailwind CSS. Built and integrated REST APIs using Node.js and Express.js, managed data with MongoDB, implemented CRUD operations, tested APIs using Postman, and used Git and GitHub for version control and project collaboration.",
    color: "purple"
  }
];