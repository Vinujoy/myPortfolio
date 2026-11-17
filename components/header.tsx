"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";

type LinkItem = (typeof links)[number];

const navLinks = links.filter((link) => link.name !== "Home");
const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const onHome = pathname === "/";
  const onHero = onHome && activeSection === "Home";

  const go = (name: LinkItem["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsOpen(false);
  };

  const renderLink = (link: LinkItem) => {
    const current = onHome && activeSection === link.name;
    return (
      <li key={link.hash}>
        <Link
          href={onHome ? link.hash : `/${link.hash}`}
          aria-current={current ? "page" : undefined}
          className={clsx(
            "inline-flex min-h-[44px] items-center transition-colors duration-150",
            current
              ? "font-semibold text-[var(--accent)]"
              : "hover:text-[var(--accent)]"
          )}
          onClick={() => go(link.name)}
        >
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <header
      className="header-shell fixed inset-x-0 top-0 z-[100] h-16"
      data-on-hero={onHero ? "true" : "false"}
    >
      <div className="site-container grid h-full grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">{leftLinks.map(renderLink)}</ul>
        </nav>

        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center font-semibold tracking-tight md:justify-self-center"
          translate="no"
          onClick={() => go("Home")}
        >
          Vinu Joy
        </Link>

        <nav className="hidden justify-self-end md:block" aria-label="Secondary navigation">
          <ul className="flex items-center gap-8">{rightLinks.map(renderLink)}</ul>
        </nav>

        <button
          className="inline-flex items-center justify-self-end font-semibold md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-nav-overlay fixed inset-0 top-16 md:hidden"
          >
            <motion.ul
              role="list"
              className="site-container flex h-full flex-col justify-center gap-1 pb-24"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.hash}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={onHome ? link.hash : `/${link.hash}`}
                    className="display inline-flex min-h-[44px] items-center text-[13vw]"
                    onClick={() => go(link.name)}
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
