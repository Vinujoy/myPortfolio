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
      className="mb-28 max-w-[45rem] text-center leading-[1.7] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I&apos;m{" "}
        <span className="font-bold text-gray-900 dark:text-white">Vinu</span>{" "}
        &mdash; a{" "}
        <span className="font-bold">Senior Frontend Developer</span> with 6+
        years of experience building enterprise-grade React and Next.js
        applications.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I specialize in{" "}
        <span className="font-bold">SSR/SSG/ISR architectures</span>,
        performance optimization, and scalable component systems. I&apos;ve
        improved Lighthouse scores from{" "}
        <span className="font-bold">72 to 95</span>, reduced bundle sizes by{" "}
        <span className="font-bold">25%</span>, and built platforms used across
        UAE enterprise markets.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Currently open to{" "}
        <span className="font-semibold text-green-700 dark:text-green-400">
          freelance projects
        </span>{" "}
        &mdash; particularly product companies and studios that care about
        performance, clean code, and pixel-perfect execution.
      </p>
    </motion.section>
  );
}
