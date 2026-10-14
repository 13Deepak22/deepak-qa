"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { DOC_CATEGORIES, type DocCategory } from "@/data/learn-docs-data";
import { MCP_CATEGORIES } from "@/data/learn-mcp-data";
import { CLI_CATEGORIES } from "@/data/learn-cli-data";
import { API_CATEGORIES } from "@/data/learn-api-data";
import { SELENIUM_CATEGORIES } from "@/data/learn-selenium-data";
import { APPIUM_CATEGORIES } from "@/data/learn-appium-data";
import { POSTMAN_CATEGORIES } from "@/data/learn-postman-data";
import { JMETER_CATEGORIES } from "@/data/learn-jmeter-data";
import { MANUAL_CATEGORIES } from "@/data/learn-manual-data";
import { AUTOMATION_CATEGORIES } from "@/data/learn-automation-data";
import { JAVA_CATEGORIES } from "@/data/learn-java-data";
import { JS_CATEGORIES } from "@/data/learn-js-data";
import { TS_CATEGORIES } from "@/data/learn-ts-data";
import type { LearnViewType } from "./docs-header-bar";

export interface DocsSidebarProps {
  activeView?: LearnViewType;
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
  onSelectView?: (view: LearnViewType) => void;
  className?: string;
}

export function DocsSidebar({
  activeView = "docs",
  activeDocId,
  onSelectDoc,
  onSelectView,
  className = "",
}: DocsSidebarProps) {
  const categories =
    activeView === "manual"
      ? MANUAL_CATEGORIES
      : activeView === "automation"
      ? AUTOMATION_CATEGORIES
      : activeView === "java"
      ? JAVA_CATEGORIES
      : activeView === "javascript"
      ? JS_CATEGORIES
      : activeView === "typescript"
      ? TS_CATEGORIES
      : activeView === "jmeter"
      ? JMETER_CATEGORIES
      : activeView === "postman"
      ? POSTMAN_CATEGORIES
      : activeView === "appium"
      ? APPIUM_CATEGORIES
      : activeView === "selenium"
      ? SELENIUM_CATEGORIES
      : activeView === "mcp"
      ? MCP_CATEGORIES
      : activeView === "cli"
      ? CLI_CATEGORIES
      : activeView === "api"
      ? API_CATEGORIES
      : DOC_CATEGORIES;

  const [openSection, setOpenSection] = useState<string | null>(null);
  const [filter, setFilter] = useState("");

  // Initialize and auto-expand category containing activeDocId (single dropdown open at a time)
  useEffect(() => {
    const activeCat = categories.find(
      (cat) => !cat.isDirectLink && cat.items.some((item) => item.id === activeDocId)
    );
    if (activeCat) {
      setOpenSection(activeCat.title);
      return;
    }
    // If current openSection is still valid in these categories, preserve it
    setOpenSection((current) => {
      if (current && categories.some((c) => c.title === current && !c.isDirectLink)) {
        return current;
      }
      const defaultCat = categories.find((cat) => cat.defaultOpen && !cat.isDirectLink);
      return defaultCat ? defaultCat.title : null;
    });
  }, [activeView, activeDocId, categories]);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  const filteredCategories = categories
    .map((cat) => {
      if (!filter) return cat;
      const matchCat = cat.title.toLowerCase().includes(filter.toLowerCase());
      const matchedItems = cat.items.filter((item) =>
        item.text.toLowerCase().includes(filter.toLowerCase())
      );
      if (matchCat || matchedItems.length > 0) {
        return {
          ...cat,
          items: matchedItems.length > 0 ? matchedItems : cat.items,
          defaultOpen: true,
        };
      }
      return null;
    })
    .filter(Boolean) as DocCategory[];

  return (
    <aside
      className={`flex flex-col h-full min-h-0 space-y-3 font-sans text-xs text-ink ${className}`}
      aria-label="Docs sidebar"
    >
      {/* Search / Filter input */}
      <div className="relative shrink-0 pr-1">
        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted/60 transition-colors group-focus-within:text-pass" />
        <input
          type="text"
          placeholder={`Filter ${activeView.toUpperCase()} docs...`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-md border border-line bg-paper/60 pl-8 pr-3 py-1.5 text-xs text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-pass focus:bg-card focus:outline-none focus:ring-1 focus:ring-pass/30"
        />
      </div>

      <nav className="flex-1 min-h-0 space-y-1 overflow-y-auto overflow-x-hidden pr-3 pl-0.5 docs-scrollbar">
        {filteredCategories.map((cat) => {
          // Direct Link (Introduction, Video Recording, Configuration, Release notes, etc.)
          if (cat.isDirectLink) {
            const targetId = cat.items[0]?.id || cat.id!;
            const isActive = targetId === activeDocId;

            return (
              <div key={cat.title} className="py-0.5 pr-0.5">
                <button
                  type="button"
                  onClick={() => onSelectDoc(targetId)}
                  className={`flex w-full items-center justify-between px-3 py-1.5 font-medium transition-all duration-200 ease-out rounded-lg cursor-pointer ${
                    isActive
                      ? "bg-pass/15 font-semibold text-pass ring-1 ring-pass/30 shadow-xs"
                      : "text-ink hover:bg-card hover:text-pass"
                  }`}
                >
                  <span className="truncate">{cat.title}</span>
                </button>
              </div>
            );
          }

          // Expandable Category with Chevron
          const hasActiveChild = cat.items.some((item) => item.id === activeDocId);
          const isOpen = filter ? true : openSection === cat.title;

          return (
            <div key={cat.title} className="py-0.5 pr-0.5">
              <button
                type="button"
                onClick={() => toggleSection(cat.title)}
                className={`group flex w-full items-center justify-between px-3 py-1.5 font-medium transition-all duration-200 ease-out rounded-lg cursor-pointer ${
                  hasActiveChild
                    ? "text-pass font-semibold bg-pass/10 ring-1 ring-pass/20"
                    : isOpen
                    ? "text-ink font-semibold bg-card/90"
                    : "text-ink hover:bg-card hover:text-pass"
                }`}
              >
                <span className="truncate mr-2">{cat.title}</span>
                <ChevronRight
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out ${
                    isOpen ? "rotate-90 text-pass" : "text-muted/60 group-hover:text-ink"
                  }`}
                />
              </button>

              {/* Animated Accordion Height with Grid */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  {cat.items && (
                    <div className="ml-2.5 mr-0.5 border-l border-line/60 pl-2.5 space-y-0.5 pb-1">
                      {cat.items.map((item) => {
                        const isActive = item.id === activeDocId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectDoc(item.id)}
                            className={`group flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-[11.5px] transition-all duration-200 ease-out cursor-pointer ${
                              isActive
                                ? "bg-pass/15 font-semibold text-pass ring-1 ring-pass/30 shadow-xs"
                                : "text-muted hover:bg-card hover:text-ink"
                            }`}
                          >
                            <span className="truncate mr-2">{item.text}</span>
                            {item.badge && (
                              <span className="shrink-0 rounded bg-pass/20 px-1.5 py-0.5 text-[9px] font-mono uppercase text-pass animate-pulse">
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export interface MobileDocsDrawerProps {
  activeView?: LearnViewType;
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
  onSelectView?: (view: LearnViewType) => void;
}

export function MobileDocsDrawer({
  activeView = "docs",
  activeDocId,
  onSelectDoc,
  onSelectView,
}: MobileDocsDrawerProps) {
  const [open, setOpen] = useState(false);

  const categories =
    activeView === "manual"
      ? MANUAL_CATEGORIES
      : activeView === "automation"
      ? AUTOMATION_CATEGORIES
      : activeView === "java"
      ? JAVA_CATEGORIES
      : activeView === "javascript"
      ? JS_CATEGORIES
      : activeView === "typescript"
      ? TS_CATEGORIES
      : activeView === "jmeter"
      ? JMETER_CATEGORIES
      : activeView === "postman"
      ? POSTMAN_CATEGORIES
      : activeView === "appium"
      ? APPIUM_CATEGORIES
      : activeView === "selenium"
      ? SELENIUM_CATEGORIES
      : activeView === "mcp"
      ? MCP_CATEGORIES
      : activeView === "cli"
      ? CLI_CATEGORIES
      : activeView === "api"
      ? API_CATEGORIES
      : DOC_CATEGORIES;

  let activeTitle = "Documentation Menu";
  const matchedItem = categories.flatMap((c) => c.items).find((i) => i.id === activeDocId);
  if (matchedItem) {
    activeTitle = matchedItem.text;
  } else if (activeView === "manual") {
    activeTitle = "Manual Testing";
  } else if (activeView === "automation") {
    activeTitle = "Automation Guide";
  } else if (activeView === "java") {
    activeTitle = "Java for Testers";
  } else if (activeView === "javascript") {
    activeTitle = "JavaScript for Testers";
  } else if (activeView === "typescript") {
    activeTitle = "TypeScript for Testers";
  } else if (activeView === "jmeter") {
    activeTitle = "JMeter Docs";
  } else if (activeView === "postman") {
    activeTitle = "Postman Docs";
  } else if (activeView === "appium") {
    activeTitle = "Appium Docs";
  } else if (activeView === "selenium") {
    activeTitle = "Selenium Docs";
  } else if (activeView === "mcp") {
    activeTitle = "Playwright MCP";
  } else if (activeView === "cli") {
    activeTitle = "Playwright CLI";
  } else if (activeView === "api") {
    activeTitle = "API Reference";
  }

  const handleSelect = (id: string, anchorId?: string) => {
    onSelectDoc(id, anchorId);
    setOpen(false);
  };

  const handleSwitchView = (view: LearnViewType) => {
    onSelectView?.(view);
    setOpen(false);
  };

  const mobileTrackList: { id: LearnViewType; label: string }[] = [
    { id: "docs", label: "Playwright" },
    { id: "selenium", label: "Selenium" },
    { id: "appium", label: "Appium" },
    { id: "postman", label: "Postman" },
    { id: "jmeter", label: "JMeter" },
    { id: "manual", label: "Manual QA" },
    { id: "automation", label: "Automation" },
    { id: "java", label: "Java" },
    { id: "javascript", label: "JS" },
    { id: "typescript", label: "TS" },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between rounded-lg border border-line bg-card/80 px-3.5 py-2 text-xs font-medium text-ink shadow-xs backdrop-blur-xs hover:border-pass/60 transition-all duration-200 cursor-pointer active:scale-98"
      >
        <span className="flex items-center gap-2 truncate">
          <Menu className="h-4 w-4 text-pass shrink-0" />
          <span className="text-muted shrink-0">Topic:</span>
          <span className="font-semibold text-ink truncate">{activeTitle}</span>
        </span>
        <span className="rounded bg-pass/10 px-2 py-0.5 font-mono text-[10px] text-pass shrink-0">
          Menu
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex bg-paper/80 backdrop-blur-sm animate-in fade-in-50 duration-200">
          <div className="relative flex w-full max-w-xs flex-col border-r border-line bg-paper p-4 shadow-xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between border-b border-line pb-3 mb-3">
              <span className="font-serif font-semibold text-ink">Documentation Index</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-muted hover:text-ink hover:bg-card transition cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile View Switcher */}
            <div className="mb-3 flex items-center gap-1 overflow-x-auto no-scrollbar rounded-lg border border-line bg-card/50 p-1">
              {mobileTrackList.map((item) => {
                const isActive = item.id === "docs" ? ["docs", "mcp", "cli", "api"].includes(activeView) : activeView === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSwitchView(item.id)}
                    className={`rounded px-2 py-1 text-center font-mono text-[10px] font-medium transition cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-pass text-paper font-semibold shadow-2xs"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto docs-scrollbar">
              <DocsSidebar
                activeView={activeView}
                activeDocId={activeDocId}
                onSelectDoc={handleSelect}
                onSelectView={handleSwitchView}
              />
            </div>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
