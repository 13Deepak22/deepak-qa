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

export const unpublishedWork =
  "Beyond these public apps, I have tested internal applications, websites, and admin portals. That work is covered by confidentiality, so it is not listed here.";

/**
 * `product` and `facts` come from each app's public store listing or official site.
 * `tested` and `coverage` describe only Deepak's own test scope, taken from the resume.
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
  product: string;
  facts: { value: string; label: string }[];
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
    platforms: ["Android", "iOS"],
    link: { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.infominez.paulpay" },
    product:
      "RuPay prepaid card app from Paul Merchants Finance: card registration, reloads, bill payments, recharges, transaction history, and UPI.",
    facts: [
      { value: "RuPay", label: "Prepaid card network" },
      { value: "Full KYC", label: "Required for UPI" },
      { value: "NPCI", label: "UPI approval" },
    ],
    tested: [
      "UPI through NPCI approval and compliance",
      "PPI wallet with virtual and physical cards",
      "Card reloads by debit card, credit card, net banking, and wallet",
      "Bill payments, recharges, and transaction history",
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
    platforms: ["Mobile", "Web"],
    link: { label: "credme.in", href: "https://credme.in/" },
    product:
      "Personal and micro loans from an RBI-registered NBFC, fully digital from eligibility check to disbursal, with no branch visit.",
    facts: [
      { value: "₹5K–₹1.5L", label: "Loan amount" },
      { value: "15–365 days", label: "Tenure" },
      { value: "100% digital", label: "Apply, verify, track" },
    ],
    tested: [
      "DigiLocker eKYC, face verification, bank aggregator, penny drop, and eSign",
      "Payments through PayU, Cashfree, and Razorpay",
      "LMS credit, sanction, disbursal, audit, and accounts",
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
    product:
      "Gold loan app from Paul Merchants Finance: dues, repayment schedules, payments made, and remaining amounts in one view.",
    facts: [
      { value: "Razorpay", label: "Interest payments" },
      { value: "Gold loans", label: "Dues and schedules" },
      { value: "L&T", label: "Acquired the product" },
    ],
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
    product:
      "RuPay prepaid gift card app: send money as a virtual or physical card with a personal message, spendable online and in stores.",
    facts: [
      { value: "₹10,000", label: "Maximum load" },
      { value: "Virtual + physical", label: "Card formats" },
      { value: "RuPay PPI", label: "Card type" },
    ],
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
    product:
      "Family money app: buy and sell 24K digital gold and 99.9% pure silver from ₹10, stored in a digital locker.",
    facts: [
      { value: "₹10", label: "Minimum buy" },
      { value: "24K · 99.9%", label: "Gold and silver purity" },
      { value: "Buy + sell", label: "Anytime in the app" },
    ],
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
    product:
      "Employee attendance app: punch in and out, work sessions, breaks, leave approvals, and attendance reports, with OTP login.",
    facts: [
      { value: "OTP", label: "Secure login" },
      { value: "Punch in/out", label: "Sessions and breaks" },
      { value: "App + portal", label: "Employee and admin" },
    ],
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
    platforms: ["Web"],
    link: { label: "pmlforexlive.com", href: "https://pmlforexlive.com/" },
    product:
      "Paul Merchants' online currency exchange: buy and sell foreign currency, send money abroad, and manage forex cards at live rates.",
    facts: [
      { value: "AD-II", label: "RBI forex licence" },
      { value: "15 cities", label: "City-wise live rates" },
      { value: "Buy · sell · send", label: "Forex services" },
    ],
    tested: [
      "Buy and sell forex orders at live, city-wise rates",
      "Outward remittance to send money abroad",
      "Forex card balance check and rate alerts",
      "Login, registration, call-back, and better-rate requests",
    ],
    coverage: ["Manual", "Web"],
  },
];
