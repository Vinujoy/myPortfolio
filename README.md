# Vinu Joy — Senior Frontend Developer & Architect

> **Live site:** [vinu-joy.vercel.app](https://vinu-joy.vercel.app)  
> **Email:** vinujoydev@gmail.com  
> **LinkedIn:** [linkedin.com/in/vinujoy](https://www.linkedin.com/in/vinujoy/)  
> **Location:** Kerala, India  
> **Status:** Open to full-time opportunities

---

## Profile Summary

Senior Frontend Developer with **7+ years** of experience building enterprise-grade **React** and **Next.js** applications. I specialize in **SSR/SSG/ISR architectures**, performance optimization, and scalable component systems.

I design frontend systems where performance, scalability, and maintainability are part of the same decision — not tradeoffs made at different stages.

**Approach:** Discover → Architect → Deliver

### Key Metrics

| Metric | Value |
|--------|-------|
| Years of experience | 7+ |
| Projects delivered | 15+ |
| Lighthouse score achieved | 95 |
| Bundle size reduction | −25% |
| Page load improvement | +40% |

---

## Work Experience

### Senior Software Engineer (Frontend) — Dbiz.ai
**Aug 2024 – Present** · Client: Aldar Properties, UAE

- Architected the Next.js retail platform for four mall sites with a hybrid **SSG, ISR and SSR** model
- Raised Lighthouse performance from **72 to 95**, cut page loads by **40%** and bundle size by **25%**
- Integrated ForgeRock authentication, Redux Toolkit and Salesforce/Yardi APIs; built a reusable component system shared by all four sites
- Implemented Optimizely A/B testing and personalization

---

### Senior Software Engineer (Contract) — Cubet
**Jun 2024 – Aug 2024**

- Delivered enterprise software solutions
- Built a comprehensive reusable React component library, reducing time-to-market by **30%**
- Optimized bundle sizes by **25%** through Webpack tuning

---

### Frontend Web Developer — GSCO Technology Services (CMA CGM)
**Mar 2022 – May 2024**

- Built enterprise React applications for the CMA CGM division
- Delivered complex projects **25% ahead of schedule**
- Storage Guarantee system contributed to **$16M+ profit increase**

---

### Full Stack Web Developer — AlignMinds Technologies
**Jul 2019 – Feb 2022**

- Built custom full-stack solutions increasing client satisfaction by **30%**
- Worked across React, Node.js, and various API integrations for diverse client projects

---

### BTech — Computer Science & Engineering
**APJ Abdul Kalam Technological University · 2015 – 2019**

- Graduated from Viswajyothi College of Engineering and Technology
- Specialized in computer science fundamentals and began building web applications during final year

---

## Selected Projects

### 1. Enterprise Retail Platform
**Role:** Senior Frontend Engineer · **Type:** Enterprise · B2B + B2C  
**Stack:** Next.js · TypeScript · Redux Toolkit · SSR/SSG/ISR · ForgeRock · Optimizely · SCSS  
**Case study:** [/case-studies/retail-web-application](https://vinu-joy.vercel.app/case-studies/retail-web-application)

**Summary:**  
Built a hybrid SSR + SSG + ISR Next.js platform with SEO-first public pages and secure personalized dashboards for a major Middle East real estate client.

**Problem:**  
The client needed SEO-indexed public pages for property discovery alongside secure, data-rich authenticated dashboards for tenants — all in one system. Existing approaches forced a trade-off between static SEO performance and real-time personalization.

**Architecture decisions:**
- **Hybrid SSG/ISR + SSR rendering** — Public pages built statically with ISR for CMS-driven regeneration; authenticated routes use SSR for fresh user-specific data
- **Centralized Redux Toolkit state** — Predictable cross-module state across payments, documents, and store data without prop drilling
- **Service-layer API abstraction** — Standardized Salesforce, Yardi, and Sitecore CMS integrations with shared error handling
- **Route-level code splitting** — Feature-heavy authenticated modules dynamically imported to keep public page bundles lean

**Outcome:**
| Result | Value |
|--------|-------|
| Lighthouse score | 72 → 95 |
| Bundle size | −25% |
| Page load | +40% improvement |

**Modules built:** Portfolio Dashboard · Payments Module · Documents Module · Store Detail Experience

---

### 2. Cargo Readiness Notification — CMA CGM
**Role:** Frontend Engineer · **Type:** Enterprise · Internal Operations  
**Stack:** React · TypeScript · Redux · Material UI · MUI Data Grid · Excel Export  
**Case study:** [/case-studies/import-cargo-release](https://vinu-joy.vercel.app/case-studies/import-cargo-release)

**Summary:**  
Replaced a manual booking process with an internal React tool for CMA CGM Canada — automating cargo release notifications across rail and port operations.

**Problem:**  
Customer service teams validated payments, checked pickup numbers from rail vendors, and emailed customers individually — one container at a time. With hundreds of daily cargo releases across CN Rail, CP Rail, and port operations, this caused pickup delays, increased demurrage costs, and no real-time visibility.

**Architecture decisions:**
- **Custom data grid** — Row-level updates, inline status visualization, and dialog-based detail views for operational workflows
- **Debounced autocomplete search** — Reduced API query volume by ~70% on large container datasets
- **Export-first operational design** — Excel reports for release history, filtered datasets, and notification logs as a first-class feature
- **Standardized service and error patterns** — Shared abstraction across CN Rail, CP Rail, finance validation, and customer notification APIs

**Automated release lifecycle:**  
Bill of Lading verification → payment clearance → customer credit check → invoice validation → pickup number retrieval → customer notification. Background jobs polled vendor APIs hourly.

**Outcome:**
| Result | Value |
|--------|-------|
| Communication errors | −20% |
| Release sync | Hourly automated |
| Operations unified | Rail + port in one platform |

---

### 3. Storage Guarantee System — CMA CGM
**Role:** Frontend Engineer · **Type:** Enterprise · Internal Operations  
**Stack:** React · TypeScript · Redux · Material UI · React Hook Form · MUI Data Grid · RBAC  
**Case study:** [/case-studies/storage-cost-management](https://vinu-joy.vercel.app/case-studies/storage-cost-management)

**Summary:**  
Replaced error-prone spreadsheets with a unified React application for rail and port operations — standardizing storage guarantee workflows across six business teams.

**Problem:**  
Storage guarantee workflows were owned by six teams (Intermodal, Equipment, Port Operations, DDSM, Client Solutions, VIP) each using their own approach. Manual calculations caused inconsistent cost recovery, approval delays via email chains, and no centralized view of outstanding guarantee exposure — approximately **$16M in annual financial exposure**.

**Architecture decisions:**
- **Multi-stage workflow modeling** — Create → approve → confirm → amend → close with role-aware transitions and validation gates
- **Client-side dynamic pricing engine** — Immediate cost feedback based on equipment type, terminal, tier pricing, and calendar/working day rules
- **Bulk operations as first-class feature** — Mass update and apply for high daily request volumes
- **Frontend validation layer** — Prevented duplicate guarantee periods and date conflicts before submission

**Role-based design:**  
Requestors · Approvers · Guarantors · Administrators — each with role-specific UI controls for accountable, auditable workflows.

**Outcome:**
| Result | Value |
|--------|-------|
| Financial exposure addressed | ~$16M |
| Roles unified | 4 roles in one platform |
| Workflow standardized | 7+ steps end-to-end |

---

### 4. TONICO SMILES — E-commerce
**Role:** Frontend Developer · **Type:** Consumer · E-Commerce  
**Stack:** React · Tailwind CSS · Redux · Firebase Auth · Razorpay  
**Case study:** [/case-studies/tonico-smiles](https://vinu-joy.vercel.app/case-studies/tonico-smiles)

**Summary:**  
Built a mobile-first online grocery and fresh delivery platform — enabling customers to browse and order fish, chicken, meat, seafood, vegetables, poultry, groceries, and daily essentials for home delivery.

**Problem:**  
The business operated entirely through physical stores and WhatsApp orders — no discoverable online presence, no persistent cart, no checkout flow. Frequent grocery buyers default to whatever is most convenient without a fast digital channel.

**Architecture decisions:**
- **Mobile-first layout strategy** — Core flows optimized for thumb reach and fast tap interactions
- **Category-driven component system** — 8 product groups with reusable category components (data change, not code change)
- **Reusable cart and checkout modules** — Redux-backed shared state across product listings, cart review, delivery scheduling, and payment
- **Lazy loading and optimized image rendering** — Smooth scroll performance on mid-range Android devices

**Outcome:**
| Result | Value |
|--------|-------|
| Customer retention | +40% |
| Average order value | +25% |
| Categories at launch | 8 |

---

## Skills

### Core Development
- React.js
- Next.js
- TypeScript
- Redux Toolkit
- SSR / SSG / ISR
- Performance Optimization

### Styling & UI
- Tailwind CSS
- Material UI
- CSS / SCSS
- Framer Motion
- Core Web Vitals

### Tooling & Design
- Jest
- Figma
- Git / GitHub

---

## Portfolio Webapp — Tech Stack

This repository is the source code for [vinu-joy.vercel.app](https://vinu-joy.vercel.app).

| Layer | Technology |
|-------|------------|
| Framework | Next.js 13.4.8 (App Router) |
| Typeface | Zilla Slab (next/font/google) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.3 |
| Animation | Framer Motion |
| Email | Resend + React Email |
| Icons | React Icons |
| Deployment | Vercel |

### Routes

| Route | Type |
|-------|------|
| `/` | Homepage (Hero folders, About, Work, Results, Experience, Skills, Contact) |
| `/case-studies/retail-web-application` | Static case study |
| `/case-studies/import-cargo-release` | Static case study |
| `/case-studies/storage-cost-management` | Static case study |
| `/case-studies/tonico-smiles` | Static case study |
| `/robots.txt` | SEO robots |
| `/sitemap.xml` | SEO sitemap |

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Contact form setup

1. Add `RESEND_API_KEY` environment variable in `.env.local`
2. In `actions/send-email.ts`, set the `"to"` email to your own address

---

## Downloads & Links

| Resource | URL |
|----------|-----|
| Portfolio | [vinu-joy.vercel.app](https://vinu-joy.vercel.app) |
| CV (PDF) | [/Senior_Frontend_Developer_Vinu_Joy.pdf](https://vinu-joy.vercel.app/Senior_Frontend_Developer_Vinu_Joy.pdf) |
| LinkedIn | [linkedin.com/in/vinujoy](https://www.linkedin.com/in/vinujoy/) |
| Email | vinujoydev@gmail.com |

---

© 2026 Vinu Joy. All rights reserved.
