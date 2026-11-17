import tonicoSmileImg from "@/public/tonicosmile.jpeg";
import retailTenantImg from "@/public/retailtenant.jpg";
import notificationToolImg from "@/public/NOT.jpeg";
import sgImg from "@/public/SG.jpeg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#projects" },
  { name: "Results", hash: "#results" },
  { name: "Experience", hash: "#experience" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer, frontend",
    company: "Dbiz.ai",
    clientNote: "Client: Aldar Properties, UAE",
    excerpt:
      "Architected a hybrid SSG, ISR and SSR Next.js platform for four mall sites. Lighthouse 72 to 95, page loads 40% faster, bundle 25% smaller.",
    date: "Aug 2024 to now",
    stack: "Next.js, TypeScript, Redux Toolkit, ForgeRock, Optimizely",
    href: "/case-studies/retail-web-application",
    hrefLabel: "Read the case study",
  },
  {
    title: "Senior Software Engineer",
    company: "Cubet (contract)",
    clientNote: "E-commerce and payments modules",
    excerpt:
      "Led frontend for scalable React apps with Redux Toolkit and Zustand. Built a reusable component library and mentored juniors: delivery 20% faster.",
    date: "Jun 2024 to Aug 2024",
    stack: "React, Redux Toolkit, Zustand",
  },
  {
    title: "Frontend Web Developer",
    company: "GSCO Technology Services",
    clientNote: "Client: CMA CGM, global logistics",
    excerpt:
      "Built enterprise logistics apps with React and Material UI. Efficiency up 20%, processing time down 15%, time to market down 30%.",
    date: "Mar 2022 to May 2024",
    stack: "React, Material UI, Redux",
    href: "/case-studies/storage-cost-management",
    hrefLabel: "Read the case study",
  },
  {
    title: "Full Stack Web Developer",
    company: "AlignMinds Technologies",
    clientNote: "Multiple client engagements",
    excerpt:
      "Built full-stack apps with React, Node.js and REST APIs. Client satisfaction up 30%, projects delivered up to 25% ahead of schedule.",
    date: "Jul 2019 to Feb 2022",
    stack: "React, Node.js, Feathers.js, REST APIs",
    href: "/case-studies/tonico-smiles",
    hrefLabel: "Read the case study",
  },
  {
    title: "B.Tech, Computer Science and Engineering",
    company: "APJ Abdul Kalam Technological University",
    clientNote: "Viswajyothi College of Engineering and Technology",
    excerpt:
      "Computer science fundamentals, and the first web applications built in the final year.",
    date: "2015 to 2019",
    stack: "Computer science",
  },
] as const;

export const projectsData = [
  {
    title: "Enterprise retail platform",
    description:
      "Four UAE mall websites and a tenant portal on one Next.js codebase. A hybrid SSG, ISR and SSR model keeps public pages fast for search while signed-in dashboards stay personal and live. Page loads got 40% faster and Lighthouse went from 72 to 95.",
    tags: ["Next.js", "TypeScript", "SSR/SSG/ISR", "Redux Toolkit", "ForgeRock", "Optimizely", "SCSS"],
    imageUrl: retailTenantImg,
    caseStudyUrl: "/case-studies/retail-web-application",
    kind: "Real estate retail",
    context: "Public and authenticated enterprise platform",
    constraint: "SEO and personalization in one system",
    decision: "hybrid SSR, SSG and ISR rendering",
    metric: { value: "95", label: "Lighthouse, from 72" },
    alt: "Enterprise retail platform home page with the signed-in dashboard",
  },
  {
    title: "Cargo Readiness Notification",
    description:
      "Replaced a manual booking process at CMA CGM with an internal React tool: custom autocomplete filters, a rich-text email template editor, milestone tracking and role-based user management. Communication errors fell 20%.",
    tags: ["React", "Material UI", "Redux", "Rich text editor", "Role management"],
    imageUrl: notificationToolImg,
    caseStudyUrl: "/case-studies/import-cargo-release",
    kind: "Logistics operations",
    context: "Internal cargo readiness operations",
    constraint: "high-volume manual communication loops",
    decision: "a data-grid-first operational interface",
    metric: { value: "−20%", label: "Communication errors" },
    alt: "Cargo readiness notification tool with filters and milestone tracking",
  },
  {
    title: "Storage Guarantee system",
    description:
      "Replaced error-prone spreadsheets at CMA CGM with one React application for rail and port operations: multi-step request flows, automatic storage cost calculation and a container movement matrix. Part of a $16M+ rise in operational profit.",
    tags: ["React", "Material UI", "Redux", "React Hook Form", "Data grid"],
    imageUrl: sgImg,
    caseStudyUrl: "/case-studies/storage-cost-management",
    kind: "Logistics platform",
    context: "Storage guarantee lifecycle management",
    constraint: "multi-role approvals and dynamic calculations",
    decision: "a workflow-oriented validation architecture",
    metric: { value: "$16M+", label: "Operational profit" },
    alt: "Storage guarantee system showing a request and its cost calculation",
  },
  {
    title: "TONICO SMILES",
    description:
      "A consumer grocery and delivery store built with React and Firebase: product listings, cart, Firebase authentication and Razorpay payments. UX work lifted customer retention 40% and average order value 25%.",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase Auth", "Razorpay"],
    imageUrl: tonicoSmileImg,
    caseStudyUrl: "/case-studies/tonico-smiles",
    kind: "Consumer e-commerce",
    context: "Consumer grocery and delivery platform",
    constraint: "mobile-heavy daily ordering behaviour",
    decision: "responsive, component-led commerce flows",
    metric: { value: "+40%", label: "Customer retention" },
    alt: "TONICO SMILES storefront with product listings and cart",
  },
] as const;

