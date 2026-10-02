"use client";

import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  FileCheck,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function InteractiveAtsAnalyzer() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopySummary = () => {
    const text = `DEEPAK GUPTA — QA Engineer & SDET
Email: deepak1322007@gmail.com | Phone: +91 7888768621 | Location: Noida, India
LinkedIn: https://www.linkedin.com/in/deepak-gupta13/ | GitHub: https://github.com/13Deepak22

SUMMARY:
QA Engineer with 3+ years of experience in manual exploratory testing, test automation (Playwright, Appium, Selenium), REST API testing, and performance benchmarking. Specialized in fintech payment gateways (UPI 2.0, Razorpay, Cashfree), digital lending platforms (LOS/LMS), and double-entry accounting ledger verification. Zero P0 defect escapes across 20+ production releases.

CORE SKILLS:
- Automation: Playwright, Appium, Selenium WebDriver, TypeScript, Python
- Testing Methodologies: Exploratory Testing, Functional, Regression, Integration, Sanity, Smoke
- API & Performance: Postman, Apache JMeter, Newman, REST APIs, JSON Schema, Swagger
- Fintech & Payments: UPI 2.0 Intent/Collect, DigiLocker eKYC, e-NACH Mandates, Ledger Invariance
- AI & Modern Tools: Claude Code, Google Antigravity, Cursor AI, Model Context Protocol (MCP)
- Tools: Jira, Charles Proxy, Git, GitHub Actions, Docker, ADB Shell`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div data-print="hide" className="enter enter-2 mt-6 border border-line bg-paper p-5 sm:p-6 shadow-xs font-mono text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-pass" />
            <h3 className="font-serif text-lg font-bold text-ink">
              ATS Parser Compatibility Audit
            </h3>
          </div>
          <p className="text-[0.72rem] text-ink-soft mt-0.5">
            Optimized for zero-friction ingestion across Greenhouse, Lever, Workday, and Taleo.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCopySummary}
          className="press inline-flex items-center gap-2 border border-pass bg-card px-3 py-1.5 text-pass text-xs font-semibold uppercase tracking-wider hover:bg-pass-fill hover:text-on-band transition-colors shrink-0 shadow-2xs"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? "Copied Plain Text!" : "Copy for Job Form"}</span>
        </button>
      </div>

      {/* Audit Matrix Badges */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="border border-line bg-card p-3">
          <span className="text-[0.62rem] uppercase text-muted block">ATS Pass Score:</span>
          <span className="text-base font-bold text-pass mt-0.5 block">99 / 100</span>
          <span className="text-[0.65rem] text-ink-soft mt-0.5 block">Clean Single Column</span>
        </div>
        <div className="border border-line bg-card p-3">
          <span className="text-[0.62rem] uppercase text-muted block">Keywords Parsed:</span>
          <span className="text-base font-bold text-ink mt-0.5 block">54+ Terms</span>
          <span className="text-[0.65rem] text-ink-soft mt-0.5 block">SDET &amp; Fintech Ready</span>
        </div>
        <div className="border border-line bg-card p-3">
          <span className="text-[0.62rem] uppercase text-muted block">Typography &amp; Layout:</span>
          <span className="text-base font-bold text-pass mt-0.5 block">OCR Native</span>
          <span className="text-[0.65rem] text-ink-soft mt-0.5 block">Standard IBM Plex / Serifs</span>
        </div>
        <div className="border border-line bg-card p-3">
          <span className="text-[0.62rem] uppercase text-muted block">Table/Floating Frames:</span>
          <span className="text-base font-bold text-pass mt-0.5 block">0 Complex Tables</span>
          <span className="text-[0.65rem] text-ink-soft mt-0.5 block">Linear Semantic Tree</span>
        </div>
      </div>
    </div>
  );
}
