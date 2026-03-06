import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tonicoSmileImg from "@/public/tonicosmile.jpeg";
import retailTenantImg from "@/public/retailtenant.jpg";
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
    title: "Senior Software Engineer",
    location: "Dbiz.ai",
    description:
      "Architecting high-performance Next.js applications using SSR, SSG, and ISR strategies. Focused on Core Web Vitals optimization, scalable reusable component architecture, and SEO-driven enterprise retail platforms.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Cubet",
    description:
      "Developed scalable React applications with Redux Toolkit and Zustand for complex state management. Implemented frontend best practices and improved development efficiency across the team.",
    icon: React.createElement(FaReact),
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "Frontend Web Developer",
    location: "GSCO Technology Services (CMA CGM Division)",
    description:
      "Built enterprise-grade React applications and created reusable component libraries that reduced development time by 30% and improved operational efficiency by 20%.",
    icon: React.createElement(FaReact),
    date: "2022 - May 2024",
  },
  {
    title: "Full Stack Web Developer",
    location: "AlignMinds Technologies",
    description:
      "Delivered custom web solutions aligned with client requirements, increasing client satisfaction by 30% while consistently delivering projects ahead of schedule.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "BTech in Computer Science and Engineering",
    location: "A.P.J Abdul Kalam Technological University",
    description:
      "Graduated from Viswajyothi College of Engineering and Technology and started my career as a frontend developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Retail Tenant WebApp",
    description:
      "Built an SEO-optimized analytics dashboard for retail tenants using Next.js (SSR) with reusable components, Redux Toolkit, and MUI for a scalable and responsive UI.",
    tags: ["Next.js","Redux Toolkit","SSR"],
    imageUrl: retailTenantImg,
  },
  {
    title: "TONICO SMILES",
    description:
      "Offers handpicked, fresh products with local delivery, leading to a 40% increase in customer retention and a 25% rise in average order value.",
    tags: ["React", "Tailwind CSS ", "Redux", "Firebase Auth"],
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
    tags: ["React", "Material-UI", "Redux", "React Hook Form", "Data Grid "],
    imageUrl: importCargoReleaseImg,
  },
  {
    title: "Storage Guarantee",
    description:
      "Streamlines Storage Guarantee requests at multiple terminals, improving processing speed by 20% and reducing approval time by 15%.",
    tags: ["React", "Material-UI", "Redux", "React Hook Form", "Data Grid "],
    imageUrl: sgImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "React Hooks",
  "HTML5",
  "CSS3",
  "SCSS",
  "Responsive Design",

  "Redux Toolkit",
  "Zustand",
  "REST API Integration",

  "Material UI (MUI)",
  "Tailwind CSS",
  "Bootstrap",
  "Storybook",
  "React Hook Form",

  "SSR / SSG / ISR",
  "SEO Optimization",
  "Performance Optimization",
  "Core Web Vitals",
  "Code Splitting",

  "Webpack",
  "Git",
  "Jest",
  "Postman",
  "JIRA",
  "Figma",

  "CI/CD",
  "Azure",
  "Firebase",
  "Razorpay"
] as const;