export const factsData = [
  { label: "Based in", value: "Kerala, India" },
  { label: "Building for the web since", value: "2019" },
  { label: "Experience", value: "7+ years" },
  { label: "Availability", value: "Open to freelance" },
] as const;

/** Each row points at a project (index into projectsData): hovering shows its screen. */
export const resultGroups = [
  {
    name: "Performance",
    items: [
      { label: "Lighthouse score, retail platform", value: "72 to 95", project: 0 },
      { label: "Page load time, retail platform", value: "−40%", project: 0 },
      { label: "JavaScript bundle size, retail platform", value: "−25%", project: 0 },
    ],
  },
  {
    name: "Delivery",
    items: [
      { label: "Time to market, component library", value: "−30%", project: 1 },
      { label: "Team delivery speed, through mentoring", value: "+20%", project: 0 },
      { label: "Client satisfaction, custom solutions", value: "+30%", project: 3 },
      { label: "Projects delivered ahead of schedule", value: "up to 25%", project: 3 },
    ],
  },
  {
    name: "Business impact",
    items: [
      { label: "Operational profit, Storage Guarantee", value: "$16M+", project: 2 },
      { label: "Customer retention, TONICO SMILES", value: "+40%", project: 3 },
      { label: "Average order value, TONICO SMILES", value: "+25%", project: 3 },
    ],
  },
  {
    name: "Operations",
    items: [
      { label: "Communication errors, Cargo Readiness", value: "−20%", project: 1 },
      { label: "Operational efficiency, CMA CGM apps", value: "+20%", project: 2 },
      { label: "Processing time, CMA CGM apps", value: "−15%", project: 2 },
    ],
  },
  {
    name: "Scale",
    items: [
      { label: "Mall websites on one component system", value: "4", project: 0 },
      { label: "Years building for the web", value: "7+", project: 0 },
      { label: "Projects delivered", value: "15+", project: 3 },
    ],
  },
] as const;

export const skillGroups = [
  { name: "Frontend", items: "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, responsive design, accessibility" },
  { name: "State and data", items: "Redux Toolkit, Zustand, REST APIs, Node.js" },
  { name: "UI and styling", items: "Material UI, Tailwind CSS, SCSS, Bootstrap, Storybook, design systems, Figma" },
  { name: "Performance", items: "SSR, SSG, ISR, Core Web Vitals, Lighthouse, Webpack tuning, code-splitting" },
  { name: "Integration", items: "ForgeRock SSO, Salesforce and Yardi APIs, Optimizely A/B testing and personalization" },
  { name: "Testing and tooling", items: "Jest, React Testing Library, Git, Azure DevOps, CI/CD, Postman, JIRA, Agile and Scrum" },
] as const;
