"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Coins,
  CreditCard,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wallet,
  Zap,
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

const APP_ICONS: Record<string, React.ElementType> = {
  paulpay: Wallet,
  mayaa: CreditCard,
  forex: Globe2,
  credme: Coins,
};

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
  const SelectedAppIcon = APP_ICONS[selectedApp.id] || Smartphone;

  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Interactive Showcase</span> / Products &amp; Portals
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl tracking-tight text-ink">
              15+ Products tested in the wild.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-ink-soft sm:text-right">
            Click across consumer applications and banking engines to inspect live QA test coverage and defect prevention.
          </p>
        </div>

        {/* Interactive App Selector Tabs - Modern Elevated Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {APPS_DATA.map((app) => {
            const isSelected = app.id === selectedApp.id;
            const AppIcon = APP_ICONS[app.id] || Smartphone;

            return (
              <button
                key={app.id}
                type="button"
                data-testid={`app-tab-${app.id}`}
                onClick={() => {
                  setActiveAppId(app.id);
                  setActiveJourneyIndex(0);
                }}
                className={`group relative flex flex-col justify-between border p-3 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-pass bg-paper shadow-xs ring-1 ring-pass/40"
                    : "border-line bg-paper/60 hover:border-pass/50 hover:bg-paper"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center border transition-colors ${
                      isSelected
                        ? "border-pass bg-pass-fill/15 text-pass"
                        : "border-line bg-paper text-muted group-hover:text-ink"
                    }`}
                  >
                    <AppIcon className="h-4 w-4" />
                  </span>
                  {isSelected ? (
                    <span className="flex items-center gap-1 font-mono text-[0.6rem] text-pass font-medium uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="font-mono text-[0.6rem] text-muted uppercase tracking-wider group-hover:text-ink">
                      Inspect
                    </span>
                  )}
                </div>

                <div className="mt-2.5">
                  <span className="block font-serif text-sm sm:text-base font-bold text-ink leading-tight">
                    {app.name}
                  </span>
                  <span className="block font-mono text-[0.62rem] text-muted truncate mt-0.5">
                    {app.domain}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Confidential Portals Tab */}
          <Link
            href="/work"
            data-testid="app-tab-portals"
            data-cursor="Inspect 8+ enterprise banking portals"
            className="group relative flex flex-col justify-between border border-dashed border-line bg-paper/30 p-3 text-left hover:border-pass hover:bg-paper/70 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center border border-dashed border-line bg-paper text-muted group-hover:text-pass group-hover:border-pass transition-colors">
                <LockKeyhole className="h-4 w-4" />
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted group-hover:text-pass transition-colors" />
            </div>
            <div className="mt-2.5">
              <span className="block font-serif text-sm sm:text-base font-bold text-ink leading-tight">
                8+ Portals
              </span>
              <span className="block font-mono text-[0.62rem] text-muted truncate mt-0.5">
                LOS, LMS &amp; APIs
              </span>
            </div>
          </Link>
        </div>

        {/* Active App Interactive Inspector Panel */}
        <div key={selectedApp.id} className="mt-3 border border-line bg-paper shadow-xs content-fade">
          {/* Top Info Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line bg-paper-deep p-3.5 sm:px-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-pass/30 bg-pass-fill/15 text-pass">
                <SelectedAppIcon className="h-4 w-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg sm:text-xl text-ink font-bold">{selectedApp.name}</h3>
                  <span className="font-mono text-[0.62rem] tracking-wider uppercase border border-pass/30 bg-pass-fill/10 text-pass px-1.5 py-0.5">
                    {selectedApp.domain}
                  </span>
                </div>
                <p className="text-[0.72rem] text-ink-soft mt-0.5">{selectedApp.tagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[0.68rem]">
              {selectedApp.platforms.map((p) => (
                <span key={p} className="border border-line bg-paper px-2 py-0.5 text-muted">
                  {p}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 border border-pass/40 bg-pass-fill/10 px-2 py-0.5 text-pass font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
                {selectedApp.stats}
              </span>
            </div>
          </div>

          {/* Body: Journey Selector & Live Inspection View */}
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-line">
            {/* Left: Test Journeys List */}
            <div className="p-3.5 sm:p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase block">
                  Critical Test Paths (Select to Inspect)
                </span>
                <span className="font-mono text-[0.6rem] text-pass uppercase">
                  {selectedApp.journeys.length} Scenarios
                </span>
              </div>

              <div className="space-y-2">
                {selectedApp.journeys.map((j, idx) => {
                  const isCurrent = idx === activeJourneyIndex;
                  return (
                    <button
                      key={j.title}
                      type="button"
                      onClick={() => setActiveJourneyIndex(idx)}
                      className={`w-full text-left p-2.5 sm:p-3 border transition-all flex items-start justify-between gap-2.5 ${
                        isCurrent
                          ? "border-pass bg-card shadow-xs ring-1 ring-pass/40"
                          : "border-line bg-paper hover:bg-card/60"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-[0.68rem] font-bold ${
                              isCurrent ? "text-pass" : "text-muted"
                            }`}
                          >
                            0{idx + 1}.
                          </span>
                          <p className="font-sans text-xs font-semibold text-ink leading-tight truncate">
                            {j.title}
                          </p>
                        </div>
                        <p className="mt-1 text-[0.72rem] text-ink-soft line-clamp-1">{j.tactic}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono text-[0.65rem] text-pass block font-semibold">
                          {j.passStatus}
                        </span>
                        <span className="font-mono text-[0.6rem] text-muted block mt-0.5">
                          {j.tool}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Edge Case Callout */}
              <div className="mt-2.5 border border-pass/30 bg-card p-2.5">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-pass shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-pass font-semibold block">
                      Critical Production Defect Prevented:
                    </span>
                    <p className="mt-0.5 text-xs text-ink leading-relaxed font-sans">
                      {selectedApp.edgeCaseFound}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Deep Dive into Active Journey */}
            <div className="p-3.5 sm:p-4 flex flex-col justify-between bg-card/30">
              <div>
                <div className="flex items-center justify-between border-b border-line pb-2.5 mb-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-pass font-medium flex items-center gap-1.5">
                    <Terminal className="h-3 w-3" />
                    Validation Protocol Console
                  </span>
                  <span className="font-mono text-[0.62rem] text-muted">
                    Engineered by Deepak Gupta
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg text-ink font-bold">{activeJourney.title}</h4>

                <div className="mt-3 space-y-2.5">
                  <div className="border border-line bg-paper p-2.5">
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted block">
                      Testing Strategy &amp; Assertions:
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-ink font-sans">
                      {activeJourney.tactic}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-line bg-paper p-2.5">
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted block">
                        Primary Toolkit:
                      </span>
                      <p className="mt-1 font-mono text-xs text-pass font-semibold flex items-center gap-1">
                        <Zap className="h-3 w-3 shrink-0" />
                        <span>{activeJourney.tool}</span>
                      </p>
                    </div>

                    <div className="border border-line bg-paper p-2.5">
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted block">
                        Verified Outcome:
                      </span>
                      <p className="mt-1 font-mono text-xs text-ink font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-pass shrink-0" />
                        <span>{activeJourney.passStatus}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redirect CTA Banner */}
              <div className="mt-4 pt-2.5 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="font-mono text-[0.68rem] text-muted">
                  Want to inspect all 7 consumer apps &amp; 8+ enterprise portals?
                </span>
                <Link
                  href="/work"
                  data-testid="work-redirect-cta"
                  data-cursor="Inspect all projects"
                  className="press inline-flex items-center gap-1.5 border border-pass bg-card px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0 shadow-xs"
                >
                  <span>Explore full 15+ apps</span>
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
