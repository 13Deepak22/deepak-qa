/**
 * Real-world Root Cause Analysis (RCA) case study from Deepak's fintech testing experience.
 * Demonstrates high-stakes defect discovery, deep tracing, and automated regression prevention.
 */

export interface RcaStep {
  step: string;
  phase: string;
  title: string;
  summary: string;
  detail: string;
  badge: string;
}

export interface RcaLogEntry {
  timestamp: string;
  source: string;
  event: string;
  status: "warn" | "fail" | "pass" | "info";
}

export const rcaCaseStudy = {
  sectionIndex: "03",
  title: "Defect investigation: Double-debit race condition.",
  tagline: "The concurrency bug that never reached production.",
  domain: "CredMe · Lending LMS & Payment Gateway",
  severity: "P0 · Critical Blocker",
  environment: "Staging · Latency-throttled cluster",
  discoveryMethod: "Exploratory Latency Pass & Postman Concurrency",
  summary:
    "During mobile network jitter testing on loan disbursals, a simulated payment gateway timeout triggered a simultaneous client retry and webhook callback. Without atomic DB locking, the system initiated duplicate loan disbursement records.",
  metrics: [
    { label: "Severity", value: "P0 Blocker" },
    { label: "Domain", value: "LMS & UPI Gateway" },
    { label: "Leak to Production", value: "0" },
    { label: "Test Added to Gate", value: "Automated POM Suite" },
  ],
  steps: [
    {
      step: "01",
      phase: "Discovery",
      title: "Exploratory Latency & Network Jitter Simulation",
      summary: "Throttling mobile network to 2G/3G speeds while initiating loan sanction disbursement.",
      detail:
        "Using network conditioning and Postman runner latency profiles, the client payment response was intentionally delayed by 4,500ms to trigger the app's auto-retry policy while the payment gateway callback was still in transit.",
      badge: "Caught in staging",
    },
    {
      step: "02",
      phase: "The Symptom",
      title: "Ledger Discrepancy & Duplicate Disbursal Entry",
      summary: "Two separate disbursement transaction IDs created for the exact same borrower application.",
      detail:
        "The loan management system (LMS) showed two active disbursement tokens under the same loan sanction ID. Both the user's client retry tap and the gateway's asynchronous webhook callback independently updated the borrower's state.",
      badge: "High financial risk",
    },
    {
      step: "03",
      phase: "Root Cause (RCA)",
      title: "Premature HTTP 200 & Non-Atomic Idempotency Verification",
      summary: "The webhook endpoint acknowledged the gateway before acquiring a row-level database lock.",
      detail:
        "The backend webhook listener evaluated idempotency in application memory instead of enforcing a database-level unique constraint on `idempotency_key` (SHA256 of `loan_id + gateway_ref`). Concurrent worker threads both read the status as 'PENDING' simultaneously.",
      badge: "Race condition identified",
    },
    {
      step: "04",
      phase: "Prevention & Sign-Off",
      title: "Atomic DB Lock Enforced & Playwright Concurrency Test Added",
      summary: "Engineers added unique database constraints; QA scripted automated parallel webhook delivery checks.",
      detail:
        "Release criteria now mandates an automated concurrency test: 5 parallel webhook callbacks sent with the same transaction token. The suite verifies exactly 1 succeeds (HTTP 200) and 4 are gracefully rejected as idempotent duplicates (HTTP 409/200 OK no-op).",
      badge: "Release gate enforced",
    },
  ] satisfies RcaStep[],
  terminalLogs: [
    {
      timestamp: "14:02:11.104",
      source: "GATEWAY",
      event: "POST /webhook/payment/disburse [ref: tx_982410] -> processing delay 4.2s",
      status: "warn",
    },
    {
      timestamp: "14:02:13.200",
      source: "CLIENT_APP",
      event: "POST /api/disbursal/retry [app_id: LN-88412] -> triggered after timeout",
      status: "warn",
    },
    {
      timestamp: "14:02:15.302",
      source: "DB_TRANSACTION",
      event: "Concurrency conflict detected: UNIQUE constraint on idempotency_key",
      status: "pass",
    },
    {
      timestamp: "14:02:15.305",
      source: "GATEWAY_WORKER",
      event: "HTTP 200 OK (Processed first) · Disbursed: ₹25,000",
      status: "pass",
    },
    {
      timestamp: "14:02:15.308",
      source: "CLIENT_RETRY",
      event: "HTTP 409 Conflict / Idempotent cached state returned · Duplicate avoided",
      status: "pass",
    },
    {
      timestamp: "14:02:15.410",
      source: "SUITE_RESULT",
      event: "PASS: 1 disbursed · 0 duplicates · Idempotency verified in 312ms",
      status: "pass",
    },
  ] satisfies RcaLogEntry[],
  takeaway:
    "In fintech QA, happy paths are only half the job. Real testing happens at the boundaries of network timeouts, retry storms, and asynchronous third-party webhooks where money is on the line.",
};

export const impactMetrics = [
  { value: "3+", label: "Years in QA", aside: "Fintech & mobile releases" },
  { value: "15+", label: "Products Tested", aside: "7 public apps · 8+ confidential portals" },
  { value: "100+", label: "Automated Checks", aside: "Playwright, Appium & Postman" },
  { value: "100%", label: "Release Sign-Off", aside: "Evidence before production deploy" },
];
