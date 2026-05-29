"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const applyMode = () => setIsDesktop(mediaQuery.matches);
    applyMode();
    mediaQuery.addEventListener("change", applyMode);
    return () => mediaQuery.removeEventListener("change", applyMode);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let outerX = x;
    let outerY = y;

    const step = () => {
      outerX += (x - outerX) * 0.16;
      outerY += (y - outerY) * 0.16;

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerX - 18}px, ${outerY - 18}px, 0) scale(${isHoveringInteractive ? 1.8 : 1})`;
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    const onMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a,button,input,textarea,label,select");
      setIsHoveringInteractive(Boolean(interactive));
    };

    rafRef.current = window.requestAnimationFrame(step);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isDesktop, isHoveringInteractive]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className="custom-cursor-outer"
        style={{
          opacity: isHoveringInteractive ? 1 : 0.6,
          background: isHoveringInteractive ? "var(--accent-glow)" : "transparent",
        }}
      />
      <div ref={innerRef} className="custom-cursor-inner" />
    </>
  );
}
