"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsChevronDown, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);
  const [activeNote, setActiveNote] = useState<"performance" | "scalability" | "delivery">(
    "performance"
  );
  // activeNote used by the studio panel tabs in the right column
  const words = useMemo(
    () => "I build fast, scalable React & Next.js applications.".split(" "),
    []
  );

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHideScrollIndicator(window.scrollY > 200);
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
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] items-center scroll-mt-[100rem] py-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[800px] bg-[radial-gradient(ellipse_800px_600px_at_80%_10%,rgba(99,102,241,0.07),transparent)]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[600px] bg-[radial-gradient(ellipse_600px_500px_at_10%_90%,rgba(99,102,241,0.04),transparent)]" />
      </div>

      <div className="site-container grid gap-10 lg:grid-cols-[55%_45%] lg:items-center">
        <div className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-active)] bg-[var(--accent-glow)] px-4 py-1.5 font-[var(--font-mono)] text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent-bright)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Senior Frontend Developer
          </motion.div>

          <h1 className="font-[var(--font-display)] text-[clamp(36px,7vw,96px)] font-extrabold leading-[1.03]">
            {words.map((word, index) => {
              const isAccent = word.includes("React") || word.includes("Next.js");
              return (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.06,
                    duration: 0.45,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`${isAccent ? "text-[var(--accent)]" : ""} mr-3 inline-block`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-2 font-[var(--font-mono)] text-[13px] text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>6+ yrs</span>
            <span className="text-[var(--text-dim)]">·</span>
            <span>
              Lighthouse <span className="text-[var(--accent-bright)]">72→95</span>
            </span>
            <span className="text-[var(--text-dim)]">·</span>
            <span>
              Bundle <span className="text-[var(--accent-bright)]">−25%</span>
            </span>
          </motion.div>

          <motion.div
            className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.25)] bg-[var(--green-glow)] px-4 py-2 font-[var(--font-mono)] text-[12px] text-[var(--green-available)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--green-available)]" />
              Available for Freelance
            </span>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[var(--accent-bright)] hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact Me <BsArrowRight />
            </Link>
            <a
              href="/Senior_Frontend_Developer_Vinu_Joy.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-active)] px-7 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)]"
            >
              <HiDownload size={14} />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/vinujoy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <BsLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ willChange: "transform" }}
        >
          <div className="studio-panel overflow-hidden">
            <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-5 py-3">
              <div className="flex gap-2">
                {[
                  { id: "performance", label: "Performance" },
                  { id: "scalability", label: "Scalability" },
                  { id: "delivery", label: "Delivery" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`rounded-full px-3 py-1 text-[11px] font-[var(--font-mono)] transition-colors ${
                      activeNote === tab.id
                        ? "bg-[var(--accent-glow)] text-[var(--accent-bright)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                    onClick={() =>
                      setActiveNote(tab.id as "performance" | "scalability" | "delivery")
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3 px-6 py-6">
              {activeNote === "performance" ? (
                <>
                  <p className="studio-kicker">Performance Profile</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Lighthouse improved from 72 to 95 through rendering strategy,
                    bundle trimming, and route-level optimization.
                  </p>
                  <p className="font-[var(--font-mono)] text-xs text-[var(--accent)]">
                    Focus: Core Web Vitals · LCP · JS payload
                  </p>
                </>
              ) : null}
              {activeNote === "scalability" ? (
                <>
                  <p className="studio-kicker">Scalability Profile</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Component architecture built for extension: new modules and
                    features added without touching stable core systems.
                  </p>
                  <p className="font-[var(--font-mono)] text-xs text-[var(--accent)]">
                    Focus: reusable modules · predictable state
                  </p>
                </>
              ) : null}
              {activeNote === "delivery" ? (
                <>
                  <p className="studio-kicker">Delivery Profile</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Enterprise projects delivered ahead of schedule with stronger
                    team throughput through mentoring and architecture clarity.
                  </p>
                  <p className="font-[var(--font-mono)] text-xs text-[var(--accent)]">
                    Focus: execution velocity · maintainability
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <motion.div
            className="mt-4 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {["⚡ 95 Lighthouse", "📦 -25% Bundle", "🚀 6+ Years"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-1.5 font-[var(--font-mono)] text-[11px] text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--text-dim)]"
        animate={{ opacity: hideScrollIndicator ? 0 : 1 }}
      >
        scroll
        <BsChevronDown className="mt-2 animate-bounce" />
      </motion.div>
    </section>
  );
}
