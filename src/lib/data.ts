import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sudokuIMG from "/public/sudokuIMG.png";
import ng from "/public/ng.png";
import cabinImg from "/public/cabinImg.png";
import admindash from "/public/admindash.png";
import gallery from "/public/gallery.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Graduated in Practical Electronics Engineering with a Computer Science specialization.",
    location: "Braude Collage of Engineering, Israel, Karmiel",
    description:
      "s part of the 'Atidim' plans program, I studied Practical Engineering before my military service. During this program, I gained knowledge in C programming, the fundamentals of computer science, I also acquired extensive knowledge in electronic circuits.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Integration Engineer ",
    location: "IDF Air Force, Israel",
    description:
      "I served as an integration engineer responsible for maintaining integration labs. I gained knowledge in various areas, including QA, IT, Cisco, CCNA, computer networking, and Linux environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2013-2016",
  },
  {
    title: "QA Engineer",
    location: "Qualitest-Elbit, Yokne`am, Israel",
    description:
      "I applied the knowledge I gained during my military service, where I conducted manual testing and planned testing environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2016",
  },
  {
    title: "Bachelor of Science in Physics (Major) and Philosophy.",
    location: "Ben Gurion University of the Negev, Be`er Sheva, Israel.",
    description:
      "I have chosen to broaden my horizons by pursuing studies in both physics and philosophy. These disciplines have equipped me with the ability to formulate thoughtful inquiries and critically evaluate problems from various perspectives. Throughout my academic journey, I have honed strong mathematical and analytical skills, and I have gained practical experience in using Python for data analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Software Development Journey",
    location: "Self-Taught",
    description:
      "After Graduating my Degree, I have started to expand my knowledge in python, building small physics engines and after that i moved to web dev content learning javascript, react, nextjs ",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Software Developmer ",
    location: "Omnitelecom, Ramat-Gan",
    description:
      "Software Developer within the Infrastructure team, possessing expertise in Linux servers, Perl, Bash, and Python programming scripting. Demonstrated proficiency in software architecture, web architecture, API handling, and telephony client management using Python and Asterisk. Experienced in web development with React and NextJS in conjunction with Django.",
    icon: React.createElement(FaReact),
    date: "2023-2024",
  },
] as const;

export const projectData = [
  {
    src: ng,
    description:
      "A Game App featuring animations, server actions, unique design and state managment. i keep on adding games i keep on implement.",
    title: "Sudoko App",
    category: "React, NextJS, Jotai, Tailwind",
    link: "https://natan-game-app.vercel.app/",
    gitLink: "https://github.com/NatanOih/natan-game-app",
  },
  {
    src: cabinImg,
    description:
      "A frontend project for a landing page concept of a cabin hosting site. I used this project to experiment different styling and animation metheods. ",
    title: "Cabin Hosting",
    category: "React, Styled Components, Framer Motion, Locomotive Scroll",
    link: "https://cabin-boarding-natan-oihman.vercel.app/",
    gitLink: "https://github.com/NatanOih/Cabin-Boarding-natan-oihman",
  },
  // {
  //   src: admindash,
  //   description:
  //     "A Mock NextJS/React dashboard site with a basic password auth, mongoDB database connection using react server components. you can add and remove users and products, with pagenation and url state handling ",
  //   title: "Admin Dashboard",
  //   category: "React, NextJS, Next-auth, MongoDB, Server Components + Actions ",
  //   link: "https://admin-dashboard-alpha-drab.vercel.app/",
  //   gitLink: "https://github.com/NatanOih/admin-dashboard",
  // },
  {
    title: "Gallery Web App",
    src: gallery,
    description:
      "Gallery web app, you can upload anything and delete your own uploads. auth with Clerk, parallel routes (you can copy the url of an image and it will open in its own page) ",
    category:
      "React, NextJS, PostgreSQL, Drizzle, Server actions and server components",
    link: "https://natan-gallery.vercel.app/",
    gitLink: "https://github.com/NatanOih/natan-gallery",
  },
] as any;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const frontEndImg = [
  { name: "HTML/CSS", path: "coding.png" },
  { name: "JavaScript", path: "js.png" },
  { name: "TypeScript", path: "ts.png" },
  { name: "React", path: "react.png" },
  { name: "Redux", path: "redux-icon.png" },
  { name: "TailwindCSS", path: "tailwind-css-icon.png" },
  { name: "htmx", path: "htmx.png" },
  { name: "matirialui", path: "matirialui.png" },
  { name: "ShadcnUI", path: "shadcn.png" },
  { name: "gsap", path: "gsap.png" },
  { name: "motion", path: "motion.png" },
] as const;

export const backEndImg = [
  { name: "NodeJS", path: "node.png" },
  { name: "ExpressJs", path: "expressjs.png" },
  { name: "Nextjs", path: "Nextjs-logo.png" },
  { name: "API", path: "api-icon.png" },
  { name: "Mongodb", path: "mongo.png" },
  { name: "SQL", path: "sql.png" },
  { name: "npm", path: "npm.png" },
  { name: "git", path: "git.png" },
  { name: "Golang", path: "go.png" },
  { name: "Python", path: "python.png" },
] as const;

export const experitesFields = [
  { title: "Frontend_Development", whatToShow: frontEndImg },
  { title: "Backend_Development", whatToShow: backEndImg },
] as const;
