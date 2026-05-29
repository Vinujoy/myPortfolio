"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Case studies", 0.5);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="section-block site-container scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="section-label">[ 02 ]</span>
      <h2 className="section-heading">Selected Work.</h2>
      <p className="mb-8 max-w-2xl text-sm text-[var(--text-secondary)]">
        Each project highlights context, constraint, and decision so clients can
        see not just what was built, but how architectural choices were made.
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
