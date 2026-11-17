# myPortfolio — AI Project Context

Upload this file to Claude when you need to edit the portfolio without access to the full repository.

---

## Owner & live site

| | |
|---|---|
| **Name** | Vinu Joy |
| **Role** | Senior Frontend Developer / Frontend Architect |
| **Experience** | 7+ years (since Jul 2019) |
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
│   ├── layout.tsx          # Root layout, Zilla Slab font, SEO metadata, providers
│   ├── page.tsx            # Home: stacks all sections in order
│   ├── globals.css         # Design tokens (rose-grey paper tones, light/dark), folder, sheet and coupon shapes
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

Design direction: **"The page is the object"** (taste-skill, seed 371202920). The site is a client case file. One typeface (Zilla Slab), flat rose-grey tones, one green accent used only on the current nav link and the footer button. No gradients, no shadows at rest, no hairlines.

Sections render top-to-bottom:
1. **Intro** (`#home`) — dark ground, name as `h1`, one sentence, five tabbed folders (About, Work, Results, Experience, Contact) that link to their sections; the front folder holds the CTA
2. **About** (`#about`) — a typed letter on a paper sheet with a scalloped edge, plus a tear-off strip with the email
3. **Work** (`#projects`) — sticky stacked folder bands from `projectsData`; the first holds the live Lighthouse before/after (`before-after.tsx`)
4. **Results** (`#results`) — giant word, bars that open in place from `resultGroups`; hovering a row previews its project screen
5. **Experience** (`#experience`) — pinned deck of cards that fold into spines, from `experiencesData` (pin only on `lg+`; stacked on phones)
6. **Skills** (`#skills`) — grouped list from `skillGroups`
7. **Contact** (`#contact`) — coupon card with notches and a perforation; the form is a coupon to cut out

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
| Skills | `lib/data.ts` → `skillGroups` |
| Result figures | `lib/data.ts` → `resultGroups` (each row points at a project index for the hover preview) |
| About / intro copy | `components/about.tsx`, `components/intro.tsx` |
| SEO title/description | `app/layout.tsx` → `metadata` |
| Contact email recipient | `actions/sendEmail.ts` → `to` |
| Email template | `email/contact-form-email.tsx` |
| LinkedIn / social links | `components/contact.tsx`, `components/experience.tsx` |
| Footer copy | `components/footer.tsx` |
| Colors / fonts | `app/layout.tsx` (font), `app/globals.css` (`:root` tokens + `html.dark`) |
| Profile photo | `public/passport.jpg` + `components/about.tsx` import |

---

## Data shapes (lib/data.ts)

```typescript
// Navigation — name must match SectionName / useSectionInView argument
export const links = [
  { name: "Home", hash: "#home" },
  // ...
] as const;

// Experience — newest first; href/hrefLabel optional (links to a case study)
export const experiencesData = [
  { title, company, clientNote, excerpt, date, stack, href?, hrefLabel? },
] as const;

// Projects — imageUrl is a StaticImageData (imported from public/)
export const projectsData = [
  { title, description, tags, imageUrl, caseStudyUrl, kind, context, constraint, decision, metric: { value, label }, alt },
] as const;

// Results — grouped bars; each item's `project` is an index into projectsData
export const resultGroups = [{ name, items: [{ label, value, project }] }] as const;

// Skills — grouped, displayed as a definition list
export const skillGroups = [{ name, items: "comma separated string" }] as const;
```

**Adding a new section:**
1. Append to `links` in `lib/data.ts`
2. Create `components/your-section.tsx` with `useSectionInView("YourName")`
3. Import and add to `app/page.tsx`
4. Add `id="your-section"` + `scroll-mt-12` on the section element

---

## Contact form flow

1. `components/contact.tsx` — client form, `action={async (formData) => ...}`
2. Fields: `senderName`, `senderEmail` (email, max 500 chars), `message` (textarea, max 5000 chars)
3. Calls `sendEmail(formData)` from `actions/sendEmail.ts`
4. Validates → sends via Resend with `ContactFormEmail` React template
5. Toast success / error via `react-hot-toast`
6. `submit-btn.tsx` uses `experimental_useFormStatus` for pending spinner

---

## Key dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Menu transitions and the experience deck scroll progress |
| `react-intersection-observer` | Scroll-spy |
| `react-icons` | UI icons |
| `clsx` | Conditional class names in header |
| `resend`, `@react-email/*` | Email |

---

## Component reference

| Component | Role |
|-----------|------|
| `header.tsx` | Fixed bar: links left, wordmark centre, links right; turns dark over the hero; green current link |
| `intro.tsx` | Hero: name, sentence, five tabbed folders, CTA on the front folder |
| `about.tsx` | Letter on a scalloped sheet and tear-off email strip |
| `projects.tsx` | Sticky stacked folder bands from `projectsData` |
| `before-after.tsx` | Live Lighthouse 72 / 95 dial with Before and After buttons |
| `results.tsx` | Giant "Results" word, `details` bars, hover preview frame |
| `experience.tsx` | Pinned deck of cards that fold into spines (stacked on phones) |
| `skills.tsx` | Grouped skills from `skillGroups` |
| `contact.tsx` | Coupon card with the form and toasts |
| `reveal.tsx` | Scroll entrance; hidden only when `html.js` is set, so content shows without script |
| `theme-switch.tsx` | Dark / Light toggle (fixed bottom-right) |
| `submit-btn.tsx` | Form submit with loading spinner |
| `footer.tsx` | Back of the object: full-width name, green email button |
| `structured-data.tsx` | JSON-LD Person and WebSite |
| `case-study-reveal.tsx` | Entrance wrapper for case-study pages |

---

## SEO files (Next.js 13 App Router)

- `app/robots.ts` → `/robots.txt` — allows all crawlers, points to sitemap
- `app/sitemap.ts` → `/sitemap.xml` — single entry for the portfolio URL
- Full `Metadata` object in `app/layout.tsx` includes title, description, keywords, OG, Twitter, robots

---

## Styling notes

- **Font**: Zilla Slab only (400, 500, 600), loaded in `app/layout.tsx` as `--font-body`
- **Tokens**: `--bg`, `--surface`, `--tone-3` to `--tone-5`, `--ink`, `--muted`, `--accent`, `--hero`; redefined under `html.dark`
- **Type steps**: `--step-small`, `--step-body`, `--step-lead`, `--step-head`. In Tailwind use `text-[length:var(--step-lead)]` (the `length:` hint is required) or the `.text-lead` / `.small` classes
- **Shapes**: tabs, sheet scallops and coupon notches are `clip-path` / `mask` fills in `globals.css`; separators are space or a tone step, never a line
- **Radius**: square everywhere (buttons, cards); only the portrait is round
- **Focus states**: global `:focus-visible` ring in `globals.css`
- **Design checks**: `node .claude/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:3000 --out .taste-skill/after2` (needs the dev server running)

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
