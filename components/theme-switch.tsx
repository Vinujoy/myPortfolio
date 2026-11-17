"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-[120] inline-flex h-12 items-center bg-[var(--ink)] px-5 font-medium text-[var(--bg)] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.97]"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
