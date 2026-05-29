"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Core Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "SSR / SSG / ISR",
      "Performance Optimization",
    ],
  },
  {
    title: "Styling & UI",
    items: [
      "Tailwind CSS",
      "Material UI",
      "CSS / SCSS",
      "Framer Motion",
      "Core Web Vitals",
    ],
  },
  {
    title: "Tooling & Design",
    items: ["Jest", "Figma", "Git / GitHub"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="section-block site-container scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="section-label">[ 03 ]</span>
      <h2 className="section-heading">Skills.</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 border-b border-[var(--border-subtle)] pb-3 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
              {group.title}
            </h3>
            <motion.ul
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  className="inline-flex cursor-default items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2 font-[var(--font-mono)] text-[13px] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--text-primary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-dim)]" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
