"use client";

import { useState } from "react";
import {
  Activity,
  Award,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  FileCheck,
  FileText,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { experienceLabel } from "@/lib/career";

type AnalyzerTab = "score" | "keywords" | "parser" | "export";

interface KeywordCategory {
  id: string;
  label: string;
  count: number;
  icon: typeof Cpu;
  keywords: { name: string; matchType: "Exact" | "Synonym"; priority: "P0" | "P1" }[];
}

const KEYWORD_CATEGORIES: KeywordCategory[] = [
  {
    id: "automation",
    label: "Automation & SDET",
    count: 14,
    icon: Cpu,
    keywords: [
      { name: "Playwright", matchType: "Exact", priority: "P0" },
      { name: "Appium", matchType: "Exact", priority: "P0" },
      { name: "Selenium WebDriver", matchType: "Exact", priority: "P0" },
      { name: "Page Object Model (POM)", matchType: "Exact", priority: "P0" },
      { name: "TestNG", matchType: "Exact", priority: "P1" },
      { name: "TypeScript", matchType: "Exact", priority: "P0" },
      { name: "JavaScript", matchType: "Exact", priority: "P0" },
      { name: "Java", matchType: "Exact", priority: "P0" },
      { name: "Python", matchType: "Exact", priority: "P1" },
      { name: "Cucumber BDD", matchType: "Exact", priority: "P1" },
      { name: "UiAutomator2", matchType: "Exact", priority: "P0" },
      { name: "XCUITest", matchType: "Exact", priority: "P0" },
      { name: "Mobile App Automation", matchType: "Exact", priority: "P0" },
      { name: "Cross-Browser Regression", matchType: "Exact", priority: "P0" },
    ],
  },
  {
    id: "fintech",
    label: "FinTech & Payments",
    count: 15,
    icon: ShieldCheck,
    keywords: [
      { name: "NPCI UPI 2.0 (Intent/Collect)", matchType: "Exact", priority: "P0" },
      { name: "Payment Gateways", matchType: "Exact", priority: "P0" },
      { name: "Razorpay", matchType: "Exact", priority: "P0" },
      { name: "Cashfree", matchType: "Exact", priority: "P0" },
      { name: "PayU", matchType: "Exact", priority: "P0" },
      { name: "DigiLocker eKYC", matchType: "Exact", priority: "P0" },
      { name: "Facial Liveness Verification", matchType: "Exact", priority: "P0" },
      { name: "Penny Drop Account Validation", matchType: "Exact", priority: "P0" },
      { name: "Aadhaar eSign", matchType: "Exact", priority: "P0" },
      { name: "Loan Management System (LMS)", matchType: "Exact", priority: "P0" },
      { name: "Loan Origination System (LOS)", matchType: "Exact", priority: "P0" },
      { name: "Double-Entry Ledger Invariance", matchType: "Exact", priority: "P0" },
      { name: "PPI Wallets", matchType: "Exact", priority: "P1" },
      { name: "Prepaid Cards", matchType: "Exact", priority: "P1" },
      { name: "RBI Compliance Readiness", matchType: "Exact", priority: "P0" },
    ],
  },
  {
    id: "api",
    label: "API & Performance",
    count: 12,
    icon: Zap,
    keywords: [
      { name: "Postman", matchType: "Exact", priority: "P0" },
      { name: "Newman CLI", matchType: "Exact", priority: "P1" },
      { name: "REST APIs", matchType: "Exact", priority: "P0" },
      { name: "JSON Schema Validation", matchType: "Exact", priority: "P0" },
      { name: "Apache JMeter", matchType: "Exact", priority: "P0" },
      { name: "Load & Stress Testing", matchType: "Exact", priority: "P0" },
      { name: "500+ TPS Throughput", matchType: "Exact", priority: "P1" },
      { name: "Latency SLA Auditing", matchType: "Exact", priority: "P0" },
      { name: "Charles Proxy", matchType: "Exact", priority: "P0" },
      { name: "Fiddler", matchType: "Exact", priority: "P1" },
      { name: "Network HAR Capture", matchType: "Exact", priority: "P0" },
      { name: "Webhook Reconciliation", matchType: "Exact", priority: "P0" },
    ],
  },
  {
    id: "qa-process",
    label: "QA Methodologies & Defect",
    count: 15,
    icon: Layers,
    keywords: [
      { name: "Exploratory Testing", matchType: "Exact", priority: "P0" },
      { name: "Root Cause Analysis (RCA)", matchType: "Exact", priority: "P0" },
      { name: "Zero P0 Defect Escapes", matchType: "Exact", priority: "P0" },
      { name: "50% Manual Effort Reduction", matchType: "Exact", priority: "P0" },
      { name: "STLC & SDLC", matchType: "Exact", priority: "P0" },
      { name: "Regression Testing", matchType: "Exact", priority: "P0" },
      { name: "Sanity & Smoke Testing", matchType: "Exact", priority: "P0" },
      { name: "Boundary Value Analysis", matchType: "Exact", priority: "P1" },
      { name: "Equivalence Partitioning", matchType: "Exact", priority: "P1" },
      { name: "Defect Life Cycle", matchType: "Exact", priority: "P0" },
      { name: "Requirements Traceability (RTM)", matchType: "Exact", priority: "P1" },
      { name: "Jira Defect Management", matchType: "Exact", priority: "P0" },
      { name: "Test Execution Sign-off", matchType: "Exact", priority: "P0" },
      { name: "Compatibility Testing", matchType: "Exact", priority: "P1" },
      { name: "Negative Testing", matchType: "Exact", priority: "P1" },
    ],
  },
  {
    id: "ai-mcp",
    label: "AI & Modern Stack",
    count: 12,
    icon: Sparkles,
    keywords: [
      { name: "Claude Code", matchType: "Exact", priority: "P0" },
      { name: "Google Antigravity", matchType: "Exact", priority: "P0" },
      { name: "Cursor AI", matchType: "Exact", priority: "P0" },
      { name: "Model Context Protocol (MCP)", matchType: "Exact", priority: "P0" },
      { name: "Autonomous QA Agents", matchType: "Exact", priority: "P0" },
      { name: "Self-Healing Test Locators", matchType: "Exact", priority: "P1" },
      { name: "Prompt Regression & Fuzzing", matchType: "Exact", priority: "P0" },
      { name: "Automated Log Triage", matchType: "Exact", priority: "P1" },
      { name: "Docker", matchType: "Exact", priority: "P1" },
      { name: "Git & GitHub Actions", matchType: "Exact", priority: "P0" },
      { name: "ADB Shell & Android Debug", matchType: "Exact", priority: "P0" },
      { name: "SQL & Data Verification", matchType: "Exact", priority: "P0" },
    ],
  },
];

const SCORING_METRICS = [
  {
    id: "verbs",
    label: "Action Verbs & Impact Formula",
    score: 100,
    formula: "Google XYZ: Accomplished [X], measured by [Y], by doing [Z]",
    detail: "100% of experience bullet points lead with decisive action verbs (Architected, Engineered, Spearheaded, Championed, Streamlined).",
    status: "pass",
  },
  {
    id: "keywords",
    label: "Keyword Density & Relevancy",
    score: 98,
    formula: "68 core industry keywords matched across 5 specialized domains",
    detail: "High-priority match across SDET, Playwright, Appium, UPI 2.0, eKYC, JMeter, and Root Cause Analysis.",
    status: "pass",
  },
  {
    id: "layout",
    label: "Parser Readability & Layout",
    score: 100,
    formula: "Single-column linear semantic DOM / Zero table traps",
    detail: "Tested for zero-friction ingestion across Greenhouse, Lever, Workday, and Taleo with standard headings.",
    status: "pass",
  },
  {
    id: "kpis",
    label: "Quantifiable Impact & KPIs",
    score: 99,
    formula: "Explicit business metrics in every role description",
    detail: "Includes: 50% regression cycle time reduction, 0 P0 defect escapes, 99.8% pass rate, and 500+ TPS load threshold.",
    status: "pass",
  },
];

export function InteractiveAtsAnalyzer() {
  const [activeTab, setActiveTab] = useState<AnalyzerTab>("score");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalKeywords = KEYWORD_CATEGORIES.reduce((acc, cat) => acc + cat.keywords.length, 0);

  const filteredKeywords = KEYWORD_CATEGORIES.flatMap((cat) => {
    if (selectedCategory !== "all" && cat.id !== selectedCategory) return [];
    return cat.keywords
      .filter((k) => searchQuery === "" || k.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((k) => ({ ...k, category: cat.label }));
  });

  const handleCopy = (type: "plain" | "inmail" | "markdown") => {
    let text = "";
    if (type === "plain") {
      text = `DEEPAK GUPTA
QA Engineer
Location: Noida, India | Phone: +91 7888768621 | Email: deepak1322007@gmail.com
LinkedIn: https://www.linkedin.com/in/deepak-gupta13/ | GitHub: https://github.com/13Deepak22

SUMMARY:
QA Engineer with ${experienceLabel()} years of experience delivering robust test automation and quality verification for high-volume FinTech systems, mobile applications (Android & iOS), and distributed payment APIs. Builds scalable test suites with Playwright, Appium, and Selenium WebDriver (TypeScript/Java), reducing regression cycles by 50% with zero P0 production escapes across 20+ releases. Deep domain expertise in NPCI UPI 2.0, multi-gateway payment processing, eKYC validation, and JMeter performance load testing. Open to relocation.

CORE SKILLS:
- Automation & Frameworks: Playwright, Appium, Selenium WebDriver, TypeScript, Java, Python, TestNG, POM, UiAutomator2, XCUITest
- API & Performance: Postman, Newman, REST APIs, JSON Schema, Apache JMeter (500+ TPS), Charles Proxy, Fiddler, Network HAR
- Fintech & Payments: NPCI UPI 2.0 (Intent/Collect), Cashfree, Razorpay, PayU, DigiLocker eKYC, Facial Liveness, Penny Drop, eSign, LOS/LMS Ledgers
- QA Methodologies: Exploratory Testing, Functional, Regression, Smoke, Sanity, Integration, Boundary Value, RCA, Jira, RTM
- AI & Modern Stack: Claude Code, Google Antigravity, Cursor AI, Model Context Protocol (MCP), Autonomous QA Agents, Docker, Git

EXPERIENCE:
1. QA Engineer — Exude Vincom (August 2026 — Present)
- Architected and maintained end-to-end regression suites using Playwright and TypeScript, reducing release verification time by 45% with a 99.8% test pass rate.
- Engineered robust validation test suites for digital loan onboarding, verifying multi-gateway payment processing, DigiLocker eKYC, and bank account penny drop checks.
- Conducted functional and data integrity testing across Loan Origination & Management Systems (LOS/LMS), verifying calculation accuracy and double-entry ledger invariance.
- Designed rigorous test scenarios for conversational AI calling agents and webhook event handling, simulating telephony edge cases and preventing transaction desynchronization.

2. QA Engineer — Paul Merchants (July 2023 — August 2026)
- Engineered hybrid mobile test automation frameworks using Appium, Selenium WebDriver, and Java (POM/TestNG), cutting regression cycle times by 50% across Android and iOS.
- Executed comprehensive functional and edge-case testing for NPCI UPI 2.0 flows (dynamic QR, intent, collect, auto-reversals) and payment gateways under 3G network throttling.
- Conducted high-concurrency API performance and stress testing using Apache JMeter and Postman, ensuring sub-second response times under 500+ TPS peak loads.
- Championed defect lifecycle management in Jira using Charles Proxy network logs and root cause analysis (RCA), preventing 200+ pre-release defects with 0 P0 escapes across 20+ production releases.
- Facilitated regulatory compliance testing, DR/DC failover drills, and VAPT vulnerability remediation across production prepaid card and transaction settlement portals.

KEY PROJECTS VERIFIED:
- PaulPay: PPI wallet, virtual/physical cards, and NPCI UPI 2.0 compliance (Android/iOS).
- CredMe: Digital lending journeys, DigiLocker eKYC, penny drop, and LMS ledger verification.
- PaulOne: Gold loan interest payment automation via Razorpay.
- Gifty: Cross-platform digital gift card issuance, redemption, and transaction automation.
- Mayaa Money: Digital gold/silver trading workflows and prepaid cards compliance.
- Presenza: Enterprise mobile attendance and HR workflow management.
- PML Forex Live: Live forex rate cards, currency cards, and outward remittance testing.

EDUCATION & CERTIFICATIONS:
- Bachelor of Computer Applications — Chandigarh Group of Colleges (2019 – 2022)
- Technical Training: Selenium with Java, Appium with Java, Playwright with JavaScript/TypeScript, API Testing with Postman, JMeter, Testing with GenAI`;
    } else if (type === "inmail") {
      text = `Hi [Hiring Manager/Recruiter],

I noticed you are hiring for a QA Engineer. I wanted to reach out regarding my background:

• ${experienceLabel()} years of QA experience in high-volume FinTech (NPCI UPI 2.0, Cashfree, Razorpay, DigiLocker eKYC, LOS/LMS ledgers).
• Engineered Playwright & Appium test automation frameworks cutting manual regression hours by 50%.
• 0 P0 defect escapes across 20+ production releases with proven API & performance load testing (500+ TPS in JMeter).
• Full resume & live interactive portfolio: https://deepak-qa.vercel.app/resume

Looking forward to connecting!
Best,
Deepak Gupta
+91 7888768621 | deepak1322007@gmail.com`;
    } else {
      text = `# Deepak Gupta — QA Engineer
**Location**: Noida, India | **Phone**: +91 7888768621 | **Email**: deepak1322007@gmail.com  
**LinkedIn**: https://www.linkedin.com/in/deepak-gupta13/ | **GitHub**: https://github.com/13Deepak22

## Executive Summary
QA Engineer with ${experienceLabel()} years of experience delivering robust test automation and quality verification for high-volume FinTech systems, mobile applications (Android & iOS), and distributed payment APIs. Reduced regression cycles by 50% with 0 P0 production escapes.

## Core Competencies
- **Automation**: Playwright, Appium, Selenium WebDriver, TypeScript, Java, POM, TestNG
- **API & Load**: Postman, Newman, JMeter (500+ TPS), Charles Proxy, REST APIs
- **Fintech**: UPI 2.0, Razorpay, Cashfree, PayU, DigiLocker eKYC, Double-Entry Ledgers, LOS/LMS
- **QA Methodologies**: Exploratory Testing, RCA, Jira, Bug Life Cycle, Boundary Value Analysis

## Experience
### QA Engineer — Exude Vincom (August 2026 — Present)
- Architected and maintained end-to-end regression suites using Playwright and TypeScript, reducing release verification time by 45% with a 99.8% test pass rate.
- Engineered robust validation test suites for digital loan onboarding, verifying multi-gateway payment processing, DigiLocker eKYC, and bank account penny drop checks.
- Conducted functional and data integrity testing across Loan Origination & Management Systems (LOS/LMS), verifying calculation accuracy and double-entry ledger invariance.
- Designed rigorous test scenarios for conversational AI calling agents and webhook event handling, simulating telephony edge cases and preventing transaction desynchronization.

### QA Engineer — Paul Merchants (July 2023 — August 2026)
- Engineered hybrid mobile test automation frameworks using Appium, Selenium WebDriver, and Java (POM/TestNG), cutting regression cycle times by 50% across Android and iOS.
- Executed comprehensive functional and edge-case testing for NPCI UPI 2.0 flows (dynamic QR, intent, collect, auto-reversals) and payment gateways under 3G network throttling.
- Conducted high-concurrency API performance and stress testing using Apache JMeter and Postman, ensuring sub-second response times under 500+ TPS peak loads.
- Championed defect lifecycle management in Jira using Charles Proxy network logs and root cause analysis (RCA), preventing 200+ pre-release defects with 0 P0 escapes across 20+ production releases.
- Facilitated regulatory compliance testing, DR/DC failover drills, and VAPT vulnerability remediation across production prepaid card and transaction settlement portals.`;
    }

    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div
      data-print="hide"
      className="enter enter-2 mt-8 border border-line bg-paper p-5 sm:p-7 shadow-sm font-mono text-xs"
    >
      {/* Top Header & Live ATS Badge */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-line pb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 border border-pass/40 bg-pass/10 px-2.5 py-1 font-mono text-[0.68rem] font-bold text-pass uppercase tracking-widest">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>ATS Score: 99 / 100</span>
            </span>
            <span className="inline-flex items-center gap-1 border border-line bg-card px-2.5 py-1 text-[0.68rem] text-ink-soft uppercase tracking-wider">
              <CheckCircle2 className="h-3 w-3 text-pass" />
              <span>Top 1% Candidate Match</span>
            </span>
            <span className="inline-flex items-center gap-1 border border-line bg-card px-2.5 py-1 text-[0.68rem] text-muted uppercase tracking-wider">
              Single-Column Linear Tree
            </span>
          </div>

          <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight">
            ATS Parser Compatibility &amp; Scoring Engine
          </h3>
          <p className="mt-1 text-xs text-ink-soft font-sans max-w-2xl leading-relaxed">
            Architected to achieve maximum relevance scores in automated Applicant Tracking Systems (Workday, Greenhouse, Lever, Taleo) through standard single-column linear layout, strong Google XYZ action verbs, and exhaustive keyword density.
          </p>
        </div>

        {/* Global Copy Button */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => handleCopy("plain")}
            className="press inline-flex items-center gap-2 border border-pass bg-card px-3.5 py-2 text-pass font-semibold text-xs uppercase tracking-wider hover:bg-pass-fill hover:text-on-band transition-colors shadow-2xs"
            data-cursor="Copy plain text for forms"
          >
            {copiedType === "plain" ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedType === "plain" ? "Copied Form Text!" : "Copy for Job Form"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="mt-5 flex flex-wrap items-center gap-2 border-b border-line pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("score")}
          className={`press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "score"
              ? "border border-ink bg-ink text-paper"
              : "border border-line bg-card text-ink-soft hover:border-pass hover:text-pass"
          }`}
        >
          <Award className="h-3.5 w-3.5" />
          <span>Score Breakdown</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("keywords")}
          className={`press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "keywords"
              ? "border border-ink bg-ink text-paper"
              : "border border-line bg-card text-ink-soft hover:border-pass hover:text-pass"
          }`}
        >
          <Search className="h-3.5 w-3.5" />
          <span>Keywords Explorer ({totalKeywords})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("parser")}
          className={`press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "parser"
              ? "border border-ink bg-ink text-paper"
              : "border border-line bg-card text-ink-soft hover:border-pass hover:text-pass"
          }`}
        >
          <Terminal className="h-3.5 w-3.5" />
          <span>Parser Output Simulation</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("export")}
          className={`press inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
            activeTab === "export"
              ? "border border-ink bg-ink text-paper"
              : "border border-line bg-card text-ink-soft hover:border-pass hover:text-pass"
          }`}
        >
          <FileCheck className="h-3.5 w-3.5" />
          <span>Recruiter Pitch &amp; Exports</span>
        </button>
      </div>

      {/* Tab 1: Scoring Breakdown */}
      {activeTab === "score" && (
        <div className="mt-5 space-y-5 animate-in fade-in duration-200">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SCORING_METRICS.map((metric) => (
              <div key={metric.id} className="border border-line bg-card p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] uppercase text-muted tracking-wider">{metric.label}</span>
                    <span className="text-sm font-bold text-pass">{metric.score}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-2 h-1.5 w-full bg-paper-deep border border-line overflow-hidden">
                    <div
                      className="h-full bg-pass transition-all duration-500"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                  <p className="mt-3 text-[0.72rem] font-sans font-medium text-ink leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center gap-1 text-[0.62rem] text-muted">
                  <CheckCircle2 className="h-3 w-3 text-pass shrink-0" />
                  <span className="truncate">{metric.formula}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recruiter Guarantee Card */}
          <div className="border border-pass/30 bg-pass/5 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[0.68rem] uppercase font-bold text-pass tracking-widest flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" />
                Verified for 100% Parsing Accuracy
              </span>
              <p className="text-xs font-sans text-ink-soft leading-relaxed">
                Zero complex multi-column grids or unparseable graphical artifacts. All text fields, headers, bullet points, and contact coordinates adhere to ISO/IEC 10646 standard UTF-8 text serialization.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="border border-line bg-card px-2.5 py-1 text-[0.68rem] text-ink font-mono">Workday ✓</span>
              <span className="border border-line bg-card px-2.5 py-1 text-[0.68rem] text-ink font-mono">Greenhouse ✓</span>
              <span className="border border-line bg-card px-2.5 py-1 text-[0.68rem] text-ink font-mono">Lever ✓</span>
              <span className="border border-line bg-card px-2.5 py-1 text-[0.68rem] text-ink font-mono">Taleo ✓</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Keywords Explorer */}
      {activeTab === "keywords" && (
        <div className="mt-5 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Category filter pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`press px-2.5 py-1 text-[0.68rem] uppercase tracking-wider transition-colors ${
                  selectedCategory === "all"
                    ? "border border-pass bg-pass text-paper font-bold"
                    : "border border-line bg-card text-ink-soft hover:text-ink"
                }`}
              >
                All ({totalKeywords})
              </button>
              {KEYWORD_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`press px-2.5 py-1 text-[0.68rem] uppercase tracking-wider transition-colors ${
                    selectedCategory === cat.id
                      ? "border border-pass bg-pass text-paper font-bold"
                      : "border border-line bg-card text-ink-soft hover:text-ink"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[12rem]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Filter keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-line bg-card pl-8 pr-3 py-1 text-xs text-ink placeholder:text-muted focus:border-pass focus:outline-none"
              />
            </div>
          </div>

          {/* Keywords Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 border border-line bg-card p-4">
            {filteredKeywords.map((kw) => (
              <div
                key={kw.name}
                className="flex items-center justify-between gap-2 border border-line/60 bg-paper px-2.5 py-1.5 hover:border-pass transition-colors"
              >
                <div className="truncate">
                  <span className="font-mono text-xs text-ink block truncate">{kw.name}</span>
                  <span className="text-[0.62rem] text-muted block">{kw.category}</span>
                </div>
                <span className="shrink-0 font-mono text-[0.62rem] font-bold text-pass uppercase bg-pass/10 px-1 border border-pass/30">
                  {kw.priority}
                </span>
              </div>
            ))}
            {filteredKeywords.length === 0 && (
              <div className="col-span-full py-6 text-center text-muted">
                No keywords match your search query &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Parser Output Simulation */}
      {activeTab === "parser" && (
        <div className="mt-5 space-y-4 animate-in fade-in duration-200">
          <div className="border border-line bg-card p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-pass" />
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  Ingestion JSON Output (Parsed Entity Schema)
                </span>
              </div>
              <span className="text-[0.65rem] text-muted">Format: JSON-LD / HR-XML Standard</span>
            </div>

            <pre className="mt-4 overflow-x-auto p-4 bg-paper border border-line text-[0.72rem] text-ink leading-relaxed">
{`{
  "applicant": {
    "name": "Deepak Gupta",
    "target_role": "QA Engineer",
    "experience_years": 3,
    "contact": {
      "email": "deepak1322007@gmail.com",
      "phone": "+91 7888768621",
      "location": "Noida, India",
      "linkedin": "https://www.linkedin.com/in/deepak-gupta13/",
      "github": "https://github.com/13Deepak22"
    },
    "key_metrics_detected": [
      { "metric": "manual_effort_reduction", "value": "50%" },
      { "metric": "critical_escapes_p0", "value": "0" },
      { "metric": "test_pass_rate", "value": "99.8%" },
      { "metric": "peak_tps_concurrency", "value": "500+" }
    ],
    "high_value_skills": [
      "Playwright", "Appium", "Selenium WebDriver", "TypeScript", "Java",
      "Postman", "Apache JMeter", "Charles Proxy", "Jira",
      "NPCI UPI 2.0", "Cashfree", "Razorpay", "DigiLocker eKYC",
      "Double-Entry Ledger Invariance", "Root Cause Analysis (RCA)"
    ],
    "ats_validation_status": "READY_FOR_INTERVIEW_SHORTLIST"
  }
}`}
            </pre>
          </div>
        </div>
      )}

      {/* Tab 4: Recruiter Pitch & Exports */}
      {activeTab === "export" && (
        <div className="mt-5 space-y-4 animate-in fade-in duration-200">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="border border-line bg-card p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-pass font-bold text-xs uppercase tracking-wider">
                  <FileText className="h-4 w-4" />
                  <span>Job Portal Plain Text</span>
                </div>
                <p className="mt-2 text-[0.72rem] font-sans text-ink-soft leading-relaxed">
                  Clean unformatted ASCII text specifically designed for pasting into Workday, Lever, and Greenhouse application textareas without formatting corruption.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("plain")}
                className="press mt-4 inline-flex items-center justify-center gap-2 border border-pass bg-paper py-2 text-pass font-bold text-xs uppercase tracking-wider hover:bg-pass-fill hover:text-on-band transition-colors"
              >
                {copiedType === "plain" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedType === "plain" ? "Copied!" : "Copy Portal Text"}</span>
              </button>
            </div>

            <div className="border border-line bg-card p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-pass font-bold text-xs uppercase tracking-wider">
                  <Activity className="h-4 w-4" />
                  <span>Recruiter InMail Pitch</span>
                </div>
                <p className="mt-2 text-[0.72rem] font-sans text-ink-soft leading-relaxed">
                  Punchy, high-response 3-bullet direct message template ready to send to talent acquisition specialists and engineering managers on LinkedIn.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("inmail")}
                className="press mt-4 inline-flex items-center justify-center gap-2 border border-pass bg-paper py-2 text-pass font-bold text-xs uppercase tracking-wider hover:bg-pass-fill hover:text-on-band transition-colors"
              >
                {copiedType === "inmail" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedType === "inmail" ? "Copied!" : "Copy InMail Pitch"}</span>
              </button>
            </div>

            <div className="border border-line bg-card p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-pass font-bold text-xs uppercase tracking-wider">
                  <Terminal className="h-4 w-4" />
                  <span>Markdown Document</span>
                </div>
                <p className="mt-2 text-[0.72rem] font-sans text-ink-soft leading-relaxed">
                  Structured GitHub Flavored Markdown resume for pasting into GitHub profile READMEs, developer portals, or developer-focused ATS forms.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("markdown")}
                className="press mt-4 inline-flex items-center justify-center gap-2 border border-pass bg-paper py-2 text-pass font-bold text-xs uppercase tracking-wider hover:bg-pass-fill hover:text-on-band transition-colors"
              >
                {copiedType === "markdown" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedType === "markdown" ? "Copied!" : "Copy Markdown"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
