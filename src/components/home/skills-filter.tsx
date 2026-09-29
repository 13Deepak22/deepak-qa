"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { toolkit } from "@/data";

export function SkillsFilter() {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const totalSkillsCount = useMemo(() => {
    return toolkit.reduce((acc, g) => acc + g.items.length, 0);
  }, []);

  const groups = useMemo(() => {
    return [{ label: "All", count: totalSkillsCount }].concat(
      toolkit.map((g) => ({ label: g.label, count: g.items.length }))
    );
  }, [totalSkillsCount]);

  const filteredGroups = useMemo(() => {
    return toolkit
      .filter((g) => selectedGroup === "All" || g.label === selectedGroup)
      .map((g) => {
        if (!query.trim()) return g;
        const q = query.toLowerCase();
        const matches = g.items.filter((item) => item.toLowerCase().includes(q));
        return {
          ...g,
          items: matches,
        };
      })
      .filter((g) => g.items.length > 0);
  }, [selectedGroup, query]);

  const totalVisible = filteredGroups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="mt-8">
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter skills by category">
          {groups.map((group) => {
            const isSelected = selectedGroup === group.label;
            return (
              <button
                key={group.label}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedGroup(group.label)}
                className={`press inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.1em] uppercase transition-all ${
                  isSelected
                    ? "bg-pass text-on-band font-medium"
                    : "border border-line bg-paper/60 text-ink-soft hover:border-pass hover:text-ink"
                }`}
              >
                <span>{group.label}</span>
                <span className={`text-[0.62rem] ${isSelected ? "text-on-band/80" : "text-muted"}`}>
                  ({group.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-64">
          <label htmlFor="skill-search" className="sr-only">
            Search {totalSkillsCount} skills
          </label>
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 size-3.5 text-muted" aria-hidden="true" />
            <input
              id="skill-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search keyword (e.g. Playwright, UPI)..."
              className="w-full border border-line bg-paper py-1.5 pr-8 pl-8 font-mono text-xs text-ink placeholder:text-muted focus:border-pass focus:outline-none"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 text-muted hover:text-ink"
              >
                <X className="size-3.5" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Query status notification */}
      {query ? (
        <p className="mt-3 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
          Showing {totalVisible} of {totalSkillsCount} skills matching &ldquo;{query}&rdquo;
        </p>
      ) : null}

      {/* Grouped Skills List */}
      <ul className="divide-y divide-line">
        {filteredGroups.map((group) => (
          <li
            key={group.label}
            className="grid gap-4 py-6 sm:py-7 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start md:gap-8 lg:px-1"
          >
            <div>
              <h3 className="practice-title font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                {group.label}
              </h3>
              {group.label === "Exposure" ? (
                <p className="mt-4 max-w-[12rem] text-xs leading-snug text-muted">
                  Followed those efforts. Did not run the tests.
                </p>
              ) : null}
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="skill-chip border border-line px-2.5 py-1.5 font-mono text-[0.8125rem] leading-none transition-colors hover:border-pass hover:text-pass"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
