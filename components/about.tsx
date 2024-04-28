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
          B.Tech in Computer Science and Engineering,
        </span>{" "}
        I embarked on a journey to pursue my passion for programming. Beginning
        my career as a backend developer, I soon found myself drawn to{" "}
        <span className="font-medium">front-end development,</span> which led me
        to acquire expertise in this domain.
      </p>
      <p>
        <span>My favorite aspect of programming </span> is the problem-solving
        process. There's a sense of fulfillment when I finally crack a
        challenging problem. My core stack includes{" "}
        <span className="font-bold">React </span>and I'm proficient in{" "}
        <span className="font-bold">
          Next.js, TypeScript, Tailwind, and Figma.
        </span>{" "}
        I have a penchant for learning new technologies and am always eager to
        expand my skill set. I am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        Developer where I can leverage my skills and contribute effectively to
        projects.
      </p>

      <p>
        <span className="font-medium">Outside of coding</span>, I have a keen
        interest in traveling, which has inspired me to maintain a travel vlog
        channel. I also enjoy{" "}
        <span className="font-medium">acquiring new skills </span> and am
        currently engrossed in learning about{" "}
        <span className="font-bold">Gatsby </span>and
        mastering the guitar.
      </p>
    </motion.section>
  );
}
