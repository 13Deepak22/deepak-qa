"use client";

import { useState } from "react";
import {
  Brain,
  CheckCircle2,
  Compass,
  FileCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

interface Principle {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: React.ElementType;
  coreRule: string;
  inPractice: string;
}

const PRINCIPLES: Principle[] = [
  {
    id: "heuristic",
    title: "Manual Exploratory vs. Automation Synergy",
    tagline: "Scripts verify what is known; exploratory finds what is unexpected.",
    category: "Testing Philosophy",
    icon: Compass,
    coreRule: "Never automate a broken flow; never manually repeat a stable smoke pass.",
    inPractice: "Manual passes target unpredictable network jitter, user fatigue, and edge cases. Automation codifies those exact discoveries into unshakeable regression suites.",
  },
  {
    id: "financial",
    title: "Zero-Tolerance Ledger Integrity",
    tagline: "In fintech, an untested edge case is an active balance leak.",
    category: "Financial QA",
    icon: ShieldCheck,
    coreRule: "Ledger Debit delta minus Credit delta must equal exactly 0.00 INR on every commit.",
    inPractice: "Simulating concurrent webhooks, double-taps, and third-party gateway timeouts in staging before any money is transferred in production.",
  },
  {
    id: "gatekeeper",
    title: "Objective Release Gatekeeping",
    tagline: "Quality assurance is the engineering team's final line of defense.",
    category: "Release Standards",
    icon: CheckCircle2,
    coreRule: "Releases ship on evidence, not optimism. 100% P0 pass criteria is non-negotiable.",
    inPractice: "Providing transparent, auditable Jira defect logs and sign-off certificates with clear reproduction steps and network HAR captures.",
  },
  {
    id: "ai-mcp",
    title: "AI-Augmented QA & Agentic Velocity",
    tagline: "Harnessing frontier models and MCP tools to amplify human testing craftsmanship.",
    category: "Modern Stack",
    icon: Sparkles,
    coreRule: "Use AI to draft, fuzz, and heal; use deterministic code to verify and sign off.",
    inPractice: "Pairing with Claude, Cursor, and Playwright MCP tools to generate combinatorial boundary matrices and auto-repair brittle locators in minutes.",
  },
];

export function InteractiveQaPrinciples() {
  const [activePrincipleId, setActivePrincipleId] = useState<string>("heuristic");

  const active = PRINCIPLES.find((p) => p.id === activePrincipleId) || PRINCIPLES[0];
  const ActiveIcon = active.icon;

  return (
    <div className="border border-line bg-paper p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-pass" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Testing Creed &amp; Operating Principles
            </h3>
          </div>
          <p className="text-xs text-ink-soft mt-1">
            The core engineering beliefs that guide Deepak&apos;s testing strategies on every release.
          </p>
        </div>

        <span className="font-mono text-xs text-pass bg-pass-fill/10 border border-pass/30 px-2.5 py-1 font-semibold uppercase">
          Zero Defect Escapes Standard
        </span>
      </div>

      {/* Principle Tabs */}
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {PRINCIPLES.map((p) => {
          const isSelected = p.id === active.id;
          const PIcon = p.icon;
          return (
            <button
              key={p.id}
              type="button"
              data-testid={`principle-tab-${p.id}`}
              onClick={() => setActivePrincipleId(p.id)}
              className={`p-3.5 border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? "border-pass bg-card text-pass shadow-2xs font-bold ring-1 ring-pass/40"
                  : "border-line bg-card/40 text-ink-soft hover:bg-card hover:text-ink"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center border ${
                    isSelected ? "border-pass bg-pass-fill/15 text-pass" : "border-line bg-paper text-muted"
                  }`}
                >
                  <PIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[0.62rem] text-muted uppercase">
                  {p.category}
                </span>
              </div>

              <h4 className="font-serif text-xs sm:text-sm font-bold text-ink leading-tight truncate">
                {p.title}
              </h4>

              <span
                className={`mt-2 font-mono text-[0.6rem] uppercase tracking-wider ${
                  isSelected ? "text-pass font-bold" : "text-muted"
                }`}
              >
                {isSelected ? "● Core Creed" : "View Principle"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Principle Card */}
      <div className="mt-6 border border-line bg-card p-6 sm:p-7 space-y-4">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-pass/30 bg-pass-fill/15 text-pass">
            <ActiveIcon className="h-5 w-5" />
          </span>
          <div>
            <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider font-semibold">
              {active.category}
            </span>
            <h4 className="mt-1.5 font-serif text-xl sm:text-2xl font-bold text-ink">
              {active.title}
            </h4>
            <p className="mt-1 text-sm text-ink-soft font-serif italic">
              &quot;{active.tagline}&quot;
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-line/60 grid sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="border border-line bg-paper p-3.5 space-y-1">
            <span className="text-[0.62rem] uppercase tracking-wider text-muted block font-bold">
              Guiding Engineering Rule:
            </span>
            <p className="text-ink font-semibold text-[0.72rem] leading-relaxed">
              {active.coreRule}
            </p>
          </div>

          <div className="border border-line bg-paper p-3.5 space-y-1">
            <span className="text-[0.62rem] uppercase tracking-wider text-muted block font-bold">
              Applied in Day-to-Day QA:
            </span>
            <p className="text-ink-soft text-[0.72rem] leading-relaxed font-sans">
              {active.inPractice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

