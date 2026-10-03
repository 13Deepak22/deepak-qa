/**
 * The ATS resume at /resume. Sections reuse the other data files; this file
 * holds only what a plain resume words differently. No photo and no date of birth.
 */

import { experienceLabel } from "@/lib/career";

export const resume = {
  headline: "QA Engineer · Automation & Manual Testing · FinTech & Payments",
  get summary() {
    return `QA Engineer with ${experienceLabel()} years of experience delivering robust test automation and quality verification for high-volume FinTech systems, mobile applications (Android & iOS), and distributed payment APIs. Builds scalable test suites with Playwright, Appium, and Selenium WebDriver (TypeScript/Java), reducing regression cycles by 50% with zero P0 production escapes across 20+ releases. Deep domain expertise in NPCI UPI 2.0, multi-gateway payment processing, eKYC validation, and JMeter performance load testing. Open to relocation.`;
  },
  exposureNote: "Compliance audit verification & remediation support",
};
