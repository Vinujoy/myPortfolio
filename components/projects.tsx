"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "./reveal";
import BeforeAfter from "./before-after";

const tones = ["var(--tone-3)", "var(--tone-4)", "var(--tone-5)"] as const;

/** Work is filed as folders: each band piles over the last as the page scrolls. */
export default function Projects() {
  const { ref } = useSectionInView("Work", 0.15);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-12 bg-[var(--surface)] pb-0 pt-[clamp(80px,10vw,160px)]"
    >
      <div className="site-container grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8">
        <Reveal as="h2" className="section-heading lg:col-span-7">
          Selected work
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-9">
          <p className="text-lead">
            Four projects from enterprise retail, logistics and e-commerce, each
            with the one number it moved.
          </p>
        </Reveal>
      </div>

      <ol className="mt-24 md:mt-28" aria-label="Projects">
        {projectsData.map((project, index) => (
          <li
            key={project.title}
            className="relative pt-[56px] lg:sticky lg:min-h-[80svh] lg:pt-0"
            style={{
              background: tones[index % tones.length],
              top: `calc(${index} * 64px)`,
              zIndex: index + 1,
            }}
          >
            {/* the tab that rises from the band's top-left edge */}
            <div className="band-tab absolute bottom-full left-[var(--margin)] flex h-[40px] items-center bg-[inherit] px-8 md:h-[44px] md:px-12" style={{ background: tones[index % tones.length] }}>
              <h3 className="text-[length:var(--step-lead)] font-semibold leading-none">
                {project.title}
              </h3>
            </div>
            <p className="absolute right-[var(--margin)] top-0 small flex h-[56px] items-center md:h-16">
              {project.kind}
            </p>

            <div className="site-container grid gap-8 pb-12 lg:grid-cols-12 lg:gap-x-8 lg:pb-16 lg:pt-[104px]">
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--tone-3)] md:aspect-[16/10]">
                  <Image
                    src={project.imageUrl}
                    alt={project.alt}
                    loading="lazy"
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="h-full w-full object-cover object-left-top"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <p className="display text-[length:var(--step-head)] tabular">
                  {project.metric.value}
                </p>
                <p className="small mt-1">{project.metric.label}</p>
                <p className="mt-6 max-w-[52ch]">{project.description}</p>
                <p className="mt-6 max-w-[52ch]">
                  The constraint was {project.constraint}. The answer was{" "}
                  {project.decision}.
                </p>
                {index === 0 ? (
                  <div className="mt-8">
                    <BeforeAfter />
                  </div>
                ) : null}
                <p className="small mt-6">{project.tags.join(", ")}</p>
                <Link
                  href={project.caseStudyUrl}
                  className="text-link mt-4 inline-flex min-h-[44px] items-center font-semibold"
                >
                  Read the case study
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
