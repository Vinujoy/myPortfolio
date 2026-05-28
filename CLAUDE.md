# myPortfolio — AI Project Context

Upload this file to Claude when you need to edit the portfolio without access to the full repository.

---

## Owner & live site

| | |
|---|---|
| **Name** | Vinu Joy |
| **Role** | Senior Frontend Developer / Freelance Frontend Architect |
| **Experience** | 6 years 10 months |
| **Live site** | https://vinu-joy.vercel.app |
| **Email** | vinujoydev@gmail.com |
| **LinkedIn** | https://www.linkedin.com/in/vinujoy/ |

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 13.4 (App Router) |
| Language | TypeScript 5, React 18 |
| Styling | Tailwind CSS 3.3 (`darkMode: "class"`) |
| Animations | Framer Motion |
| Email | Resend + React Email (Server Action) |
| Deploy | Vercel |
| Path alias | `@/*` → project root |

---

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

**Environment** — create `.env.local`, never commit:
```
RESEND_API_KEY=re_xxxxxxxx
```

Contact email recipient is hardcoded in `actions/sendEmail.ts` → `to: "vinujoydev@gmail.com"`.

---

## Repository structure

```
myPortfolio/
├── app/
│   ├── layout.tsx          # Root layout, full SEO metadata, providers, dark bg
│   ├── page.tsx            # Home: stacks all sections in order
│   ├── globals.css         # Tailwind + .borderBlack + :focus-visible + line-height
│   ├── robots.ts           # Next.js 13 robots.txt generation
│   └── sitemap.ts          # Next.js 13 sitemap.xml generation
├── actions/
│   └── sendEmail.ts        # "use server" — Resend contact form
├── components/             # One component per section (+ shared UI)
├── context/
│   ├── active-section-context.tsx   # Nav highlight + scroll-spy
│   └── theme-context.tsx            # light/dark toggle via "dark" class only
├── email/
│   └── contact-form-email.tsx       # React Email template
├── lib/
│   ├── data.ts             # ★ MAIN CONTENT: nav, projects, experience, skills
│   ├── types.ts            # SectionName derived from links
│   ├── hooks.ts            # useSectionInView (intersection observer)
│   └── utils.ts            # validateString, getErrorMessage
├── public/                 # Static assets (images, CV PDF)
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Page layout (app/page.tsx)

Sections render top-to-bottom:
1. **Intro** (`#home`) — bold headline, metrics sub-line, freelance badge, CTAs
2. SectionDivider
3. **About** (`#about`)
4. **Projects** (`#projects`) — from `projectsData`
5. **Skills** (`#skills`) — from `skillsData`
6. **Experience** (`#experience`) — vertical timeline from `experiencesData`
7. **Contact** (`#contact`)

`app/layout.tsx` wraps all content with:
- `ThemeContextProvider` → `ActiveSectionContextProvider`
- Fixed **Header** (hash nav, animated active pill)
- **Footer**
- **ThemeSwitch** (fixed bottom-right sun/moon)
- **Toaster** (react-hot-toast, top-right)

---

## Core patterns

### 1. Client vs server components
- `"use client"` — components using hooks, Framer Motion, or browser APIs
- `"use server"` — `actions/sendEmail.ts`
- `app/layout.tsx` and `app/page.tsx` are Server Components

### 2. Scroll-spy navigation
- `lib/data.ts` → `links` defines nav items (name + hash)
- `SectionName` = union of link names (`"Home" | "About" | ...`)
- Each section calls `useSectionInView("SectionName", threshold?)`
- Nav clicks call `setActiveSection` + `setTimeOfLastClick(Date.now())` (suppresses observer for 1 s)
- Header uses Framer `layoutId="activeSection"` for the sliding pill
- `aria-current="page"` is set on the active nav link

### 3. Section conventions
- `id` attribute matches hash (without `#`): e.g. `id="about"`
- `scroll-mt-28` for fixed header offset (`scroll-mt-[100rem]` on intro)
- Shared title: `<SectionHeading>...</SectionHeading>`
- Border utility class: `borderBlack` (defined in `globals.css`)

### 4. Dark mode
- Tailwind `dark:` variants; only the `dark` class is toggled on `documentElement`
- Theme persisted in `localStorage` key `"theme"`
- System `prefers-color-scheme: dark` detected on first visit

### 5. Images
- Project/intro images: `import x from "@/public/filename.ext"` → pass to `next/image`
- Hero image: `priority={true}` (LCP)
- All other images: `loading="lazy"` (explicit, belt-and-suspenders)
- CV download: `/Senior_Frontend_Developer_Vinu_Joy.pdf` in `public/`

---

## Where to edit common things

| Goal | File |
|------|------|
| Nav order / labels | `lib/data.ts` → `links`; reorder in `app/page.tsx` |
| Job history | `lib/data.ts` → `experiencesData` |
| Project cards | `lib/data.ts` → `projectsData` + image in `public/` |
| Skills | `lib/data.ts` → `skillsData` |
| About / intro copy | `components/about.tsx`, `components/intro.tsx` |
| SEO title/description | `app/layout.tsx` → `metadata` |
| Contact email recipient | `actions/sendEmail.ts` → `to` |
| Email template | `email/contact-form-email.tsx` |
| LinkedIn / social links | `components/intro.tsx` |
| Footer copy | `components/footer.tsx` |
| Colors / fonts | `app/layout.tsx`, `app/globals.css`, `tailwind.config.js` |
| Profile photo | `public/passport.jpg` + `components/intro.tsx` import |
| Dark background depth | `app/layout.tsx` body → `dark:bg-gray-950` |

