import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Import Cargo Release Case Study | Vinu Joy",
  description:
    "Case study on building the Cargo Readiness Notification Platform for CMA CGM with data-heavy workflows, release automation, advanced filtering, and role-based operational tooling.",
};

const sectionTitleClass =
  "text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl";
const paragraphClass = "mt-4 leading-[1.8] text-gray-700 dark:text-gray-300";
const listClass =
  "mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 marker:text-blue-500";

export default function ImportCargoReleaseCaseStudyPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-48 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
      <article className="space-y-14">
        <CaseStudyReveal className="space-y-5 border-b border-black/10 pb-10 dark:border-white/10">
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Case Study
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Cargo Readiness Notification Platform — CMA CGM
          </h1>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            Developed an enterprise internal web application for the CMA CGM
            Canada division to automate cargo release notifications and improve
            operational efficiency across marine port logistics workflows.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The platform streamlined cargo readiness communication between rail
            vendors, customer service teams, terminals, and customers by
            automating release validations, pickup number processing, and
            notification workflows.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The system reduced manual operations, minimized customer delays, and
            improved visibility into cargo release status while handling
            sensitive operational and financial data securely.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.03}>
          <section className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h2 className={sectionTitleClass}>Project Summary</h2>
            <p className={paragraphClass}>
              Enterprise cargo readiness and release notification platform for a
              global shipping operations team.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              The Problem
            </h3>
            <p className={paragraphClass}>
              Cargo release communication was mostly manual, requiring teams to
              validate payments, check pickup statuses, and send emails one by
              one. This caused delays, increased terminal cost exposure, and
              made it hard for stakeholders to track release readiness in real
              time.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              My Role
            </h3>
            <p className={paragraphClass}>
              Frontend Engineer in an enterprise team, owning critical
              data-heavy workflow interfaces.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              What I Built
            </h3>
            <p className={paragraphClass}>
              Built an internal operational platform to automate cargo release
              validations and customer notification workflows across rail and
              port operations. Implemented high-performance data grids, advanced
              filtering, and reporting tools so teams could search, review, and
              act faster. Designed operationally clear workflows that reduced
              repetitive manual tasks and improved delivery communication.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Key Technical Decisions
            </h3>
            <ul className={listClass}>
              <li>
                Custom data-grid architecture - optimized large operational
                datasets with row-level updates and better workflow usability.
              </li>
              <li>
                Debounced autocomplete filtering - improved query responsiveness
                while reducing unnecessary processing.
              </li>
              <li>
                Standardized service and error patterns - kept multi-system API
                integrations maintainable and easier to scale.
              </li>
              <li>
                Export-first operational workflows - enabled teams to audit,
                report, and track cargo readiness with minimal friction.
              </li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Redux",
                "Material UI",
                "Data Grid",
                "Excel Export",
                "Debounced Search",
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
              <li>20% reduction in communication errors</li>
              <li>Hourly automated release status synchronization</li>
              <li>2 major operational release flows unified (rail + port)</li>
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
          <p className={paragraphClass}>Frontend Engineer</p>
          <p className={paragraphClass}>Responsibilities:</p>
          <ul className={listClass}>
            <li>Enterprise frontend application development</li>
            <li>Complex data-grid architecture</li>
            <li>Workflow-driven UI implementation</li>
            <li>API integration workflows</li>
            <li>Performance optimization</li>
            <li>Search and filtering architecture</li>
            <li>Export and reporting features</li>
            <li>UI/UX improvements for operational workflows</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.05}>
          <h2 className={sectionTitleClass}>Business Problem</h2>
          <p className={paragraphClass}>
            Before the application enhancement, customer service teams manually
            tracked cargo release readiness, validated payment statuses, checked
            pickup numbers from rail vendors, and emailed customers
            individually.
          </p>
          <p className={paragraphClass}>
            This process introduced several operational challenges:
          </p>
          <ul className={listClass}>
            <li>Delayed cargo pickup communication</li>
            <li>Increased risk of demurrage and terminal costs</li>
            <li>Heavy manual workload for customer service teams</li>
            <li>High dependency on repetitive operational tasks</li>
            <li>Increased risk of human error</li>
            <li>
              Limited visibility into notification history and cargo status
            </li>
          </ul>
          <p className={paragraphClass}>
            The business needed a scalable system capable of automating cargo
            release workflows while improving operational transparency and
            reducing manual intervention.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.06}>
          <h2 className={sectionTitleClass}>Project Objectives</h2>
          <ul className={listClass}>
            <li>Automating cargo release notification workflows</li>
            <li>Integrating pickup number processing from multiple rail vendors</li>
            <li>Improving operational visibility</li>
            <li>Reducing manual customer service workload</li>
            <li>Supporting both rail and port cargo release flows</li>
            <li>Providing searchable historical notification tracking</li>
            <li>Improving customer communication speed and accuracy</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.07}>
          <h2 className={sectionTitleClass}>Technical Challenges</h2>
          <ul className={listClass}>
            <li>Handling sensitive operational and financial data</li>
            <li>Managing large-scale tabular datasets efficiently</li>
            <li>Supporting complex validation workflows</li>
            <li>Integrating multiple enterprise systems</li>
            <li>Real-time status synchronization</li>
            <li>Handling automated notification logic</li>
            <li>Implementing advanced filtering and export capabilities</li>
            <li>Designing responsive workflows for operational teams</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.08}>
          <h2 className={sectionTitleClass}>Architecture and Workflow Design</h2>
          <p className={paragraphClass}>
            The application was designed as an enterprise operational workflow
            platform focused on cargo readiness lifecycle management.
          </p>
          <p className={paragraphClass}>Core workflow areas included:</p>
          <ul className={listClass}>
            <li>Rail release automation</li>
            <li>Port release automation</li>
            <li>Notification tracking</li>
            <li>User and partner management</li>
            <li>Operational search and reporting</li>
          </ul>
          <p className={paragraphClass}>Frontend architecture priorities:</p>
          <ul className={listClass}>
            <li>Scalability</li>
            <li>Maintainability</li>
            <li>High-volume data rendering</li>
            <li>Operational usability</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.09}>
          <h2 className={sectionTitleClass}>Rail Release Workflow</h2>
          <p className={paragraphClass}>The rail release process automated:</p>
          <ul className={listClass}>
            <li>Pickup number retrieval</li>
            <li>Finance validation</li>
            <li>Release checks</li>
            <li>Customer notifications</li>
          </ul>
          <p className={paragraphClass}>The system integrated with:</p>
          <ul className={listClass}>
            <li>CN Rail (CNRR)</li>
            <li>Canadian Pacific Railway (CPRR)</li>
          </ul>
          <p className={paragraphClass}>Validation logic included:</p>
          <ul className={listClass}>
            <li>Bill of Lading verification</li>
            <li>Payment clearance validation</li>
            <li>Customer credit checks</li>
            <li>Invoice status validation</li>
          </ul>
          <p className={paragraphClass}>
            Once all validations passed, pickup numbers were automatically sent
            to customers via email. Background processes continuously checked
            updates and synchronized release statuses hourly.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.1}>
          <h2 className={sectionTitleClass}>Port Release Workflow</h2>
          <p className={paragraphClass}>For direct port pickups:</p>
          <ul className={listClass}>
            <li>Terminal release validation was automated</li>
            <li>Payment and release checks were validated</li>
            <li>Release notifications were automatically triggered</li>
          </ul>
          <p className={paragraphClass}>
            The workflow reduced delays in container release communication and
            improved coordination between terminals and customer service teams.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.11}>
          <h2 className={sectionTitleClass}>Frontend Engineering Contributions</h2>
          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Custom Enterprise Data Grid
          </h3>
          <p className={paragraphClass}>
            Designed and implemented a custom high-performance data grid system
            optimized for operational workflows.
          </p>
          <p className={paragraphClass}>Features included:</p>
          <ul className={listClass}>
            <li>Row-level updates</li>
            <li>Advanced filtering</li>
            <li>Dynamic tooltips</li>
            <li>Dialog-based detail views</li>
            <li>Pagination support</li>
            <li>Export-to-Excel functionality</li>
            <li>Column-level filtering</li>
            <li>Status visualization</li>
          </ul>
          <p className={paragraphClass}>
            The grid architecture was designed to efficiently handle large
            datasets while maintaining responsiveness and usability.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Advanced Filtering and Search
          </h3>
          <p className={paragraphClass}>
            Implemented autocomplete-based advanced filtering with debounce
            optimization to improve search responsiveness and reduce unnecessary
            processing.
          </p>
          <p className={paragraphClass}>
            This significantly improved search performance, usability, and
            operational efficiency for customer service teams.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Export and Reporting
          </h3>
          <p className={paragraphClass}>
            Implemented export-to-Excel functionality allowing teams to generate
            operational reports, analyze release history, track notification
            workflows, and improve audit visibility.
          </p>
          <p className={paragraphClass}>Exports supported:</p>
          <ul className={listClass}>
            <li>Filtered datasets</li>
            <li>Paginated results</li>
            <li>Operational tracking workflows</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.12}>
          <h2 className={sectionTitleClass}>UI and UX Improvements</h2>
          <p className={paragraphClass}>
            Several usability improvements were introduced to standardize
            operational workflows and improve clarity for internal teams.
          </p>
          <ul className={listClass}>
            <li>Consistent labeling and terminology</li>
            <li>Improved transport order status visibility</li>
            <li>Better status readability</li>
            <li>Simplified operational workflows</li>
            <li>Improved search organization</li>
            <li>Better historical data visibility</li>
          </ul>
          <p className={paragraphClass}>
            The UI focused heavily on operational efficiency for customer
            service and intermodal teams.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.13}>
          <h2 className={sectionTitleClass}>Performance Optimization</h2>
          <p className={paragraphClass}>
            The application architecture focused on improving performance for
            data-heavy operational workflows.
          </p>
          <ul className={listClass}>
            <li>Debounced search filtering</li>
            <li>Efficient row-level rendering</li>
            <li>Optimized dialog rendering</li>
            <li>Paginated data handling</li>
            <li>Reduced unnecessary re-renders</li>
            <li>Export optimization for large datasets</li>
          </ul>
          <p className={paragraphClass}>
            These improvements helped maintain smooth performance even with
            complex operational datasets.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.14}>
          <h2 className={sectionTitleClass}>Security and Access Control</h2>
          <p className={paragraphClass}>
            Because the platform handled sensitive operational and financial
            workflows, multiple security-focused considerations were implemented.
          </p>
          <ul className={listClass}>
            <li>Role-based access management</li>
            <li>Restricted functionality by user group</li>
            <li>Protected operational workflows</li>
            <li>Controlled administrative access</li>
            <li>Secure internal operational tooling</li>
          </ul>
          <p className={paragraphClass}>Two major user groups were supported:</p>
          <ul className={listClass}>
            <li>Administrators</li>
            <li>Customer Service and Intermodal Teams</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.15}>
          <h2 className={sectionTitleClass}>Business Impact</h2>
          <ul className={listClass}>
            <li>Reduced manual operational workload</li>
            <li>Improved cargo release communication speed</li>
            <li>Reduced customer delays and terminal costs</li>
            <li>Improved operational visibility</li>
            <li>Improved reporting capabilities</li>
            <li>Reduced human errors in release workflows</li>
            <li>Streamlined cargo readiness management</li>
          </ul>
          <p className={paragraphClass}>
            The project improved internal operational efficiency by automating
            repetitive customer service tasks previously handled manually.
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
            <li>Enterprise workflow systems</li>
            <li>Operational platform architecture</li>
            <li>Large-scale data-heavy UI systems</li>
            <li>Advanced filtering and search optimization</li>
            <li>Enterprise reporting interfaces</li>
            <li>Scalable frontend architecture</li>
            <li>Role-based operational systems</li>
            <li>Automation-focused application design</li>
          </ul>
          <p className={paragraphClass}>
            It reinforced the importance of designing frontend systems around
            operational efficiency and workflow optimization, not just visual
            interfaces.
          </p>
        </CaseStudyReveal>
      </article>
    </main>
  );
}
