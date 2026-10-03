/**
 * The ATS resume at /resume. Sections reuse the other data files; this file
 * holds only what a plain resume words differently. No photo and no date of birth.
 */

import { experienceLabel } from "@/lib/career";

export const resume = {
  headline: "QA Engineer · Manual & Automation Testing · FinTech & Payments",
  get summary() {
    return `Results-driven QA Engineer with ${experienceLabel()} years of high-velocity testing across fintech payment gateways, native mobile (Android/iOS), and distributed backend services. Builds production-grade test automation with Playwright, Appium, and Selenium WebDriver (TypeScript/Java), cuts manual regression effort by 50%, and enforces zero P0 defect escapes across 20+ production releases. Deep domain expertise in NPCI UPI 2.0, multi-gateway routing (Razorpay, Cashfree, PayU), DigiLocker eKYC, double-entry ledger invariance, and JMeter load testing. Skilled in exploratory testing, root cause analysis (RCA), and AI-accelerated QA workflows. Open to relocation.`;
  },
  exposureNote: "Compliance audit verification & remediation support",
};
