/**
 * Real-world Root Cause Analysis (RCA) case study from Deepak's fintech testing experience.
 * Demonstrates high-stakes defect discovery, deep tracing, and automated regression prevention.
 */

export interface RcaLogEntry {
  timestamp: string;
  source: string;
  event: string;
  status: "warn" | "fail" | "pass" | "info";
}

export interface RcaStep {
  step: string;
  phase: string;
  title: string;
  summary: string;
  detail: string;
  badge: string;
  specFile: string;
  command: string;
  outcome: string;
  terminalLogs: RcaLogEntry[];
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
      specFile: "exploratory.network-jitter.spec.ts",
      command: "playwright test --throttle=2G-Jitter",
      outcome: "ANOMALY DETECTED: Latency induced concurrent client retry & webhook callback.",
      terminalLogs: [
        {
          timestamp: "14:01:58.120",
          source: "NETWORK_SIM",
          event: "Throttling active: 2G/3G Profile (RTT: 4,500ms, Packet Jitter: 22%)",
          status: "warn",
        },
        {
          timestamp: "14:02:00.340",
          source: "CLIENT_TAP",
          event: "POST /api/disbursal/initiate [loan_id: LN-88412, amount: ₹25,000]",
          status: "info",
        },
        {
          timestamp: "14:02:02.890",
          source: "GATEWAY",
          event: "Webhook callback dispatched from payment partner (in transit delay: 3.8s)",
          status: "info",
        },
        {
          timestamp: "14:02:03.010",
          source: "CLIENT_APP",
          event: "Request timeout reached (3,000ms threshold) -> Auto-retry tap queued",
          status: "warn",
        },
        {
          timestamp: "14:02:04.105",
          source: "DISCOVERY",
          event: "Parallel execution confirmed: Gateway callback and client retry in-flight concurrently",
          status: "warn",
        },
      ],
    },
    {
      step: "02",
      phase: "The Symptom",
      title: "Ledger Discrepancy & Duplicate Disbursal Entry",
      summary: "Two separate disbursement transaction IDs created for the exact same borrower application.",
      detail:
        "The loan management system (LMS) showed two active disbursement tokens under the same loan sanction ID. Both the user's client retry tap and the gateway's asynchronous webhook callback independently updated the borrower's state.",
      badge: "High financial risk",
      specFile: "ledger.disbursal-audit.spec.ts",
      command: "node ./scripts/audit-disbursements.js",
      outcome: "CRITICAL DEFECT: Duplicate disbursement vouchers issued under loan LN-88412.",
      terminalLogs: [
        {
          timestamp: "14:02:11.104",
          source: "GATEWAY_CB",
          event: "POST /webhook/payment/disburse -> Handled as Disbursement TX-101 (State: DISBURSED)",
          status: "info",
        },
        {
          timestamp: "14:02:11.890",
          source: "CLIENT_RETRY",
          event: "POST /api/disbursal/retry -> Handled as Disbursement TX-102 (State: DISBURSED)",
          status: "warn",
        },
        {
          timestamp: "14:02:12.450",
          source: "LMS_AUDIT",
          event: "Discrepancy detected: 2 active disbursal vouchers for loan sanction LN-88412",
          status: "fail",
        },
        {
          timestamp: "14:02:13.010",
          source: "BANK_ACCOUNTS",
          event: "Dual transfer queued: ₹25,000 (ICICI Gateway) + ₹25,000 (HDFC Node)",
          status: "fail",
        },
        {
          timestamp: "14:02:13.440",
          source: "TRIAGE",
          event: "P0 Blocker flagged: Double-debit vulnerability exposed under network jitter",
          status: "fail",
        },
      ],
    },
    {
      step: "03",
      phase: "Root Cause (RCA)",
      title: "Premature HTTP 200 & Non-Atomic Idempotency Verification",
      summary: "The webhook endpoint acknowledged the gateway before acquiring a row-level database lock.",
      detail:
        "The backend webhook listener evaluated idempotency in application memory instead of enforcing a database-level unique constraint on `idempotency_key` (SHA256 of `loan_id + gateway_ref`). Concurrent worker threads both read the status as 'PENDING' simultaneously.",
      badge: "Race condition identified",
      specFile: "idempotency.trace-debug.spec.ts",
      command: "node ./scripts/trace-concurrency.js",
      outcome: "ROOT CAUSE CONFIRMED: Non-atomic application-level lock permitted parallel writes.",
      terminalLogs: [
        {
          timestamp: "14:02:14.050",
          source: "CODE_INSPECT",
          event: "Tracing /controllers/webhook.js -> handleDisbursalCallback()",
          status: "info",
        },
        {
          timestamp: "14:02:14.210",
          source: "THREAD_1",
          event: "Read loan LN-88412 status: 'PENDING' in application memory",
          status: "warn",
        },
        {
          timestamp: "14:02:14.212",
          source: "THREAD_2",
          event: "Simultaneously read status: 'PENDING' (no DB row-level lock held)",
          status: "warn",
        },
        {
          timestamp: "14:02:14.300",
          source: "ROOT_CAUSE",
          event: "Idempotency evaluated in RAM cache prior to database commit",
          status: "fail",
        },
        {
          timestamp: "14:02:14.500",
          source: "REMEDIATION",
          event: "Mandate: Database UNIQUE constraint on idempotency_key + SELECT ... FOR UPDATE",
          status: "pass",
        },
      ],
    },
    {
      step: "04",
      phase: "Prevention & Sign-Off",
      title: "Atomic DB Lock Enforced & Automated Concurrency Test Added",
      summary: "Engineers added unique database constraints; QA scripted automated parallel webhook delivery checks.",
      detail:
        "Release criteria now mandates an automated concurrency test: 5 parallel webhook callbacks sent with the same transaction token. The suite verifies exactly 1 succeeds (HTTP 200) and 4 are gracefully rejected as idempotent duplicates (HTTP 409/200 OK no-op).",
      badge: "Release gate enforced",
      specFile: "concurrency.idempotency.spec.ts",
      command: "playwright test suites/concurrency.idempotency.spec.ts",
      outcome: "GATE PASSED: Concurrency verified. 1 disbursed, 4 rejected safely. 0 leak to prod.",
      terminalLogs: [
        {
          timestamp: "14:02:15.100",
          source: "TEST_SUITE",
          event: "Dispatching 5 parallel webhook callbacks with identical transaction token",
          status: "info",
        },
        {
          timestamp: "14:02:15.302",
          source: "DB_TRANSACTION",
          event: "Worker 1 acquires row lock -> Processed first -> Disbursed: ₹25,000",
          status: "pass",
        },
        {
          timestamp: "14:02:15.305",
          source: "DB_TRANSACTION",
          event: "Workers 2-5 blocked: UNIQUE constraint on idempotency_key triggered",
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
          source: "RELEASE_GATE",
          event: "PASS: Exactly 1 disbursed · 0 duplicates · Verified in 312ms",
          status: "pass",
        },
      ],
    },
  ] satisfies RcaStep[],
  terminalLogs: [
    {
      timestamp: "14:02:15.100",
      source: "TEST_SUITE",
      event: "Dispatching 5 parallel webhook callbacks with identical transaction token",
      status: "info",
    },
    {
      timestamp: "14:02:15.302",
      source: "DB_TRANSACTION",
      event: "Worker 1 acquires row lock -> Processed first -> Disbursed: ₹25,000",
      status: "pass",
    },
    {
      timestamp: "14:02:15.305",
      source: "DB_TRANSACTION",
      event: "Workers 2-5 blocked: UNIQUE constraint on idempotency_key triggered",
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
      source: "RELEASE_GATE",
      event: "PASS: Exactly 1 disbursed · 0 duplicates · Verified in 312ms",
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
