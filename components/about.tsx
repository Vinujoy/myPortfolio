"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function StatCard({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        if (entries[0]?.isIntersecting) {
          const start = performance.now();
          const duration = 1200;
          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            setCount(Math.round(value * eased));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          currentObserver.unobserve(target);
        }
      },
      { threshold: 0.1, rootMargin: "-60px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-7 py-6 transition-all duration-250 hover:border-[var(--border-active)] hover:shadow-[0_0_24px_var(--accent-glow)]"
    >
      <div className="font-[var(--font-display)] text-5xl font-extrabold text-[var(--accent)]">
        {count}
        {value === 6 ? "+" : ""}
      </div>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{label}</p>
    </div>
  );
}

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="section-block site-container scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-80px" }}
      id="about"
    >
      <span className="section-label">[ 01 ]</span>
      <h2 className="section-heading">About.</h2>

      <div className="grid gap-10 lg:grid-cols-[55%_45%] lg:gap-20">
        <div className="space-y-4 body-copy">
          <div className="studio-panel mb-6 p-5">
            <p className="studio-kicker">How I Think</p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              I design frontend systems where performance, scalability, and
              maintainability are part of the same decision — not tradeoffs made
              at different stages.
            </p>
          </div>
          <p>
            I&apos;m <span className="font-bold text-[var(--text-primary)]">Vinu</span>{" "}
            &mdash; a <span className="font-bold text-[var(--text-primary)]">Senior Frontend Developer</span> with 6+
            years of experience building enterprise-grade React and Next.js applications.
          </p>
          <p>
            I specialize in{" "}
            <span className="font-bold text-[var(--text-primary)]">SSR/SSG/ISR architectures</span>,
            performance optimization, and scalable component systems. I&apos;ve improved{" "}
            <span className="font-bold text-[var(--text-primary)]">Lighthouse scores from 72 to 95</span>,
            reduced <span className="font-bold text-[var(--text-primary)]">bundle sizes by 25%</span>, and built
            platforms used across UAE enterprise markets.
          </p>
          <p>
            Currently open to{" "}
            <span className="font-semibold text-[var(--text-primary)]">freelance projects</span> &mdash; particularly
            product companies and studios that care about performance, clean code, and pixel-perfect execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Discover", "Architect", "Deliver"].map((step, index) => (
              <span
                key={step}
                className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-1.5 text-[11px] font-[var(--font-mono)] text-[var(--text-secondary)]"
              >
                {`0${index + 1}`} {step}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 overflow-x-auto lg:ml-[-20px] lg:grid-cols-1">
          <StatCard value={6} label="Years of experience" />
          <StatCard value={15} label="Projects delivered" />
          <StatCard value={95} label="Lighthouse score achieved" />
        </div>
      </div>
    </motion.section>
  );
}
