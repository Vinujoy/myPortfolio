"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "./reveal";

const tones = ["var(--bg)", "var(--surface)", "var(--tone-3)"] as const;
const count = experiencesData.length;

/** Cards that fold into spines: each step slides the next job in and squeezes the earlier ones. */
export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.15);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(count - 1, Math.max(0, Math.floor(value * count)));
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-0 bg-[var(--tone-4)]"
    >
      <div ref={wrapRef} className="lg:h-[210svh]">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:pt-16">
          <div className="site-container section-block lg:py-0">
            <Reveal as="h2" className="section-heading">
              Experience
            </Reveal>

            <ol
              className="mt-10 flex flex-col gap-3 lg:mt-12 lg:h-[360px] lg:flex-row lg:gap-0"
              aria-label="Roles, newest first"
            >
              {experiencesData.map((item, index) => {
                const spine = index < active;
                const hidden = index > active;
                const width = spine ? "120px" : hidden ? "0px" : "min(620px, 54vw)";
                return (
                  <li
                    key={`${item.company}-${item.date}`}
                    className="deck-card relative lg:flex-none lg:overflow-hidden"
                    data-spine={spine}
                    data-hidden={hidden}
                    style={{
                      background: tones[index % tones.length],
                      ["--w" as string]: width,
                    }}
                  >
                    <article className="p-6 lg:h-full lg:w-[min(620px,54vw)] lg:p-8">
                      <h3 className="text-lead font-semibold leading-[1.1]">
                        {item.title}
                      </h3>
                      <div className="card-rest">
                        <p className="mt-2 font-medium">
                          {item.company}
                          <span className="soft">, {item.clientNote}</span>
                        </p>
                        <p className="mt-3 max-w-[52ch]">{item.excerpt}</p>
                        <p className="small mt-3">{item.stack}</p>
                        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 lg:absolute lg:inset-x-8 lg:bottom-7 lg:mt-0">
                          <p className="tabular font-medium">{item.date}</p>
                          {"href" in item ? (
                            <Link href={item.href} className="text-link inline-flex min-h-[44px] items-center font-semibold">
                              {item.hrefLabel}
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </article>
                    {spine ? (
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        className="absolute inset-0 z-10 max-lg:hidden"
                        aria-label={`Show ${item.title} at ${item.company}`}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            <Reveal delay={0.1} className="mt-8 lg:mt-12">
              <p>
                {count} entries, newest first.{" "}
                <a
                  className="text-link font-semibold"
                  href="https://www.linkedin.com/in/vinujoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full history on LinkedIn
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
