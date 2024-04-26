import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tonicoSmileImg from "@/public/tonicosmile.jpeg";
import notificationToolImg from "@/public/NOT.jpeg";
import importCargoReleaseImg from "@/public/importcargo.jpeg";
import sgImg from "@/public/SG.jpeg";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    title: "Btech in Computer Science and engineering",
    location: "A.P.J Abdul Kalam Technological University",
    description:
      "I graduated from Viswajyothi College of Engineering and Technology in 2019. Immediately after graduation, I secured a job as a front-end developer",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Full Stack web developer ",
    location: "AlignMinds Technologies",
    description:
      "Designed and implemented custom software solutions aligned with client needs, resulting in a 30% increase in client satisfaction. Consistently delivered projects 25% ahead of deadlines.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Frontend Web Developer",
    location: "GSCO Technology Services | CMA CGM division",
    description:
      "Implemented software solutions for CMA CGM division, achieving a 20% increase in efficiency and 15% reduction in processing time. Developed a reusable React component library, optimizing development processes and reducing time-to-market by 30%.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TONICO SMILES",
    description:
      "Offers handpicked, fresh products with local delivery, leading to a 40% increase in customer retention and a 25% rise in average order value.",
    tags: ["React", "Tailwind CSS ","Redux", "Firebase Auth"],
    imageUrl: tonicoSmileImg,
  },
  {
    title: "READINESS NOTIFICATION",
    description:
      "Managed booking by integrating custom mail templates for users, resulting in a 20% improvement in communication and a 15% decrease in user error rates.",
    tags: ["React", "Material-UI", "Redux"],
    imageUrl: notificationToolImg,
  },
  {
    title: "Import Cargo Release",
    description:
      "Automates rail pickup number extraction, validates finance releases, and sends email notifications.",
    tags: ["React", "Material-UI", "Redux","React Hook Form","Data Grid "],
    imageUrl: importCargoReleaseImg,
  },
  {
    title: "Storage Guarantee",
    description:
      "Streamlines Storage Guarantee requests at multiple terminals, improving processing speed by 20% and reducing approval time by 15%.",
    tags:  ["React", "Material-UI", "Redux","React Hook Form","Data Grid "],
    imageUrl: sgImg,
  },
] as const;

export const skillsData = [
 
"React.js", "Next.js", "Hooks", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "RESTful API Integration", "Redux ToolKit", "Material-UI", "Tailwind CSS", "Bootstrap", "React Hook Form", "React Storybook", "Data Grid", "JIRA", "Figma", "Postman", "Git"
] as const;
