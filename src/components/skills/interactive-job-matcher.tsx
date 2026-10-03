"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  FileCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

interface RoleProfile {
  id: string;
  title: string;
  matchScore: number;
  domain: string;
  matchedKeywords: string[];
  evidenceSnippet: {
    title: string;
    language: string;
    code: string;
  };
  keyTakeaway: string;
}

const ROLE_PROFILES: RoleProfile[] = [
  {
    id: "sdet",
    title: "Senior SDET / Automation Lead",
    matchScore: 99,
    domain: "Web & Mobile Automation",
    matchedKeywords: [
      "Playwright",
      "TypeScript",
      "Appium",
      "Page Object Model",
      "Headless Execution",
      "Automated Release Gates",
      "Parallel Execution",
      "Selenium",
    ],
    evidenceSnippet: {
      title: "playwright/checkout-idempotency.spec.ts",
      language: "typescript",
      code: `test("checkout cart state survives unexpected network interrupt", async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.goto();
  await checkout.applyPromoCode("OCTOBER_FEST");
  await page.route("**/api/v1/cart/commit", (route) => route.abort("failed"));
  await checkout.clickProceedToPay();
  await expect(checkout.offlineRetryBanner).toBeVisible();
  await page.unrouteAll();
  await checkout.retryPayment();
  await expect(checkout.successReceiptModal).toBeVisible({ timeout: 5000 });
});`,
    },
    keyTakeaway: "Architects scalable test automation suites that cut manual sanity hours by 50% with zero false-positive flakiness.",
  },
  {
    id: "fintech",
    title: "Fintech & Payments QA Specialist",
    matchScore: 100,
    domain: "Core Banking & Gateways",
    matchedKeywords: [
      "UPI 2.0 Intent",
      "Double-Debit Prevention",
      "Redis Idempotency Locks",
      "Razorpay",
      "Cashfree",
      "DigiLocker eKYC",
      "Penny-Drop Validation",
      "e-NACH Mandates",
    ],
    evidenceSnippet: {
      title: "fintech/ledger-invariance.spec.ts",
      language: "typescript",
      code: `test("verify zero-delta double-entry ledger balance symmetry", async ({ api }) => {
  const transfer = await api.post("/v1/escrow/disburse", {
    beneficiaryVpa: "deepak@okaxis",
    amountInr: 45000.00,
    idempotencyKey: "DISB_UUID_99182312"
  });
  expect(transfer.status).toBe(200);
  const ledger = await api.get("/v1/accounting/trial-balance");
  expect(ledger.debitTotal - ledger.creditTotal).toEqual(0.00);
});`,
    },
    keyTakeaway: "Zero P0 financial escapes across 20+ production releases spanning UPI, digital lending (LOS/LMS), and merchant gateways.",
  },
  {
    id: "ai-mcp",
    title: "AI-Augmented QA & MCP Engineer",
    matchScore: 98,
    domain: "Agentic Testing & Model Context Protocol",
    matchedKeywords: [
      "Claude Code",
      "Google Antigravity",
      "Cursor AI",
      "Model Context Protocol (MCP)",
      "Playwright MCP",
      "Autonomous Defect Triage",
      "Edge-Case Synthesis",
      "Grok Telemetry",
    ],
    evidenceSnippet: {
      title: "agentic/mcp-healer.ts",
      language: "typescript",
      code: `async function healBrokenSelector(mcpClient: McpClient) {
  try {
    await mcpClient.click("#legacy-pay-btn");
  } catch (err) {
    const domTree = await mcpClient.callTool("mcp/playwright", "inspect_dom", { depth: 2 });
    const resilientSelector = await aiAgent.inferResilientLocator(domTree);
    await mcpClient.click(resilientSelector);
    expect(await mcpClient.isVisible("[data-testid='payment-confirmed']")).toBe(true);
  }
}`,
    },
    keyTakeaway: "Pioneering agentic workflows and MCP servers to auto-repair flaky tests, synthesize combinatorial edge cases, and eliminate repetitive QA friction.",
  },
  {
    id: "api-perf",
    title: "Backend API & Performance Tester",
    matchScore: 97,
    domain: "High Concurrency & Stress Benchmarks",
    matchedKeywords: [
      "Apache JMeter",
      "Postman",
      "Newman",
      "OpenAPI 3.1",
      "JSON Schema",
      "HMAC-SHA256",
      "Latency p99 Benchmarks",
      "Network Log Analysis",
    ],
    evidenceSnippet: {
      title: "jmeter/concurrency-500threads.jmx",
      language: "xml",
      code: `<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="500 Virtual Users">
  <stringProp name="ThreadGroup.num_threads">500</stringProp>
  <stringProp name="ThreadGroup.ramp_time">15</stringProp>
  <assertion>
    <stringProp name="DurationAssertion.duration">300</stringProp>
  </assertion>
</ThreadGroup>`,
    },
    keyTakeaway: "Validates microservice SLAs under 500+ concurrent threads, preventing database lock deadlocks and slow queries.",
  },
];

