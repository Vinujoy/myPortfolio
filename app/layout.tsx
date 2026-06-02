import Header from "@/components/header";
import "./globals.css";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import CustomCursor from "@/components/custom-cursor";
import ThemeSwitch from "@/components/theme-switch";
import StructuredData from "@/components/structured-data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

const BASE_URL = "https://vinu-joy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vinu Joy | Senior Frontend Developer & Architect",
    template: "%s | Vinu Joy",
  },
  description:
    "Senior Frontend Developer & Architect with 6+ years building scalable React & Next.js applications for enterprise clients. Lighthouse 72→95. Bundle −25%. Available for freelance.",
  keywords: [
    "Senior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Architect",
    "Performance Optimization",
    "Core Web Vitals",
    "SSR SSG ISR",
    "Freelance Frontend Developer",
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
      "Senior Frontend Developer with 6+ years. React, Next.js, TypeScript specialist. Lighthouse 72→95. Bundle −25%. Available for freelance.",
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
      "React & Next.js specialist. Lighthouse 72→95. Bundle −25%. Available for freelance projects.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen pt-16">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <StructuredData />
        <ThemeContextProvider>
          <CustomCursor />
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
