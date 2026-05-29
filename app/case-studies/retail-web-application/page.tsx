import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Retail Web Application Case Study | Vinu Joy",
  description:
    "Case study on architecting a scalable Next.js retail web application for a Middle East real estate client using SSR, SSG, ISR, Redux Toolkit, and performance-first frontend architecture.",
};

const productScreenshots = [
  {
    src: "/case-studies/retail/home-dashboard.png",
    alt: "Retail portfolio dashboard with reports and store cards",
    title: "Portfolio Dashboard",
    description: "Primary tenant dashboard with sales metrics and store insights.",
  },
  {
    src: "/case-studies/retail/payments-cropped.png",
    alt: "Payments module with store filters and milestones",
    title: "Payments Module",
    description: "Payment milestones and multi-store filtering for tenant workflows.",
  },
  {
    src: "/case-studies/retail/documents.png",
    alt: "Documents module with searchable invoice list",
    title: "Documents Module",
    description: "Searchable document and invoice retrieval for authenticated users.",
  },
  {
    src: "/case-studies/retail/store-detail.png",
    alt: "Store detail page showing leasing phase and merchant tools",
    title: "Store Detail Experience",
    description: "Contextual store view with leasing progress and action-oriented cards.",
  },
];

export default function RetailWebApplicationCaseStudyPage() {
  return (
    <main className="case-study-page relative mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:pt-40">
      <article className="space-y-16">

        {/* Hero */}
        <CaseStudyReveal className="space-y-5 border-b border-[var(--border-subtle)] pb-12">
          <p className="case-study-badge">Case Study</p>
          <h1 className="case-study-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Retail Web Application for a Real Estate Client
          </h1>
          <p className="case-study-body max-w-2xl text-base leading-[1.8] sm:text-lg">
            Architected a hybrid-rendered enterprise retail platform for a major Middle East
            real estate client — serving SEO-critical public pages and secure, real-time
            tenant dashboards within a single Next.js application.
          </p>
          <div className="flex flex-wrap gap-6 pt-2 font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
            <span><span className="text-[var(--text-secondary)]">Role</span> · Senior Frontend Engineer</span>
            <span><span className="text-[var(--text-secondary)]">Type</span> · Enterprise · B2B + B2C</span>
            <span><span className="text-[var(--text-secondary)]">Stack</span> · Next.js · TypeScript · Redux Toolkit</span>
          </div>
        </CaseStudyReveal>

        {/* The Problem */}
        <CaseStudyReveal delay={0.03}>
          <p className="studio-kicker mb-3">The Problem</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            One platform, two very different experiences
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            The client needed SEO-indexed public pages for property discovery alongside
            secure, data-rich authenticated dashboards for tenants — all in one system.
            Existing approaches forced a trade-off: go fully static and lose real-time
            personalization, or go fully dynamic and sacrifice SEO performance and CDN
            scalability.
          </p>
        </CaseStudyReveal>

        {/* Key Decisions */}
        <CaseStudyReveal delay={0.05}>
          <p className="studio-kicker mb-3">Architecture Decisions</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            How I solved it
          </h2>
          <div className="mt-6 space-y-5">
            {[
              {
                decision: "Hybrid SSG/ISR + SSR rendering",
                why: "Public pages (about, projects, news) built statically with ISR for automatic CMS-driven regeneration. Authenticated routes (dashboard, payments, documents) use SSR to guarantee fresh user-specific data on every request.",
              },
              {
                decision: "Centralized Redux Toolkit state",
                why: "Dashboard interactions span multiple modules (payments, documents, store data) that share user session context. Redux Toolkit gave predictable cross-module state without prop drilling or duplicated API calls.",
              },
              {
                decision: "Service-layer API abstraction",
                why: "Three distinct enterprise APIs — Salesforce, Yardi, and Sitecore CMS — each with different response shapes. A shared service layer standardized error handling, request formatting, and kept components decoupled from backend specifics.",
              },
              {
                decision: "Route-level code splitting",
                why: "Authenticated modules like payments and documents are feature-heavy. Dynamic imports ensured those bundles were never sent to unauthenticated visitors, improving initial load for public pages.",
              },
            ].map((item) => (
              <div key={item.decision} className="border-l-2 border-[var(--accent)] pl-5">
                <p className="font-semibold text-[var(--text-primary)]">{item.decision}</p>
                <p className="mt-1 text-sm leading-[1.7] text-[var(--text-secondary)]">{item.why}</p>
              </div>
            ))}
          </div>
        </CaseStudyReveal>

        {/* Stack */}
        <CaseStudyReveal delay={0.07}>
          <p className="studio-kicker mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Redux Toolkit", "SSR", "SSG", "ISR", "Sitecore CMS", "Salesforce APIs", "Yardi APIs", "ForgeRock Auth"].map(
              (item) => (
                <span key={item} className="case-study-chip">{item}</span>
              )
            )}
          </div>
        </CaseStudyReveal>

        {/* Outcome */}
        <CaseStudyReveal delay={0.08}>
          <p className="studio-kicker mb-3">Outcome</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "72 → 95", label: "Lighthouse score" },
              { value: "−25%", label: "Bundle size reduction" },
              { value: "+40%", label: "Page load improvement" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-[var(--border-subtle)] p-5">
                <p className="font-[var(--font-display)] text-3xl font-bold text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </CaseStudyReveal>

        {/* Product Screens */}
        <CaseStudyReveal delay={0.1}>
          <p className="studio-kicker mb-3">Product Screens</p>
          <div className="grid gap-5 md:grid-cols-2">
            {productScreenshots.map((screen) => (
              <figure key={screen.src} className="case-study-gallery-card group">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={1024}
                  height={676}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover transition duration-500 group-hover:opacity-100"
                />
                <figcaption className="p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{screen.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{screen.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </CaseStudyReveal>

      </article>
    </main>
  );
}
