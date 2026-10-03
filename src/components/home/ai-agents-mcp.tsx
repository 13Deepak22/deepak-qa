"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  FileCode,
  Flame,
  Globe,
  Layers,
  Lock,
  Play,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

interface QaAiCapability {
  id: string;
  category: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  testingChallenge: string;
  howAiHelps: string;
  modelsAndTools: string[];
  concreteArtifact: {
    type: string;
    language: string;
    code: string;
  };
  impactMetric: {
    stat: string;
    label: string;
  };
}

interface McpWorkflow {
  id: string;
  title: string;
  targetMcp: string;
  prompt: string;
  steps: {
    stage: "prompt" | "tool_call" | "tool_response" | "resolution";
    actor: string;
    action: string;
    detail: string;
    code?: string;
  }[];
}

const QA_AI_CAPABILITIES: QaAiCapability[] = [
  {
    id: "fuzzing",
    category: "API & Backend Validation",
    title: "Combinatorial Boundary Fuzzing & Synthetic Data",
    tagline: "Generating thousands of extreme financial boundary payloads that manual testers would never write by hand.",
    icon: Zap,
    testingChallenge:
      "Human QA engineers typically write 5–10 standard test cases per API endpoint. Edge-case decimal overflows (e.g., ₹0.00000001), leap second timestamps, and malformed UPI VPAs escape to production and crash backend ledger accounting.",
    howAiHelps:
      "AI models ingest OpenAPI / Swagger contracts and mathematically generate hundreds of combinatorial edge cases: negative amounts, Unicode fuzzing, boundary character lengths, and conflicting timestamp headers, instantly catching unhandled HTTP 500 crashes before deployment.",
    modelsAndTools: ["ChatGPT o1 (Chain-of-Thought Reasoning)", "mcp/rest-api", "OpenAPI Schemas", "Postman / Newman"],
    concreteArtifact: {
      type: "Synthetic Fuzzing Payload Matrix",
      language: "json",
      code: `{
  "scenario": "boundary_fuzz_mandate_disbursal",
  "endpoint": "/api/v1/upi/mandate/create",
  "fuzzed_vectors": [
    { "amount": "-0.01", "expected": 400, "flag": "NEGATIVE_AMOUNT_REJECTION" },
    { "amount": "999999999999.999", "expected": 422, "flag": "DECIMAL_OVERFLOW_REJECT" },
    { "vpa": "victim@bank%0d%0aInjected-Header:True", "expected": 400, "flag": "CRLF_INJECTION_GUARD" },
    { "recurrence_rule": "FREQ=SECONDLY;COUNT=10000", "expected": 400, "flag": "RECURRENCE_BOMB_PREVENTION" }
  ]
}`,
    },
    impactMetric: {
      stat: "10,000+",
      label: "Synthetic Edge Cases Generated per Release",
    },
  },
  {
    id: "self-healing",
    category: "E2E & UI Automation",
    title: "Autonomous Locator Self-Healing & Flakiness Removal",
    tagline: "Auto-repairing broken CSS/XPath selectors after frontend refactors without aborting release runs.",
    icon: Workflow,
    testingChallenge:
      "Minor design tweaks or frontend component refactors change DOM class names and dynamic element IDs, causing 40% of test suite failures to be false-positives that waste hours of manual debugging.",
    howAiHelps:
      "When a Playwright or Appium locator times out, the agent inspects the live DOM snapshot, computes semantic and accessibility vector similarities, identifies the target element (e.g., matching text, aria role, or sibling structure), and updates the test script automatically.",
    modelsAndTools: ["Claude 3.5 Sonnet", "mcp/playwright", "DOM AST Introspection", "TypeScript Playwright"],
    concreteArtifact: {
      type: "Self-Healing Selector Repair Diff",
      language: "typescript",
      code: `// BEFORE: Brittle selector broke after redesign
- await page.locator("button.checkout-v2-btn_primary_98df").click();

// AFTER: Agent autonomously inspected DOM and patched resilient locator:
+ await page.getByRole("button", { name: /Proceed to Pay/i })
+   .or(page.getByTestId("checkout-submit-cta"))
+   .click({ timeout: 4000 });
// Result: 0 flakiness, regression run completed with 100% pass rate.`,
    },
    impactMetric: {
      stat: "94%",
      label: "Reduction in Flaky False-Positive Failures",
    },
  },
  {
    id: "visual-audit",
    category: "Cross-Platform & Mobile",
    title: "Multi-Modal Visual & Viewport Safe-Area Auditing",
    tagline: "Detecting layout shifts, touch-target clipping, and iOS/Android safe-area overlaps using computer vision.",
    icon: Sparkles,
    testingChallenge:
      "Code assertions can check if an element exists in the DOM, but they cannot see if a sticky CTA button is overlapping the iOS home indicator or if localized currency strings wrap awkwardly and clip on small Android screens.",
    howAiHelps:
      "Agents analyze multi-viewport high-DPI screenshots captured across device resolutions. Vision models compare pixel buffers against design tokens to detect negative space clipping, contrast ratio violations (WCAG), and responsive layout distortions that code assertions miss.",
    modelsAndTools: ["Google Antigravity & Gemini Vision", "Appium Real Devices", "Playwright Viewports", "Figma Design Tokens"],
    concreteArtifact: {
      type: "Vision Anomaly Detection Log",
      language: "json",
      code: `{
  "viewport": "iPhone 15 (375x812 @3x)",
  "defect_type": "SAFE_AREA_OVERLAP",
  "bounding_box": { "x": 16, "y": 768, "w": 343, "h": 44 },
  "issue": "Sticky payment CTA overlaps iOS home indicator by 8px",
  "remediation": "Add padding-bottom: max(16px, env(safe-area-inset-bottom))",
  "automated_patch_verified": true
}`,
    },
    impactMetric: {
      stat: "100%",
      label: "Pixel-Level Responsive Layout Verification",
    },
  },
  {
    id: "race-condition",
    category: "Fintech Core & Ledgers",
    title: "Concurrency, Race Condition & Ledger Auditing",
    tagline: "Auditing multi-threaded transaction flows to catch double-debit vulnerabilities before funds move.",
    icon: ShieldAlert,
    testingChallenge:
      "Asynchronous payment callbacks, network latency jitter, and concurrent user taps can cause race conditions in balance ledgers that only appear under load and result in severe financial losses.",
    howAiHelps:
      "Deep reasoning models audit backend payment state machines and API handlers to spot missing distributed locks (e.g., Redis SETNX), unhandled idempotency keys, and asynchronous callback timing vulnerabilities, generating targeted concurrency tests that simulate simultaneous requests.",
    modelsAndTools: ["Claude 3.5 Sonnet", "mcp/postgresql", "Redis Distributed Locks", "k6 / Locust Concurrency"],
    concreteArtifact: {
      type: "Automated Concurrency Assertion Suite",
      language: "typescript",
      code: `test("verify concurrent double-tap rejection under 1200ms gateway delay", async ({ api }) => {
  const idempotencyKey = "IDEM_UUID_" + Date.now();
  
  // Dispatch 2 simultaneous wallet debit requests with identical idempotency key
  const [resA, resB] = await Promise.all([
    api.post("/v1/wallet/debit", { amount: 500, key: idempotencyKey }),
    api.post("/v1/wallet/debit", { amount: 500, key: idempotencyKey })
  ]);

  // Assert exactly 1 succeeded and 1 was rejected with HTTP 409 Conflict
  const statuses = [resA.status, resB.status].sort();
  expect(statuses).toEqual([200, 409]);
});`,
    },
    impactMetric: {
      stat: "0.00 INR",
      label: "Financial Leakage Escaped to Production",
    },
  },
  {
    id: "scaffolding",
    category: "Test Architecture",
    title: "Spec-to-Code Automation Scaffolding",
    tagline: "Transforming raw PRDs, Figma designs, and Jira user stories into production-ready test suites in minutes.",
    icon: Code2,
    testingChallenge:
      "Manually scaffolding Page Object Model (POM) classes, test fixtures, mocks, and setup teardown scripts for a new product feature takes 3–5 days per sprint, creating a testing bottleneck for engineering teams.",
    howAiHelps:
      "By pair-programming with AI agents directly inside the editor (Cursor IDE / Antigravity), Deepak converts user acceptance criteria and API schemas into structured, clean, maintainable TypeScript Playwright specs with proper typings, assertions, and clean abstractions in minutes.",
    modelsAndTools: ["Cursor AI", "Claude Code", "TypeScript AST", "Page Object Model (POM)"],
    concreteArtifact: {
      type: "Synthesized Page Object Model Class",
      language: "typescript",
      code: `export class LoanOriginationPage {
  constructor(private readonly page: Page) {}
  
  readonly aadharInput = this.page.getByTestId("aadhar-number-input");
  readonly otpBoxes = this.page.locator(".otp-box-segment");
  readonly consentCheckbox = this.page.getByRole("checkbox", { name: /bureau pull/i });
  readonly submitButton = this.page.getByRole("button", { name: "Submit Application" });

  async completeEkycJourney(aadhar: string, otp: string) {
    await this.aadharInput.fill(aadhar);
    await this.consentCheckbox.check();
    await this.page.getByRole("button", { name: "Generate OTP" }).click();
    await this.otpBoxes.first().fill(otp);
    await this.submitButton.click();
    await expect(this.page.getByTestId("underwriting-verdict")).toBeVisible();
  }
}`,
    },
    impactMetric: {
      stat: "4.8x",
      label: "Faster Test Suite Scaffolding Velocity",
    },
  },
  {
    id: "triage",
    category: "Incident Response & Logs",
    title: "Production Telemetry Clustering & Defect Triage",
    tagline: "Parsing gigabytes of crash dumps and Android Logcat traces into instant reproduction steps.",
    icon: Terminal,
    testingChallenge:
      "When a defect occurs on staging or beta builds, engineers are often handed vague reports like 'the app crashed during checkout' alongside 50MB of tangled Android Logcat / iOS Crashlytics stack traces.",
    howAiHelps:
      "Agents parse and cluster noisy multi-threaded mobile logs, stripping away irrelevant debug noise to pinpoint the exact null pointer dereference, network socket timeout, or SQLite constraint violation, producing a concise root cause analysis (RCA) with a copy-pasteable reproduction script.",
    modelsAndTools: ["xAI Grok", "Android Logcat Parser", "iOS Crashlytics", "Network HAR Analyzers"],
    concreteArtifact: {
      type: "Synthesized Defect Repro Ticket",
      language: "json",
      code: `{
  "defect_summary": "NPE in UPIIntentManager.kt when bank switch returns null redirect_url",
  "reproduction_curl": "curl -X POST https://api.fintech.in/v1/upi/intent -d '{\\"bank_code\\":\\"SBIN\\",\\"vpa\\":\\"\\"}'",
  "affected_os": ["Android 14 (OneUI 6.0)", "Android 13 (ColorOS)"],
  "root_cause_line": "UPIIntentManager.kt:142 (attempt to invoke method on null object reference)",
  "automated_guard_added": "Assert UPI Intent handler falls back to Collect flow gracefully"
}`,
    },
    impactMetric: {
      stat: "Sub-Minute",
      label: "Log Triage & Root Cause Isolation",
    },
  },
];

