"use client";

import { useMemo } from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  index,
  title,
  description,
  tags,
  caseStudyUrl,
}: ProjectProps) {
  const decisionLine = useMemo(() => {
    const map: Record<number, { context: string; constraint: string; decision: string }> = {
      0: {
        context: "Public + authenticated enterprise platform",
        constraint: "SEO and personalization in one system",
        decision: "Hybrid SSR/SSG/ISR rendering architecture",
      },
      1: {
        context: "Internal cargo readiness operations",
        constraint: "High-volume manual communication loops",
        decision: "Data-grid-first operational interface design",
      },
      2: {
        context: "Storage guarantee lifecycle management",
        constraint: "Multi-role approvals + dynamic calculations",
        decision: "Workflow-oriented validation architecture",
      },
      3: {
        context: "Consumer grocery and delivery platform",
        constraint: "Mobile-heavy daily ordering behavior",
        decision: "Responsive component-led commerce flows",
      },
    };
    return (
      map[index] ?? {
        context: "Product delivery",
        constraint: "Scale and quality",
        decision: "Systematic frontend architecture",
      }
    );
  }, [index]);

  const metric = useMemo(() => {
    const map: Record<number, { value: string; label: string }> = {
      0: { value: "95", label: "LIGHTHOUSE" },
      1: { value: "−25%", label: "COMM. ERRORS" },
      2: { value: "$180K", label: "PROFIT INC." },
      3: { value: "+40%", label: "RETENTION" },
    };
    return map[index] ?? { value: "—", label: "IMPACT" };
  }, [index]);

  return (
    <motion.div
      className="mb-4 grid grid-cols-[60px_1fr] gap-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6 py-8 transition-all duration-200 hover:translate-y-[-3px] hover:border-[var(--border-active)] hover:bg-[var(--bg-elevated)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_var(--border-active),0_0_40px_rgba(99,102,241,0.06)] lg:grid-cols-[60px_1fr_auto] lg:gap-8 lg:px-12 lg:py-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
      style={{ willChange: "transform" }}
    >
      <div className="font-[var(--font-mono)] text-5xl font-semibold text-[var(--text-dim)]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <h3 className="font-[var(--font-display)] text-[24px] font-bold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[var(--text-secondary)]">
          {description}
        </p>
        <div className="mt-4 grid gap-2 text-xs md:grid-cols-3">
          <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3">
            <p className="studio-kicker">Context</p>
            <p className="mt-1 text-[var(--text-secondary)]">{decisionLine.context}</p>
          </div>
          <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3">
            <p className="studio-kicker">Constraint</p>
            <p className="mt-1 text-[var(--text-secondary)]">{decisionLine.constraint}</p>
          </div>
          <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3">
            <p className="studio-kicker">Decision</p>
            <p className="mt-1 text-[var(--text-secondary)]">{decisionLine.decision}</p>
          </div>
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1 font-[var(--font-mono)] text-[11px] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent-bright)]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          {caseStudyUrl ? (
            <Link
              href={caseStudyUrl}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2 font-[var(--font-mono)] text-[12px] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <BsArrowUpRight />
              View Deep Dive
            </Link>
          ) : null}
        </div>
      </div>
      <div className="col-span-2 text-left lg:col-span-1 lg:text-right">
        <p className="font-[var(--font-mono)] text-[32px] font-bold text-[var(--accent)]">
          {metric.value}
        </p>
        <p className="mt-1 font-[var(--font-mono)] text-[11px] tracking-[0.08em] text-[var(--text-dim)]">
          {metric.label}
        </p>
      </div>
    </motion.div>
  );
}
