"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Layers,
  LockKeyhole,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { publicApps, unpublishedWork } from "@/data";

interface InteractiveAppDetail {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  platforms: string[];
  stats: string;
  journeys: {
    title: string;
    tactic: string;
    tool: string;
    passStatus: string;
  }[];
  edgeCaseFound: string;
}

const APPS_DATA: InteractiveAppDetail[] = [
  {
    id: "paulpay",
    name: "PaulPay",
    tagline: "UPI payments, prepaid wallets, and merchant checkout",
    domain: "FinTech & Payments",
    platforms: ["Android", "iOS", "Backend APIs"],
    stats: "100K+ downloads · Zero financial leak in prod",
    journeys: [
      {
        title: "UPI Intent & QR Scan Switcher",
        tactic: "Tested deep-linking handshakes across GPay, PhonePe, and Paytm on Android 10-14.",
        tool: "Appium + Charles Proxy",
        passStatus: "99.9% Pass Rate",
      },
      {
        title: "Wallet Top-up & BBPS Billers",
        tactic: "Simulated pending payment gateway webhooks, reverse-charge reversals, and timeout reconciliations.",
        tool: "Postman + Mockoon",
        passStatus: "100% Pass Rate",
      },
      {
        title: "Concurrent Payment Lock",
        tactic: "Executed 10 rapid double-taps on 'Pay Now' under throttled 3G to assert Redis idempotency locks.",
        tool: "JMeter + Playwright",
        passStatus: "Defect Resolved",
      },
    ],
    edgeCaseFound: "Identified a race condition on network reconnection where duplicate debits occurred before Redis lock fix.",
  },
  {
    id: "mayaa",
    name: "Mayaa Money",
    tagline: "Youth banking, digital prepaid RuPay cards, and pocket money transfers",
    domain: "Prepaid Cards & Banking",
    platforms: ["Android", "iOS"],
    stats: "Parent-child linked accounts · Instant spend controls",
    journeys: [
      {
        title: "Card Freeze / Unfreeze Real-Time Switch",
        tactic: "Asserted sub-second token invalidation at POS and ATM terminals when toggled in-app.",
        tool: "Appium + REST Assured",
        passStatus: "100% Pass Rate",
      },
      {
        title: "Parental Allowance Disbursal",
        tactic: "Tested automated recurring wallet loads and daily transaction cap enforcement.",
        tool: "Postman API Runner",
        passStatus: "100% Pass Rate",
      },
      {
        title: "Offline Transaction Ledger Sync",
        tactic: "Simulated airplane mode spend followed by reconnection to assert FIFO ledger reconciliation.",
        tool: "Manual Exploratory",
        passStatus: "Verified",
      },
    ],
    edgeCaseFound: "Caught card limit bypass when an in-store offline POS terminal was swiped before limit synchronization.",
  },
  {
    id: "forex",
    name: "PML Forex Live",
    tagline: "Live currency exchange, multi-currency travel cards, and outbound remittances",
    domain: "Forex & Cross-Border",
    platforms: ["Web", "Android", "iOS"],
    stats: "15+ Global Currencies · RBI LRS Compliance",
    journeys: [
      {
        title: "Live FX Ticker & Rate Lock Window",
        tactic: "Stress-tested WebSocket currency feed drops during high-volatility market open hours.",
        tool: "Playwright + WebSockets",
        passStatus: "100% Pass Rate",
      },
      {
        title: "RBI Purpose Code & Pan Verification",
        tactic: "Validated regulatory compliance flows and automated tax collected at source (TCS) calculations.",
        tool: "Postman + Selenium",
        passStatus: "100% Pass Rate",
      },
      {
        title: "Multi-Currency Card Balance Top-up",
        tactic: "Verified cross-currency conversion math against interbank exchange rates with zero rounding errors.",
        tool: "TestNG + Java",
        passStatus: "Zero Drift",
      },
    ],
    edgeCaseFound: "Discovered rounding discrepancies in multi-currency conversion decimals on EUR-to-USD transfers.",
  },
  {
    id: "credme",
    name: "CredMe Micro-Lending",
    tagline: "Digital personal loans, automated credit scoring, and instant escrow disbursals",
    domain: "Digital Lending (NBFC)",
    platforms: ["Android", "Web Admin"],
    stats: "Paperless KYC · 5-minute approval gate",
    journeys: [
      {
        title: "Penny Drop & Bank Account Validation",
        tactic: "Tested automated ₹1 verification drops across 25+ public & private Indian banks.",
        tool: "Postman Automation",
        passStatus: "100% Pass Rate",
      },
      {
        title: "CIBIL Pull & Underwriting Matrix",
        tactic: "Verified score-tiered loan sanctioning rules, interest tiering, and rejection messaging.",
        tool: "Playwright API",
        passStatus: "100% Pass Rate",
      },
      {
        title: "e-NACH Mandate & Repayment Gateway",
        tactic: "Tested recurring auto-debit registration, bounce penalty schedules, and partial payments.",
        tool: "Charles + Postman",
        passStatus: "Verified",
      },
    ],
    edgeCaseFound: "Isolated duplicate repayment triggers caused by mobile client retry without persistent idempotency key.",
  },
];

