"use client";

import React, { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "p" | "h2" | "h3" | "ul";
};

/**
 * Rises 24px and fades in once, as it enters the viewport. The hidden state only exists
 * under html.js (set by an inline script), so content is always readable without script.
 */
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as React.ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-in", "true");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.setAttribute("data-in", "true");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px 120px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={{ ["--rd" as string]: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
