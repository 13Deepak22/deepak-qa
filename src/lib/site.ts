import { about, education, experience, profile } from "@/data/portfolio";

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export const siteDescription =
  "Deepak Gupta is a QA engineer in India. Manual and automation testing for fintech: UPI, lending, cards, API testing, Selenium, Appium, and Playwright.";

export const siteKeywords = [
  "Deepak Gupta",
  "QA Engineer",
  "QA engineer India",
  "fintech testing",
  "manual testing",
  "test automation",
  "Selenium",
  "Appium",
  "Playwright",
  "API testing",
  "JMeter",
  "UPI testing",
];

export function personJsonLd() {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: `${profile.name} — ${profile.role}`,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": `${base}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: profile.name,
        jobTitle: profile.role,
        description: siteDescription,
        email: profile.email,
        telephone: profile.phone,
        url: base,
        image: `${base}/portrait.png`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.school,
        },
        worksFor: {
          "@type": "Organization",
          name: experience[0].org,
        },
        knowsAbout: about.expertiseTerms,
        sameAs: [profile.linkedin, profile.github],
      },
    ],
  };
}