export function InteractiveWorkPreview() {
  const [activeAppId, setActiveAppId] = useState<string>("paulpay");
  const [activeJourneyIndex, setActiveJourneyIndex] = useState<number>(0);

  const selectedApp = APPS_DATA.find((a) => a.id === activeAppId) || APPS_DATA[0];
  const activeJourney = selectedApp.journeys[activeJourneyIndex] || selectedApp.journeys[0];

  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Interactive Showcase</span> / Products &amp; Portals
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              15+ Products tested in the wild.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            Click across consumer applications and back-office banking engines to inspect Deepak&apos;s real-world test coverage and defect prevention.
          </p>
        </div>

        {/* Interactive App Selector Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {APPS_DATA.map((app) => {
            const isSelected = app.id === selectedApp.id;
            return (
              <button
                key={app.id}
                type="button"
                onClick={() => {
                  setActiveAppId(app.id);
                  setActiveJourneyIndex(0);
                }}
                className={`flex shrink-0 items-center gap-2.5 border px-4 py-3 text-left transition-colors ${
                  isSelected
                    ? "border-pass bg-paper text-pass shadow-sm font-medium"
                    : "border-line bg-paper/60 text-ink-soft hover:border-line/80 hover:bg-paper hover:text-ink"
                }`}
              >
                <Smartphone className={`h-4 w-4 ${isSelected ? "text-pass" : "text-muted"}`} />
                <div>
                  <span className="block text-xs font-serif font-bold text-ink">{app.name}</span>
                  <span className="block font-mono text-[0.65rem] text-muted">{app.domain}</span>
                </div>
              </button>
            );
          })}

          {/* Confidential Portals Tab */}
          <Link
            href="/work"
            className="flex shrink-0 items-center gap-2.5 border border-dashed border-line bg-paper/30 px-4 py-3 text-left hover:border-pass transition-colors text-muted hover:text-ink"
          >
            <LockKeyhole className="h-4 w-4 text-pass" />
            <div>
              <span className="block text-xs font-serif font-bold text-ink">8+ Enterprise Portals</span>
              <span className="block font-mono text-[0.65rem] text-muted">LOS, LMS &amp; Banking APIs</span>
            </div>
          </Link>
        </div>

        {/* Active App Interactive Inspector Panel */}
        <div className="mt-4 border border-line bg-paper shadow-sm">
          {/* Top Info Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line bg-paper-deep p-5 sm:px-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl text-ink font-semibold">{selectedApp.name}</h3>
                <span className="font-mono text-[0.68rem] tracking-wider uppercase border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5">
                  {selectedApp.domain}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">{selectedApp.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {selectedApp.platforms.map((p) => (
                <span key={p} className="border border-line bg-paper px-2.5 py-1 text-muted">
                  {p}
                </span>
              ))}
              <span className="border border-pass/40 bg-card px-2.5 py-1 text-pass font-medium">
                {selectedApp.stats}
              </span>
            </div>
          </div>

          {/* Body: Journey Selector & Live Inspection View */}
          <div className="grid lg:grid-cols-[1.1fr_1.1fr] divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Left: Test Journeys List */}
            <div className="p-5 sm:p-6 space-y-4">
              <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase block">
                Select a Test Journey to Inspect Coverage
              </span>

              <div className="space-y-2.5">
                {selectedApp.journeys.map((j, idx) => {
                  const isCurrent = idx === activeJourneyIndex;
                  return (
                    <button
                      key={j.title}
                      type="button"
                      onClick={() => setActiveJourneyIndex(idx)}
                      className={`w-full text-left p-3.5 border transition-all flex items-start justify-between gap-3 ${
                        isCurrent
                          ? "border-pass bg-card shadow-sm ring-1 ring-pass/30"
                          : "border-line bg-paper hover:bg-card/70"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 ${
                              isCurrent ? "text-pass" : "text-muted"
                            }`}
                          />
                          <p className="font-sans text-xs font-semibold text-ink">{j.title}</p>
                        </div>
                        <p className="mt-1.5 text-xs text-ink-soft line-clamp-1">{j.tactic}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono text-[0.68rem] text-pass block font-medium">
                          {j.passStatus}
                        </span>
                        <span className="font-mono text-[0.62rem] text-muted block mt-0.5">
                          {j.tool}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Edge Case Callout */}
              <div className="mt-4 border border-line bg-paper-deep p-3.5">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-pass shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-pass font-semibold block">
                      Critical Edge Case Prevented:
                    </span>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                      {selectedApp.edgeCaseFound}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Deep Dive into Active Journey */}
            <div className="p-5 sm:p-6 flex flex-col justify-between bg-card/40">
              <div>
                <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-pass font-medium">
                    Journey Details &amp; Validation Protocol
                  </span>
                  <span className="font-mono text-[0.68rem] text-muted">
                    Engineered by Deepak Gupta
                  </span>
                </div>

                <h4 className="font-serif text-xl text-ink font-semibold">{activeJourney.title}</h4>

                <div className="mt-4 space-y-3">
                  <div className="border border-line bg-paper p-3">
                    <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                      Testing Strategy &amp; Execution:
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-ink font-sans">
                      {activeJourney.tactic}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-line bg-paper p-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                        Primary Tools:
                      </span>
                      <p className="mt-1 font-mono text-xs text-pass font-semibold">
                        {activeJourney.tool}
                      </p>
                    </div>

                    <div className="border border-line bg-paper p-3">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted block">
                        Verified Outcome:
                      </span>
                      <p className="mt-1 font-mono text-xs text-ink font-semibold">
                        {activeJourney.passStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redirect CTA Banner */}
              <div className="mt-6 pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-[0.7rem] text-muted">
                  Want to inspect all 7 apps &amp; 8+ enterprise portals?
                </span>
                <Link
                  href="/work"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0"
                >
                  <span>Explore full 15+ apps &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
