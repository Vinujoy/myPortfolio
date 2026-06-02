import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Tonico Smiles E-commerce Case Study",
  description:
    "Case study on building Tonico Smiles — a mobile-first online grocery and fresh delivery platform with category-driven browsing, fast checkout, and performance-optimized product rendering.",
  alternates: { canonical: "https://vinu-joy.vercel.app/case-studies/tonico-smiles" },
  openGraph: {
    title: "Tonico Smiles Case Study | Vinu Joy",
    description:
      "Building Tonico Smiles e-commerce — 40% customer retention increase, 25% rise in average order value.",
    url: "https://vinu-joy.vercel.app/case-studies/tonico-smiles",
    type: "article",
  },
};

export default function TonicoSmilesCaseStudyPage() {
  return (
    <main className="case-study-page relative mx-auto w-full max-w-3xl px-4 pb-24 pt-32 sm:pt-40">
      <article className="space-y-16">

        {/* Hero */}
        <CaseStudyReveal className="space-y-5 border-b border-[var(--border-subtle)] pb-12">
          <p className="case-study-badge">Case Study</p>
          <h1 className="case-study-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Tonico Smiles — Online Grocery & Fresh Delivery
          </h1>
          <p className="case-study-body max-w-2xl text-base leading-[1.8] sm:text-lg">
            Built a mobile-first e-commerce platform for Tonico Smiles, enabling customers
            to browse and order fresh groceries, seafood, meat, and daily essentials for
            home delivery — moving a store-dependent business entirely online.
          </p>
          <div className="flex flex-wrap gap-6 pt-2 font-[var(--font-mono)] text-xs text-[var(--text-dim)]">
            <span><span className="text-[var(--text-secondary)]">Role</span> · Frontend Developer</span>
            <span><span className="text-[var(--text-secondary)]">Type</span> · Consumer · E-Commerce</span>
            <span><span className="text-[var(--text-secondary)]">Stack</span> · React · Redux · Tailwind CSS · Firebase</span>
          </div>
        </CaseStudyReveal>

        {/* The Problem */}
        <CaseStudyReveal delay={0.03}>
          <p className="studio-kicker mb-3">The Problem</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
            No digital ordering channel, high daily churn risk
          </h2>
          <p className="mt-4 leading-[1.8] text-[var(--text-secondary)]">
            The business operated entirely through physical stores and WhatsApp orders —
            no discoverable online presence, no persistent cart, no checkout flow.
            Frequent grocery buyers are highly habitual; without a fast, frictionless
            ordering experience they default to whatever is most convenient. The goal
            was to ship an app that felt faster to use than calling in an order.
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
                decision: "Mobile-first layout strategy",
                why: "Daily grocery users browse on mobile during commutes or while cooking — not on a desktop. Designing for mobile first ensured the core flows (browse, add to cart, checkout) were optimized for thumb reach and fast tap interactions before being adapted upward for larger screens.",
              },
              {
                decision: "Category-driven component system",
                why: "With 8 product groups (fish, chicken, meat, seafood, vegetables, poultry, groceries, daily essentials), clear category-first navigation was the primary discoverability mechanism. Building a reusable category component made adding new groups or rearranging shelves a data change, not a code change.",
              },
              {
                decision: "Reusable cart and checkout modules",
                why: "Cart state and checkout flows touch multiple pages — product listings, cart review, delivery scheduling, payment. A shared, Redux-backed module meant these screens stayed consistent and only needed to be debugged once.",
              },
              {
                decision: "Lazy loading and optimized image rendering",
                why: "Grocery catalogs are image-heavy. Loading all product images on page mount caused visible jank on mid-range Android devices. Lazy loading product images combined with responsive srcsets kept scroll performance smooth on the devices real users actually had.",
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
            {["React", "Redux", "Tailwind CSS", "Firebase Auth", "Razorpay", "Responsive Design", "Lazy Loading"].map(
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
              { value: "+40%", label: "Customer retention" },
              { value: "+25%", label: "Average order value" },
              { value: "8 categories", label: "Supported at launch" },
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
