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

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vinu Joy | Senior Frontend Developer & Architect",
  description:
    "Senior Frontend Developer with 6+ years building scalable React & Next.js applications. Lighthouse 72→95. Bundle size −25%. Available for freelance projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Frontend Architect",
    "Freelance Frontend Developer",
    "Kerala",
    "India",
  ],
  authors: [{ name: "Vinu Joy", url: "https://vinu-joy.vercel.app" }],
  openGraph: {
    title: "Vinu Joy | Senior Frontend Developer & Architect",
    description:
      "Senior Frontend Developer with 6+ years. React, Next.js, TypeScript specialist. Lighthouse 72→95. Available for freelance.",
    url: "https://vinu-joy.vercel.app",
    siteName: "Vinu Joy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinu Joy | Senior Frontend Developer",
    description:
      "React & Next.js specialist. Lighthouse 72→95. Available for freelance projects.",
  },
  robots: { index: true, follow: true },
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
