"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-[120] inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-lg transition-all duration-200 hover:scale-105 hover:border-[var(--border-active)] hover:text-[var(--accent)]"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
    </button>
  );
}
