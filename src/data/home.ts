/** Homepage sections: the release gate, practice areas, toolkit, and public work. */

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

export type ToolLogo = "playwright" | "selenium" | "appium" | "postman" | "jmeter" | "jira" | "trello";

export type TestingTypeIcon = "functional" | "exploratory" | "ux";

export const services = {
  lede: "Manual and automation testing for mobile, web, and API releases, run with the tools engineering teams already trust.",
  featured: [
    {
      key: "manual",
      title: "Manual testing",
      tagline: "The judgement a script cannot replace.",
      body: "Functional, UI, and UX checks on the journeys a release can break, with exploratory, regression, and compatibility passes before sign-off.",
      highlights: [
        { label: "Test cases", icon: "functional" },
        { label: "Exploratory", icon: "exploratory" },
        { label: "UI & UX", icon: "ux" },
      ],
      points: ["Test case design", "Test scenarios", "Regression", "Smoke & sanity", "Compatibility", "Bug reports with RCA"],
    },
    {
      key: "automation",
      title: "Automation testing",
      tagline: "The path that ships again, scripted.",
      body: "Suites in Java and JavaScript with the Page Object Model, across Android, iOS, and web. Automation cut manual effort by 50%.",
      highlights: [],
      points: ["Java", "JavaScript", "TestNG", "Page Object Model", "UiAutomator2", "XCUITest"],
    },
  ] satisfies {
    key: string;
    title: string;
    tagline: string;
    body: string;
    highlights: { label: string; icon: TestingTypeIcon }[];
    points: string[];
  }[],
  types: [
    "Functional Testing",
    "UI Testing",
    "UX & Usability Testing",
    "Regression Testing",
    "Smoke & Sanity Testing",
    "Exploratory Testing",
    "Integration Testing",
    "End-to-End Testing",
    "API Testing",
    "Mobile App Testing",
    "Cross-browser Testing",
    "Compatibility Testing",
    "Performance & Load Testing",
    "Negative Testing",
    "Payment & UPI Testing",
    "Retesting & Bug Verification",
  ],
  tools: [
    { name: "Playwright", logo: "playwright", category: "Web automation", use: "End-to-end web suites in JavaScript, across browsers." },
    { name: "Selenium", logo: "selenium", category: "Web automation", use: "UI suites in Java with TestNG and the Page Object Model." },
    { name: "Appium", logo: "appium", category: "Mobile automation", use: "Android and iOS flows with UiAutomator2 and XCUITest." },
    { name: "Postman", logo: "postman", category: "API testing", use: "Collections for payment partners, eKYC, and admin services." },
    { name: "JMeter", logo: "jmeter", category: "Performance", use: "Load and stress tests on the paths that cannot fall over." },
  ] satisfies { name: string; logo: ToolLogo; category: string; use: string }[],
  support: [
    {
      key: "defects",
      title: "Defect management",
      body: "Critical bugs leave with a root cause. Jira and Trello hold the retest.",
      logos: ["jira", "trello"],
      points: ["Bug reporting", "Bug tracking", "Root cause analysis", "Retest", "Test reports"],
    },
    {
      key: "fintech",
      title: "Fintech domain",
      body: "Payment and lending journeys, checked against the partners they depend on.",
      logos: [],
      points: ["UPI", "NPCI", "Razorpay", "Cashfree", "PayU", "eKYC", "DigiLocker", "eSign", "LOS", "LMS"],
    },
  ] satisfies { key: string; title: string; body: string; logos: ToolLogo[]; points: string[] }[],
};

/**
 * Skills in the exact phrases applicant tracking systems match on. The homepage,
 * the resume page, and the PDF, Word, and JPG downloads all read this list.
 * Every item is backed by the resume; nothing here is aspirational.
 */
