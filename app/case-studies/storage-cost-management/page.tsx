import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Storage Cost Management Case Study",
  description:
    "Case study on building CMA CGM's storage cost management platform — workflow automation, dynamic cost calculations, multi-stage approvals, and role-based enterprise operations.",
  alternates: { canonical: "https://vinu-joy.vercel.app/case-studies/storage-cost-management" },
  openGraph: {
    title: "Storage Cost Management Case Study | Vinu Joy",
    description:
      "Building CMA CGM's storage cost platform — replacing spreadsheets, $16M+ operational profit impact.",
    url: "https://vinu-joy.vercel.app/case-studies/storage-cost-management",
    type: "article",
  },
};

export default function StorageCostManagementCaseStudyPage() {
  return (
    <main className="case-study-page relative mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:pt-40">
      <article className="space-y-16">

        {/* Hero */}
        <CaseStudyReveal className="space-y-5 border-b border-[var(--border-subtle)] pb-12">
          <p className="case-study-badge">Case Study</p>
          <h1 className="case-study-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Storage Cost Management Platform — CMA CGM
          </h1>
          <p className="case-study-body max-w-2xl text-base leading-[1.8] sm:text-lg">
            Designed and built an enterprise workflow platform to standardize storage
            guarantee operations across six business teams at CMA CGM — replacing
            fragmented manual processes that contributed to approximately $16M in
            annual storage-related financial exposure.
          </p>
          <div className="flex flex-wrap gap-6 pt-2 font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
            <span><span className="text-[var(--text-secondary)]">Role</span> · Frontend Engineer</span>
            <span><span className="text-[var(--text-secondary)]">Type</span> · Enterprise · Internal Operations</span>
            <span><span className="text-[var(--text-secondary)]">Stack</span> · React · TypeScript · Redux · Material UI</span>
          </div>
        </CaseStudyReveal>

        {/* The Problem */}
        <CaseStudyReveal delay={0.03}>
          <p className="studio-kicker mb-3">The Problem</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            $16M exposed to manual calculation errors
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            Storage guarantee workflows were owned by six teams — Intermodal, Equipment,
            Port Operations, DDSM, Client Solutions, and VIP — each using their own
            approach. Manual calculations meant inconsistent cost recovery, approval
            delays caused by email chains, and no centralized view of outstanding
            guarantee exposure. The business needed one standardized platform that all
            roles could operate within.
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
                decision: "Multi-stage workflow modeling over simple CRUD",
                why: "Storage guarantees follow a real business lifecycle: create → approve → confirm → amend → close. Modeling the UI around these stages — with role-aware transitions and validation gates at each step — made the system far more governable than a generic form with status fields.",
              },
              {
                decision: "Client-side dynamic pricing engine",
                why: "Storage costs depend on equipment type, terminal, tier pricing, and whether calculation uses calendar days or working days. Encoding this logic in the frontend gave users immediate cost feedback during request creation, reducing incorrect submissions and back-and-forth approvals.",
              },
              {
                decision: "Bulk operations as a first-class feature",
                why: "Operations teams process dozens of requests daily. Designing bulk update and mass apply functionality from the start — not as a shortcut — meant the platform scaled to actual workload without extra overhead per request.",
              },
              {
                decision: "Frontend validation layer preventing duplicate guarantee periods",
                why: "Overlapping guarantee periods for the same container caused downstream billing errors. A client-side validation layer caught date conflicts before submission, with role-specific restrictions layered on top to enforce governance at the UI level.",
              },
            ].map((item) => (
              <div key={item.decision} className="border-l-2 border-[var(--accent)] pl-5">
                <p className="font-semibold text-[var(--text-primary)]">{item.decision}</p>
                <p className="mt-1 text-sm leading-[1.7] text-[var(--text-secondary)]">{item.why}</p>
              </div>
            ))}
          </div>
        </CaseStudyReveal>

        {/* Role model */}
        <CaseStudyReveal delay={0.07}>
          <p className="studio-kicker mb-3">Role-Based Design</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Four roles, one coherent platform
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            The platform exposed different actions to each role — Requestors created and
            submitted, Approvers reviewed and actioned, Guarantors confirmed commitments,
            and Administrators managed settings and overrides. Role-based UI controls
            weren't just a permission layer — they were the primary way the workflow
            stayed accountable and auditable across departments.
          </p>
        </CaseStudyReveal>

        {/* Stack */}
        <CaseStudyReveal delay={0.08}>
          <p className="studio-kicker mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Redux", "Material UI", "React Hook Form", "MUI Data Grid", "Role-Based Access Control"].map(
              (item) => (
                <span key={item} className="case-study-chip">{item}</span>
              )
            )}
          </div>
        </CaseStudyReveal>

        {/* Outcome */}
        <CaseStudyReveal delay={0.09}>
          <p className="studio-kicker mb-3">Outcome</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "~$16M", label: "Financial exposure area addressed" },
              { value: "4 roles", label: "Unified in one workflow platform" },
              { value: "7+ steps", label: "End-to-end workflow standardized" },
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

      </article>
    </main>
  );
}
