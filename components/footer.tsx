import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8">
      <div className="site-container flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <small className="font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
          &copy; 2026 Vinu Joy. All rights reserved.
        </small>
        <p className="font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
          Built with{" "}
          <a className="hover:text-[var(--accent)]" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{" "}
          ·{" "}
          <a className="hover:text-[var(--accent)]" href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React
          </a>{" "}
          ·{" "}
          <a className="hover:text-[var(--accent)]" href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
            Framer Motion
          </a>
        </p>
      </div>
    </footer>
  );
}