export const toolkit = [
  {
    label: "Testing",
    items: [
      "Manual Testing",
      "Automation Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "End-to-End Testing",
      "API Testing",
      "UI Testing",
      "UX Testing",
      "Usability Testing",
      "GUI Testing",
      "Negative Testing",
      "Exploratory Testing",
      "Ad-hoc Testing",
      "Compatibility Testing",
      "Cross-browser Testing",
      "Cross-platform Testing",
      "Cross-version Testing",
      "Mobile App Testing",
      "Web Testing",
      "Load Testing",
      "Performance Testing",
      "Stress Testing",
      "Retesting",
    ],
  },
  {
    label: "QA Process",
    items: [
      "SDLC",
      "STLC",
      "Test Case Design",
      "Test Case Documentation",
      "Test Execution",
      "Test Coverage",
      "Test Reports",
      "Bug Reporting",
      "Bug Tracking",
      "Root Cause Analysis (RCA)",
      "Release Testing",
      "Deployment Validation",
      "Business Rules Validation",
      "Data Validation",
      "QA Documentation",
    ],
  },
  {
    label: "Automation",
    items: [
      "Selenium WebDriver",
      "Appium",
      "Playwright",
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "TestNG",
      "Page Object Model (POM)",
      "Cucumber BDD",
      "UiAutomator2",
      "XCUITest",
      "Android",
      "iOS",
    ],
  },
  {
    label: "Tools",
    items: [
      "Jira",
      "Trello",
      "Postman",
      "Newman",
      "JMeter",
      "Charles Proxy",
      "Fiddler",
      "Git",
      "GitHub Actions",
      "Docker",
      "ADB Shell",
      "Maven",
      "Swagger / OpenAPI",
    ],
  },
  {
    label: "Fintech",
    items: [
      "UPI 2.0 (Intent/Collect)",
      "NPCI Compliance",
      "Payment Gateway Testing",
      "Razorpay",
      "Cashfree",
      "PayU",
      "eKYC",
      "DigiLocker",
      "Face Verification",
      "Penny Drop",
      "eSign",
      "Bank Aggregator",
      "PPI Wallet",
      "Prepaid Cards",
      "Double-Entry Ledger Invariance",
      "LOS",
      "LMS",
      "LCS",
    ],
  },
  {
    label: "AI & Modern Stack",
    items: [
      "Claude Code",
      "Google Antigravity",
      "Cursor AI",
      "Model Context Protocol (MCP)",
      "Autonomous QA Agents",
      "Prompt Regression & Fuzzing",
      "Self-Healing Locators",
    ],
  },
  {
    label: "Domain",
    items: [
      "FinTech",
      "Banking",
      "Lending",
      "E-commerce",
      "Travel",
      "Forex",
      "B2B",
      "B2C",
      "HR & Attendance",
      "Task management",
      "Social",
      "AI & GenAI",
    ],
  },
  {
    label: "Compliance & Exposure",
    items: ["RBI audit verification", "DR/DC failover drills", "VAPT remediation", "Server migration audits"],
  },
];

export const unpublishedWork =
  "Beyond these public apps, I have tested internal applications, websites, and admin portals. That work is covered by confidentiality, so it is not listed here.";

/**
 * Only Deepak's own work: `tested` and `coverage` describe his test scope, taken from the resume.
 * No store marketing copy; `link` is there as proof that the app is public.
 */
export type PublicApp = {
  index: string;
  title: string;
  icon: "wallet" | "loan" | "gold" | "gift" | "savings" | "attendance" | "forex";
  domain: string;
  outcome: string;
  detail: string;
  platforms: string[];
  link: { label: string; href: string };
  tested: string[];
  coverage: string[];
};

