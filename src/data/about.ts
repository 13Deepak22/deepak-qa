/**
 * About page copy and education. The About page stays free of employer and
 * product names, which live on the homepage.
 */

import { experienceWords } from "@/lib/career";

const expertiseGroups = [
  {
    label: "Practice",
    items: [
      "Manual testing",
      "Test automation",
      "Functional testing",
      "Regression testing",
      "API testing",
      "Performance testing",
      "Mobile testing",
      "Web testing",
    ],
  },
  { label: "Tools", items: ["Selenium", "Appium", "Playwright", "Postman", "JMeter", "Jira"] },
  { label: "Domain", items: ["FinTech"] },
];

export const aboutChapters = [
  { id: "who-i-am", title: "Who I am", hint: "The short version" },
  { id: "how-i-started", title: "How I started", hint: "Where it began" },
  { id: "expertise", title: "Expertise", hint: "What I test with" },
  { id: "interests", title: "Interests", hint: "What pulls me in" },
  { id: "goals", title: "Goals", hint: "Where I'm headed" },
] as const;

export const about = {
  journey: [
    { when: "2019", title: "Academic Foundation", note: "Commenced Bachelor of Computer Applications." },
    { when: "2022", title: "Degree Completion", note: "Graduated with a strong foundation in software principles." },
    { when: "Then", title: "Manual QA & FinTech", note: "Started testing complex financial systems and payment gateways." },
    { when: "Now", title: "Test Automation", note: "Architecting scalable automation frameworks to accelerate CI/CD." },
  ],
  expertiseGroups,
  interestTags: ["Continuous Testing", "Payment Architectures", "Test Automation", "Performance Engineering", "Mobile Ecosystems", "Agile Methodologies"],
  goalChecks: [
    "Comprehensive automation coverage",
    "Zero critical production escapes",
    "Data-driven RCA",
    "Optimized CI/CD pipelines",
    "Scalable framework architecture",
    "Open to relocation",
  ],
  get who() {
    return `I am a Quality Assurance Engineer with over ${experienceWords()} years of expertise in software testing and test automation. Specializing in the FinTech sector, I engineer robust validation strategies for mobile, web, and API ecosystems. My focus is on mitigating risk in high-stakes financial applications, ensuring that every release is backed by empirical test coverage and uncompromised quality standards.`;
  },
  started:
    "My journey began with a Bachelor of Computer Applications from Chandigarh Group of Colleges (2019–2022), where I established a rigorous technical foundation. I quickly transitioned into the FinTech industry, initially mastering manual testing methodologies before advancing into test automation. This progression allowed me to bridge the gap between user-centric quality verification and highly efficient, automated release cycles.",
  expertise:
    "My technical repertoire spans functional, regression, integration, and end-to-end testing. I engineer automated frameworks for Android, iOS, and Web platforms using Playwright, Appium, and Selenium WebDriver (Java/TypeScript) under the Page Object Model. I conduct comprehensive API validations using Postman and execute high-concurrency performance testing with Apache JMeter. My domain expertise is deeply rooted in FinTech, covering NPCI UPI 2.0, multi-gateway payments, eKYC compliance, and Loan Management Systems (LOS/LMS).",
  expertiseTerms: expertiseGroups.flatMap((group) => group.items),
  interests:
    "Beyond quality assurance, I am deeply interested in emerging technologies, complex payment architectures, and digital lending flows where precision is paramount. I am passionate about writing clean, maintainable automation code and exploring the intersection of continuous integration and continuous testing to build resilient software delivery pipelines.",
  goals:
    "My objective is to drive engineering excellence by embedding quality directly into the development lifecycle. I strive to achieve comprehensive test automation coverage, zero critical production escapes, and highly optimized CI/CD pipelines. Ultimately, my goal is to build scalable automation frameworks that eliminate manual redundancy while leaving strategic bandwidth for exploratory and edge-case testing. I am open to relocation.",
};

export const education = {
  degree: "Bachelor of Computer Applications",
  school: "Chandigarh Group of Colleges",
  period: "2019 — 2022",
  courses: [
    "Selenium with Java",
    "Appium with Java",
    "Playwright with JavaScript / TypeScript",
    "API Testing with Postman",
    "Stress and Performance Testing with JMeter",
    "Testing with GenAI",
  ],
  credentials: [] as { name: string; by: string; period: string }[],
};
