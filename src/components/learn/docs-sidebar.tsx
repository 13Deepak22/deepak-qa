"use client";

import { useEffect, useState } from "react";
import {
  ChevronRight,
  Menu,
  Search,
  X,
  Sparkles,
  Bot,
  Terminal,
  Layers,
  BookOpen,
  ArrowLeft,
} from "lucide-react";
import { DOC_CATEGORIES, type DocCategory } from "@/data/learn-docs-data";
import type { LearnViewType } from "./docs-header-bar";

export interface DocsSidebarProps {
  activeView?: LearnViewType;
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
  onSelectView?: (view: LearnViewType) => void;
  className?: string;
}

const MCP_SECTIONS = [
  { id: "overview", text: "Overview & Architecture" },
  { id: "key-features", text: "Key Features" },
  { id: "quick-start", text: "Quick Start & Setup" },
  { id: "capabilities", text: "Capabilities & Flags (--caps)" },
  { id: "available-tools", text: "Available MCP Tools" },
  { id: "example-workflow", text: "AI Agent Workflow Example" },
];

const CLI_SECTIONS = [
  { id: "overview", text: "Playwright CLI Overview" },
  { id: "test-runner-cli", text: "Test Runner CLI Commands" },
  { id: "agent-cli", text: "Playwright Agent CLI" },
  { id: "codegen-cli", text: "Codegen & Recording" },
  { id: "diagnostics-cli", text: "Inspect, Trace & Reports" },
  { id: "browser-management", text: "Browser Binary Management" },
];

const API_SECTIONS = [
  { id: "core-classes", text: "Core Browser Classes" },
  { id: "class-playwright", text: "Playwright Library" },
  { id: "class-browser", text: "Browser" },
  { id: "class-browser-context", text: "BrowserContext" },
  { id: "class-page", text: "Page" },
  { id: "class-locator", text: "Locator" },
  { id: "class-assertions", text: "Web-First Assertions" },
  { id: "network-classes", text: "Network & API Testing" },
  { id: "class-request", text: "APIRequestContext" },
  { id: "class-route", text: "Route & Interception" },
];

