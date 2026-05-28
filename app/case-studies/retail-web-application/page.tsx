import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Retail Web Application Case Study | Vinu Joy",
  description:
    "Case study on architecting a scalable Next.js retail web application for a Middle East real estate client using SSR, SSG, ISR, Redux Toolkit, and performance-first frontend architecture.",
};

const sectionTitleClass =
  "text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl";
const subTitleClass = "text-xl font-semibold text-gray-900 dark:text-gray-100";
const paragraphClass = "mt-4 leading-[1.8] text-gray-700 dark:text-gray-300";
const listClass =
  "mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 marker:text-blue-500";
const galleryCardClass =
  "group overflow-hidden rounded-xl border border-black/10 bg-white/60 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5";

const productScreenshots = [
  {
    src: "/case-studies/retail/home-dashboard.png",
    alt: "Retail portfolio dashboard with reports and store cards",
    title: "Portfolio Dashboard",
    description: "Snapshot of the primary tenant dashboard with sales and store insights.",
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
    <main className="relative mx-auto w-full max-w-4xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-48 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
      <article className="space-y-14">
        <CaseStudyReveal className="space-y-5 border-b border-black/10 pb-10 dark:border-white/10">
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Case Study
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Retail Web Application for a Real Estate Client
          </h1>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            Architected and developed a scalable retail web application for a
            leading real estate client in the Middle East using Next.js,
            TypeScript, and hybrid rendering strategies. The platform served
            both public visitors and authenticated users while maintaining high
            performance, SEO optimization, and real-time personalized
            experiences.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The application combined Static Site Generation (SSG), Incremental
            Static Regeneration (ISR), and Server-Side Rendering (SSR) to
            efficiently balance scalability, SEO, and dynamic content delivery.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.03}>
          <section className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h2 className={sectionTitleClass}>Project Summary</h2>
            <p className={paragraphClass}>
              Enterprise retail platform for a major Middle East real estate
              client serving public visitors and authenticated tenants.
            </p>

            <h3 className={`${subTitleClass} mt-8`}>The Problem</h3>
            <p className={paragraphClass}>
              The client needed one platform to serve two very different
              experiences: SEO-critical public pages and secure user-specific
              dashboards. Existing workflows made it difficult to balance speed,
              discoverability, personalization, and infrastructure cost at
              scale.
            </p>

            <h3 className={`${subTitleClass} mt-8`}>My Role</h3>
            <p className={paragraphClass}>
              Senior Frontend Engineer, leading frontend architecture and
              rendering strategy decisions.
            </p>

            <h3 className={`${subTitleClass} mt-8`}>What I Built</h3>
            <p className={paragraphClass}>
              Built a hybrid-rendered web platform combining static marketing
              pages and secure, real-time dashboard experiences. Created
              reusable frontend modules, integrated CMS and enterprise APIs, and
              structured the app for scalable feature delivery. The platform
              improved browsing speed, reduced backend load, and provided a
              smoother experience for both anonymous and signed-in users.
            </p>

            <h3 className={`${subTitleClass} mt-8`}>Key Technical Decisions</h3>
            <ul className={listClass}>
              <li>
                Hybrid SSG/ISR + SSR rendering - static delivery for SEO pages,
                real-time rendering for authenticated workflows.
              </li>
              <li>
                Centralized Redux Toolkit state - predictable cross-module data
                handling for complex dashboard interactions.
              </li>
              <li>
                Service-layer API abstraction - cleaner integration boundaries
                for Salesforce, Yardi, and CMS endpoints.
              </li>
              <li>
                Route-level performance optimization - faster initial load and
                lower client overhead through code-splitting and lazy loading.
              </li>
            </ul>

            <h3 className={`${subTitleClass} mt-8`}>Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Redux Toolkit",
                "SSR",
                "SSG",
                "ISR",
                "Sitecore",
                "ForgeRock",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:border-white/20 dark:bg-white/10 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 className={`${subTitleClass} mt-8`}>Results</h3>
            <ul className={listClass}>
              <li>40% faster page performance</li>
              <li>Lighthouse score improved from 72 to 95</li>
              <li>Bundle size reduced by 25%</li>
            </ul>
          </section>
        </CaseStudyReveal>

        <div className="my-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
            Detailed Case Study
          </p>
          <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
        </div>

        <CaseStudyReveal delay={0.05}>
          <h2 className={sectionTitleClass}>Product Screens</h2>
          <p className={paragraphClass}>
            Key interfaces from the production retail platform, highlighting
            dashboard analytics, payments, documents, and tenant-specific store
            journeys.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {productScreenshots.map((screen) => (
              <figure key={screen.src} className={galleryCardClass}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={1024}
                  height={676}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover opacity-95 saturate-90 transition duration-500 group-hover:opacity-100 group-hover:saturate-100"
                />
                <figcaption className="p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {screen.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {screen.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.08}>
          <h2 className={sectionTitleClass}>Role</h2>
          <p className={paragraphClass}>Senior Frontend Engineer</p>
          <p className={paragraphClass}>Responsibilities:</p>
          <ul className={listClass}>
            <li>Frontend architecture implementation</li>
            <li>Rendering strategy decisions</li>
            <li>State management architecture</li>
            <li>API integration workflows</li>
            <li>Performance optimization</li>
            <li>Authentication integration</li>
            <li>Reusable component development</li>
            <li>SEO optimization</li>
          </ul>
        </CaseStudyReveal>

        <section>
          <h2 className={sectionTitleClass}>Tech Stack</h2>

          <h3 className={`${subTitleClass} mt-8`}>Frontend</h3>
          <ul className={listClass}>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Redux Toolkit</li>
          </ul>

          <h3 className={`${subTitleClass} mt-8`}>Integrations</h3>
          <ul className={listClass}>
            <li>Salesforce APIs</li>
            <li>Yardi APIs</li>
            <li>Sitecore CMS</li>
            <li>ForgeRock Authentication</li>
          </ul>

          <h3 className={`${subTitleClass} mt-8`}>Architecture and Performance</h3>
          <ul className={listClass}>
            <li>SSR</li>
            <li>SSG</li>
            <li>ISR</li>
            <li>Dynamic rendering</li>
            <li>Code splitting</li>
            <li>Lazy loading</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Business Problem</h2>
          <p className={paragraphClass}>
            The client required a scalable retail platform capable of serving
            two completely different user experiences:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300 marker:font-semibold marker:text-blue-500">
            <li>Public-facing marketing pages</li>
            <li>Authenticated customer dashboards</li>
          </ol>
          <p className={paragraphClass}>The key business requirements included:</p>
          <ul className={listClass}>
            <li>Strong SEO visibility for public pages</li>
            <li>Fast page load performance</li>
            <li>Secure personalized dashboards</li>
            <li>Real-time customer data access</li>
            <li>Scalable content delivery</li>
            <li>Reduced infrastructure overhead</li>
          </ul>
          <p className={paragraphClass}>
            The challenge was to design an architecture that could efficiently
            support both static marketing content and highly dynamic
            authenticated experiences within a single platform.
          </p>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Technical Challenges</h2>
          <ul className={listClass}>
            <li>Balancing SEO and dynamic rendering</li>
            <li>Delivering real-time personalized data securely</li>
            <li>Managing multiple external API integrations</li>
            <li>Optimizing performance for large-scale content delivery</li>
            <li>Reducing unnecessary API requests</li>
            <li>Maintaining scalable frontend architecture</li>
            <li>
              Supporting authenticated and non-authenticated experiences
              together
            </li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Architecture Decisions</h2>

          <h3 className={`${subTitleClass} mt-8`}>Why Next.js?</h3>
          <p className={paragraphClass}>
            Next.js was selected because the platform required SEO optimization,
            hybrid rendering strategies, scalable routing, performance-focused
            architecture, and dynamic server-side rendering.
          </p>
          <p className={paragraphClass}>
            The framework allowed us to combine SSG, ISR, and SSR based on page
            requirements rather than using a single rendering strategy across
            the entire application.
          </p>

          <h3 className={`${subTitleClass} mt-8`}>
            Hybrid Rendering Strategy
          </h3>
          <p className={paragraphClass}>
            One of the key architectural decisions was implementing a hybrid
            rendering model.
          </p>

          <h4 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Static Site Generation (SSG) + ISR
          </h4>
          <p className={paragraphClass}>Used for:</p>
          <ul className={listClass}>
            <li>About</li>
            <li>News</li>
            <li>Projects</li>
            <li>Contact pages</li>
          </ul>
          <p className={paragraphClass}>These pages:</p>
          <ul className={listClass}>
            <li>Were CMS-driven</li>
            <li>Rarely changed</li>
            <li>Needed excellent SEO performance</li>
            <li>Benefited from CDN-level caching</li>
          </ul>
          <p className={paragraphClass}>We implemented:</p>
          <ul className={listClass}>
            <li>getStaticProps()</li>
            <li>Incremental Static Regeneration (ISR)</li>
          </ul>
          <p className={paragraphClass}>
            This allowed the platform to regenerate content automatically at
            intervals without requiring full redeployments.
          </p>
          <p className={paragraphClass}>Benefits:</p>
          <ul className={listClass}>
            <li>Faster load times</li>
            <li>Improved Lighthouse scores</li>
            <li>Better SEO indexing</li>
            <li>Reduced backend load</li>
            <li>Lower API usage</li>
          </ul>

          <h4 className="mt-8 text-lg font-semibold text-gray-900 dark:text-gray-100">
            Server-Side Rendering (SSR)
          </h4>
          <p className={paragraphClass}>Used for:</p>
          <ul className={listClass}>
            <li>Dashboard</li>
            <li>Payments</li>
            <li>Documents</li>
            <li>User Profile</li>
          </ul>
          <p className={paragraphClass}>These sections required:</p>
          <ul className={listClass}>
            <li>Real-time user-specific data</li>
            <li>Secure authenticated requests</li>
            <li>Dynamic rendering</li>
            <li>Personalized dashboards</li>
          </ul>
          <p className={paragraphClass}>We implemented:</p>
          <ul className={listClass}>
            <li>getServerSideProps()</li>
          </ul>
          <p className={paragraphClass}>Benefits:</p>
          <ul className={listClass}>
            <li>Real-time data delivery</li>
            <li>Improved security</li>
            <li>Better personalization</li>
            <li>Reduced client-side complexity</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitleClass}>State Management Architecture</h2>
          <p className={paragraphClass}>
            Redux Toolkit was used for centralized client-side state management.
          </p>
          <p className={paragraphClass}>The architecture helped manage:</p>
          <ul className={listClass}>
            <li>User session state</li>
            <li>Dashboard data</li>
            <li>Payment workflows</li>
            <li>Shared application state</li>
            <li>API synchronization</li>
          </ul>
          <p className={paragraphClass}>Redux Toolkit was selected because it:</p>
          <ul className={listClass}>
            <li>Simplified predictable state updates</li>
            <li>Reduced boilerplate</li>
            <li>Improved debugging</li>
            <li>Scaled effectively for enterprise workflows</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Authentication and Security</h2>
          <p className={paragraphClass}>
            ForgeRock was integrated for secure authentication and protected API
            communication.
          </p>
          <p className={paragraphClass}>Security considerations included:</p>
          <ul className={listClass}>
            <li>Secure token handling</li>
            <li>Protected server-side requests</li>
            <li>Role-based access control</li>
            <li>Secure API integration workflows</li>
            <li>Environment variable protection</li>
          </ul>
          <p className={paragraphClass}>
            Authenticated pages were rendered server-side to avoid exposing
            sensitive user workflows on the client.
          </p>
        </section>

        <section>
          <h2 className={sectionTitleClass}>API Integration Architecture</h2>
          <p className={paragraphClass}>The application integrated with:</p>
          <ul className={listClass}>
            <li>Salesforce APIs</li>
            <li>Yardi APIs</li>
            <li>Sitecore CMS</li>
          </ul>
          <p className={paragraphClass}>To improve maintainability:</p>
          <ul className={listClass}>
            <li>API logic was abstracted into reusable service layers</li>
            <li>Shared request utilities were implemented</li>
            <li>Error handling patterns were standardized</li>
          </ul>
          <p className={paragraphClass}>
            This improved scalability and simplified future integrations.
          </p>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Performance Optimization</h2>
          <p className={paragraphClass}>
            Performance optimization was a major focus throughout the project.
          </p>
          <p className={paragraphClass}>Implemented optimizations included:</p>
          <ul className={listClass}>
            <li>Hybrid rendering strategies</li>
            <li>ISR caching</li>
            <li>Dynamic imports</li>
            <li>Route-level code splitting</li>
            <li>Lazy loading</li>
            <li>Optimized asset delivery</li>
            <li>Reduced client-side rendering overhead</li>
          </ul>
        </section>

        <section>
          <h2 className={sectionTitleClass}>Results and Impact</h2>
          <p className={paragraphClass}>
            The final architecture delivered measurable improvements:
          </p>
          <ul className={listClass}>
            <li>Improved page load performance by approximately 40%</li>
            <li>Maintained strong SEO visibility</li>
            <li>Reduced unnecessary API usage through static caching</li>
            <li>Delivered scalable rendering architecture</li>
            <li>
              Improved user experience across both public and authenticated
              workflows
            </li>
          </ul>
          <p className={paragraphClass}>
            The hybrid rendering model successfully balanced performance, SEO,
            scalability, personalization, and infrastructure efficiency.
          </p>
        </section>

        <section className="border-t border-black/10 pt-12 dark:border-white/10">
          <h2 className={sectionTitleClass}>Key Learnings</h2>
          <p className={paragraphClass}>
            This project strengthened my experience in:
          </p>
          <ul className={listClass}>
            <li>enterprise frontend architecture</li>
            <li>hybrid rendering strategies</li>
            <li>scalable Next.js applications</li>
            <li>authentication workflows</li>
            <li>API integration architecture</li>
            <li>performance optimization</li>
            <li>SEO-focused engineering</li>
          </ul>
          <p className={paragraphClass}>
            It also reinforced the importance of selecting rendering strategies
            based on business and user requirements rather than applying a
            single rendering pattern universally.
          </p>
        </section>
      </article>
    </main>
  );
}
