"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "./reveal";
import portrait from "@/public/passport.jpg";

/** The letter: a typed sheet with a scalloped edge and a tear-off strip carrying the address. */
export default function About() {
  const { ref } = useSectionInView("About", 0.35);

  return (
    <section
      ref={ref}
      id="about"
      className="section-block site-container scroll-mt-12 bg-[var(--bg)]"
    >
      <Reveal as="h2" className="section-heading mx-auto max-w-[640px]">
        A note from Vinu
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-10 max-w-[640px] md:mt-14">
        <div className="sheet bg-[var(--field)] px-6 pt-8 md:px-[60px] md:pt-[60px]">
          <Image
            src={portrait}
            alt="Portrait of Vinu Joy"
            width={44}
            height={44}
            sizes="44px"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="mt-7 space-y-5 leading-[1.55]">
            <p>
              Hello, I am Vinu, a senior frontend developer from Kerala. For
              more than seven years I have built React and Next.js applications
              for teams that cannot afford a slow or fragile interface.
            </p>
            <p>
              Most of that time went into enterprise work: four mall websites
              and a tenant portal for a UAE real estate developer, and the
              logistics tools CMA CGM uses to run rail and port operations.
            </p>
            <p>
              I treat performance, scalability and maintainability as one
              decision. On the retail platform that meant a hybrid SSG, ISR and
              SSR architecture, and{" "}
              <mark className="bg-[var(--tone-4)] px-1 text-[var(--ink)]">
                a Lighthouse score that went from 72 to 95
              </mark>
              .
            </p>
            <p>
              I also build the shared parts: component libraries that cut time
              to market by 30%, and the habits that let a team ship faster,
              which I pass on by mentoring.
            </p>
            <p>
              I am looking for my next full-time role, on a product team that
              cares about performance and clean code. Write to me below.
            </p>
          </div>
          <p className="mt-9 text-lead font-medium italic">
            Vinu Joy
          </p>
          <p className="soft small mt-1">Senior frontend developer</p>
        </div>

        <div className="perforation mt-3" aria-hidden="true" />
        <a
          href="mailto:vinujoydev@gmail.com"
          className="mt-3 flex min-h-[72px] items-center justify-between gap-4 bg-[var(--tone-3)] px-6 transition-transform duration-150 hover:-translate-y-0.5 md:px-[60px]"
        >
          <span className="soft small">Tear off and write to</span>
          <span className="font-semibold">vinujoydev@gmail.com</span>
        </a>
      </Reveal>
    </section>
  );
}
