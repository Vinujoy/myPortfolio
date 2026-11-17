"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { projectsData, resultGroups } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "./reveal";

/** One giant word, filled bars that open in place, and a frame that shows the project behind a number. */
export default function Results() {
  const { ref } = useSectionInView("Results", 0.3);
  const [preview, setPreview] = useState(0);
  const [openGroups, setOpenGroups] = useState<string[]>([resultGroups[0].name]);
  const shown = projectsData[preview];

  return (
    <section
      ref={ref}
      id="results"
      className="section-block site-container scroll-mt-12 bg-[var(--tone-3)]"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-x-[clamp(48px,6vw,112px)]">
        <div>
          <div className="[container-type:inline-size]">
            <Reveal as="h2" className="display text-[31cqw] leading-[0.8]">
              Results
            </Reveal>
          </div>
          <Reveal delay={0.08} className="mt-8">
            <p className="max-w-[44ch]">
              Every figure comes from a project I shipped. Point at a row to see
              the screen behind it.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-8 space-y-[6px]">
            {resultGroups.map((group) => (
              <details
                key={group.name}
                className="bar bg-[var(--tone-4)]"
                open={openGroups.includes(group.name)}
                onToggle={(event) => {
                  const isOpen = (event.currentTarget as HTMLDetailsElement).open;
                  setOpenGroups((prev) =>
                    isOpen
                      ? prev.includes(group.name) ? prev : [...prev, group.name]
                      : prev.filter((name) => name !== group.name)
                  );
                }}
              >
                <summary className="bar-summary flex min-h-[56px] cursor-pointer list-none items-center justify-between px-[18px] font-semibold">
                  {group.name}
                </summary>
                {openGroups.includes(group.name) ? (
                <ul className="px-[18px] pb-5 pt-1">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={projectsData[item.project].caseStudyUrl}
                        onMouseEnter={() => setPreview(item.project)}
                        onFocus={() => setPreview(item.project)}
                        className="flex items-baseline justify-between gap-6 py-[7px] transition-transform duration-150 hover:translate-x-1"
                      >
                        <span>{item.label}</span>
                        <span className="tabular shrink-0 font-semibold">{item.value}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                ) : null}
              </details>
            ))}
          </Reveal>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--tone-4)]">
              {projectsData.map((project, index) => (
                <Image
                  key={project.title}
                  src={project.imageUrl}
                  alt={project.alt}
                  loading="lazy"
                  sizes="45vw"
                  className={clsx(
                    "absolute inset-0 h-full w-full object-cover object-left-top transition-opacity duration-[240ms]",
                    index === preview ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden={index === preview ? undefined : true}
                />
              ))}
            </div>
            <p className="mt-5 text-lead font-semibold">{shown.title}</p>
            <p className="mt-1">{shown.kind}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
