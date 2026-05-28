import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tonicoSmileImg from "@/public/tonicosmile.jpeg";
import retailTenantImg from "@/public/retailtenant.jpg";
import notificationToolImg from "@/public/NOT.jpeg";
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
    name: "Case studies",
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
      "Architecting high-performance Next.js applications using SSR, SSG, and ISR. Leading frontend development of scalable React apps with Redux and Zustand. Mentoring junior developers — improved team delivery speed by 20%.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 – Present",
  },
  {
    title: "Senior Software Engineer",
    location: "Cubet",
    description:
      "Delivered enterprise software solutions. Built a comprehensive reusable React component library, reducing time-to-market by 30%. Optimized bundle sizes by 25% through Webpack tuning.",
    icon: React.createElement(FaReact),
    date: "Jun 2024 – Aug 2024",
  },
  {
    title: "Frontend Web Developer",
    location: "GSCO Technology Services (CMA CGM)",
    description:
      "Built enterprise React applications for the CMA CGM division. Delivered complex projects 25% ahead of schedule. Storage Guarantee system contributed to $16M+ profit increase.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 – May 2024",
  },
  {
    title: "Full Stack Web Developer",
    location: "AlignMinds Technologies",
    description:
      "Built custom full-stack solutions increasing client satisfaction by 30%. Worked across React, Node.js, and various API integrations for diverse client projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019 – Feb 2022",
  },
  {
    title: "BTech — Computer Science & Engineering",
    location: "APJ Abdul Kalam Technological University",
    description:
      "Graduated from Viswajyothi College of Engineering and Technology. Specialized in computer science fundamentals and began building web applications during final year.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 – 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Enterprise Retail Platform",
    description:
      "Built a hybrid SSR + SSG + ISR Next.js platform with SEO-first public pages and secure personalized dashboards. Improved Lighthouse from 72 to 95 and cut bundle size by 25%.",
    tags: [
      "Next.js",
      "TypeScript",
      "SSR/SSG/ISR",
      "Redux Toolkit",
      "ForgeRock",
      "Optimizely",
      "SCSS",
    ],
    imageUrl: retailTenantImg,
    caseStudyUrl: "/case-studies/retail-web-application",
  },
  {
    title: "Cargo Readiness Notification — CMA CGM",
    description:
      "Replaced a manual booking process with an internal React tool. Built custom autocomplete filters, a rich-text email template editor, milestone tracking with activity chips, and role-based user management. Reduced communication errors by 20% and improved internal operational efficiency.",
    tags: ["React", "Material UI", "Redux", "Rich Text Editor", "Role Management"],
    imageUrl: notificationToolImg,
    caseStudyUrl: "/case-studies/import-cargo-release",
  },
  {
    title: "Storage Guarantee System — CMA CGM",
    description:
      "Replaced error-prone spreadsheets with a unified React application for rail and port operations. Built reusable requester components, multi-step request flows, automatic storage cost calculation, and a container movement matrix. Contributed to a $16M+ increase in operational profit.",
    tags: ["React", "Material UI", "Redux", "React Hook Form", "Data Grid"],
    imageUrl: sgImg,
    caseStudyUrl: "/case-studies/storage-cost-management",
  },
  {
    title: "TONICO SMILES — E-commerce",
    description:
      "Built a consumer e-commerce platform with React and Firebase featuring product listings, cart management, Firebase authentication, and Razorpay payment integration. Achieved 40% increase in customer retention and 25% rise in average order value through UX improvements.",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase Auth", "Razorpay"],
    imageUrl: tonicoSmileImg,
    caseStudyUrl: "/case-studies/tonico-smiles",
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "SSR / SSG / ISR",
  "Performance Optimization",
  "Core Web Vitals",
  "Material UI",
  "Framer Motion",
  "Jest",
  "Figma",
] as const;
