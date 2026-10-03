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
    { when: "2019", title: "Computer applications", note: "A Bachelor of Computer Applications begins." },
    { when: "2022", title: "The base is set", note: "The degree is complete." },
    { when: "Then", title: "The manual path", note: "Live fintech releases, tested journey by journey." },
    { when: "Now", title: "Automation", note: "The path that has to ship again runs on its own." },
  ],
  expertiseGroups,
  interestTags: ["Technology", "Gaming", "Payment journeys", "Lending flows", "Mobile apps", "Readable automation"],
  goalChecks: [
    "Critical path automated",
    "API checked",
    "Defects closed with a root cause",
    "Frameworks that cut repeat manual work",
    "Room for exploratory testing",
    "Open to relocation",
  ],
  get who() {
    return `I am a QA engineer with more than ${experienceWords()} years in manual testing and test automation. I work on mobile, web, and API releases in fintech. I look for the defect that can move money the wrong way, and I treat a release as ready only when the evidence is in.`;
  },
  started:
    "I started with a Bachelor of Computer Applications at Chandigarh Group of Colleges, from 2019 to 2022. Computer applications were the base. I then built a testing practice on live fintech releases: first the manual path, then automation for the path that has to ship again.",
  expertise:
    "I cover functional testing, regression testing, smoke, sanity, integration, and end-to-end testing. I test APIs in Postman and run load and performance checks in JMeter. I automate Android, iOS, and web with Appium, Selenium, and Playwright, in Java and JavaScript, with TestNG and the Page Object Model. I log defects in Jira and trace a critical bug to its cause. My domain is fintech: UPI, payment gateways, eKYC, cards, LOS, and LMS.",
  expertiseTerms: expertiseGroups.flatMap((group) => group.items),
  interests:
    "I am interested in technology and gaming, and in payment journeys, lending flows, and mobile apps where a small miss becomes a financial defect. I care about automation that stays readable, and about the gap between a passing check and a release that is actually safe.",
  goals:
    "I want the next release I own to ship with evidence: the critical path automated, the API checked, and the defect closed with a root cause. I am building frameworks that cut repeat manual work and still leave room for exploratory testing. I am open to relocation.",
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
