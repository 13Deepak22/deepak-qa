"use client";

import { useId, useMemo, useState } from "react";
import {
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { ToolLogo } from "@/components/home/tool-logo";
import { toolkit } from "@/data";

// Core Arsenal feature cards with official logos and technical highlights
const CORE_ARSENAL = [
  {
    name: "Playwright",
    logo: "playwright" as const,
    role: "Web & E2E Automation",
    badge: "Daily Production Runner",
    accent: "#2EAD33",
    description:
      "Modern browser automation with Page Object Model (POM), parallel execution, network intercept mocking, and auto-captured video traces.",
    tags: ["TypeScript", "POM Architecture", "Network Mocking", "Trace Viewer", "Zero Flakiness"],
  },
  {
    name: "Selenium WebDriver",
    logo: "selenium" as const,
    role: "Cross-Browser Automation",
    badge: "Core Framework",
    accent: "#00B4D8",
    description:
      "Robust data-driven test suites in Java + TestNG with dynamic explicit waits, custom retry analyzers, and cross-browser grid verification.",
    tags: ["Java", "TestNG", "Data-Driven", "Dynamic Waits", "Cross-Browser"],
  },
  {
    name: "Appium Mobile",
    logo: "appium" as const,
    role: "Android & iOS Automation",
    badge: "Mobile Production",
    accent: "#662D91",
    description:
      "UiAutomator2 & XCUITest test suites on real devices, verifying UPI intent handshakes, biometric FaceID auth, and offline handling.",
    tags: ["UiAutomator2", "XCUITest", "UPI Switcher", "Biometric Auth", "Deep-Linking"],
  },
  {
    name: "Postman & REST API",
    logo: "postman" as const,
    role: "API Protocols & Gateways",
    badge: "Release Gate",
    accent: "#FF6C37",
    description:
      "End-to-end payment gateway and banking API validation, JSON schema assertions, automated regression suites, and webhook replays.",
    tags: ["RESTful", "JSON Schema", "Webhook Assertions", "OAuth 2.0", "Mockoon"],
  },
  {
    name: "Apache JMeter",
    logo: "jmeter" as const,
    role: "Performance & Stress",
    badge: "Concurrency Clearance",
    accent: "#D22128",
    description:
      "Simulating 500+ concurrent requests under network throttling profiles to benchmark p99 SLAs, thread contention, and connection pools.",
    tags: ["500+ Concurrency", "P99 SLA", "Connection Pools", "Throughput", "Stress Testing"],
  },
  {
    name: "Fintech & UPI Protocols",
    logo: "razorpay" as const,
    role: "Financial Flow Security",
    badge: "Domain Expertise",
    accent: "#0C2340",
    description:
      "NPCI UPI 2.0 intent/collect flows, double-debit race prevention, escrow split settlements, DigiLocker eKYC, and multi-bank switches.",
    tags: ["NPCI Spec", "Idempotency", "Double-Debit Intercept", "Razorpay", "DigiLocker"],
  },
];

// Featured badges for specific high-value skills
const FEATURED_SKILL_BADGES: Record<string, string> = {
  "Playwright": "End-to-End",
  "Selenium WebDriver": "POM Architecture",
  "Appium": "Mobile Native",
  "Postman": "REST & Gateway",
  "UPI": "NPCI Compliant",
  "Root Cause Analysis (RCA)": "P0-P3 Triage",
  "JMeter": "Stress & Concurrency",
  "Page Object Model (POM)": "Modular Suite",
  "Regression Testing": "Zero-Leak Gate",
  "AI & GenAI": "Next-Gen QA",
  "TestNG": "Runner & Listeners",
  "SQL": "Ledger Audits",
  "Jenkins": "CI/CD Automation",
  "Git & GitHub": "Version Control",
  "Java": "Object Oriented",
  "TypeScript": "Type-Safe Specs",
};

export function CoolSkillsShowcase() {
  const searchInputId = useId();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const totalSkillsCount = useMemo(() => {
    return toolkit.reduce((acc, g) => acc + g.items.length, 0);
  }, []);

  const categories = useMemo(() => {
    return [{ label: "All", count: totalSkillsCount }].concat(
      toolkit.map((g) => ({ label: g.label, count: g.items.length }))
    );
  }, [totalSkillsCount]);

  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return toolkit
      .map((group) => {
        if (activeCategory !== "All" && group.label !== activeCategory) {
          return null;
        }

        let items = group.items;

        if (q) {
          items = items.filter((item) => {
            const matchesName = item.toLowerCase().includes(q);
            const matchesBadge = FEATURED_SKILL_BADGES[item]?.toLowerCase().includes(q);
            const matchesCategory = group.label.toLowerCase().includes(q);
            return matchesName || matchesBadge || matchesCategory;
          });
        }

        if (items.length === 0) return null;

        return {
          ...group,
          items,
        };
      })
      .filter((group): group is NonNullable<typeof group> => group !== null);
  }, [activeCategory, searchQuery]);

  const totalVisibleCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredGroups]);

  const handleCopyKeywords = async () => {
    const allKeywords = Array.from(
      new Set(toolkit.flatMap((g) => g.items))
    ).join(", ");

    try {
      await navigator.clipboard.writeText(allKeywords);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is constrained
      setHasCopied(false);
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1. Command Center Terminal Strip */}
      <div className="rounded-xl border border-line bg-card p-4 sm:p-5 shadow-2xs">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pass/10 border border-pass/20 font-mono text-[11px] font-semibold text-pass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pass opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pass" />
              </span>
              GATE: PRODUCTION READY
            </span>
            <span className="font-mono text-xs text-muted hidden sm:inline">|</span>
            <span className="font-mono text-xs text-ink-soft">
              <strong className="text-ink font-semibold">{totalSkillsCount}+</strong> Verified QA Competencies
            </span>
            <span className="font-mono text-xs text-muted hidden sm:inline">|</span>
            <span className="font-mono text-xs text-ink-soft">
              0 Flakiness Tolerance
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyKeywords}
            data-cursor="Copy ATS keywords"
            className="press inline-flex items-center gap-2 self-start lg:self-auto px-3.5 py-1.5 rounded-md border border-line bg-paper text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors shadow-2xs cursor-pointer"
          >
            {hasCopied ? (
              <>
                <Check className="h-3.5 w-3.5 text-pass" />
                <span className="text-pass font-semibold">Keywords Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted" />
                <span>Copy ATS Keywords</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Core Testing Arsenal — Visual Tech Stack Cards */}
      <div>
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-line/60">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-pass" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold">
              Core Testing Arsenal &amp; Frameworks
            </h3>
          </div>
          <span className="font-mono text-[11px] text-muted">
            Daily Production Tools
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_ARSENAL.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col justify-between rounded-xl border border-line bg-card p-5 sm:p-6 transition-all hover:border-pass/80 hover:shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-paper text-ink transition-transform group-hover:scale-105">
                      <ToolLogo name={tool.logo} className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-serif text-base font-bold text-ink group-hover:text-pass transition-colors">
                        {tool.name}
                      </h4>
                      <p className="font-mono text-[11px] text-muted uppercase tracking-wider">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-paper-deep text-muted shrink-0 border border-line/50">
                    {tool.badge}
                  </span>
                </div>

                <p className="mt-3.5 text-xs text-ink-soft leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-line/50 flex flex-wrap gap-1.5">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-paper text-ink-soft border border-line/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Skills Explorer & Instant Filter */}
      <div className="rounded-xl border border-line bg-card p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-pass" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                Verified Competency Matrix
              </h3>
            </div>
            <p className="mt-1 text-xs text-muted">
              Filter across domains or type any keyword to view production test coverage.
            </p>
          </div>

          {/* Search Input with Clear Button */}
          <div className="relative w-full sm:w-72">
            <label htmlFor={searchInputId} className="sr-only">
              Search {totalSkillsCount} verified skills
            </label>
            <div className="relative flex items-center">
              <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-muted" aria-hidden="true" />
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. UPI, TestNG)..."
                data-cursor="Search across 40+ verified skills"
                className="w-full rounded-lg border border-line bg-paper py-2 pr-8 pl-8 font-mono text-xs text-ink placeholder:text-muted transition-colors focus:border-pass focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  data-cursor="Clear search query"
                  className="absolute right-2.5 text-muted hover:text-ink cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-5 flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.label && !searchQuery;
            return (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={isSelected}
                data-cursor={`Filter skills: ${cat.label} (${cat.count})`}
                onClick={() => {
                  setActiveCategory(cat.label);
                  setSearchQuery("");
                }}
                className={`press inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-xs tracking-wider uppercase transition-all cursor-pointer ${
                  isSelected
                    ? "bg-pass text-on-band font-bold shadow-2xs"
                    : "border border-line bg-paper text-muted hover:border-pass hover:text-ink"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isSelected ? "text-on-band/90" : "text-muted"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}

          {(activeCategory !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              data-cursor="Reset category filter"
              className="press ml-2 inline-flex items-center gap-1 font-mono text-[11px] text-muted hover:text-pass uppercase cursor-pointer"
            >
              <X className="h-3 w-3" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Live Filter Counter */}
        {(searchQuery || activeCategory !== "All") && (
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted">
            <p>
              Showing <strong className="text-ink font-semibold">{totalVisibleCount}</strong> of {totalSkillsCount} skills
              {searchQuery ? ` matching "${searchQuery}"` : ` in category ${activeCategory}`}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              data-cursor="Show all 40+ verified skills"
              className="text-pass hover:underline cursor-pointer"
            >
              Show all {totalSkillsCount}
            </button>
          </div>
        )}

        {/* Skill Badges Grouped Grid */}
        <div className="mt-8 space-y-8">
          {filteredGroups.map((group) => (
            <div key={group.label} className="border-t border-line/60 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-pass font-bold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-pass" />
                  {group.label}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {group.items.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const badge = FEATURED_SKILL_BADGES[item];
                  return (
                    <div
                      key={item}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs transition-colors ${
                        badge
                          ? "border-pass/50 bg-paper text-ink shadow-2xs"
                          : "border-line bg-paper text-ink hover:border-pass"
                      }`}
                    >
                      <span className="font-medium">{item}</span>
                      {badge && (
                        <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-pass/15 text-pass border border-pass/20">
                          <Check className="h-2.5 w-2.5 text-pass" strokeWidth={3} />
                          {badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Recruiter & ATS Reference Matrix */}
      <div className="rounded-xl border border-line bg-paper p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-pass" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-pass font-bold">
                ATS Keywords Cluster
              </h4>
            </div>
            <p className="mt-1 font-serif text-lg font-bold text-ink">
              Ready for automated scanning &amp; hiring team evaluations
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopyKeywords}
            data-cursor="Copy ATS keywords block to clipboard"
            className="press inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-line bg-card font-mono text-xs uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors cursor-pointer self-start sm:self-auto"
          >
            {hasCopied ? (
              <>
                <Check className="h-3.5 w-3.5 text-pass" />
                <span className="text-pass">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted" />
                <span>Copy Keyword Block</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <div key={group.label} className="rounded-lg border border-line bg-card p-4">
              <div className="flex items-center justify-between border-b border-line/50 pb-2 mb-2">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  {group.label}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {group.items.length} keywords
                </span>
              </div>
              <p className="text-xs text-ink-soft leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

