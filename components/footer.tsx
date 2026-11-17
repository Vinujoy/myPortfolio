import React from "react";

/** The back of the object: the name returns at full width. */
export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--hero)] text-[var(--hero-ink)]">
      <div className="site-container flex flex-col justify-between gap-6 pt-[clamp(56px,7vw,112px)] md:flex-row md:items-end">
        <p className="max-w-[28ch] text-lead">
          Senior frontend developer, open to freelance.
        </p>
        <a
          href="mailto:vinujoydev@gmail.com?subject=Freelance%20project"
          className="btn btn-accent self-start md:self-auto"
        >
          Hire me for freelance
        </a>
      </div>
      <p
        aria-hidden="true"
        translate="no"
        className="display site-container mt-12 select-none whitespace-nowrap text-[clamp(96px,26vw,520px)] leading-[0.82]"
        style={{ marginBottom: "-0.08em" }}
      >
        Vinu Joy
      </p>
      <p className="site-container flex flex-col gap-1 small pb-6 pt-8 md:flex-row md:justify-between">
        <span>&copy; 2026 Vinu Joy. Kerala, India.</span>
        <span>
          Built with{" "}
          <a className="text-link" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
          ,{" "}
          <a className="text-link" href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{" "}
          and{" "}
          <a className="text-link" href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
            Framer Motion
          </a>
          .
        </span>
      </p>
    </footer>
  );
}
