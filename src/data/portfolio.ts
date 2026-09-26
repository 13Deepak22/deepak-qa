/**
 * Public portfolio copy, taken from Deepak Gupta's QA resume.
 * Date of birth is intentionally omitted.
 */

export const profile = {
  name: "Deepak Gupta",
  role: "QA Engineer",
  location: "India",
  email: "deepak1322007@gmail.com",
  phone: "+91 7888768621",
  phoneHref: "tel:+917888768621",
  linkedin: "https://www.linkedin.com/in/deepak-gupta13/",
  availability: "Connect me",
  places: "Chandigarh, Mohali, Noida, Gurugram, NCR · open to relocation",
  headline: "I test the money before it moves.",
  lede: "QA engineer with 3+ years in manual and automation testing. I find the critical bugs, build frameworks that hold up, and keep fintech releases accurate.",
  focus: ["Mobile", "Web", "API", "Automation", "Load"],
};

export const headlines = [
  {
    mark: "money",
    rows: [["I test the"], ["money", " before"], ["it moves."]],
  },
  {
    mark: "release",
    rows: [["I hold the"], ["release", " until"], ["the evidence is in."]],
  },
  {
    mark: "defect",
    rows: [["I trace the"], ["defect", " back"], ["to the cause."]],
  },
  {
    mark: "automate",
    rows: [["I ", "automate"], ["the path that"], ["ships again."]],
  },
];

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#practice", label: "What I do" },
  { href: "/#skills", label: "What I know" },
  { href: "/about#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export const releaseGate = {
  suite: "fintech-gate",
  runner: "playwright · appium",
  checks: [
    { file: "paulpay/upi.spec.ts", ms: "1.1s" },
    { file: "credme/ekyc.spec.ts", ms: "1.4s" },
    { file: "api/payments.spec.ts", ms: "0.6s" },
    { file: "appium/cards.spec.ts", ms: "2.0s" },
    { file: "jmeter/load.spec.ts", ms: "3.2s" },
  ],
  summary: "5 passed · 0 failed · 8.3s",
  gate: "ready for review",
};

export const unpublishedWork =
  "Additional applications and web platforms are internal and organization-based. Those engagements remain confidential.";

export const publicApps = [
  {
    index: "01",
    title: "PaulPay",
    domain: "Wallet, cards, UPI",
    outcome:
      "UPI went through NPCI approval and compliance, with automation covering UI and functional flows.",
    detail:
      "Manual and automated testing for a PPI wallet, virtual and physical cards, and UPI.",
  },
  {
    index: "02",
    title: "CredMe",
    domain: "Lending",
    outcome:
      "Loan, LMS, and collection flows are validated before release, including the partner integrations the journey depends on.",
    detail:
      "Loan application and customer journeys, including payments, DigiLocker eKYC, face verification, bank aggregation, penny drop, and eSign.",
  },
  {
    index: "03",
    title: "PaulOne",
    domain: "Gold loan payments",
    outcome:
      "Interest payment flows were automated around Razorpay and kept in the suite through the acquisition period.",
    detail: "Gold loan interest payments through Razorpay, before the product was acquired by L&T.",
  },
  {
    index: "04",
    title: "Gifty",
    domain: "Gift cards",
    outcome: "Issuance, redemption, and transaction flows were automated for more than one platform.",
    detail: "Gift card issuance, redemption, and transactions, with UI and functional automation across platforms.",
  },
  {
    index: "05",
    title: "Mayaa Money",
    domain: "Digital gold and cards",
    outcome: "Buy, sell, and card issuance flows were validated with compliance in the test scope.",
    detail:
      "Digital gold and silver transactions, plus prepaid card issuance, checked against the financial rules those products have to meet.",
  },
  {
    index: "06",
    title: "Presenza",
    domain: "HR and attendance",
    outcome: "Attendance and HR workflows were validated across the employee app and the admin portal.",
    detail: "Employee attendance, punch in and out, leave, reimbursement, and the HR workflows those records sit on.",
  },
];

export const practices = [
  {
    title: "Functional",
    body: "Smoke, sanity, and regression on the journey a release can break.",
  },
  {
    title: "API",
    body: "Postman coverage for payment partners, eKYC, admin, and the services a screen hides.",
  },
  {
    title: "Automation",
    body: "Appium, Selenium, and Playwright across Android, iOS, and web.",
  },
  {
    title: "Load",
    body: "JMeter on the paths that cannot fall over when traffic shows up.",
  },
  {
    title: "Defects",
    body: "Critical bugs leave with a root cause. Jira and Trello hold the retest.",
  },
  {
    title: "Fintech",
    body: "UPI, payment gateways, eKYC, cards, LOS, and LMS.",
  },
];

export const toolkit = [
  {
    label: "Testing",
    items: [
      "Functional",
      "Regression",
      "Smoke",
      "Sanity",
      "Integration",
      "End-to-end",
      "API",
      "Load",
      "Performance",
      "Stress",
    ],
  },
  {
    label: "Manual",
    items: ["GUI", "Exploratory", "Ad-hoc", "Test cases", "Compatibility", "Retest"],
  },
  {
    label: "Automation",
    items: [
      "Selenium",
      "Appium",
      "Playwright",
      "Java",
      "JavaScript",
      "TestNG",
      "Page Object Model",
      "UiAutomator2",
      "XCUITest",
      "Cross-browser",
      "Cross-platform",
    ],
  },
  {
    label: "Tools",
    items: ["Jira", "Trello", "Postman", "JMeter", "GitHub", "Maven"],
  },
  {
    label: "Exposure",
    items: ["RBI audit support", "DR/DC", "VAPT", "Server migration"],
  },
  {
    label: "Domain",
    items: [
      "FinTech",
      "Banking",
      "E-commerce",
      "Travel",
      "Forex",
      "HR & Attendance",
      "Task management",
      "Social",
      "AI & GenAI",
      "LOS",
      "LMS",
    ],
  },
];

export const experience = [
  {
    period: "August 2026 — Present",
    title: "QA Engineer",
    org: "Exude Vincom",
    points: [
      "CredMe with PayU, Cashfree, Razorpay, DigiLocker eKYC, face verification, bank aggregator, penny drop, and eSign.",
      "LMS credit, sanction, disbursal, audit, and accounts.",
      "AI calling bots for sanction and collection.",
    ],
  },
  {
    period: "July 2023 — August 2026",
    title: "QA Engineer",
    org: "Paul Merchants",
    points: [
      "End-to-end releases. Automation cut manual effort by 50%.",
      "API and JMeter load tests. Defects in Jira and Trello, with root cause on critical issues.",
      "PaulPay, PaulOne, Gifty, Mayaa Money, and Presenza, including UPI through NPCI, Razorpay, and Cashfree.",
      "Exposure to RBI audit support, DR/DC, server migration, and VAPT. I followed those efforts and did not run the tests. QA feedback on LOS, LMS, and LCS.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  school: "Chandigarh Group of Colleges",
  period: "2019 — 2022",
  courses: [
    "Selenium with Java",
    "Appium with Java",
    "Playwright with JavaScript",
    "API testing with Postman",
    "Stress and performance testing with JMeter",
    "Testing with GenAI",
  ],
  credentials: [
    {
      name: "Appium — Mobile Testing (Android/iOS) from Scratch + Frameworks",
      by: "Udemy · Rahul Shetty",
      period: "2024",
    },
  ],
};
