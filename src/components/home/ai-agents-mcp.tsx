"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

interface AiModelItem {
  id: string;
  name: string;
  provider: string;
  badge: string;
  icon: React.ElementType;
  tagline: string;
  qaRole: string;
  capabilities: string[];
  metrics: string;
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

const AI_MODELS: AiModelItem[] = [
  {
    id: "claude",
    name: "Claude 3.5 Sonnet / Claude Code",
    provider: "Anthropic",
    badge: "Deep Reasoning & Architecture",
    icon: Brain,
    tagline: "Unmatched code comprehension for synthesizing end-to-end Page Object models.",
    qaRole: "Deep Test Architecture & Edge-Case Discovery",
    capabilities: [
      "Drafts resilient, type-safe Playwright & Appium test suites from pull request diffs",
      "Audits async race conditions & distributed locking edge cases in concurrent flows",
      "Auto-generates comprehensive BDD Gherkin scenarios covering obscure boundary states",
    ],
    metrics: "200K Context Window · Multi-File Refactor",
  },
  {
    id: "antigravity",
    name: "Google Antigravity & Gemini",
    provider: "Google DeepMind",
    badge: "Multi-Modal Vision & Full-Repo Context",
    icon: Sparkles,
    tagline: "Massive context and multi-modal intelligence for cross-platform visual QA.",
    qaRole: "Visual Regression & Full-Repo Auditing",
    capabilities: [
      "Performs pixel-perfect multi-viewport visual layout assertion comparisons",
      "Scans whole-repository test codebases (1M+ tokens) to eliminate duplicate assertions",
      "Detects visual accessibility contrast defects, clipping, and font-rendering bugs",
    ],
    metrics: "1M+ Token Context · Vision Native",
  },
  {
    id: "cursor",
    name: "Cursor AI (Agent IDE)",
    provider: "Anysphere",
    badge: "SDET Pair-Programming",
    icon: Code2,
    tagline: "Instantaneous test scaffolding and real-time test harness pair-programming.",
    qaRole: "Test Fixture Scaffolding & Rapid Mocking",
    capabilities: [
      "Instantly scaffolds reusable test utilities, custom fixtures, and auth state helpers",
      "Transforms manual test steps into production-ready TypeScript Playwright specs",
      "Real-time codebase indexing for instant API contract & endpoint mapping",
    ],
    metrics: "Sub-Second In-Editor Agent Mode",
  },
  {
    id: "chatgpt",
    name: "OpenAI ChatGPT & o1",
    provider: "OpenAI",
    badge: "Combinatorial Matrix Synthesis",
    icon: Zap,
    tagline: "Advanced chain-of-thought reasoning for boundary value test matrices.",
    qaRole: "Combinatorial Fuzzing & Negative Test Design",
    capabilities: [
      "Synthesizes thousands of realistic fintech test payloads with valid checksums",
      "Performs rigorous boundary-value analysis on input fields & financial amounts",
      "Designs destructive fuzzing suites to test backend resilience under corrupt inputs",
    ],
    metrics: "o1 Deep Chain-of-Thought Reasoning",
  },
  {
    id: "grok",
    name: "xAI Grok",
    provider: "xAI",
    badge: "Real-Time Telemetry Intelligence",
    icon: Cpu,
    tagline: "High-speed log pattern classification and live crash anomaly detection.",
    qaRole: "Live Production Crash Triage & Log Clustering",
    capabilities: [
      "Parses multi-gigabyte production server logs to cluster unhandled exceptions",
      "Discovers recurring crash signatures across Android logcat & iOS crashlytics",
      "Real-time synthesis of defect reproduction steps from staging telemetry streams",
    ],
    metrics: "Low-Latency High-Throughput Ingestion",
  },
];

const MCP_TOOLS = [
  {
    name: "mcp/playwright",
    category: "Browser & UI",
    icon: Globe,
    description: "Headless browser control, DOM tree introspection & automated visual trace capture.",
  },
  {
    name: "mcp/postgresql",
    category: "Database & Ledger",
    icon: Database,
    description: "Direct SQL state assertion, double-entry balance verification & test data tear-down.",
  },
  {
    name: "mcp/rest-api",
    category: "Contract & Gateway",
    icon: Terminal,
    description: "OpenAPI schema ingestion, HMAC auth signature injection & concurrency stress dispatch.",
  },
  {
    name: "mcp/git-github",
    category: "CI & Version Control",
    icon: Workflow,
    description: "PR diff analysis, failed CI log extraction & automated defect filing with repro steps.",
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
    prompt: "Audit mobile checkout page layout against Figma tokens for iPhone 15 viewport.",
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
        detail: "Generated fix: padding-bottom: max(1rem, env(safe-area-inset-bottom)). Verified across 4 devices.",
      },
    ],
  },
];

