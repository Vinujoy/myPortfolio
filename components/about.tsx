"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Senior <span className="font-bold">Frontend Developer</span> with over 6
        years of experience building high-performance, scalable, and
        SEO-optimized web applications. I specialize in{" "}
        <span className="font-bold">React.js</span> and{" "}
        <span className="font-bold">Next.js</span>, with strong expertise in{" "}
        <span className="font-bold">
          TypeScript, Redux Toolkit, Zustand, Tailwind CSS, MUI
        </span>
        , and responsive UI design. I have a proven track record of delivering
        projects ahead of schedule, improving performance scores by over 30%,
        and creating reusable component architectures that accelerate
        development.
      </p>
      <p>
        I thrive on <span className="font-medium">solving complex problems</span>
        {" "}
        and optimizing web experiences, from Core Web Vitals to bundle size
        reduction and SSR/SSG/ISR strategies. Passionate about continuous
        learning, I’m exploring <span className="font-bold">Gatsby</span> and
        enhancing my design skills through{" "}
        <span className="font-bold">Figma</span>.
      </p>

      <p>
        <span className="font-medium">Outside of coding</span>, I enjoy traveling
        and run a travel vlog channel, which fuels my creativity and curiosity.
        I am looking for challenging <span className="font-medium">frontend</span>
        {" "}
        opportunities where I can leverage my skills to build impactful,
        high-quality web applications.
      </p>
    </motion.section>
  );
}
