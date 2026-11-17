"use client";

import React from "react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

/** Back to front: the front folder is the first section the visitor reaches. */
const folders: {
  name: SectionName;
  label: string;
  hash: string;
  tone: string;
  left: string;
  mobileLeft: string;
}[] = [
  { name: "Contact", label: "Contact", hash: "#contact", tone: "var(--tone-5)", left: "80%", mobileLeft: "66%" },
  { name: "Experience", label: "Experience", hash: "#experience", tone: "var(--tone-4)", left: "60%", mobileLeft: "34%" },
  { name: "Results", label: "Results", hash: "#results", tone: "var(--tone-3)", left: "40%", mobileLeft: "2%" },
  { name: "Work", label: "Work", hash: "#projects", tone: "var(--surface)", left: "20%", mobileLeft: "66%" },
  { name: "About", label: "About", hash: "#about", tone: "var(--bg)", left: "0%", mobileLeft: "34%" },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const go = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      className="hero relative h-[100svh] min-h-[760px] overflow-hidden bg-[var(--hero)] text-[var(--hero-ink)]"
    >
      <div className="site-container pt-[88px] text-center md:pt-[96px]">
        <h1
          translate="no"
          className="display rise mx-auto text-[clamp(64px,17vw,96px)] md:text-[clamp(96px,10vw,160px)]"
        >
          Vinu Joy
        </h1>
        <p
          className="rise mx-auto mt-6 max-w-[46ch] text-[1.125rem] leading-[1.45] md:mt-7 md:text-[length:var(--step-lead)]"
          style={{ ["--d" as string]: "90ms" }}
        >
          Senior frontend developer building React and Next.js for enterprise
          teams. 7+ years. Lighthouse 72 to 95.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[50svh] md:top-[51%]">
        {folders.map((folder, index) => {
          const front = index === folders.length - 1;
          return (
            <div
              key={folder.name}
              className="folder rise bottom-[-2px] text-[var(--ink)]"
              style={{
                top: `calc(${index} * var(--folder-step))`,
                background: folder.tone,
                zIndex: index + 1,
                ["--d" as string]: `${180 + index * 70}ms`,
              }}
            >
              <Link
                href={folder.hash}
                onClick={() => go(folder.name)}
                className="folder-tab absolute bottom-full left-[var(--tl-m)] md:left-[var(--tl-d)] inline-flex h-[var(--tab-h)] w-[30%] items-center justify-center small font-semibold md:w-[18%] md:text-[length:var(--step-body)]"
                style={{
                  background: folder.tone,
                  ["--tl-m" as string]: folder.mobileLeft,
                  ["--tl-d" as string]: folder.left,
                }}
                aria-label={`Go to ${folder.label}`}
              >
                {folder.label}
              </Link>
              {!front && (
                <Link
                  href={folder.hash}
                  onClick={() => go(folder.name)}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 block h-[var(--folder-step)]"
                />
              )}
              {front && (
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 p-6 md:p-8">
                  <Link
                    href="#contact"
                    className="btn"
                    onClick={() => go("Contact")}
                  >
                    Hire me for freelance
                  </Link>
                  <a
                    href="/Senior_Frontend_Developer_Vinu_Joy.pdf"
                    download
                    className="text-link inline-flex min-h-[44px] items-center"
                  >
                    Download CV
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