export const publicApps: PublicApp[] = [
  {
    index: "01",
    title: "PaulPay",
    icon: "wallet",
    domain: "Wallet, cards, UPI",
    outcome:
      "UPI went through NPCI approval and compliance, with automation covering UI and functional flows.",
    detail:
      "Manual and automated testing for a PPI wallet, virtual and physical cards, and UPI.",
    platforms: ["Android", "iOS", "Admin portal"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.infominez.paulpay" },
    tested: [
      "UPI through NPCI approval and compliance",
      "PPI wallet with virtual and physical cards",
      "Card reloads by debit card, credit card, net banking, and wallet",
      "Bill payments, recharges, and transaction history",
      "Admin portal kept in step with the app",
      "UI and functional automation",
    ],
    coverage: ["Manual", "Automation", "Compliance"],
  },
  {
    index: "02",
    title: "CredMe",
    icon: "loan",
    domain: "Lending",
    outcome:
      "Loan, LMS, and collection flows are validated before release, including the partner integrations the journey depends on.",
    detail:
      "Loan application and customer journeys, including payments, DigiLocker eKYC, face verification, bank aggregation, penny drop, and eSign.",
    platforms: ["Mobile", "Web", "Admin portal"],
    link: { label: "credme.in", href: "https://credme.in/" },
    tested: [
      "DigiLocker eKYC, face verification, bank aggregator, penny drop, and eSign",
      "Payments through PayU, Cashfree, and Razorpay",
      "LMS credit, sanction, disbursal, audit, and accounts",
      "Admin portal kept in step with the customer journey",
      "AI calling bots for sanction and collection",
      "Partner integrations checked before every release",
    ],
    coverage: ["Manual", "API", "Integrations"],
  },
  {
    index: "03",
    title: "PaulOne",
    icon: "gold",
    domain: "Gold loan payments",
    outcome:
      "Interest payment flows were automated around Razorpay and kept in the suite through the acquisition period.",
    detail: "Gold loan interest payments through Razorpay, before the product was acquired by L&T.",
    platforms: ["Android"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.paulmerchants.gold" },
    tested: [
      "Gold loan interest payments through Razorpay",
      "Automated payment flows, kept in the suite through the acquisition",
      "Dues and remaining amount after each payment",
    ],
    coverage: ["Automation", "Payments"],
  },
  {
    index: "04",
    title: "Gifty",
    icon: "gift",
    domain: "Gift cards",
    outcome: "Issuance, redemption, and transaction flows were automated for more than one platform.",
    detail: "Gift card issuance, redemption, and transactions, with UI and functional automation across platforms.",
    platforms: ["Android", "iOS"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.pml.gifty" },
    tested: [
      "Issuance of virtual and physical gift cards",
      "Redemption and card transactions",
      "UI and functional automation on Android and iOS",
    ],
    coverage: ["Automation", "Cross-platform"],
  },
  {
    index: "05",
    title: "Mayaa Money",
    icon: "savings",
    domain: "Digital gold and cards",
    outcome: "Buy, sell, and card issuance flows were validated with compliance in the test scope.",
    detail:
      "Digital gold and silver transactions, plus prepaid card issuance, checked against the financial rules those products have to meet.",
    platforms: ["Android", "iOS"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.mayaa" },
    tested: [
      "Digital gold and silver buy and sell",
      "Prepaid card issuance, before the card was retired",
      "Checks against the financial rules each product must meet",
    ],
    coverage: ["Manual", "Compliance"],
  },
  {
    index: "06",
    title: "Presenza",
    icon: "attendance",
    domain: "HR and attendance",
    outcome: "Attendance and HR workflows were validated across the employee app and the admin portal.",
    detail: "Employee attendance, punch in and out, leave, reimbursement, and the HR workflows those records sit on.",
    platforms: ["Android", "iOS", "Admin portal"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.presenza" },
    tested: [
      "Punch in and out, work sessions, and breaks",
      "Leave requests and approval status",
      "Reimbursement and HR workflows",
      "Employee app and admin portal kept in step",
    ],
    coverage: ["Manual", "Mobile + web"],
  },
  {
    index: "07",
    title: "PML Forex Live",
    icon: "forex",
    domain: "Forex and remittance",
    outcome:
      "Buy, sell, and send-money-abroad journeys were checked against live, city-wise exchange rates.",
    detail:
      "Forex buy and sell, outward remittance, and forex card flows on the web, priced from live city-wise rates.",
    platforms: ["Web", "Admin portal"],
    link: { label: "pmlforexlive.com", href: "https://pmlforexlive.com/" },
    tested: [
      "Buy and sell forex orders at live, city-wise rates",
      "Outward remittance to send money abroad",
      "Forex card balance check and rate alerts",
      "Login, registration, call-back, and better-rate requests",
      "Admin portal kept in step with the customer website",
    ],
    coverage: ["Manual", "Web"],
  },
];
