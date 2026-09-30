"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Compass,
  FileSpreadsheet,
  Globe,
  Layers,
  ListChecks,
  Lock,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Terminal,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  sampleAssertion: {
    language: string;
    code: string;
    caption: string;
  };
  keyPractices: string[];
  tools: string[];
  deliverables: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "automation",
    name: "Web & Mobile Automation",
    tagline: "Parallel, resilient end-to-end regression suites using Playwright & Appium",
    badge: "SDET / CI-Ready Suites",
    description:
      "I architect modular Page Object Model (POM) test automation frameworks that run fast and never flake on false positives. Automated suites execute across Chrome, Firefox, Safari, Android APKs, and iOS TestFlight builds.",
    sampleAssertion: {
      language: "typescript",
      code: `// Playwright E2E: Idempotent Payment Intent Flow
test("verify UPI intent prevents duplicate debit on slow network", async ({ page, context }) => {
  await page.route("**/api/v1/payments/upi-intent", async (route) => {
    await new Promise((r) => setTimeout(r, 1200)); // Inject network latency
    await route.continue();
  });

  await page.getByRole("button", { name: /Pay ₹2,499/i }).dblclick();
  await expect(page.getByTestId("debit-status")).toHaveText("Payment Successful");
  await expect(page.getByTestId("transaction-counter")).toHaveText("1 Debit");
});`,
      caption: "Playwright E2E assertion: double-click latency tolerance & idempotency verification.",
    },
    keyPractices: [
      "Page Object Model (POM) architecture for zero maintenance overhead",
      "Dynamic data-driven test fixtures & localized mock servers",
      "Headless parallel execution across mobile & desktop browser viewports",
      "Automated trace viewers, video recordings, and failure screenshot captures",
    ],
    tools: ["Playwright", "Appium", "Selenium WebDriver", "TypeScript", "Java / TestNG"],
    deliverables: ["Modular Test Framework", "HTML Regression Reports", "Automated Smoke Suite"],
  },
  {
    id: "exploratory",
    name: "Manual Exploratory & Defect Hunting",
    tagline: "Rigorous human testing that automation scripts miss: boundary conditions & UX edge cases",
    badge: "Heuristic Discovery",
    description:
      "Automation only tests what developers anticipate. My exploratory passes push application boundaries under unpredictable real-world user behavior: interrupted biometric logins, rapid network dropouts, stale cache state, and broken localized currency inputs.",
    sampleAssertion: {
      language: "markdown",
      code: `### Defect Investigation Log (Exude Vincom)
- Environment: Android 14 / Pixel 8 / 3G throttled via Charles Proxy
- Step 1: Initiated loan sanction agreement (Sanction amount: ₹50,000)
- Step 2: During biometric confirmation, toggled Airplane Mode ON for 4s
- Step 3: Reconnected to cellular. Client re-sent POST request with fresh nonce
- Finding: Client generated new TXN ID instead of retaining idempotency token
- Triage: Raised P0 Blocker Bug. Backend distributed Redis lock patched.`,
      caption: "Real-world bug report with network trace & step-by-step reproduction.",
    },
    keyPractices: [
      "Charter-based exploratory sessions focused on high-risk financial flows",
      "Equivalence partitioning, boundary-value analysis, and state-transition tests",
      "Negative testing: malformed inputs, SQL injection attempts, special Unicode strings",
      "Real-device testing on varied Android versions, screen aspect ratios, and iOS releases",
    ],
    tools: ["Charles Proxy", "Postman", "ADB Shell", "Android Studio", "Xcode Simulator"],
    deliverables: ["Defect Triage Matrix", "Detailed Bug Reports with HAR logs", "Usability Audit"],
  },
  {
    id: "api",
    name: "API & Microservice Validation",
    tagline: "Contract validation, webhook simulation, payload schemas, and stress benchmarks",
    badge: "Backend & Gateway",
    description:
      "Modern fintech lives in the API layer. I validate RESTful endpoints, GraphQL queries, webhook HMAC security, response latency SLAs under load, and database consistency across distributed microservice boundaries.",
    sampleAssertion: {
      language: "javascript",
      code: `// Postman Pre-Request & Test Script: HMAC Webhook Signature
pm.test("Status code is 200 and HMAC verified", function () {
  pm.response.to.have.status(200);
  const json = pm.response.json();
  pm.expect(json.status).to.eql("SUCCESS");
  pm.expect(json.ledger_updated).to.be.true;
  pm.expect(pm.response.responseTime).to.be.below(300); // 300ms SLA
});`,
      caption: "Postman contract validation & response-time SLA assertion.",
    },
    keyPractices: [
      "Comprehensive Postman collections with automated pre-request auth scripts",
      "JSON Schema validation & contract testing against OpenAPI specs",
      "Simulated payment gateway callbacks, webhook retries, and backoff schedules",
      "Concurrency and stress testing using Apache JMeter to detect thread deadlocks",
    ],
    tools: ["Postman", "Apache JMeter", "Newman", "Swagger / OpenAPI", "DBeaver / SQL"],
    deliverables: ["Postman API Collections", "JMeter Performance Benchmark", "API Test Matrix"],
  },
  {
    id: "fintech",
    name: "Fintech & Payment Auditing",
    tagline: "Zero-tolerance testing for UPI gateways, loan engines, and multi-currency wallets",
    badge: "Mission-Critical",
    description:
      "In fintech, a single defect can cause unauthorized debits or regulatory penalties. I specialize in testing UPI Intent flows, BBPS biller aggregators, e-NACH auto-debits, CIBIL underwriting gates, and cross-border multi-currency conversions.",
    sampleAssertion: {
      language: "json",
      code: `// Fintech Audit Rule: Distributed Idempotency Contract
{
  "request_id": "REQ_2026_09881",
  "idempotency_key": "idem_sha256_88019a",
  "concurrency_lock": "ACQUIRED_REDIS",
  "duplicate_retry_action": "RETURN_CACHED_200",
  "financial_impact": "ZERO_DUPLICATE_DEBIT"
}`,
      caption: "Fintech compliance check: Distributed lock and idempotent replay contract.",
    },
    keyPractices: [
      "Double-debit prevention under erratic mobile connectivity",
      "Penny-drop bank account verification and beneficiary name matching algorithms",
      "RBI LRS purpose code validation and TCS calculation certification",
      "End-to-end reconciliation between front-end wallets, payment gateways, and banking ledgers",
    ],
    tools: ["UPI Simulator", "Redis Mock", "Charles Proxy", "WireMock", "Postman"],
    deliverables: ["Fintech Compliance Sign-off", "Payment Security Audit", "Zero-P0 Release Gate"],
  },
];

