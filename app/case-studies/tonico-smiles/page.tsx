import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Tonico Smiles Case Study | Vinu Joy",
  description:
    "Case study on building Tonico Smiles, an online grocery and fresh delivery platform focused on usability, scalability, mobile-first UX, and performance.",
};

const sectionTitleClass =
  "text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl";
const paragraphClass = "mt-4 leading-[1.8] text-gray-700 dark:text-gray-300";
const listClass =
  "mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 marker:text-blue-500";

export default function TonicoSmilesCaseStudyPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-48 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
      <article className="space-y-14">
        <CaseStudyReveal className="space-y-5 border-b border-black/10 pb-10 dark:border-white/10">
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Case Study
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Tonico Smiles — Online Grocery and Fresh Delivery Platform
          </h1>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            Developed a scalable e-commerce and delivery platform for Tonico
            Smiles, an online marketplace focused on delivering fresh groceries,
            seafood, meat, poultry, vegetables, and daily essentials directly to
            customers.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The platform provided seamless product discovery, category-based
            browsing, responsive ordering workflows, and optimized delivery
            management while maintaining high performance across mobile and
            desktop devices.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The application focused heavily on usability, scalability, and
            operational efficiency for daily grocery and fresh-product delivery
            workflows.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.03}>
          <section className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h2 className={sectionTitleClass}>Project Summary</h2>
            <p className={paragraphClass}>
              Mobile-first e-commerce and fresh-delivery platform for a local
              grocery and essentials marketplace.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              The Problem
            </h3>
            <p className={paragraphClass}>
              The business relied on store-first and manual ordering workflows,
              which limited convenience and order scalability. They needed a
              fast digital storefront for frequent grocery purchases, clear
              category navigation, and a frictionless delivery checkout
              experience.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              My Role
            </h3>
            <p className={paragraphClass}>
              Frontend Developer, building core shopping, cart, and checkout
              user flows.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              What I Built
            </h3>
            <p className={paragraphClass}>
              Built a responsive e-commerce experience for browsing, filtering,
              and ordering fresh products across multiple categories.
              Implemented reusable product and checkout components to keep the
              experience consistent and scalable. Optimized mobile interactions
              and rendering so daily users could complete orders quickly with
              minimal friction.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Key Technical Decisions
            </h3>
            <ul className={listClass}>
              <li>
                Mobile-first layout strategy - prioritized core user flows on
                the most-used device form factor.
              </li>
              <li>
                Category-driven component system - improved discoverability while
                keeping expansion to new catalog groups straightforward.
              </li>
              <li>
                Reusable cart and checkout modules - reduced UI inconsistency and
                accelerated feature iteration.
              </li>
              <li>
                Performance-focused rendering patterns - preserved smooth
                browsing on image-heavy catalog pages.
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Redux",
                "Tailwind CSS",
                "Firebase Auth",
                "Razorpay",
                "Responsive Design",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700 dark:border-white/20 dark:bg-white/10 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Results
            </h3>
            <ul className={listClass}>
              <li>40% increase in customer retention</li>
              <li>25% increase in average order value</li>
              <li>8 product category groups supported</li>
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

        <CaseStudyReveal delay={0.04}>
          <h2 className={sectionTitleClass}>Role</h2>
          <p className={paragraphClass}>Frontend Developer</p>
          <p className={paragraphClass}>Responsibilities:</p>
          <ul className={listClass}>
            <li>Frontend application development</li>
            <li>E-commerce UI implementation</li>
            <li>Responsive design architecture</li>
            <li>Product listing and filtering workflows</li>
            <li>Cart and checkout experience</li>
            <li>Performance optimization</li>
            <li>API integration</li>
            <li>Mobile-first development</li>
            <li>Reusable component development</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.05}>
          <h2 className={sectionTitleClass}>Business Problem</h2>
          <p className={paragraphClass}>
            Traditional grocery and fresh-food purchasing workflows were highly
            dependent on physical stores and manual ordering processes.
          </p>
          <p className={paragraphClass}>
            The business needed a digital platform capable of:
          </p>
          <ul className={listClass}>
            <li>Simplifying online grocery purchases</li>
            <li>Supporting fresh product delivery</li>
            <li>Improving customer convenience</li>
            <li>Enabling category-based shopping</li>
            <li>Streamlining order management</li>
            <li>Supporting scalable local delivery operations</li>
          </ul>
          <p className={paragraphClass}>
            The challenge was creating a fast, responsive, user-friendly
            marketplace capable of handling multiple product categories and
            high-frequency customer interactions.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.06}>
          <h2 className={sectionTitleClass}>Project Objectives</h2>
          <p className={paragraphClass}>The platform aimed to:</p>
          <ul className={listClass}>
            <li>Provide a seamless online shopping experience</li>
            <li>Simplify grocery and fresh-food ordering</li>
            <li>Support scheduled delivery workflows</li>
            <li>Improve customer convenience</li>
            <li>Optimize mobile shopping experiences</li>
            <li>Increase accessibility for local deliveries</li>
          </ul>
          <p className={paragraphClass}>
            The system supported multiple inventory categories including:
          </p>
          <ul className={listClass}>
            <li>Fish</li>
            <li>Chicken</li>
            <li>Meat</li>
            <li>Seafood</li>
            <li>Vegetables</li>
            <li>Poultry</li>
            <li>Groceries</li>
            <li>Daily essentials</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.07}>
          <h2 className={sectionTitleClass}>Technical Challenges</h2>
          <ul className={listClass}>
            <li>Managing large product listings efficiently</li>
            <li>Optimizing mobile responsiveness</li>
            <li>Handling dynamic cart updates</li>
            <li>Building scalable category structures</li>
            <li>Supporting delivery-oriented workflows</li>
            <li>Improving product discoverability</li>
            <li>Maintaining smooth performance on lower-end devices</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.08}>
          <h2 className={sectionTitleClass}>Frontend Architecture</h2>
          <p className={paragraphClass}>The application architecture focused on:</p>
          <ul className={listClass}>
            <li>Modular component design</li>
            <li>Reusable UI patterns</li>
            <li>Responsive layouts</li>
            <li>Scalable product rendering</li>
            <li>Optimized user flows</li>
          </ul>
          <p className={paragraphClass}>
            The frontend system was designed to support future expansion into
            additional categories, delivery regions, promotional workflows, and
            scalable inventory integrations.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.09}>
          <h2 className={sectionTitleClass}>User Experience Design</h2>
          <p className={paragraphClass}>
            The platform prioritized simplicity and accessibility for everyday
            users.
          </p>
          <p className={paragraphClass}>Key UX considerations included:</p>
          <ul className={listClass}>
            <li>Easy product browsing</li>
            <li>Fast cart interactions</li>
            <li>Intuitive navigation</li>
            <li>Mobile-first shopping experience</li>
            <li>Simplified checkout workflows</li>
            <li>Quick category discovery</li>
          </ul>
          <p className={paragraphClass}>
            The interface was optimized to reduce friction during ordering while
            improving overall usability.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.1}>
          <h2 className={sectionTitleClass}>
            Product Discovery and Category Management
          </h2>
          <p className={paragraphClass}>
            Implemented scalable category-based browsing allowing users to
            quickly navigate across groceries, seafood, meat, vegetables,
            poultry, and daily essentials.
          </p>
          <p className={paragraphClass}>The platform architecture supported:</p>
          <ul className={listClass}>
            <li>Dynamic product rendering</li>
            <li>Reusable category layouts</li>
            <li>Scalable filtering workflows</li>
            <li>Responsive product grids</li>
          </ul>
          <p className={paragraphClass}>
            This improved product discoverability and enhanced customer shopping
            experience.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.11}>
          <h2 className={sectionTitleClass}>
            Responsive and Mobile-First Development
          </h2>
          <p className={paragraphClass}>
            A large percentage of users accessed the platform through mobile
            devices. The frontend was optimized for:
          </p>
          <ul className={listClass}>
            <li>Responsive rendering</li>
            <li>Touch-friendly interactions</li>
            <li>Mobile navigation</li>
            <li>Adaptive layouts</li>
            <li>Optimized image loading</li>
            <li>Smooth scrolling performance</li>
          </ul>
          <p className={paragraphClass}>
            The mobile-first approach significantly improved accessibility and
            customer engagement.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.12}>
          <h2 className={sectionTitleClass}>Performance Optimization</h2>
          <p className={paragraphClass}>
            Performance optimization focused on delivering a smooth shopping
            experience even with image-heavy product catalogs.
          </p>
          <ul className={listClass}>
            <li>Lazy loading</li>
            <li>Optimized asset delivery</li>
            <li>Reusable rendering patterns</li>
            <li>Responsive image handling</li>
            <li>Minimized unnecessary re-renders</li>
            <li>Lightweight component architecture</li>
          </ul>
          <p className={paragraphClass}>
            These improvements helped maintain fast navigation and improved user
            retention.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.13}>
          <h2 className={sectionTitleClass}>Scalable Component System</h2>
          <p className={paragraphClass}>
            Built reusable frontend components for:
          </p>
          <ul className={listClass}>
            <li>Product cards</li>
            <li>Category sections</li>
            <li>Delivery information</li>
            <li>Banners</li>
            <li>Cart workflows</li>
            <li>Checkout interfaces</li>
          </ul>
          <p className={paragraphClass}>This improved:</p>
          <ul className={listClass}>
            <li>Maintainability</li>
            <li>Development speed</li>
            <li>UI consistency</li>
            <li>Future scalability</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.14}>
          <h2 className={sectionTitleClass}>Delivery Workflow Experience</h2>
          <p className={paragraphClass}>
            The platform supported customer-friendly delivery experiences
            through:
          </p>
          <ul className={listClass}>
            <li>Scheduled delivery windows</li>
            <li>Streamlined checkout flows</li>
            <li>Clear delivery communication</li>
            <li>Simplified order placement</li>
          </ul>
          <p className={paragraphClass}>
            The UX was designed to align with real-world grocery and fresh
            product delivery expectations.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.15}>
          <h2 className={sectionTitleClass}>Business Impact</h2>
          <p className={paragraphClass}>The platform helped Tonico Smiles:</p>
          <ul className={listClass}>
            <li>Establish an online delivery presence</li>
            <li>Simplify grocery ordering workflows</li>
            <li>Improve customer convenience</li>
            <li>Support local delivery operations</li>
            <li>Provide a modern digital shopping experience</li>
          </ul>
          <p className={paragraphClass}>
            The system improved accessibility for customers seeking fresh
            products delivered directly to their homes.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal
          delay={0.16}
          className="border-t border-black/10 pt-12 dark:border-white/10"
        >
          <h2 className={sectionTitleClass}>Key Learnings</h2>
          <p className={paragraphClass}>
            This project strengthened my experience in:
          </p>
          <ul className={listClass}>
            <li>E-commerce frontend architecture</li>
            <li>Responsive application design</li>
            <li>Scalable UI development</li>
            <li>Mobile-first engineering</li>
            <li>Product-focused UX workflows</li>
            <li>Reusable component systems</li>
            <li>Performance optimization for retail applications</li>
          </ul>
          <p className={paragraphClass}>
            It reinforced the importance of designing digital commerce
            experiences around simplicity, accessibility, and operational
            scalability.
          </p>
        </CaseStudyReveal>
      </article>
    </main>
  );
}
