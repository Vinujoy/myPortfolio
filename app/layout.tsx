import Header from "@/components/header";
import "./globals.css";
import { Zilla_Slab } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import ThemeSwitch from "@/components/theme-switch";
import StructuredData from "@/components/structured-data";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const BASE_URL = "https://vinu-joy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ebe5e3" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1917" },
  ],
  title: {
    default: "Vinu Joy | Senior Frontend Developer & Architect",
    template: "%s | Vinu Joy",
  },
  description:
    "Senior Frontend Developer & Architect with 7+ years building scalable React & Next.js applications for enterprise clients. Lighthouse 72→95. Bundle −25%. Open to full-time opportunities.",
  keywords: [
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Architect",
    "Performance Optimization",
    "Core Web Vitals",
    "SSR SSG ISR",
    "Frontend Engineer",
    "Kerala",
    "India",
    "UAE",
  ],
  authors: [{ name: "Vinu Joy", url: BASE_URL }],
  creator: "Vinu Joy",
  publisher: "Vinu Joy",
  category: "technology",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Vinu Joy | Senior Frontend Developer & Architect",
    description:
      "Senior Frontend Developer with 7+ years. React, Next.js, TypeScript specialist. Lighthouse 72→95. Bundle −25%. Open to full-time opportunities.",
    url: BASE_URL,
    siteName: "Vinu Joy Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vinu Joy — Senior Frontend Developer & Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinu Joy | Senior Frontend Developer & Architect",
    description:
      "React & Next.js specialist. Lighthouse 72→95. Bundle −25%. Open to full-time opportunities.",
    creator: "@vinujoy",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // verification: { google: "YOUR_SEARCH_CONSOLE_TOKEN" },
};

const themeScript = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={zilla.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <StructuredData />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
