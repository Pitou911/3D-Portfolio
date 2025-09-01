import { s } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  davy,
  threejs,
  godzie,
  frontendsimplified,
  lofiplayer,
  booklibrary,
  travelr,
  survivor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "GODZIE Sport Tech",
    icon: godzie,
    iconBg: "#383E56",
    date: "May 2023 - Sep 2023",
    points: [
      "Collaborated with a cross-functional team to design and develop a user-friendly frontend web application using Dart Flutter.",
      "Implement Widget testing to validate the behavior and responsiveness of various application components, resulting in improved UI/UX and a more seamless user journey.",
      "Engaged in pair programming sessions, collaborating with fellow developers to brainstorm solutions, share insights, and collectively create high-quality code that met the project requirements",
      "Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews, load/stress testing, unit/integration/e2e testing.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Frontend Simplified",
    icon: frontendsimplified,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface using animations, transitions and carousels.",
      "Processed API requests with Axios to dynamically represent data from a cloud server and represented it through skeletons loading, states, pagination and dynamic routing.",
      "Utilized Git version control and the GitHub interface to work and thrive in a virtual and collaborative team environment.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Davy Computer",
    icon: davy,
    iconBg: "#383E56",
    date: "Dec 2021 - Fed 2022",
    points: [
      "Worked independently to design a website for Davy Computer.",
      "Overwrote the template in Squarespace and improved search engine to the website using JavaScript ES6 (jQuery), CSS3 and HTML5.",
      "Optimized the website for mobile devices and implemented SEO best practices to improve search engine rankings.",
      "Maintained and updated the website as needed to ensure it remained current and functional.",
    ],
  },
];

const projects = [
  {
    name: "The Lofi Player Project",
    description:
      "Everyone needs music in their daily life, which is why I present you the lofi player. This website contain all type of lofi such Lofi Girl, Gaming Lofi, AnimeVibe lofi, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: lofiplayer,
    source_code_link: "https://github.com/Pitou911/lofi-player",
    showcase_link: "https://lofi-player-beryl.vercel.app/",
  },
  {
    name: "Book Library",
    description:
      "React E-commerce app that displays data about popular and recommended books. Has the abililty to filter books and add them to cart for purchase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: booklibrary,
    source_code_link: "https://github.com/Pitou911/library_react.git",
    showcase_link: "https://book-library-snowy.vercel.app/",
  },
  {
    name: "Travelr",
    description:
      "Cambodia boasts a vibrant culture, art scene, and a crucial tourism sector. Visit our website for valuable assistance in turning your travel dreams into reality and overcoming potential hurdles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travelr,
    source_code_link: "https://github.com/Pitou911/travelr",
    showcase_link: "https://cs260-travelr.netlify.app/",
  },
  {
    name: "Survivor Game",
    description:
      "Survivor Hero: 2D tilemap game expertly developed in C# and Unity. Specializing in immersive level design with Tilemap and Tile Rule systems. Ready to enhance the Survivor Hero experience with technical expertise.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "tilemap",
        color: "pink-text-gradient",
      },
    ],
    image: survivor,
    source_code_link: "https://github.com/Pitou911/Survivor-Hero",
    showcase_link: "https://www.youtube.com/watch?v=AEFkUZJFggA",
  },
];

export { services, technologies, experiences, projects };