const MCP_WORKFLOWS: McpWorkflow[] = [
  {
    id: "auto-heal",
    title: "Auto-Heal Flaky E2E Test Locator",
    targetMcp: "mcp/playwright",
    prompt: "Test 'payments.spec.ts' failed: Locator '#submit-order-button' not found after DOM update.",
    steps: [
      {
        stage: "prompt",
        actor: "Agent Evaluator",
        action: "Detects regression failure",
        detail: "AssertionError: Timed out 5000ms waiting for locator('#submit-order-button')",
      },
      {
        stage: "tool_call",
        actor: "MCP Tool Call",
        action: "mcp/playwright:inspect_dom_snapshot",
        detail: "Querying live DOM tree around form submission elements...",
        code: `{"action": "inspect_dom", "context": "#checkout-form", "depth": 3}`,
      },
      {
        stage: "tool_response",
        actor: "Tool Response",
        action: "DOM Snapshot Received",
        detail: "Element updated with resilient attribute: button[data-testid='proceed-payment-cta']",
        code: `<button data-testid="proceed-payment-cta" class="btn-primary">Pay ₹1,200</button>`,
      },
      {
        stage: "resolution",
        actor: "Agent Self-Healing",
        action: "Patch & Re-verification Succeeded",
        detail: "Updated locator to page.getByTestId('proceed-payment-cta'). Re-run passed in 142ms.",
      },
    ],
  },
  {
    id: "fuzzing",
    title: "Synthetic Boundary Fuzzing via REST MCP",
    targetMcp: "mcp/rest-api",
    prompt: "Execute combinatorial edge-case fuzzing against /api/v1/upi/mandate endpoint.",
    steps: [
      {
        stage: "prompt",
        actor: "Agent Evaluator",
        action: "Ingests OpenAPI Schema",
        detail: "Extracting parameter schemas: amount (decimal), mandate_type (enum), expiry (iso8601)",
      },
      {
        stage: "tool_call",
        actor: "MCP Tool Call",
        action: "mcp/rest-api:dispatch_fuzz_batch",
        detail: "Executing 50 boundary payloads (negative amounts, extreme precision, expired timestamps)...",
        code: `{"endpoint": "/api/v1/upi/mandate", "payloads": 50, "concurrency": 10}`,
      },
      {
        stage: "tool_response",
        actor: "Tool Response",
        action: "Anomaly Flagged",
        detail: "HTTP 500 Internal Error discovered on payload: { amount: '0.00000001' }",
        code: `{"status": 500, "error": "DecimalPrecisionOverflowException", "code": "ERR_LEDGER"}`,
      },
      {
        stage: "resolution",
        actor: "Agent Automated Defense",
        action: "Regression Test & Issue Created",
        detail: "Filed defect #QA-891 with reproduction curl; created automated test asserting HTTP 400 rejection.",
      },
    ],
  },
  {
    id: "visual-audit",
    title: "Autonomous Multi-Viewport Visual Layout Audit",
    targetMcp: "mcp/playwright",
    prompt: "Audit mobile checkout page layout against design tokens for iPhone 15 viewport.",
    steps: [
      {
        stage: "prompt",
        actor: "Agent Evaluator",
        action: "Initiates Multi-Modal Audit",
        detail: "Evaluating 375x812 viewport for component collisions, clipping, and responsive safe areas.",
      },
      {
        stage: "tool_call",
        actor: "MCP Tool Call",
        action: "mcp/playwright:capture_viewport_screenshot",
        detail: "Capturing high-DPI full-page buffer with device emulation...",
        code: `{"viewport": {"width": 375, "height": 812}, "deviceScaleFactor": 3, "fullPage": true}`,
      },
      {
        stage: "tool_response",
        actor: "Tool Response",
        action: "Vision Model Analysis",
        detail: "Discovered 6px negative space clipping on Sticky CTA bar over iOS home indicator.",
        code: `{"defect": "LAYOUT_OVERLAP", "element": "#sticky-cta", "overlapPx": 6}`,
      },
      {
        stage: "resolution",
        actor: "Agent Fix Proposal",
        action: "CSS Safe-Area Patch Recommended",
        detail: "Generated fix: padding-bottom: max(1rem, env(safe-area-inset-bottom)). Verified across devices.",
      },
    ],
  },
];

