"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CaseStudyRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function CaseStudyReveal({
  children,
  delay = 0,
  className,
}: CaseStudyRevealProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
