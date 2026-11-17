"use client";

import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Reveal from "./reveal";

const fieldClass =
  "w-full border-0 bg-[var(--field)] px-5 text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:shadow-[inset_0_0_0_3px_var(--ink)]";

/** The coupon: a card with notches, a perforation and a form to cut out. */
export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("vinujoydev@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. The address is vinujoydev@gmail.com");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-block site-container scroll-mt-12 bg-[var(--tone-5)]"
    >
      <Reveal
        className="coupon mx-auto max-w-[1240px] bg-[var(--tone-3)] [--cut:236px] lg:grid lg:grid-cols-[46%_54%]"
      >
        <div className="flex h-[236px] flex-col justify-between p-6 lg:h-auto lg:min-h-[480px] lg:p-12">
          <h2 className="display text-[length:var(--step-head)]">
            Let us work together
          </h2>
          <p className="max-w-[34ch]">
            Tell me about the role or the project. Your message goes straight to my inbox and I
            usually reply within a day.
          </p>
        </div>

        <form
          className="flex flex-col gap-[10px] border-t-[5px] border-dotted border-[var(--tone-5)] p-6 lg:border-l-[5px] lg:border-t-0 lg:p-12"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            className={`${fieldClass} h-[52px]`}
            name="senderName"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={200}
          />
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            className={`${fieldClass} h-[52px]`}
            name="senderEmail"
            type="email"
            placeholder="Your email"
            inputMode="email"
            spellCheck={false}
            required
            autoComplete="email"
            maxLength={500}
          />
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            className={`${fieldClass} min-h-[150px] flex-1 resize-y py-4`}
            name="message"
            placeholder="A redesign of our checkout, live by March"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-[1240px] flex-wrap items-center gap-x-8 gap-y-2">
        <p>
          Prefer email?{" "}
          <a className="text-link font-semibold" href="mailto:vinujoydev@gmail.com">
            vinujoydev@gmail.com
          </a>
        </p>
        <button
          type="button"
          onClick={copyEmail}
          className="text-link inline-flex items-center font-semibold"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy address"}
        </button>
        <a
          className="text-link inline-flex min-h-[44px] items-center font-semibold"
          href="https://www.linkedin.com/in/vinujoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Reveal>
    </section>
  );
}
