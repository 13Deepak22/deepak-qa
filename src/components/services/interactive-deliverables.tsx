"use client";

import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Layers,
  ShieldCheck,
} from "lucide-react";

interface DeliverableTab {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  documentType: string;
  lastUpdated: string;
  preview: React.ReactNode;
}

export function InteractiveDeliverables() {
  const [activeTabId, setActiveTabId] = useState<string>("rtm");

  const tabs: DeliverableTab[] = [
    {
      id: "strategy",
      num: "01",
      title: "Test Strategy & Plan",
      shortDesc: "Environmental topology, risk assessment & sign-off criteria.",
      icon: FileSpreadsheet,
      documentType: "QA Master Test Plan v2.4",
      lastUpdated: "Pre-Release Stage",
      preview: (
        <div className="space-y-4 font-mono text-xs">
          <div className="border border-line bg-paper p-3.5 space-y-2">
            <div className="flex items-center justify-between text-muted text-[0.68rem] uppercase">
              <span>Section: Environmental Topology &amp; Coverage Scope</span>
              <span className="text-pass font-semibold">Status: Approved</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-line/60">
              <div className="border border-line bg-card p-2">
                <span className="text-muted text-[0.62rem] block">Mobile OS:</span>
                <span className="text-ink font-bold">Android 10-15, iOS 15-18</span>
              </div>
              <div className="border border-line bg-card p-2">
                <span className="text-muted text-[0.62rem] block">Browsers:</span>
                <span className="text-ink font-bold">Chrome, Safari, Firefox</span>
              </div>
              <div className="border border-line bg-card p-2">
                <span className="text-muted text-[0.62rem] block">Payment Rails:</span>
                <span className="text-ink font-bold">UPI 2.0, Cards, NetBanking</span>
              </div>
              <div className="border border-line bg-card p-2">
                <span className="text-muted text-[0.62rem] block">Concurrency SLA:</span>
                <span className="text-ink font-bold">500 Threads &lt; 300ms</span>
              </div>
            </div>
          </div>

          <div className="border border-line bg-paper p-3.5 space-y-2">
            <span className="text-muted text-[0.68rem] uppercase block">
              Explicit Release Exit Gate Criteria:
            </span>
            <ul className="space-y-1.5 text-[0.72rem] text-ink-soft">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                <span>100% execution of P0 core payment, disbursal, and auth test scenarios</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                <span>Zero open P0/P1 defects; any open P2 requires written VP waiver</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-pass shrink-0" />
                <span>Automated regression pass rate &gt;= 99.2% with zero unhandled flakiness</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "rtm",
      num: "02",
      title: "Requirements Traceability (RTM)",
      shortDesc: "Bidirectional linking: PRD user stories to automated Playwright specs.",
      icon: Layers,
      documentType: "Live RTM Matrix 2026",
      lastUpdated: "Continuous Sync",
      preview: (
        <div className="space-y-3 font-mono text-xs overflow-x-auto">
          <div className="min-w-[540px]">
            <table className="w-full text-left border-collapse border border-line">
              <thead>
                <tr className="bg-paper border-b border-line text-[0.65rem] uppercase text-muted tracking-wider">
                  <th className="p-2.5 border-r border-line">PRD Story</th>
                  <th className="p-2.5 border-r border-line">Feature Scope</th>
                  <th className="p-2.5 border-r border-line">Automated Spec</th>
                  <th className="p-2.5">Gate Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[0.7rem]">
                <tr className="bg-card/40 hover:bg-card">
                  <td className="p-2.5 border-r border-line font-bold text-pass">FIN-104</td>
                  <td className="p-2.5 border-r border-line text-ink">UPI Intent deep-link dispatch</td>
                  <td className="p-2.5 border-r border-line text-ink-soft">upi_intent.spec.ts:34</td>
                  <td className="p-2.5 text-pass font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                    Passed (100%)
                  </td>
                </tr>
                <tr className="bg-card/40 hover:bg-card">
                  <td className="p-2.5 border-r border-line font-bold text-pass">LMS-208</td>
                  <td className="p-2.5 border-r border-line text-ink">e-NACH mandate double-debit lock</td>
                  <td className="p-2.5 border-r border-line text-ink-soft">redis_idempotency.spec.ts:18</td>
                  <td className="p-2.5 text-pass font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                    Passed (100%)
                  </td>
                </tr>
                <tr className="bg-card/40 hover:bg-card">
                  <td className="p-2.5 border-r border-line font-bold text-pass">KYC-052</td>
                  <td className="p-2.5 border-r border-line text-ink">DigiLocker Aadhaar XML consent</td>
                  <td className="p-2.5 border-r border-line text-ink-soft">ekyc_aadhaar.spec.ts:77</td>
                  <td className="p-2.5 text-pass font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                    Passed (100%)
                  </td>
                </tr>
                <tr className="bg-card/40 hover:bg-card">
                  <td className="p-2.5 border-r border-line font-bold text-pass">SETTLE-89</td>
                  <td className="p-2.5 border-r border-line text-ink">Merchant gross settlement ledger delta</td>
                  <td className="p-2.5 border-r border-line text-ink-soft">ledger_symmetry.spec.ts:12</td>
                  <td className="p-2.5 text-pass font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                    Passed (0.00 Delta)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between text-[0.68rem] text-muted pt-1">
            <span>Coverage Ratio: 100% PRD Stories mapped</span>
            <span className="text-pass font-bold">Zero Untracked Changes</span>
          </div>
        </div>
      ),
    },
    {
      id: "jira",
      num: "03",
      title: "Actionable Bug Reports & RCA",
      shortDesc: "Structured defect tickets with HAR files, payloads & root cause diagnosis.",
      icon: Activity,
      documentType: "Jira Defect Audit #FIN-4829",
      lastUpdated: "Resolved & Guarded",
      preview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="border border-line bg-paper p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30 px-1.5 py-0.5 text-[0.62rem] font-bold uppercase">
                  P0 · Critical Blocker
                </span>
                <span className="font-bold text-ink text-xs">Jira #FIN-4829</span>
              </div>
              <span className="text-muted text-[0.65rem]">Reporter: Deepak Gupta</span>
            </div>
            <h4 className="font-bold text-ink text-xs sm:text-sm">
              Duplicate Disbursal Webhook under 3G Latency Jitter
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 text-[0.7rem]">
            <div className="border border-line bg-card p-2.5 space-y-1">
              <span className="text-muted text-[0.62rem] uppercase block font-semibold">Reproduction Vector:</span>
              <p className="text-ink-soft leading-relaxed">
                Throttled network profile to 3G Slow (450ms RTT); triggered payment retry within 80ms of gateway dispatch.
              </p>
            </div>
            <div className="border border-line bg-card p-2.5 space-y-1">
              <span className="text-muted text-[0.62rem] uppercase block font-semibold">Root Cause Isolated:</span>
              <p className="text-ink-soft leading-relaxed">
                In-memory lock verified before DB write; worker threads processed identical idempotency key concurrently.
              </p>
            </div>
          </div>

          <div className="border border-line bg-card/60 p-2 text-[0.68rem] flex items-center justify-between text-muted">
            <span>Evidence: charles_session.chls (2.4MB) · payments.spec.ts</span>
            <span className="text-pass font-semibold">Fix Deployed &amp; Re-tested</span>
          </div>
        </div>
      ),
    },
    {
      id: "certificate",
      num: "04",
      title: "Release Sign-off Certificate",
      shortDesc: "Formal deployment authorization with test audit trails and zero-escape stamp.",
      icon: ShieldCheck,
      documentType: "Production Release Gate Authority",
      lastUpdated: "Build #2026.10-PROD",
      preview: (
        <div className="space-y-4 font-mono text-xs">
          <div className="border-2 border-pass/40 bg-pass-fill/5 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-pass font-bold text-xs uppercase tracking-wider block">
                  Production Deployment Authorization
                </span>
                <span className="text-muted text-[0.65rem]">Signed by Deepak Gupta · QA Lead</span>
              </div>
              <span className="border border-pass bg-card text-pass px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider">
                CERTIFIED GREEN
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-2 border-y border-line/60 text-center">
              <div>
                <span className="text-ink font-bold text-sm sm:text-base block">100%</span>
                <span className="text-muted text-[0.62rem] uppercase">P0 Pass Rate</span>
              </div>
              <div>
                <span className="text-pass font-bold text-sm sm:text-base block">0</span>
                <span className="text-muted text-[0.62rem] uppercase">Critical Blockers</span>
              </div>
              <div>
                <span className="text-ink font-bold text-sm sm:text-base block">0.00 INR</span>
                <span className="text-muted text-[0.62rem] uppercase">Ledger Variance</span>
              </div>
            </div>

            <p className="text-[0.7rem] text-ink-soft leading-relaxed">
              &quot;All automated regression passes, manual exploratory vectors, and partner gateway edge cases have satisfied strict release criteria. Authorized for deployment.&quot;
            </p>
          </div>
        </div>
      ),
    },
  ];

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div className="mt-8 border border-line bg-card shadow-xs">
      {/* Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line border-b border-line bg-paper">
        {tabs.map((tab) => {
          const isSelected = tab.id === activeTab.id;
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              data-testid={`deliverable-tab-${tab.id}`}
              onClick={() => setActiveTabId(tab.id)}
              className={`p-3.5 sm:p-4 text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? "bg-card text-pass shadow-2xs"
                  : "bg-paper text-ink-soft hover:bg-card/60 hover:text-ink"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center border ${
                    isSelected ? "border-pass bg-pass-fill/15 text-pass" : "border-line bg-paper text-muted"
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-mono text-[0.62rem] tracking-wider uppercase text-muted">
                  {tab.num}
                </span>
              </div>
              <h4 className="font-serif text-sm font-bold text-ink truncate">{tab.title}</h4>
              <span
                className={`mt-2 font-mono text-[0.6rem] uppercase tracking-wider ${
                  isSelected ? "text-pass font-bold" : "text-muted"
                }`}
              >
                {isSelected ? "● Viewing Artifact" : "Inspect Document"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Artifact Preview Container */}
      <div className="p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/60 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center border border-pass/30 bg-pass-fill/10 text-pass shrink-0">
              <ActiveIcon className="h-4.5 w-4.5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-ink">{activeTab.title}</h3>
                <span className="border border-line bg-paper px-2 py-0.5 font-mono text-[0.6rem] text-muted uppercase">
                  {activeTab.documentType}
                </span>
              </div>
              <p className="text-xs text-ink-soft mt-0.5">{activeTab.shortDesc}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-pass animate-pulse" />
            <span className="text-[0.68rem]">{activeTab.lastUpdated}</span>
          </div>
        </div>

        {/* Live Interactive Body */}
        {activeTab.preview}
      </div>
    </div>
  );
}
