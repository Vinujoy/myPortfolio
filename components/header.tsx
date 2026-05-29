"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-shell fixed inset-x-0 top-0 z-[100] h-16 transition-colors">
      <div
        className={clsx(
          "site-container flex h-full items-center justify-between",
          isScrolled && "border-b border-[var(--border-subtle)]"
        )}
      >
        <Link
          href="/"
          className="font-[var(--font-display)] text-[22px] font-extrabold tracking-normal text-[var(--text-primary)] transition-all duration-200 hover:tracking-[0.5px]"
        >
          vinu<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={pathname === "/" ? link.hash : `/${link.hash}`}
                  aria-current={activeSection === link.name ? "page" : undefined}
                  className={clsx(
                    "font-[var(--font-mono)] text-[12px] uppercase tracking-[0.06em] transition-colors duration-150",
                    activeSection === link.name
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-primary)]/70 hover:text-[var(--accent)]"
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-nav-overlay fixed inset-0 top-16 backdrop-blur-2xl md:hidden"
          >
            <motion.ul
              className="flex h-full flex-col items-center justify-center gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={pathname === "/" ? link.hash : `/${link.hash}`}
                    className="font-[var(--font-display)] text-[28px] text-[var(--text-primary)]"
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
