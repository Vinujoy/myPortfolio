import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Cargo Release Platform Case Study | Vinu Joy",
  description:
    "Case study on building CMA CGM's cargo readiness notification platform — automating release workflows, data-heavy operational UIs, and multi-rail vendor integrations.",
};

export default function ImportCargoReleaseCaseStudyPage() {
  return (
    <main className="case-study-page relative mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:pt-40">
      <article className="space-y-16">

        {/* Hero */}
        <CaseStudyReveal className="space-y-5 border-b border-[var(--border-subtle)] pb-12">
          <p className="case-study-badge">Case Study</p>
          <h1 className="case-study-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Cargo Readiness Notification Platform — CMA CGM
          </h1>
          <p className="case-study-body max-w-2xl text-base leading-[1.8] sm:text-lg">
            Built an enterprise internal platform for CMA CGM Canada to automate cargo
            release notifications across rail and port operations — replacing a fully manual
            workflow that caused delays, increased terminal cost exposure, and created
            communication errors at scale.
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
            Manual workflows at logistics scale
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            Customer service teams validated payments, checked pickup numbers from rail
            vendors, and emailed customers individually — one container at a time.
            With hundreds of daily cargo releases across CN Rail, CP Rail, and port
            operations, this process caused pickup delays, increased demurrage costs,
            and left teams with no real-time visibility into release readiness status.
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
                decision: "Custom data grid over off-the-shelf alternatives",
                why: "Operational workflows required row-level updates, inline status visualization, dialog-based detail views, and real-time validation — generic grid libraries couldn't support this interaction model cleanly without fighting their defaults.",
              },
              {
                decision: "Debounced autocomplete search architecture",
                why: "Datasets include hundreds of active containers at any time. Triggering API calls on every keystroke caused visible lag and wasted server resources. Debouncing reduced query volume by ~70% while keeping search snappy.",
              },
              {
                decision: "Export-first operational design",
                why: "In logistics, audit trails are critical. Teams needed to generate Excel reports of release history, filtered datasets, and notification logs for internal review. Designed export as a first-class feature, not an afterthought.",
              },
              {
                decision: "Standardized service and error patterns",
                why: "The platform integrates with CN Rail (CNRR), CP Rail (CPRR), finance validation, and customer notification APIs — each with different response shapes and failure modes. A shared service abstraction kept error handling consistent and made adding new integrations straightforward.",
              },
            ].map((item) => (
              <div key={item.decision} className="border-l-2 border-[var(--accent)] pl-5">
                <p className="font-semibold text-[var(--text-primary)]">{item.decision}</p>
                <p className="mt-1 text-sm leading-[1.7] text-[var(--text-secondary)]">{item.why}</p>
              </div>
            ))}
          </div>
        </CaseStudyReveal>

        {/* How the release flow worked */}
        <CaseStudyReveal delay={0.07}>
          <p className="studio-kicker mb-3">How It Worked</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            Automated release lifecycle
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            Once a container was flagged as ready, the platform ran a validation chain:
            Bill of Lading verification → payment clearance → customer credit check →
            invoice validation. Only on full pass did the system retrieve the pickup number
            from the rail vendor and automatically dispatch the customer notification.
            Background jobs polled vendor APIs hourly to sync release status without
            manual intervention.
          </p>
        </CaseStudyReveal>

        {/* Stack */}
        <CaseStudyReveal delay={0.08}>
          <p className="studio-kicker mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Redux", "Material UI", "MUI Data Grid", "Excel Export", "Debounced Search", "CN Rail API", "CP Rail API"].map(
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
              { value: "−20%", label: "Communication error rate" },
              { value: "Hourly", label: "Automated release sync" },
              { value: "2 flows", label: "Rail + port unified" },
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
