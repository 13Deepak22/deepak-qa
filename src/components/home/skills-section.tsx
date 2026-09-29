"use client";

import { Check, Flame, Layers, Search, Sparkles, X, Zap } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { toolkit } from "@/data";

// High-impact skills featured for 2026 recruiter highlights
const featuredKeywords: Record<string, string> = {
  "Playwright": "End-to-End CI/CD",
  "Appium": "Android & iOS POM",
  "Postman": "REST & Gateway API",
  "Selenium WebDriver": "Java + TestNG",
  "UPI": "NPCI & Double-Debit",
  "Root Cause Analysis (RCA)": "P0-P3 Triage",
  "JMeter": "Stress & Concurrency",
  "Page Object Model (POM)": "Modular Automation",
  "Regression Testing": "Zero-Leak Gate",
  "AI & GenAI": "2026 Edge Testing",
};

const presets = [
  { label: "All Skills", query: "", category: "All" },
  { label: "🔥 2026 Core Stack", query: "core", category: "All" },
  { label: "🤖 Automation & Code", query: "", category: "Automation" },
  { label: "💳 Fintech & UPI", query: "", category: "Fintech" },
  { label: "⚡ API & Tools", query: "", category: "Tools" },
];

export function SkillsSection() {
  const searchInputId = useId();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePreset, setActivePreset] = useState<string>("All Skills");

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
    const isCoreFilter = activePreset === "🔥 2026 Core Stack" && !searchQuery.trim();

    return toolkit
      .map((group) => {
        // If a specific category is chosen and it's not "All"
        if (activeCategory !== "All" && group.label !== activeCategory) {
          return null;
        }

        let items = group.items;

        if (isCoreFilter) {
          items = items.filter((item) => item in featuredKeywords);
        } else if (q) {
          items = items.filter((item) => {
            const matchesName = item.toLowerCase().includes(q);
            const matchesBadge = featuredKeywords[item]?.toLowerCase().includes(q);
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
  }, [activeCategory, searchQuery, activePreset]);

  const totalVisibleCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredGroups]);

  const handleSelectPreset = (preset: typeof presets[0]) => {
    setActivePreset(preset.label);
    setActiveCategory(preset.category);
    if (preset.label === "🔥 2026 Core Stack") {
      setSearchQuery("");
    } else {
      setSearchQuery(preset.query);
    }
  };

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setActivePreset(cat === "All" ? "All Skills" : cat);
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setActivePreset("All Skills");
  };

  return (
    <div className="mt-10 min-w-0">
      {/* Recruiter interactive control bar */}
      <div className="border border-line bg-card p-4 sm:p-6 min-w-0">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between min-w-0">
          {/* Quick preset chips */}
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <span className="font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Filter by:
            </span>
            {presets.map((preset) => {
              const isSelected = activePreset === preset.label;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`press inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.08em] transition-all ${
                    isSelected
                      ? "bg-ink font-medium text-paper"
                      : "border border-line bg-paper text-ink hover:border-pass hover:text-pass"
                  }`}
                >
                  {preset.label.includes("🔥") ? (
                    <Flame className="size-3 text-amber-500" />
                  ) : preset.label.includes("🤖") ? (
                    <Zap className="size-3 text-pass" />
                  ) : null}
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>

          {/* Live Search input */}
          <div className="relative w-full lg:w-72 min-w-0">
            <label htmlFor={searchInputId} className="sr-only">
              Search {totalSkillsCount} verified skills
            </label>
            <div className="relative flex items-center min-w-0">
              <Search className="pointer-events-none absolute left-3 size-3.5 text-muted" aria-hidden="true" />
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActivePreset("Custom Search");
                }}
                placeholder="Search skill (e.g. Playwright, UPI)..."
                className="w-full border border-line bg-paper py-2 pr-8 pl-8 font-mono text-xs text-ink placeholder:text-muted transition-colors focus:border-pass focus:outline-none"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActivePreset("All Skills");
                  }}
                  aria-label="Clear search"
                  className="absolute right-2.5 text-muted hover:text-ink"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-line/60 pt-4" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.label && !searchQuery;
            return (
              <button
                key={cat.label}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleCategoryClick(cat.label)}
                className={`press inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.1em] uppercase transition-all ${
                  isSelected
                    ? "bg-ink font-medium text-paper"
                    : "border border-line bg-paper text-muted hover:border-pass hover:text-ink"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[0.6rem] ${isSelected ? "text-paper/80" : "text-muted"}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}

          {(activeCategory !== "All" || searchQuery) ? (
            <button
              type="button"
              onClick={clearFilters}
              className="press ml-auto inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-[0.1em] text-muted hover:text-pass uppercase"
            >
              <X className="size-3" />
              Reset filters
            </button>
          ) : null}
        </div>
      </div>

      {/* Search results banner */}
      {(searchQuery || activePreset !== "All Skills") ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.68rem] tracking-[0.12em] text-muted uppercase">
          <p>
            Showing <span className="font-semibold text-ink">{totalVisibleCount}</span> of {totalSkillsCount} skills
            {searchQuery ? ` matching "${searchQuery}"` : ` in ${activePreset}`}
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="hover:text-pass underline underline-offset-2"
          >
            Show all {totalSkillsCount}
          </button>
        </div>
      ) : null}

      {/* Skills Groups List - Guaranteed headings & items present for tests */}
      <ul className="mt-6 border-t border-line min-w-0">
        {filteredGroups.map((group) => (
          <li
            key={group.label}
            className="grid gap-4 border-b border-line py-6 sm:py-7 md:grid-cols-[13rem_minmax(0,1fr)] md:items-start md:gap-8 lg:px-1 min-w-0"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="practice-title font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                  {group.label}
                </h3>
                <span className="font-mono text-[0.6rem] text-muted">
                  ({group.items.length})
                </span>
              </div>
              {group.label === "Exposure" ? (
                <p className="mt-2 max-w-[13rem] text-xs leading-snug text-muted">
                  Followed those efforts. Did not run the tests.
                </p>
              ) : group.label === "Automation" ? (
                <p className="mt-2 max-w-[13rem] text-xs leading-snug text-muted">
                  Scripted POM suites across Android, iOS, and Web.
                </p>
              ) : group.label === "Fintech" ? (
                <p className="mt-2 max-w-[13rem] text-xs leading-snug text-muted">
                  NPCI compliance, payment gateways & money flows.
                </p>
              ) : null}
            </div>

            <ul className="flex flex-wrap gap-2 min-w-0">
              {group.items.map((item) => {
                const badge = featuredKeywords[item];
                return (
                  <li
                    key={item}
                    className={`skill-chip group relative inline-flex items-center gap-1.5 border px-3 py-1.5 font-mono text-[0.8125rem] leading-none transition-all ${
                      badge
                        ? "border-pass/60 bg-paper text-ink hover:border-pass"
                        : "border-line bg-paper text-ink hover:border-pass hover:text-pass"
                    }`}
                  >
                    <span>{item}</span>
                    {badge ? (
                      <span className="inline-flex items-center gap-0.5 rounded-xs bg-ink px-1.5 py-0.5 text-[0.58rem] tracking-tight text-paper uppercase">
                        <Check className="size-2 text-paper" strokeWidth={3} />
                        {badge}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>

      {/* Recruiter Confidence Banner */}
      <div className="mt-8 flex flex-col gap-3 border border-line bg-card p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex size-8 shrink-0 items-center justify-center border border-line bg-paper text-ink">
            <Sparkles className="size-4 text-pass" />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-sm font-medium text-ink">
              Verified Production Competence · Zero Theoretical Claims
            </p>
            <p className="text-xs text-ink-soft">
              Every skill listed above has been deployed across 15+ live apps, lending portals, or CI pipelines.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase">
          <Layers className="size-3.5 text-pass" />
          <span>90+ ATS Keywords · 100% Audit Ready</span>
        </div>
      </div>
    </div>
  );
}
