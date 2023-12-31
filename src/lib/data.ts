import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sudokuIMG from "/public/sudokuIMG.png";
import cabinImg from "/public/cabinImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
      "After Graduating my Degree, I have started to expand my knowledge in python, building small ",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Software Developmer ",
    location: "Omnitelecom, Ramat-Gan",
    description: "Software Developmer withing the infrastracture team ",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectData = [
  {
    src: sudokuIMG,
    description:
      "A sudoku App featuring animations, server actions, unique design and state managment.",
    title: "Sudoko App",
    category: "React, NextJS, Jotai, Tailwind",
    link: "https://suduko-next-js.vercel.app/",
    gitLink: "https://github.com/NatanOih/suduko-nextJS",
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
  { name: "Bootstrap", path: "bootstrap.png" },
  { name: "matirialui", path: "matirialui.png" },
  { name: "styled-components", path: "styled-components.png" },
  { name: "gsap", path: "gsap.png" },
  { name: "motion", path: "motion.png" },
] as const;

export const backEndImg = [
  { name: "nodeJS", path: "node.png" },
  { name: "expressJs", path: "expressjs.png" },
  { name: "Nextjs", path: "Nextjs-logo.png" },
  { name: "API", path: "api-icon.png" },
  { name: "mongodb", path: "mongo.png" },
  { name: "SQL", path: "sql.png" },
  { name: "npm", path: "npm.png" },
  { name: "git", path: "git.png" },
  { name: "python", path: "python.png" },
] as const;

export const experitesFields = [
  { title: "Frontend_Development", whatToShow: frontEndImg },
  { title: "Backend_Development", whatToShow: backEndImg },
] as const;
