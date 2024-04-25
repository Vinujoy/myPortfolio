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
        After graduating with a degree in{" "}
        <span className="font-bold">
          Btech in Computer Science and engineering
        </span>
        , I decided to pursue my passion for programming. I started my career as
        a backend developer and was always fascinated with frontend development
        so i learned <span className="font-medium">front-end development</span>.{" "}
        <span>My favorite part of programming</span> is the problem-solving
        aspect. I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <span className="font-bold">React and Next.js</span>. I am also familiar
        with TypeScript, Tailwind, and Figma. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        Developer
      </p>

      <p>
        <span className="font-medium">When I'm not coding</span>, I enjoy
        traveling, for that, I have a travel vlog channel. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-bold">Server-Side Rendering (SSR)</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
