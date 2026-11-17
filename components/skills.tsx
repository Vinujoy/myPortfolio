"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { skillGroups } from "@/lib/data";
import Reveal from "./reveal";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="section-block site-container scroll-mt-12 bg-[var(--bg)]"
    >
      <div className="grid gap-12 lg:grid-cols-[34%_1fr] lg:gap-x-[clamp(48px,6vw,112px)]">
        <div>
          <Reveal as="h2" className="section-heading">
            Skills
          </Reveal>
          <Reveal delay={0.08} className="mt-6 max-w-[34ch]">
            <p className="text-lead">
              React and Next.js at the centre, with the tooling that keeps them
              fast and maintainable.
            </p>
          </Reveal>
        </div>

        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 0.05}>
              <dt className="text-lead font-semibold">{group.name}</dt>
              <dd className="mt-2">{group.items}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
