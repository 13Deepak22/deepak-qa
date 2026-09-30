"use client";

import { Check, Layers, Search, Sparkles, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { toolkit } from "@/data";

// High-impact skills featured for 2026 recruiter highlights
const featuredKeywords: Record<string, string> = {
  "Playwright": "End-to-End Automation",
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

interface SkillsSectionProps {
  compact?: boolean;
}

export function SkillsSection({ compact = false }: SkillsSectionProps) {
  const searchInputId = useId();
  const [activeCategory, setActiveCategory] = useState<string>(compact ? "Automation" : "All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalSkillsCount = useMemo(() => {
    return toolkit.reduce((acc, g) => acc + g.items.length, 0);
  }, []);

  const categories = useMemo(() => {
    if (compact) {
      return toolkit.map((g) => ({ label: g.label, count: g.items.length }));
    }
    return [{ label: "All", count: totalSkillsCount }].concat(
      toolkit.map((g) => ({ label: g.label, count: g.items.length }))
    );
  }, [compact, totalSkillsCount]);

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
  }, [activeCategory, searchQuery]);

  const totalVisibleCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredGroups]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
  };

  const clearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <div className={`${compact ? "mt-4" : "mt-10"} min-w-0`}>
      {/* Category Tabs & Live Search Toolbar */}
      <div className={`border-y border-line ${compact ? "py-2.5 sm:py-3" : "py-5"} min-w-0`}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between min-w-0">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 min-w-0" role="tablist" aria-label="Skill categories">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.label && !searchQuery;
              return (
                <button
                  key={cat.label}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryClick(cat.label)}
                  className={`press inline-flex items-center gap-1.5 font-mono tracking-[0.08em] uppercase transition-all ${
                    compact ? "px-2.5 py-1 text-[0.68rem]" : "px-3 py-1.5 text-[0.72rem]"
                  } ${
                    isSelected
                      ? "bg-ink font-medium text-paper shadow-xs"
                      : "border border-line bg-paper text-muted hover:border-pass hover:text-ink"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[0.62rem] ${isSelected ? "text-paper/80" : "text-muted"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}

            {(activeCategory !== "All" || searchQuery) ? (
              <button
                type="button"
                onClick={clearFilters}
                className="press ml-2 inline-flex items-center gap-1 font-mono text-[0.65rem] tracking-[0.1em] text-muted hover:text-pass uppercase"
              >
                <X className="size-3" />
                Reset
              </button>
            ) : null}
          </div>

          {/* Live Search input */}
          <div className="relative w-full lg:w-64 min-w-0">
            <label htmlFor={searchInputId} className="sr-only">
              Search {totalSkillsCount} verified skills
            </label>
            <div className="relative flex items-center min-w-0">
              <Search className="pointer-events-none absolute left-3 size-3.5 text-muted" aria-hidden="true" />
              <input
                id={searchInputId}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skill (e.g. Playwright, UPI)..."
                className="w-full border border-line bg-paper py-1.5 pr-8 pl-8 font-mono text-xs text-ink placeholder:text-muted transition-colors focus:border-pass focus:outline-none"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 text-muted hover:text-ink"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Search results banner */}
      {(searchQuery || activeCategory !== "All") ? (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase">
          <p>
            Showing <span className="font-semibold text-ink">{totalVisibleCount}</span> of {totalSkillsCount} skills
            {searchQuery ? ` matching "${searchQuery}"` : ` in ${activeCategory}`}
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

      {/* Skills Groups List - Aligned to exact 12rem left column */}
      <ul className="divide-y divide-line min-w-0">
        {filteredGroups.map((group) => (
          <li
            key={group.label}
            className={`grid gap-3 ${
              compact ? "py-3 sm:py-3.5" : "py-6 sm:py-7"
            } md:grid-cols-[10rem_minmax(0,1fr)] md:items-start md:gap-6 lg:px-1 min-w-0`}
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
                <p className="mt-1 max-w-[10rem] text-[0.7rem] leading-snug text-muted">
                  Followed those efforts.
                </p>
              ) : group.label === "Automation" ? (
                <p className="mt-1 max-w-[10rem] text-[0.7rem] leading-snug text-muted">
                  Scripted POM suites across Android, iOS &amp; Web.
                </p>
              ) : group.label === "Fintech" ? (
                <p className="mt-1 max-w-[10rem] text-[0.7rem] leading-snug text-muted">
                  NPCI compliance &amp; payment gateways.
                </p>
              ) : null}
            </div>

            <ul className="flex flex-wrap gap-1.5 min-w-0">
              {group.items.map((item) => {
                const badge = featuredKeywords[item];
                return (
                  <li
                    key={item}
                    className={`skill-chip group relative inline-flex items-center gap-1.5 border ${
                      compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-[0.8125rem]"
                    } font-mono leading-none transition-all ${
                      badge
                        ? "border-pass/60 bg-paper text-ink hover:border-pass"
                        : "border-line bg-paper text-ink hover:border-pass hover:text-pass"
                    }`}
                  >
                    <span>{item}</span>
                    {badge ? (
                      <span className="inline-flex items-center gap-0.5 rounded-xs bg-ink px-1.5 py-0.5 text-[0.55rem] tracking-tight text-paper uppercase">
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
      <div className={`${compact ? "mt-4 p-3 sm:p-3.5" : "mt-10 p-4 sm:p-5"} flex flex-col gap-2.5 border border-line bg-card sm:flex-row sm:items-center sm:justify-between min-w-0`}>
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex size-7 shrink-0 items-center justify-center border border-line bg-paper text-ink">
            <Sparkles className="size-3.5 text-pass" />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-xs sm:text-sm font-medium text-ink">
              Verified Production Competence · Zero Theoretical Claims
            </p>
            <p className="text-[0.7rem] text-ink-soft">
              Every skill tested across 15+ live apps, lending portals, or production release gates.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.1em] text-muted uppercase">
          <Layers className="size-3 text-pass" />
          <span>90+ ATS Keywords · Audit Ready</span>
        </div>
      </div>
    </div>
  );
}
