"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsCheck2, BsClipboard, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("vinujoydev@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="section-block site-container max-w-[600px] scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="section-label">[ 05 ]</span>
      <h2 className="section-heading mb-3">Let&apos;s build something.</h2>
      <p className="body-copy">Have a project in mind? Let&apos;s talk.</p>

      <div className="mt-8 flex items-center justify-center gap-2">
        <a
          className="font-[var(--font-mono)] text-[15px] text-[var(--accent)] underline-offset-4 hover:underline"
          href="mailto:vinujoydev@gmail.com"
        >
          vinujoydev@gmail.com
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Copy email address"
        >
          {copied ? <BsCheck2 size={14} /> : <BsClipboard size={13} />}
        </button>
      </div>
      <div className="mt-2 inline-flex items-center gap-2 font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--green-available)]" />
        Usually responds within 24 hours
      </div>

      <form
        className="mt-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-10 text-left"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <label htmlFor="contact-name" className="relative mb-5 block">
          <span className="absolute left-4 top-2 font-[var(--font-mono)] text-[10px] text-[var(--accent)]">
            Name
          </span>
          <input
            id="contact-name"
            className="w-full rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 pb-2 pt-5 text-[15px] text-[var(--text-primary)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
            name="senderName"
            type="text"
            autoComplete="name"
            maxLength={200}
          />
        </label>

        <label htmlFor="contact-email" className="relative mb-5 block">
          <span className="absolute left-4 top-2 font-[var(--font-mono)] text-[10px] text-[var(--accent)]">
            Email
          </span>
          <input
            id="contact-email"
            className="w-full rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 pb-2 pt-5 text-[15px] text-[var(--text-primary)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
            name="senderEmail"
            type="email"
            required
            autoComplete="email"
            maxLength={500}
          />
        </label>

        <label htmlFor="contact-message" className="relative mb-5 block">
          <span className="absolute left-4 top-2 font-[var(--font-mono)] text-[10px] text-[var(--accent)]">
            Message
          </span>
          <textarea
            id="contact-message"
            className="min-h-[140px] w-full resize-y rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 pb-2 pt-5 text-[15px] text-[var(--text-primary)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
            name="message"
            required
            maxLength={5000}
          />
        </label>

        <div className="w-full">
          <SubmitBtn />
        </div>
      </form>

      <div className="mt-10 flex items-center justify-center gap-3">
          {[
          { href: "https://www.linkedin.com/in/vinujoy/", label: "LinkedIn", icon: BsLinkedin },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)]"
            aria-label={item.label}
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>
    </motion.section>
  );
}