export function InteractiveServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>("automation");
  const service = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Testing Services</span> / Core Capabilities
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              How a release earns the right to ship.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Click through Deepak&apos;s testing disciplines to inspect his real-world methodology, sample assertions, and deliverables.
          </p>
        </div>

        {/* Interactive Services Tab Bar */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES_DATA.map((s) => {
            const isSelected = s.id === service.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveServiceId(s.id)}
                className={`p-4 border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-pass bg-paper text-pass shadow-sm ring-1 ring-pass/40"
                    : "border-line bg-paper/60 text-ink-soft hover:bg-paper hover:text-ink"
                }`}
              >
                <div>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-wider text-muted mb-1">
                    {s.badge}
                  </span>
                  <span className="block font-serif text-base sm:text-lg font-bold text-ink">
                    {s.name}
                  </span>
                </div>
                <span
                  className={`mt-4 font-mono text-[0.68rem] uppercase tracking-wider ${
                    isSelected ? "text-pass font-semibold" : "text-muted"
                  }`}
                >
                  {isSelected ? "● Active Inspection" : "Inspect Methodology"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detail Panel */}
        <div key={service.id} className="mt-4 border border-line bg-paper shadow-sm content-fade">
          {/* Header */}
          <div className="border-b border-line bg-paper-deep p-6 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    {service.name}
                  </h3>
                  <span className="border border-pass/40 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm sm:text-base font-serif italic text-pass">
                  {service.tagline}
                </p>
              </div>

              {/* Tools Pills */}
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {service.tools.map((t) => (
                  <span key={t} className="border border-line bg-paper px-2.5 py-1 text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-4xl">
              {service.description}
            </p>
          </div>

          {/* Body: Key Practices + Live Sample Assertion Code */}
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Left: Practices & Deliverables */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase block mb-3">
                  Key Verification Practices
                </span>
                <div className="space-y-3">
                  {service.keyPractices.map((practice, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-pass shrink-0 mt-0.5" />
                      <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
                        {practice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-line/60 pt-5">
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase block mb-3">
                  Signed Deliverables Provided
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((del) => (
                    <span
                      key={del}
                      className="border border-pass/30 bg-card px-3 py-1 font-mono text-xs text-pass font-medium"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real Sample Assertion / Bug Report Box */}
            <div className="p-6 sm:p-8 flex flex-col justify-between bg-card/60">
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-pass font-semibold flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Real-World QA Artifact</span>
                  </span>
                  <span className="font-mono text-[0.65rem] text-muted uppercase">
                    {service.sampleAssertion.language}
                  </span>
                </div>

                <div className="border border-line bg-paper p-4 font-mono text-[0.72rem] leading-relaxed overflow-x-auto text-ink-soft">
                  <pre className="whitespace-pre-wrap">{service.sampleAssertion.code}</pre>
                </div>

                <p className="mt-2.5 text-xs text-muted italic">
                  {service.sampleAssertion.caption}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="font-mono text-[0.68rem] text-muted">
                  Full service engagement models &amp; deliverables
                </span>
                <Link
                  href="/services"
                  data-testid="services-redirect-cta"
                  data-cursor="Complete testing services"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0"
                >
                  <span>Explore full services page</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
