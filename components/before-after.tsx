"use client";

import React, { useState } from "react";
import clsx from "clsx";

const states = {
  before: { score: 72, colour: "#d97706", bundle: "Baseline", load: "Baseline" },
  after: { score: 95, colour: "#0d8a4b", bundle: "25% smaller", load: "40% faster" },
} as const;

const R = 52;
const C = 2 * Math.PI * R;

/** The live thing: flip the retail platform between its real before and after Lighthouse scores. */
export default function BeforeAfter() {
  const [mode, setMode] = useState<"before" | "after">("after");
  const state = states[mode];

  return (
    <div data-ui className="bg-[var(--field)] p-5 text-[var(--ink)]">
      <div className="flex items-center gap-6">
        <div className="relative h-[124px] w-[124px] shrink-0">
          <svg viewBox="0 0 124 124" className="h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="62" cy="62" r={R} fill="none" stroke="var(--tone-3)" strokeWidth="9" />
            <circle
              cx="62"
              cy="62"
              r={R}
              fill="none"
              stroke={state.colour}
              strokeWidth="9"
              strokeLinecap="butt"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - state.score / 100)}
              style={{ transition: "stroke-dashoffset 700ms cubic-bezier(0.22,1,0.36,1), stroke 300ms ease" }}
            />
          </svg>
          <p
            className="display tabular absolute inset-0 flex items-center justify-center text-[2.5rem]"
            style={{ color: state.colour }}
            aria-live="polite"
          >
            {state.score}
          </p>
        </div>
        <div className="space-y-1 text-[1rem]">
          <p className="font-semibold">Lighthouse, performance</p>
          <dl className="space-y-1">
          <div className="flex gap-3">
            <dt className="soft w-[4.75rem]">Bundle</dt>
            <dd>{state.bundle}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="soft w-[4.75rem]">Page load</dt>
            <dd>{state.load}</dd>
          </div>
          </dl>
        </div>
      </div>
      <div className="mt-5 flex gap-3" role="group" aria-label="Compare before and after">
        {(["before", "after"] as const).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={mode === key}
            onClick={() => setMode(key)}
            className={clsx(
              "inline-flex items-center px-5 font-semibold transition-transform duration-150 active:scale-[0.97]",
              mode === key ? "bg-[var(--ink)] text-[var(--bg)]" : "bg-[var(--tone-3)]"
            )}
          >
            {key === "before" ? "Before" : "After"}
          </button>
        ))}
      </div>
      <noscript>
        <p className="small soft mt-3">Lighthouse went from 72 to 95.</p>
      </noscript>
    </div>
  );
}
