import { about, education, experience, profile, roleTitles } from "@/data";

const roleNames = roleTitles.flatMap((title) =>
  title === "SDET" ? ["SDET", "Software Development Engineer in Test"] : [title],
);

export function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export const siteTitle = `${profile.name} — ${profile.role} | Manual & Automation Testing`;

export const siteTitleSuffix = `${profile.name}, ${profile.role}`;

export const siteDescription =
  "Deepak Gupta, QA engineer in India (Noida). 3+ years of manual and automation testing for fintech: UPI, lending, APIs, Selenium, Appium, and Playwright.";

export const siteKeywords = [
  "Deepak Gupta",
  ...roleNames,
  "QA engineer India",
  "QA engineer Noida",
  "fintech testing",
  "manual testing",
  "test automation",
  "mobile app testing",
  "Selenium",
  "Appium",
  "Playwright",
  "API testing",
  "Postman",
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
        name: siteTitle,
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
          addressLocality: profile.places,
          addressCountry: "IN",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: profile.role,
          alternateName: roleNames.filter((name) => name !== profile.role),
          occupationLocation: { "@type": "City", name: profile.places },
          skills: about.expertiseTerms.join(", "),
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

export function profilePageJsonLd() {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${base}/about#profile`,
    url: `${base}/about`,
    name: `About Me — ${siteTitleSuffix}`,
    isPartOf: { "@id": `${base}/#website` },
    mainEntity: { "@id": `${base}/#person` },
  };
}
