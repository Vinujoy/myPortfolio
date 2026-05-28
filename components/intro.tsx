"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "@/public/passport.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[52rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Profile image */}
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={profileImg}
            alt="Vinu Joy — Senior Frontend Developer"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-800"
          />
        </motion.div>
      </div>

      {/* Headline */}
      <motion.h1
        className="mb-3 mt-6 px-4 text-3xl font-bold !leading-[1.3] tracking-tight sm:text-4xl md:text-[2.75rem] dark:text-gray-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        I build fast, scalable{" "}
        <span className="underline decoration-blue-500 decoration-2 underline-offset-4">
          React &amp; Next.js
        </span>{" "}
        applications.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="mb-5 px-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        Senior Frontend Developer &middot; 6+ yrs &middot; Lighthouse 72&rarr;95
        &middot; Bundle &minus;25%
      </motion.p>

      {/* Available for freelance badge */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/20 dark:border-green-500/30 dark:text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
          Available for freelance
        </span>
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20"
          href="/Senior_Frontend_Developer_Vinu_Joy.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:scale-[1.15] active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
          href="https://www.linkedin.com/in/vinujoy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
