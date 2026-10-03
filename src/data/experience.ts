/** Employment history, newest first. */

export const experience = [
  {
    period: "August 2026 — Present",
    title: "QA Engineer",
    org: "Exude Vincom",
    points: [
      "Architected and executed end-to-end test verification for the CredMe digital lending platform, validating multi-gateway payment flows (PayU, Cashfree, Razorpay), penny drop bank validations, and Aadhaar eSign with 99.8% pass rate.",
      "Engineered rigorous compliance and risk validation test suites for DigiLocker eKYC, facial liveness verification, and bank statement aggregators across LOS/LMS, safeguarding against identity spoofing and unauthorized approvals.",
      "Validated AI-driven autonomous calling agents for loan sanction verification and collection escalations, simulating telephony edge cases, latency degradation, and webhook status reconciliation with zero defect escapes.",
      "Streamlined Loan Management System (LMS) audit verification across credit sanction, disbursal, and accounting ledgers, validating calculation accuracy against double-entry ledger invariances.",
    ],
  },
  {
    period: "July 2023 — August 2026",
    title: "QA Engineer",
    org: "Paul Merchants",
    points: [
      "Spearheaded automated regression frameworks in Playwright, Appium, and Java/TypeScript across 6 core fintech applications (PaulPay, PaulOne, Gifty, Mayaa Money, Presenza, PML Forex Live), reducing manual regression effort by 50%.",
      "Engineered comprehensive functional and edge-case testing for NPCI UPI 2.0 protocols (dynamic QR, intent, collect, auto-reversals) and payment gateways (Razorpay, Cashfree) under 3G network throttling and intermittent packet loss.",
      "Conducted high-concurrency API performance and stress testing using Apache JMeter and Postman/Newman, validating latency SLAs and isolating throughput bottlenecks under 500+ TPS peak loads.",
      "Championed defect life cycle governance and Root Cause Analysis (RCA) in Jira, authoring reproducible tickets with Charles Proxy network captures and logs to eliminate 200+ pre-release defects with 0 P0 production escapes.",
      "Facilitated regulatory compliance and infrastructure resilience, validating test logs and ledger checkpoints for RBI regulatory reviews, DR/DC failover drills, and VAPT vulnerability remediation across LOS, LMS, and LCS portals.",
    ],
  },
];
