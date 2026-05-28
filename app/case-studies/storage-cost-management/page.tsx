import type { Metadata } from "next";
import CaseStudyReveal from "@/components/case-study-reveal";

export const metadata: Metadata = {
  title: "Storage Cost Management Case Study | Vinu Joy",
  description:
    "Case study on building CMA CGM's storage cost management platform with workflow automation, dynamic cost calculations, approval flows, and role-based enterprise operations.",
};

const sectionTitleClass =
  "text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl";
const paragraphClass = "mt-4 leading-[1.8] text-gray-700 dark:text-gray-300";
const listClass =
  "mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300 marker:text-blue-500";

export default function StorageCostManagementCaseStudyPage() {
  return (
    <main className="relative mx-auto w-full max-w-4xl px-4 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-20 -z-10 h-48 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/20" />
      <article className="space-y-14">
        <CaseStudyReveal className="space-y-5 border-b border-black/10 pb-10 dark:border-white/10">
          <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Case Study
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Storage Cost Management Platform — CMA CGM
          </h1>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            Designed and developed an enterprise storage management platform for
            CMA CGM to streamline and standardize storage guarantee workflows
            across rail and port operations.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The platform automated storage cost calculations, centralized
            approval workflows, and reduced manual operational overhead while
            improving visibility into rail and port storage cost exposure.
          </p>
          <p className="text-base leading-[1.8] text-gray-700 dark:text-gray-300 sm:text-lg">
            The application supported multiple teams including Intermodal,
            Equipment, Port Operations, DDSM, Client Solutions, and VIP teams
            through a unified workflow-driven platform.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.03}>
          <section className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h2 className={sectionTitleClass}>Project Summary</h2>
            <p className={paragraphClass}>
              Enterprise storage cost management and guarantee workflow platform
              for shipping and intermodal operations.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              The Problem
            </h3>
            <p className={paragraphClass}>
              Storage workflows were fragmented across teams and heavily manual,
              causing inconsistent calculations, approval delays, and financial
              exposure. The business needed one standardized system to reduce
              errors and improve visibility into rail and port storage costs.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              My Role
            </h3>
            <p className={paragraphClass}>
              Frontend Engineer responsible for workflow UI architecture and
              dynamic cost-calculation interfaces.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              What I Built
            </h3>
            <p className={paragraphClass}>
              Built a unified platform for creating, approving, amending, and
              tracking storage guarantee requests across multiple teams.
              Implemented data-heavy dashboards, bulk operations, and strong
              validation flows to reduce operational mistakes. Added dynamic
              storage-cost calculations and role-based experiences to support
              end-to-end workflow governance.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Key Technical Decisions
            </h3>
            <ul className={listClass}>
              <li>
                Multi-stage workflow modeling - aligned request, approval, and
                amendment lifecycles to real operational roles.
              </li>
              <li>
                Dynamic pricing engine in UI - reduced manual cost calculations
                through tier, calendar, and equipment-aware logic.
              </li>
              <li>
                Bulk action tooling - minimized repetitive operations by enabling
                batch updates and shared actions.
              </li>
              <li>
                Role-based interface controls - improved governance by exposing
                only permitted actions to each team.
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
                "React Hook Form",
                "Data Grid",
                "Role-Based Access",
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
              <li>Approximately $16M targeted operational loss area addressed</li>
              <li>4 operational roles supported in one workflow platform</li>
              <li>7+ major workflow steps standardized end-to-end</li>
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
            <li>Enterprise application development</li>
            <li>Workflow-driven UI architecture</li>
            <li>Complex form and approval flow implementation</li>
            <li>Dynamic cost calculation interfaces</li>
            <li>Role-based frontend workflows</li>
            <li>Data-heavy operational dashboard development</li>
            <li>Performance optimization</li>
            <li>State and validation management</li>
            <li>Scalable UI architecture</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.05}>
          <h2 className={sectionTitleClass}>Business Problem</h2>
          <p className={paragraphClass}>
            CMA CGM incurred millions of dollars annually in rail and port
            storage costs due to inconsistent workflows, manual calculations,
            and lack of centralized process management.
          </p>
          <p className={paragraphClass}>
            The existing storage logging system introduced several business
            challenges:
          </p>
          <ul className={listClass}>
            <li>High dependency on manual data entry</li>
            <li>Incorrect storage calculations</li>
            <li>Non-standardized approval workflows</li>
            <li>Lack of visibility into storage exposure</li>
            <li>User errors leading to financial losses</li>
            <li>Time-consuming operational processes</li>
            <li>Duplicate or unresolved guarantee requests</li>
          </ul>
          <p className={paragraphClass}>
            The organization required a unified enterprise platform capable of
            automating storage guarantee workflows while improving operational
            accuracy and financial visibility.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.06}>
          <h2 className={sectionTitleClass}>Business Impact Goals</h2>
          <ul className={listClass}>
            <li>Creating a unified storage management platform</li>
            <li>Automating storage cost calculations</li>
            <li>Standardizing approval workflows</li>
            <li>Reducing operational overhead</li>
            <li>Improving storage cost recovery</li>
            <li>Minimizing user errors</li>
            <li>Supporting scalable multi-team operations</li>
          </ul>
          <p className={paragraphClass}>
            The platform directly targeted inefficiencies responsible for
            approximately $16M in storage-related losses.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.07}>
          <h2 className={sectionTitleClass}>Technical Challenges</h2>
          <ul className={listClass}>
            <li>Complex multi-step approval workflows</li>
            <li>Dynamic cost calculation logic</li>
            <li>Large-scale operational form handling</li>
            <li>Role-based workflow management</li>
            <li>Preventing duplicate guarantee requests</li>
            <li>Real-time validation workflows</li>
            <li>Bulk operations and mass updates</li>
            <li>High-volume operational dashboard rendering</li>
            <li>Supporting multiple business units with shared workflows</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.08}>
          <h2 className={sectionTitleClass}>Platform Architecture</h2>
          <p className={paragraphClass}>
            The application was designed as a centralized workflow management
            platform handling the full storage guarantee lifecycle.
          </p>
          <p className={paragraphClass}>Core workflow areas included:</p>
          <ul className={listClass}>
            <li>Request creation</li>
            <li>Multi-level approval workflows</li>
            <li>Guarantee confirmation</li>
            <li>Request amendments</li>
            <li>Dynamic cost calculations</li>
            <li>Administrative management</li>
            <li>Operational dashboards</li>
          </ul>
          <p className={paragraphClass}>Frontend architecture focused on:</p>
          <ul className={listClass}>
            <li>Scalability</li>
            <li>Maintainability</li>
            <li>Reusable workflows</li>
            <li>Operational efficiency</li>
            <li>Role-driven access control</li>
          </ul>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.09}>
          <h2 className={sectionTitleClass}>Workflow Architecture</h2>
          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Request Creation Workflow
          </h3>
          <p className={paragraphClass}>The platform allowed users to:</p>
          <ul className={listClass}>
            <li>
              Create requests using multiple Booking Numbers or Container Numbers
            </li>
            <li>Perform bulk storage operations</li>
            <li>Apply mass updates across selected rows</li>
            <li>Upload supporting documents</li>
            <li>Trigger automated approval flows</li>
          </ul>
          <p className={paragraphClass}>Validation rules ensured:</p>
          <ul className={listClass}>
            <li>Consistent company data</li>
            <li>Valid transport modes</li>
            <li>Standardized operational logic</li>
            <li>Prevention of duplicate guarantee periods</li>
          </ul>
          <p className={paragraphClass}>
            This significantly reduced operational inconsistencies across teams.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Approval Workflow
          </h3>
          <p className={paragraphClass}>
            A multi-stage approval architecture was implemented involving:
          </p>
          <ul className={listClass}>
            <li>Requestors</li>
            <li>Approvers</li>
            <li>Guarantors</li>
            <li>Administrators</li>
          </ul>
          <p className={paragraphClass}>The workflow supported:</p>
          <ul className={listClass}>
            <li>Approvals</li>
            <li>Rejections</li>
            <li>Send-back actions</li>
            <li>Amendment requests</li>
            <li>Notification automation</li>
          </ul>
          <p className={paragraphClass}>
            Email-driven operational flows ensured users remained synchronized
            throughout the guarantee lifecycle.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Amendment Workflow
          </h3>
          <p className={paragraphClass}>
            The amendment system allowed previously guaranteed requests to be
            updated while preserving operational history.
          </p>
          <p className={paragraphClass}>The workflow automatically:</p>
          <ul className={listClass}>
            <li>Inherited existing request data</li>
            <li>Preserved immutable operational records</li>
            <li>Generated amendment tracking flows</li>
            <li>Re-routed updated requests through approval pipelines</li>
          </ul>
          <p className={paragraphClass}>
            This improved auditability and operational traceability.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.1}>
          <h2 className={sectionTitleClass}>Dynamic Cost Calculation Engine</h2>
          <p className={paragraphClass}>
            One of the most complex frontend features was the storage cost
            calculation workflow.
          </p>
          <p className={paragraphClass}>The system dynamically calculated:</p>
          <ul className={listClass}>
            <li>Rail storage costs</li>
            <li>Port storage costs</li>
            <li>Tier-based pricing</li>
            <li>Working day calculations</li>
            <li>Holiday-aware calculations</li>
          </ul>
          <p className={paragraphClass}>The calculation engine supported:</p>
          <ul className={listClass}>
            <li>Tiered pricing models</li>
            <li>Multiple terminal configurations</li>
            <li>Equipment-type-based calculations</li>
            <li>Calendar and working-day modes</li>
          </ul>
          <p className={paragraphClass}>
            This automated logic significantly reduced manual calculations and
            financial discrepancies.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.11}>
          <h2 className={sectionTitleClass}>Enterprise UI Architecture</h2>
          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Data-Heavy Dashboard
          </h3>
          <p className={paragraphClass}>
            Built a scalable dashboard allowing users to:
          </p>
          <ul className={listClass}>
            <li>Track outstanding requests</li>
            <li>Filter operational statuses</li>
            <li>Monitor approvals</li>
            <li>Review rejected requests</li>
            <li>Search guarantee history</li>
          </ul>
          <p className={paragraphClass}>The dashboard architecture focused on:</p>
          <ul className={listClass}>
            <li>Fast filtering</li>
            <li>Operational usability</li>
            <li>Large dataset handling</li>
            <li>Role-specific visibility</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Bulk Operations and Mass Updates
          </h3>
          <p className={paragraphClass}>
            Implemented enterprise-level batch workflows allowing users to:
          </p>
          <ul className={listClass}>
            <li>Update multiple requests simultaneously</li>
            <li>Modify guarantee ranges in bulk</li>
            <li>Apply shared operational actions</li>
          </ul>
          <p className={paragraphClass}>
            This significantly reduced repetitive operational tasks.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">
            Dynamic Validation System
          </h3>
          <p className={paragraphClass}>
            Implemented frontend validation architecture handling:
          </p>
          <ul className={listClass}>
            <li>Date overlap validation</li>
            <li>Role-based restrictions</li>
            <li>Dynamic field requirements</li>
            <li>Department-specific logic</li>
            <li>Transport-type-based workflows</li>
          </ul>
          <p className={paragraphClass}>
            The validation system reduced invalid requests and minimized
            downstream errors.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.12}>
          <h2 className={sectionTitleClass}>Performance Optimization</h2>
          <p className={paragraphClass}>
            Performance optimization focused on improving operational efficiency
            across large workflow datasets.
          </p>
          <ul className={listClass}>
            <li>Optimized table rendering</li>
            <li>Controlled form re-renders</li>
            <li>Debounced filtering</li>
            <li>Dynamic data loading</li>
            <li>Reusable state handling</li>
            <li>Efficient bulk action processing</li>
          </ul>
          <p className={paragraphClass}>
            The architecture ensured smooth workflows despite complex forms and
            approvals.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.13}>
          <h2 className={sectionTitleClass}>Role-Based Access Control</h2>
          <p className={paragraphClass}>
            The platform supported multiple operational roles:
          </p>
          <ul className={listClass}>
            <li>Requestors</li>
            <li>Approvers</li>
            <li>Guarantors</li>
            <li>Administrators</li>
          </ul>
          <p className={paragraphClass}>Each role received:</p>
          <ul className={listClass}>
            <li>Customized workflows</li>
            <li>Controlled access permissions</li>
            <li>Restricted operational actions</li>
            <li>Role-specific UI experiences</li>
          </ul>
          <p className={paragraphClass}>
            This improved workflow governance and operational accountability.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.14}>
          <h2 className={sectionTitleClass}>Automation and Notifications</h2>
          <p className={paragraphClass}>The application automated:</p>
          <ul className={listClass}>
            <li>Approval notifications</li>
            <li>Guarantee confirmations</li>
            <li>Workflow routing</li>
            <li>Amendment processing</li>
            <li>Operational email alerts</li>
          </ul>
          <p className={paragraphClass}>
            This reduced manual communication overhead and improved workflow
            transparency across departments.
          </p>
        </CaseStudyReveal>

        <CaseStudyReveal delay={0.15}>
          <h2 className={sectionTitleClass}>Business Results</h2>
          <ul className={listClass}>
            <li>Reduced manual operational effort</li>
            <li>Improved storage cost visibility</li>
            <li>Standardized workflows across departments</li>
            <li>Reduced user input errors</li>
            <li>Improved storage cost recovery</li>
            <li>Streamlined multi-team operations</li>
            <li>Reduced operational processing time</li>
          </ul>
          <p className={paragraphClass}>
            The redesigned workflow architecture improved governance and
            accountability across storage management operations.
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
            <li>Enterprise workflow platforms</li>
            <li>Approval-based system architecture</li>
            <li>Operational dashboard design</li>
            <li>Complex validation systems</li>
            <li>Scalable frontend workflows</li>
            <li>Dynamic pricing engines</li>
            <li>Role-based operational systems</li>
            <li>Large-scale form architecture</li>
            <li>Business-process-driven UI engineering</li>
          </ul>
          <p className={paragraphClass}>
            It reinforced the importance of designing frontend systems around
            operational standardization, financial accuracy, and long-term
            workflow scalability.
          </p>
        </CaseStudyReveal>
      </article>
    </main>
  );
}