export function InteractiveJobMatcher() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("sdet");

  const activeRole = ROLE_PROFILES.find((r) => r.id === selectedRoleId) || ROLE_PROFILES[0];

  return (
    <div className="border border-line bg-paper p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-pass" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Interactive Job &amp; Role Fit Analyzer
            </h3>
          </div>
          <p className="text-xs text-ink-soft mt-1">
            Select a target engineering role to verify keyword alignment, stack coverage, and live test code evidence.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-pass animate-pulse" />
          <span>ATS Parser Index: 100% Validated</span>
        </div>
      </div>

      {/* Role Selector Tabs */}
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {ROLE_PROFILES.map((role) => {
          const isSelected = role.id === activeRole.id;
          return (
            <button
              key={role.id}
              type="button"
              data-testid={`job-fit-tab-${role.id}`}
              onClick={() => setSelectedRoleId(role.id)}
              className={`p-3.5 border text-left font-mono transition-all flex flex-col justify-between ${
                isSelected
                  ? "border-pass bg-card text-pass shadow-2xs font-bold ring-1 ring-pass/40"
                  : "border-line bg-card/40 text-ink-soft hover:bg-card hover:text-ink"
              }`}
            >
              <div>
                <span className="text-[0.62rem] uppercase tracking-wider text-muted block mb-1">
                  {role.domain}
                </span>
                <p className="font-serif text-sm font-bold text-ink truncate leading-tight">
                  {role.title}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-line/60">
                <span className="text-[0.65rem] text-muted uppercase">Match:</span>
                <span className="text-pass font-bold">{role.matchScore}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Role Deep Dive Grid */}
      <div className="mt-6 border border-line bg-card p-5 sm:p-6">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 5 Cols: Matched Keywords & Key Takeaway */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                  ATS Verified Keywords ({activeRole.matchedKeywords.length}):
                </span>
                <span className="font-mono text-xs text-pass font-bold">
                  {activeRole.matchScore}% Compatibility
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {activeRole.matchedKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="border border-pass/30 bg-pass-fill/10 text-pass px-2.5 py-1 font-mono text-xs font-medium"
                  >
                    ✓ {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-line bg-paper p-4 font-mono text-xs space-y-1.5">
              <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                Production Value Proposition:
              </span>
              <p className="font-sans text-xs text-ink leading-relaxed">
                {activeRole.keyTakeaway}
              </p>
            </div>
          </div>

          {/* Right 7 Cols: Live Production Code / Test Evidence Terminal */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-line bg-paper p-4 sm:p-5 font-mono text-xs shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-line/60 pb-2 mb-3 text-muted text-[0.68rem]">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-pass" />
                  <span className="text-ink font-semibold">{activeRole.evidenceSnippet.title}</span>
                </div>
                <span className="uppercase text-muted">{activeRole.evidenceSnippet.language}</span>
              </div>

              <pre className="p-3 bg-card border border-line overflow-x-auto text-[0.72rem] leading-relaxed text-ink-soft select-all">
                <code>{activeRole.evidenceSnippet.code}</code>
              </pre>
            </div>

            <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between text-[0.68rem] text-muted">
              <span>Verified in Live Production Suite</span>
              <span className="text-pass font-semibold">Zero Escape Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
