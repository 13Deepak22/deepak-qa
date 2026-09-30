"use client";

import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { experience } from "@/data";
import { experienceLabel } from "@/lib/career";

interface RoleHighlight {
  category: "all" | "gates" | "automation" | "fintech";
  text: string;
}

const HIGHLIGHTS_MAP: Record<string, RoleHighlight[]> = {
  "Exude Vincom": [
    {
      category: "gates",
      text: "Sole release gate authority: Signed off on 20+ production releases with zero P0 defect escapes into live customer accounts.",
    },
    {
      category: "fintech",
      text: "Architected end-to-end regression validation for automated KYC verification, digital lending workflows, and NBFC loan disbursals.",
    },
    {
      category: "automation",
      text: "Standardized Playwright and Postman API test suites, reducing regression cycle turnaround time from 2 days to under 4 hours.",
    },
    {
      category: "fintech",
      text: "Simulated third-party payment gateway dropouts and network latency jitter to enforce backend idempotency checks and eliminate race conditions.",
    },
  ],
  "Paul Merchants Ltd": [
    {
      category: "fintech",
      text: "Tested consumer-facing fintech applications (PaulPay UPI wallet, Mayaa Money prepaid cards, PML Forex live exchange).",
    },
    {
      category: "automation",
      text: "Constructed mobile test automation suites using Appium & Java Page Object Model (POM), increasing critical path regression coverage.",
    },
    {
      category: "gates",
      text: "Formulated comprehensive test plans, traceability matrices, and edge-case execution for multi-currency cross-border transactions.",
    },
    {
      category: "fintech",
      text: "Collaborated daily with product managers, developers, and compliance officers to certify RBI and NPCI regulatory guidelines.",
    },
  ],
};

export function InteractiveExperiencePreview() {
  const years = experienceLabel();
  const [selectedOrgIndex, setSelectedOrgIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<"all" | "gates" | "automation" | "fintech">("all");

  const currentRole = experience[selectedOrgIndex] || experience[0];
  const allHighlights = HIGHLIGHTS_MAP[currentRole.org] || [];
  const filteredHighlights =
    activeFilter === "all"
      ? allHighlights
      : allHighlights.filter((h) => h.category === activeFilter);

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Career Spotlight</span> / Verified Track Record
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              Where I have delivered impact.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
            {years} years across two fintech teams. Click between organizations and filter impact areas to inspect Deepak&apos;s day-to-day release ownership.
          </p>
        </div>

        {/* Organization Switcher Tabs */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {experience.map((role, idx) => {
            const isSelected = idx === selectedOrgIndex;
            const isCurrent = role.period.includes("Present");

            return (
              <button
                key={role.org}
                type="button"
                data-testid={`exp-org-${idx}`}
                data-cursor={`Inspect ${role.org} (${role.title}) release achievements`}
                onClick={() => {
                  setSelectedOrgIndex(idx);
                  setActiveFilter("all");
                }}
                className={`text-left border p-5 sm:p-6 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-pass bg-card shadow-sm ring-1 ring-pass/40"
                    : "border-line bg-paper hover:bg-card/50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center border ${
                        isSelected
                          ? "border-pass bg-pass-fill/15 text-pass"
                          : "border-line bg-paper text-muted"
                      }`}
                    >
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">{role.org}</h3>
                      <p className="font-mono text-xs text-pass uppercase tracking-wider mt-0.5">
                        {role.title}
                      </p>
                    </div>
                  </div>

                  {isCurrent && (
                    <span className="border border-pass/40 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{role.period}</span>
                  </span>
                  <span className="text-pass">
                    {isSelected ? "Active Focus" : "Click to inspect"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Role Interactive Details Panel */}
        <div className="mt-4 border border-line bg-card shadow-sm">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-paper p-4 sm:px-6">
            <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
              Filter Verified Impact:
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                data-testid="exp-filter-all"
                data-cursor="Show all verified career achievements"
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1 font-mono text-xs transition-colors border ${
                  activeFilter === "all"
                    ? "border-pass bg-pass text-paper font-medium"
                    : "border-line bg-card text-muted hover:text-ink"
                }`}
              >
                All Impact ({allHighlights.length})
              </button>
              <button
                type="button"
                data-testid="exp-filter-gates"
                data-cursor="Filter by zero-defect production release sign-offs"
                onClick={() => setActiveFilter("gates")}
                className={`px-3 py-1 font-mono text-xs transition-colors border ${
                  activeFilter === "gates"
                    ? "border-pass bg-pass text-paper font-medium"
                    : "border-line bg-card text-muted hover:text-ink"
                }`}
              >
                Release Gates &amp; Defect Zero
              </button>
              <button
                type="button"
                data-testid="exp-filter-automation"
                data-cursor="Filter by Playwright, Appium & API automation suites"
                onClick={() => setActiveFilter("automation")}
                className={`px-3 py-1 font-mono text-xs transition-colors border ${
                  activeFilter === "automation"
                    ? "border-pass bg-pass text-paper font-medium"
                    : "border-line bg-card text-muted hover:text-ink"
                }`}
              >
                Automation &amp; API Suites
              </button>
              <button
                type="button"
                data-testid="exp-filter-fintech"
                data-cursor="Filter by fintech payment gateway & lending integrity"
                onClick={() => setActiveFilter("fintech")}
                className={`px-3 py-1 font-mono text-xs transition-colors border ${
                  activeFilter === "fintech"
                    ? "border-pass bg-pass text-paper font-medium"
                    : "border-line bg-card text-muted hover:text-ink"
                }`}
              >
                Fintech &amp; Payment Security
              </button>
            </div>
          </div>

          {/* Highlights List */}
          <div className="p-6 sm:p-8 space-y-4">
            {filteredHighlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 border border-line bg-paper p-4 hover:border-pass/60 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-pass shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-ink">
                    {highlight.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Redirect Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line bg-paper p-5 sm:px-6">
            <div>
              <p className="font-mono text-xs text-ink font-semibold">
                Explore the complete interactive career timeline
              </p>
              <p className="text-xs text-ink-soft mt-0.5">
                Inspect company-by-company metrics, complete responsibility logs, and team impact.
              </p>
            </div>

            <Link
              href="/experience"
              className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors shrink-0"
              data-cursor="Complete career history"
            >
              <span>View complete experience &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