---

## Data shapes (lib/data.ts)

```typescript
// Navigation — name must match SectionName / useSectionInView argument
export const links = [
  { name: "Home", hash: "#home" },
  // ...
] as const;

// Experience — icon is React.createElement(SomeIcon)
export const experiencesData = [
  {
    title: string,
    location: string,
    description: string,
    icon: React.ReactElement,
    date: string,         // e.g. "Aug 2024 – Present"
  },
] as const;

// Projects — imageUrl is a StaticImageData (imported from public/)
export const projectsData = [
  {
    title: string,
    description: string,
    tags: string[],
    imageUrl: StaticImageData,
  },
] as const;

// Skills — simple string array, displayed as pills
export const skillsData = ["React.js", "Next.js", ...] as const;
```

**Adding a new section:**
1. Append to `links` in `lib/data.ts`
2. Create `components/your-section.tsx` with `useSectionInView("YourName")`
3. Import and add to `app/page.tsx`
4. Add `id="your-section"` + `scroll-mt-28` on the section element

---

## Contact form flow

1. `components/contact.tsx` — client form, `action={async (formData) => ...}`
2. Fields: `senderEmail` (email, max 500 chars), `message` (textarea, max 5000 chars)
3. Calls `sendEmail(formData)` from `actions/sendEmail.ts`
4. Validates → sends via Resend with `ContactFormEmail` React template
5. Toast success / error via `react-hot-toast`
6. `submit-btn.tsx` uses `experimental_useFormStatus` for pending spinner

---

## Key dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Animations, hero, project scroll effects |
| `react-intersection-observer` | Scroll-spy |
| `react-vertical-timeline-component` | Experience section |
| `react-icons` | UI icons |
| `clsx` | Conditional class names in header |
| `resend`, `@react-email/*` | Email |

---

## Component reference

| Component | Role |
|-----------|------|
| `header.tsx` | Fixed nav, scroll-spy highlight, `aria-current`, `aria-label` on nav |
| `intro.tsx` | Hero: bold headline, metrics sub-line, freelance badge, CTA buttons |
| `about.tsx` | Bio with freelance positioning |
| `projects.tsx` | Maps `projectsData` → `Project` |
| `project.tsx` | Card with scroll-linked scale/opacity, descriptive alt text |
| `skills.tsx` | Animated minimal border pills from `skillsData` |
| `experience.tsx` | `VerticalTimeline` with theme-aware styles |
| `contact.tsx` | Form + toasts |
| `section-heading.tsx` | `<h2>` wrapper |
| `section-divider.tsx` | Visual break after intro |
| `theme-switch.tsx` | Sun/moon toggle (fixed bottom-right) |
| `submit-btn.tsx` | Form submit with loading spinner |
| `footer.tsx` | Copyright + tech stack note |

---

## SEO files (Next.js 13 App Router)

- `app/robots.ts` → `/robots.txt` — allows all crawlers, points to sitemap
- `app/sitemap.ts` → `/sitemap.xml` — single entry for the portfolio URL
- Full `Metadata` object in `app/layout.tsx` includes title, description, keywords, OG, Twitter, robots

---

## Styling notes

- **Body**: `bg-gray-50` light / `dark:bg-gray-950` dark, Inter font
- **Decorative blobs** in `layout.tsx`: light pink + light violet in light mode; `#946263` + `#676394` in dark
- **Projects**: alternating image layout on `sm+` via `group-even:` Tailwind classes
- **Skills pills**: border-only, `hover:-translate-y-0.5` lift
- **Focus states**: global `:focus-visible` ring in `globals.css`
- **Line height**: global `line-height: 1.7` on body in `globals.css`

---

## Editing rules for AI

1. **Minimal scope** — most changes are just `lib/data.ts` edits
2. **Preserve `"use client"`** on any component with hooks or motion
3. **Keep `as const`** on all data arrays (TypeScript infers `SectionName` from it)
4. **Match nav IDs** — `links.hash`, section `id`, and `useSectionInView("Name")` must align
5. **Images** — import from `@/public/`, use `next/image`, set `priority` on hero only
6. **Never commit** `.env.local`
7. **TypeScript strict mode** is on — avoid `any`, verify after structural changes
8. **Next.js 13 quirks** — `experimental.serverActions: true` in `next.config.js`; `useFormStatus` is experimental

---

## Public assets

```
public/
├── passport.jpg                          # Hero profile photo
├── Senior_Frontend_Developer_Vinu_Joy.pdf  # CV download
├── retailtenant.jpg                      # Enterprise retail tenant project
├── NOT.jpeg                              # Cargo Readiness project
├── SG.jpeg                               # Storage Guarantee project
└── tonicosmile.jpeg                      # TONICO SMILES project
```

---

## Contact & links

- Email: vinujoydev@gmail.com
- LinkedIn: https://www.linkedin.com/in/vinujoy/
- Live: https://vinu-joy.vercel.app

---

*Keep this file updated when architecture or major dependencies change. Last updated: May 2025.*
