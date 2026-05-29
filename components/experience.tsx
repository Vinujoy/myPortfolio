"use client";

import React, { useEffect, useRef, useState } from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visible = Math.min(
            1,
            Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight * 0.3))
          );
          setLineProgress(visible);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={(node) => {
        if (node) {
          sectionRef.current = node;
        }
        if (typeof ref === "function") ref(node);
      }}
      className="section-block site-container scroll-mt-28"
    >
      <span className="section-label">[ 04 ]</span>
      <h2 className="section-heading">Experience.</h2>
      <div className="relative mx-auto max-w-[800px]">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-[linear-gradient(to_bottom,transparent,var(--accent),var(--border-subtle),transparent)] md:left-1/2 md:-translate-x-1/2">
          <span
            className="absolute left-0 top-0 w-px origin-top bg-[var(--accent)] transition-transform duration-300"
            style={{ height: "100%", transform: `scaleY(${lineProgress})` }}
          />
        </div>
        <div className="space-y-10">
          {experiencesData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative md:flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div className="absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-base)] transition-colors duration-200 md:left-1/2" />
                <div
                  className={`ml-10 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-6 transition-colors hover:border-[var(--border-active)] md:ml-0 md:w-[calc(50%-40px)] md:max-w-[360px] ${isLeft ? "md:mr-[40px]" : "md:ml-[40px]"}`}
                >
                  <h3 className="font-[var(--font-display)] text-[17px] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent-bright)]">
                    {item.location}
                  </p>
                  <p className="mt-1 font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
                    {item.date}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {item.description
                      .split(". ")
                      .filter(Boolean)
                      .map((line, idx) => (
                        <li key={idx}>
                          <span className="mr-2 text-[var(--accent)]">→</span>
                          {line.trim()}
                          {line.endsWith(".") ? "" : "."}
                        </li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