export function DocsSidebar({
  activeView = "docs",
  activeDocId,
  onSelectDoc,
  onSelectView,
  className = "",
}: DocsSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    Guides: true,
    "Playwright Test": false,
    Migration: false,
    Integrations: false,
  });
  const [filter, setFilter] = useState("");

  // Automatically expand category if active doc belongs to it
  useEffect(() => {
    for (const cat of DOC_CATEGORIES) {
      if (!cat.isDirectLink && cat.items.some((item) => item.id === activeDocId)) {
        setOpenSections((prev) => ({
          ...prev,
          [cat.title]: true,
        }));
      }
    }
  }, [activeDocId]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleAnchorScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 128;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // 1. MCP SIDEBAR
  if (activeView === "mcp") {
    return (
      <aside className={`flex flex-col space-y-3 font-sans text-xs text-ink ${className}`} aria-label="MCP sidebar">
        <div className="rounded-lg border border-pass/30 bg-pass/10 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Bot className="h-4 w-4 text-pass" />
            <span className="font-semibold text-ink text-xs">Playwright MCP</span>
          </div>
          <p className="text-[11px] text-muted leading-tight">
            Official Model Context Protocol server for AI agents and test automation.
          </p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-2">
          <p className="text-[11px] font-mono uppercase text-muted tracking-wider px-2 py-1">Sections</p>
          {MCP_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleAnchorScroll(sec.id)}
              className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs text-ink hover:bg-card hover:text-pass transition cursor-pointer"
            >
              <span>{sec.text}</span>
            </button>
          ))}
        </nav>

        {onSelectView && (
          <div className="border-t border-line/60 pt-3">
            <button
              type="button"
              onClick={() => onSelectView("docs")}
              className="flex w-full items-center justify-between rounded-md border border-line bg-card/60 px-2.5 py-1.5 text-xs text-muted hover:text-pass hover:border-pass/40 transition cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Browse All Docs</span>
              </span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </aside>
    );
  }

  // 2. CLI SIDEBAR
  if (activeView === "cli") {
    return (
      <aside className={`flex flex-col space-y-3 font-sans text-xs text-ink ${className}`} aria-label="CLI sidebar">
        <div className="rounded-lg border border-line bg-card/80 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Terminal className="h-4 w-4 text-pass" />
            <span className="font-semibold text-ink text-xs">Playwright CLI</span>
          </div>
          <p className="text-[11px] text-muted leading-tight">
            Complete command line interface for test execution, codegen, and reports.
          </p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-2">
          <p className="text-[11px] font-mono uppercase text-muted tracking-wider px-2 py-1">Commands</p>
          {CLI_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleAnchorScroll(sec.id)}
              className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs text-ink hover:bg-card hover:text-pass transition cursor-pointer"
            >
              <span>{sec.text}</span>
            </button>
          ))}
        </nav>

        {onSelectView && (
          <div className="border-t border-line/60 pt-3">
            <button
              type="button"
              onClick={() => onSelectView("docs")}
              className="flex w-full items-center justify-between rounded-md border border-line bg-card/60 px-2.5 py-1.5 text-xs text-muted hover:text-pass hover:border-pass/40 transition cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Browse All Docs</span>
              </span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </aside>
    );
  }

  // 3. API SIDEBAR
  if (activeView === "api") {
    return (
      <aside className={`flex flex-col space-y-3 font-sans text-xs text-ink ${className}`} aria-label="API sidebar">
        <div className="rounded-lg border border-line bg-card/80 p-3">
          <div className="flex items-center gap-2 mb-1">
            <Layers className="h-4 w-4 text-pass" />
            <span className="font-semibold text-ink text-xs">Playwright API</span>
          </div>
          <p className="text-[11px] text-muted leading-tight">
            Object-oriented class reference for Browser, Context, Page, and Locators.
          </p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-2">
          <p className="text-[11px] font-mono uppercase text-muted tracking-wider px-2 py-1">Classes</p>
          {API_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => handleAnchorScroll(sec.id)}
              className="flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-left text-xs text-ink hover:bg-card hover:text-pass transition cursor-pointer"
            >
              <span>{sec.text}</span>
            </button>
          ))}
        </nav>

        {onSelectView && (
          <div className="border-t border-line/60 pt-3">
            <button
              type="button"
              onClick={() => onSelectView("docs")}
              className="flex w-full items-center justify-between rounded-md border border-line bg-card/60 px-2.5 py-1.5 text-xs text-muted hover:text-pass hover:border-pass/40 transition cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Browse All Docs</span>
              </span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </aside>
    );
  }

  // 4. DOCS SIDEBAR (All 8 Categories)
  const filteredCategories = DOC_CATEGORIES.map((cat) => {
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
  }).filter(Boolean) as DocCategory[];

  return (
    <aside
      className={`flex flex-col space-y-3 font-sans text-xs text-ink ${className}`}
      aria-label="Docs sidebar"
    >
      {/* Search / Filter input with subtle focus glow */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted/60 transition-colors group-focus-within:text-pass" />
        <input
          type="text"
          placeholder="Filter docs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-md border border-line bg-paper/60 pl-8 pr-3 py-1.5 text-xs text-ink placeholder:text-muted/60 transition-all duration-200 focus:border-pass focus:bg-card focus:outline-none focus:ring-1 focus:ring-pass/30"
        />
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto pr-2 scrollbar-thin">
        {filteredCategories.map((cat) => {
          // Direct Link (Release notes, Canary releases, Supported languages)
          if (cat.isDirectLink) {
            const targetId = cat.items[0]?.id || cat.id!;
            const isActive = targetId === activeDocId;

            return (
              <div key={cat.title} className="py-0.5">
                <button
                  type="button"
                  onClick={() => onSelectDoc(targetId)}
                  className={`flex w-full items-center justify-between px-2.5 py-1.5 font-medium transition-all duration-200 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-pass/15 font-semibold text-pass shadow-xs"
                      : "text-ink hover:bg-card hover:text-pass"
                  }`}
                >
                  <span>{cat.title}</span>
                </button>
              </div>
            );
          }

          // Expandable Category (Getting Started, Playwright Test, Guides, Migration, Integrations)
          const hasActiveChild = cat.items.some((item) => item.id === activeDocId);
          const isOpen = filter ? true : (openSections[cat.title] ?? cat.defaultOpen ?? false);

          return (
            <div key={cat.title} className="py-0.5">
              <button
                type="button"
                onClick={() => toggleSection(cat.title)}
                className={`group flex w-full items-center justify-between px-2.5 py-1.5 font-medium transition-all duration-200 rounded-md cursor-pointer ${
                  hasActiveChild
                    ? "text-pass font-semibold bg-pass/5"
                    : "text-ink hover:bg-card hover:text-pass"
                }`}
              >
                <span>{cat.title}</span>
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ease-out ${
                    isOpen ? "rotate-90 text-pass" : "text-muted/60 group-hover:text-ink"
                  }`}
                />
              </button>

              {/* Animated Accordion Height with Grid */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {cat.items && (
                    <div className="ml-2 border-l border-line/60 pl-2 space-y-0.5 pb-1">
                      {cat.items.map((item) => {
                        const isActive = item.id === activeDocId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectDoc(item.id)}
                            className={`group flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-[11.5px] transition-all duration-200 cursor-pointer ${
                              isActive
                                ? "bg-pass/15 font-semibold text-pass shadow-xs"
                                : "text-muted hover:bg-card hover:text-ink hover:translate-x-0.5"
                            }`}
                          >
                            <span className="truncate">{item.text}</span>
                            {item.badge && (
                              <span className="ml-1 rounded bg-pass/20 px-1 py-0.2 text-[9px] font-mono uppercase text-pass animate-pulse">
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

  let activeTitle = "Documentation Menu";
  if (activeView === "mcp") {
    activeTitle = "Playwright MCP";
  } else if (activeView === "cli") {
    activeTitle = "Playwright CLI";
  } else if (activeView === "api") {
    activeTitle = "API Reference";
  } else {
    for (const cat of DOC_CATEGORIES) {
      const item = cat.items.find((i) => i.id === activeDocId);
      if (item) {
        activeTitle = item.text;
        break;
      }
    }
  }

  const handleSelect = (id: string, anchorId?: string) => {
    onSelectDoc(id, anchorId);
    setOpen(false);
  };

  const handleSwitchView = (view: LearnViewType) => {
    onSelectView?.(view);
    setOpen(false);
  };

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
            <div className="mb-3 grid grid-cols-4 gap-1 rounded-lg border border-line bg-card/50 p-1">
              {(["docs", "mcp", "cli", "api"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => handleSwitchView(v)}
                  className={`rounded py-1 text-center font-mono text-[11px] font-medium transition cursor-pointer uppercase ${
                    activeView === v
                      ? "bg-pass text-paper font-semibold"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto">
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