export function AiAgentsMcpSection() {
  const [activeTab, setActiveTab] = useState<"models" | "mcp">("models");
  const [selectedModelId, setSelectedModelId] = useState<string>("claude");
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>("auto-heal");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStepIndex, setSimStepIndex] = useState<number>(-1);

  const activeModel = AI_MODELS.find((m) => m.id === selectedModelId) || AI_MODELS[0];
  const activeWorkflow = MCP_WORKFLOWS.find((w) => w.id === selectedWorkflowId) || MCP_WORKFLOWS[0];

  const handleRunMcpSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStepIndex(-1);

    const steps = activeWorkflow.steps.length;
    let current = 0;

    const interval = setInterval(() => {
      setSimStepIndex(current);
      current++;
      if (current >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
        }, 400);
      }
    }, 600);
  };

  const isWorkflowFinished = simStepIndex >= activeWorkflow.steps.length - 1;

  return (
    <section id="ai-agents" className="scroll-mt-20 border-t border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 items-center gap-1 border border-pass/30 bg-pass-fill/10 px-2 font-mono text-[0.62rem] uppercase tracking-wider text-pass font-semibold">
                <Bot className="h-3 w-3" />
                <span>AI Agents &amp; MCP Protocols</span>
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
                Modern QA Intelligence
              </span>
            </div>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              Autonomous QA Agents &amp; The AI Testing Stack.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-ink-soft sm:text-right">
            How Deepak leverages Claude, Cursor, Antigravity, Grok, ChatGPT, and Model Context Protocol (MCP) to automate regression suites, eliminate flaky tests, and triage live production incidents.
          </p>
        </div>

        {/* View Toggle Bar (Frontier Models vs MCP Agent Execution) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-testid="ai-tab-models"
              onClick={() => setActiveTab("models")}
              className={`press px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                activeTab === "models"
                  ? "border-pass bg-pass text-on-band font-semibold shadow-xs"
                  : "border-line bg-paper text-ink-soft hover:border-pass hover:text-ink"
              }`}
              data-cursor="Inspect frontier AI models used for QA"
            >
              01 / Frontier AI Models
            </button>
            <button
              type="button"
              data-testid="ai-tab-mcp"
              onClick={() => setActiveTab("mcp")}
              className={`press px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                activeTab === "mcp"
                  ? "border-pass bg-pass text-on-band font-semibold shadow-xs"
                  : "border-line bg-paper text-ink-soft hover:border-pass hover:text-ink"
              }`}
              data-cursor="Inspect Model Context Protocol (MCP) tool execution"
            >
              02 / Model Context Protocol (MCP)
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[0.68rem] text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-pass animate-pulse" />
            <span>Agent Tool Calling: Active</span>
            <span>·</span>
            <span className="text-pass font-semibold">Zero Hallucination Standard</span>
          </div>
        </div>

        {/* VIEW 01: FRONTIER AI MODELS */}
        {activeTab === "models" && (
          <div className="mt-6 space-y-6 content-fade">
            {/* Model Selector Grid (5 Models) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {AI_MODELS.map((model) => {
                const isSelected = model.id === activeModel.id;
                const ModelIcon = model.icon;
                return (
                  <button
                    key={model.id}
                    type="button"
                    data-testid={`model-selector-${model.id}`}
                    onClick={() => setSelectedModelId(model.id)}
                    className={`p-3.5 border text-left transition-all flex flex-col justify-between select-none ${
                      isSelected
                        ? "border-pass bg-paper text-pass shadow-xs ring-1 ring-pass/40"
                        : "border-line bg-paper/60 text-ink-soft hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center border ${
                            isSelected
                              ? "border-pass bg-pass-fill/15 text-pass"
                              : "border-line bg-card text-muted"
                          }`}
                        >
                          <ModelIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-mono text-[0.6rem] text-muted truncate">
                          {model.provider}
                        </span>
                      </div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-ink leading-tight truncate">
                        {model.name}
                      </h4>
                    </div>

                    <span
                      className={`mt-3 font-mono text-[0.62rem] uppercase tracking-wider block ${
                        isSelected ? "text-pass font-semibold" : "text-muted"
                      }`}
                    >
                      {isSelected ? "● Selected Model" : "View Superpower"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Model Deep Dive Spotlight Card */}
            <div className="border border-line bg-paper p-5 sm:p-6 lg:p-7 shadow-xs">
              <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                {/* Left 5 Cols: Overview & Role */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider font-semibold">
                        {activeModel.badge}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        Provider: {activeModel.provider}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                      {activeModel.name}
                    </h3>

                    <p className="font-mono text-xs text-pass font-semibold mt-1">
                      Role: {activeModel.qaRole}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                      {activeModel.tagline}
                    </p>
                  </div>

                  <div className="border border-line bg-card/60 p-3.5 font-mono text-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider text-muted block mb-1">
                      Architecture &amp; Velocity Benchmark:
                    </span>
                    <p className="text-ink font-semibold">{activeModel.metrics}</p>
                  </div>
                </div>

                {/* Right 7 Cols: Specific QA Superpowers */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted block mb-3">
                      Production QA Superpowers &amp; Implementations:
                    </span>

                    <div className="space-y-2.5">
                      {activeModel.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 border border-line bg-card/40 p-3"
                        >
                          <CheckCircle2 className="h-4 w-4 text-pass shrink-0 mt-0.5" />
                          <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
                            {cap}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Guarantee */}
                  <div className="border-t border-line/60 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-[0.68rem] text-muted">
                      Deterministic Harness Guarantee:
                    </span>
                    <span className="font-mono text-[0.68rem] text-pass font-semibold">
                      All AI-generated suites verified via deterministic Playwright / JMeter executions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 02: MODEL CONTEXT PROTOCOL (MCP) INTERACTIVE SIMULATOR */}
        {activeTab === "mcp" && (
          <div className="mt-6 space-y-6 content-fade">
            {/* MCP Connected Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {MCP_TOOLS.map((tool) => {
                const ToolIcon = tool.icon;
                return (
                  <div key={tool.name} className="border border-line bg-paper p-3.5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center border border-pass/30 bg-pass-fill/10 text-pass">
                          <ToolIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="font-mono text-[0.62rem] text-pass font-semibold uppercase">
                          {tool.category}
                        </span>
                      </div>
                      <h4 className="font-mono text-xs font-bold text-ink">{tool.name}</h4>
                      <p className="mt-1 text-xs text-ink-soft leading-relaxed">{tool.description}</p>
                    </div>
                    <span className="mt-2.5 font-mono text-[0.6rem] text-muted block uppercase">
                      Protocol: JSON-RPC 2.0 · Ready
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Interactive MCP Workflow Simulator Terminal */}
            <div className="border border-line bg-paper p-5 sm:p-6 shadow-xs">
              {/* Simulator Header & Workflow Selector */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-pass animate-pulse" />
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">
                      Live MCP Agent Execution Terminal
                    </h3>
                  </div>
                  <p className="text-xs text-ink-soft mt-0.5">
                    Select a QA problem to simulate an AI agent orchestrating MCP tools to fix issues in real time.
                  </p>
                </div>

                {/* Workflow Selector Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {MCP_WORKFLOWS.map((wf) => {
                    const isSelected = wf.id === activeWorkflow.id;
                    return (
                      <button
                        key={wf.id}
                        type="button"
                        data-testid={`mcp-wf-${wf.id}`}
                        onClick={() => {
                          setSelectedWorkflowId(wf.id);
                          setSimStepIndex(-1);
                          setIsSimulating(false);
                        }}
                        className={`press px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider border transition-colors ${
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
                        Active Simulation Scenario:
                      </span>
                      <h4 className="font-serif text-base font-bold text-ink">
                        {activeWorkflow.title}
                      </h4>
                      <span className="inline-block mt-1 border border-pass/30 bg-card text-pass px-2 py-0.5 font-mono text-[0.65rem]">
                        Target: {activeWorkflow.targetMcp}
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
                        <span>Agent Executing...</span>
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
                          MCP Tool Execution Stream (JSON-RPC)
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
                        ? "Pipeline Succeeded · Zero Flakiness Confirmed"
                        : isSimulating
                        ? "Awaiting MCP Tool Response..."
                        : "Ready for Agent Invocation"}
                    </span>
                    <span className="text-pass font-semibold">100% Deterministic Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
            <span className="font-serif text-2xl sm:text-3xl font-bold text-ink block">5+</span>
            <span className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mt-1 block">
              Frontier Models Orchestrated
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