export function AiAgentsMcpSection() {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>("fuzzing");
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>("auto-heal");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStepIndex, setSimStepIndex] = useState<number>(-1);

  const activeCapability =
    QA_AI_CAPABILITIES.find((c) => c.id === selectedCapabilityId) || QA_AI_CAPABILITIES[0];
  const activeWorkflow =
    MCP_WORKFLOWS.find((w) => w.id === selectedWorkflowId) || MCP_WORKFLOWS[0];

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeRunIdRef = useRef<number>(0);

  useEffect(() => {
    const runRef = activeRunIdRef;
    const tRef = timerRef;
    return () => {
      runRef.current++;
      if (tRef.current) {
        clearInterval(tRef.current);
      }
    };
  }, []);

  const handleRunMcpSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStepIndex(-1);

    activeRunIdRef.current++;
    const currentRunId = activeRunIdRef.current;

    const steps = activeWorkflow.steps.length;
    let current = 0;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (activeRunIdRef.current !== currentRunId) return;

      setSimStepIndex(current);
      current++;
      if (current >= steps) {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => {
          if (activeRunIdRef.current === currentRunId) {
            setIsSimulating(false);
          }
        }, 400);
      }
    }, 600);
  };

  const isWorkflowFinished = simStepIndex >= activeWorkflow.steps.length - 1;
  const CapabilityIcon = activeCapability.icon;

  return (
    <section id="ai-agents" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 items-center gap-1 border border-pass/30 bg-pass-fill/10 px-2 font-mono text-[0.62rem] uppercase tracking-wider text-pass font-semibold">
                <Bot className="h-3 w-3" />
                <span>AI-Augmented QA &amp; Autonomous Agents</span>
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                Modern Testing Stack
              </span>
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-ink">
              How AI &amp; autonomous agents accelerate testing.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-ink-soft sm:text-right">
            Not marketing hype or buzzwords: a concrete breakdown of how Deepak pairs with Claude, Cursor, Antigravity, Grok, ChatGPT, and Model Context Protocol (MCP) to eliminate escapes and test everything faster.
          </p>
        </div>

        {/* 6 Core QA Capabilities Grid Bar */}
        <div className="mt-8 border border-line bg-card shadow-xs">
          <div className="border-b border-line bg-paper px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Select a Testing Area to Inspect How AI Solves It:
            </span>
            <span className="font-mono text-[0.68rem] text-pass font-semibold hidden sm:inline">
              6 Verified QA Workflows
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-x divide-line">
            {QA_AI_CAPABILITIES.map((cap) => {
              const isSelected = cap.id === activeCapability.id;
              const Icon = cap.icon;
              return (
                <button
                  key={cap.id}
                  type="button"
                  data-testid={`qa-capability-${cap.id}`}
                  onClick={() => setSelectedCapabilityId(cap.id)}
                  className={`p-3.5 text-left transition-colors flex flex-col justify-between relative group ${
                    isSelected
                      ? "bg-paper text-pass"
                      : "bg-card text-ink-soft hover:bg-paper/70 hover:text-ink"
                  }`}
                  data-cursor={`Inspect ${cap.title}`}
                >
                  {/* Top Active Line Indicator */}
                  <span
                    className={`absolute inset-x-0 -top-px h-[3px] transition-all ${
                      isSelected ? "bg-pass shadow-xs" : "bg-transparent group-hover:bg-pass/30"
                    }`}
                    aria-hidden="true"
                  />

                  <div>
                    <div
                      className={`inline-flex h-7 w-7 items-center justify-center border mb-2 transition-colors ${
                        isSelected
                          ? "border-pass bg-pass-fill/15 text-pass"
                          : "border-line bg-paper text-muted group-hover:text-ink"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted block mb-1">
                      {cap.category.split(" ")[0]}
                    </span>
                    <h3 className="font-sans text-xs font-semibold leading-snug line-clamp-2">
                      {cap.title.split("&")[0]}
                    </h3>
                  </div>

                  <span
                    className={`mt-3 font-mono text-[0.6rem] uppercase tracking-wider block ${
                      isSelected ? "text-pass font-bold" : "text-muted"
                    }`}
                  >
                    {isSelected ? "● Active View" : "Explore"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Capability Breakdown Card */}
        <div className="mt-4 border border-line bg-paper p-5 sm:p-7 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6 Columns: The Testing Problem & The AI Solution */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider font-semibold">
                    {activeCapability.category}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Workflow 0{QA_AI_CAPABILITIES.findIndex((c) => c.id === activeCapability.id) + 1}
                  </span>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-pass bg-pass-fill/15 text-pass">
                    <CapabilityIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                      {activeCapability.title}
                    </h3>
                    <p className="mt-1 font-serif text-sm text-ink-soft leading-relaxed italic">
                      &quot;{activeCapability.tagline}&quot;
                    </p>
                  </div>
                </div>

                {/* The Traditional Problem vs How AI Solves It */}
                <div className="mt-5 space-y-3">
                  <div className="border border-line bg-card/60 p-3.5 font-mono text-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold block mb-1">
                      The Traditional QA Problem:
                    </span>
                    <p className="text-ink-soft text-[0.72rem] leading-relaxed font-sans">
                      {activeCapability.testingChallenge}
                    </p>
                  </div>

                  <div className="border border-pass/30 bg-pass-fill/5 p-3.5 font-mono text-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-pass font-semibold block mb-1">
                      How AI &amp; Autonomous Agents Help:
                    </span>
                    <p className="text-ink text-[0.72rem] leading-relaxed font-sans">
                      {activeCapability.howAiHelps}
                    </p>
                  </div>
                </div>
              </div>

              {/* Models & Tools Integrated for this Task */}
              <div className="border-t border-line/60 pt-4">
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-2">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCapability.modelsAndTools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-line bg-card px-2 py-0.5 font-mono text-[0.65rem] text-ink-soft"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Concrete Code Artifact & Impact Metric */}
            <div className="lg:col-span-6 flex flex-col justify-between border border-line bg-card p-4 sm:p-5 font-mono text-xs">
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <FileCode className="h-3.5 w-3.5 text-pass" />
                    <span className="text-[0.7rem] uppercase text-muted tracking-wider">
                      Concrete Testing Artifact ({activeCapability.concreteArtifact.type})
                    </span>
                  </div>
                  <span className="text-[0.65rem] text-pass font-semibold uppercase">
                    {activeCapability.concreteArtifact.language}
                  </span>
                </div>

                <div className="bg-paper-deep border border-line p-3 overflow-x-auto text-[0.7rem] leading-relaxed text-ink font-mono">
                  <pre>
                    <code>{activeCapability.concreteArtifact.code}</code>
                  </pre>
                </div>
              </div>

              {/* Stat callout at bottom */}
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
                <div>
                  <span className="font-serif text-2xl font-bold text-pass block">
                    {activeCapability.impactMetric.stat}
                  </span>
                  <span className="font-mono text-[0.65rem] text-muted uppercase">
                    {activeCapability.impactMetric.label}
                  </span>
                </div>

                <span className="font-mono text-[0.68rem] text-muted text-right max-w-[14rem]">
                  Verified by deterministic Playwright / Appium test suites.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live MCP Execution Terminal (Demonstrating Protocol Tool Calls) */}
        <div className="mt-8 border border-line bg-paper p-5 sm:p-6 lg:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-pass animate-pulse" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
                  Interactive Model Context Protocol (MCP) Terminal
                </h3>
              </div>
              <p className="text-xs text-ink-soft mt-0.5">
                Inspect how autonomous agents call headless browser, REST, and database tools over JSON-RPC to resolve QA tasks in real time.
              </p>
            </div>

            {/* Workflow Selectors */}
            <div className="flex flex-wrap items-center gap-2">
              {MCP_WORKFLOWS.map((wf) => {
                const isSelected = wf.id === activeWorkflow.id;
                return (
                  <button
                    key={wf.id}
                    type="button"
                    data-testid={`mcp-wf-${wf.id}`}
                    disabled={isSimulating}
                    onClick={() => {
                      if (isSimulating) return;
                      setSelectedWorkflowId(wf.id);
                      setSimStepIndex(-1);
                    }}
                    className={`press px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider border transition-colors disabled:opacity-60 ${
                      isSelected
                        ? "border-pass bg-card text-pass font-semibold shadow-2xs"
                        : "border-line bg-paper text-muted hover:text-ink"
                    }`}
                  >
                    {wf.title.split(" ")[0]} Flow
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workflow Terminal Body */}
          <div className="mt-5 grid lg:grid-cols-12 gap-5 items-stretch">
            {/* Left 4 Cols: Problem Prompt & Trigger */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block mb-1">
                    Selected Agent Workflow:
                  </span>
                  <h4 className="font-serif text-base font-bold text-ink">
                    {activeWorkflow.title}
                  </h4>
                  <span className="inline-block mt-1 border border-pass/30 bg-card text-pass px-2 py-0.5 font-mono text-[0.65rem]">
                    Tool: {activeWorkflow.targetMcp}
                  </span>
                </div>

                <div className="border border-line bg-card/60 p-3 font-mono text-xs space-y-1">
                  <span className="text-[0.62rem] uppercase tracking-wider text-muted block">
                    Incoming Regression Trigger:
                  </span>
                  <p className="text-ink text-[0.72rem] leading-relaxed">
                    &quot;{activeWorkflow.prompt}&quot;
                  </p>
                </div>
              </div>

              <button
                type="button"
                data-testid="mcp-simulate-run"
                onClick={handleRunMcpSimulation}
                disabled={isSimulating}
                className="press w-full flex items-center justify-center gap-2 border border-pass bg-pass text-on-band px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-pass-fill transition-colors disabled:opacity-60 shadow-xs"
                data-cursor="Simulate agent tool execution"
              >
                {isSimulating ? (
                  <>
                    <RotateCcw className="h-4 w-4 animate-spin" />
                    <span>Agent Calling MCP Tools...</span>
                  </>
                ) : isWorkflowFinished ? (
                  <>
                    <RotateCcw className="h-4 w-4" />
                    <span>Re-run Agent Simulation</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-current" />
                    <span>Execute Agent Pipeline</span>
                  </>
                )}
              </button>
            </div>

            {/* Right 8 Cols: Real-Time MCP Event Log */}
            <div className="lg:col-span-8 flex flex-col justify-between border border-line bg-card p-4 font-mono text-xs shadow-2xs">
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-pass" />
                    <span className="text-[0.7rem] uppercase text-muted tracking-wider">
                      MCP Tool Execution Stream (JSON-RPC 2.0)
                    </span>
                  </div>
                  <span className="text-[0.65rem] text-muted">
                    {simStepIndex >= 0 ? `${simStepIndex + 1}/${activeWorkflow.steps.length} Steps` : "Idle"}
                  </span>
                </div>

                {/* Step-by-Step Events */}
                <div className="space-y-2.5">
                  {activeWorkflow.steps.map((step, idx) => {
                    const isComplete = simStepIndex >= idx;
                    const isCurrent = isSimulating && simStepIndex === idx;

                    return (
                      <div
                        key={idx}
                        className={`border p-2.5 transition-all ${
                          isComplete
                            ? "border-pass/40 bg-paper"
                            : isCurrent
                            ? "border-amber-500/50 bg-amber-500/5 animate-pulse"
                            : "border-line/60 bg-paper/40 opacity-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-block h-1.5 w-1.5 rounded-full ${
                                isComplete ? "bg-pass" : isCurrent ? "bg-amber-500" : "bg-muted"
                              }`}
                            />
                            <span className="font-bold text-ink text-[0.7rem] uppercase">
                              {step.actor}
                            </span>
                            <span className="text-muted text-[0.65rem]">· {step.action}</span>
                          </div>
                          <span className="text-[0.6rem] text-muted uppercase">
                            Step 0{idx + 1}
                          </span>
                        </div>

                        <p className="text-ink-soft text-[0.72rem] leading-normal">
                          {step.detail}
                        </p>

                        {step.code && (
                          <div className="mt-1.5 p-1.5 bg-paper-deep border border-line/60 text-[0.68rem] text-pass font-mono overflow-x-auto">
                            <code>{step.code}</code>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Telemetry Status Bar */}
              <div className="mt-4 pt-2.5 border-t border-line/60 flex items-center justify-between text-[0.68rem] text-muted">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      isWorkflowFinished ? "bg-pass" : isSimulating ? "bg-amber-500" : "bg-muted"
                    }`}
                  />
                  {isWorkflowFinished
                    ? "Pipeline Resolved · Zero Flakiness Confirmed"
                    : isSimulating
                    ? "Executing Live MCP Tool..."
                    : "Ready for Agent Invocation"}
                </span>
                <span className="text-pass font-semibold">100% Deterministic Verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Acceleration Impact Metrics */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="border border-line bg-paper p-4 text-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-ink block">4.8x</span>
            <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1 block">
              Faster Suite Scaffolding
            </span>
          </div>
          <div className="border border-line bg-paper p-4 text-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-pass block">94%</span>
            <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1 block">
              Flaky Test Self-Healing
            </span>
          </div>
          <div className="border border-line bg-paper p-4 text-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-ink block">10,000+</span>
            <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1 block">
              Synthetic Edge Payloads
            </span>
          </div>
          <div className="border border-line bg-paper p-4 text-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-pass block">0.00</span>
            <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1 block">
              Hallucinated Assertions Escaped
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
