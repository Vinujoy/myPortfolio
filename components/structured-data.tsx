/**
 * JSON-LD structured data for Google rich results.
 * Person + WebSite schemas placed in the root layout.
 */
export default function StructuredData() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vinu Joy",
    url: "https://vinu-joy.vercel.app",
    image: "https://vinu-joy.vercel.app/og-image.png",
    jobTitle: "Senior Frontend Developer & Architect",
    description:
      "Senior Frontend Developer with 7+ years building scalable React & Next.js applications for enterprise clients. Specialises in SSR/SSG/ISR architecture, performance optimisation, and component systems.",
    email: "vinujoydev@gmail.com",
    telephone: "+919995452371",
    sameAs: ["https://www.linkedin.com/in/vinujoy/"],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "Performance Optimisation",
      "Core Web Vitals",
      "SSR",
      "SSG",
      "ISR",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "APJ Abdul Kalam Technological University",
    },
    worksFor: {
      "@type": "Organization",
      name: "Dbiz.ai",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Kerala",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vinu Joy Portfolio",
    url: "https://vinu-joy.vercel.app",
    description:
      "Portfolio of Vinu Joy — Senior Frontend Developer & Architect specialising in React, Next.js, and TypeScript.",
    author: { "@type": "Person", name: "Vinu Joy" },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
