"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

interface SidebarCategory {
  title: string;
  items?: { text: string; href: string; active?: boolean }[];
  href?: string;
  defaultOpen?: boolean;
}

const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    title: "Getting Started",
    defaultOpen: false,
    items: [
      { text: "Installation", href: "#" },
      { text: "Writing tests", href: "#" },
      { text: "Generating tests", href: "#" },
      { text: "Running and debugging tests", href: "#" },
      { text: "Trace viewer", href: "#" },
      { text: "Setting up CI", href: "#" },
      { text: "VS Code", href: "#" },
    ],
  },
  {
    title: "Release notes",
    href: "#",
  },
  {
    title: "Canary releases",
    href: "#",
  },
  {
    title: "Playwright Test",
    defaultOpen: false,
    items: [
      { text: "Agents", href: "#" },
      { text: "Annotations", href: "#" },
      { text: "Command line", href: "#" },
      { text: "Configuration", href: "#" },
      { text: "Configuration (use)", href: "#" },
      { text: "Emulation", href: "#" },
      { text: "Fixtures", href: "#" },
      { text: "Global setup and teardown", href: "#" },
      { text: "Parallelism", href: "#" },
      { text: "Parameterize tests", href: "#" },
      { text: "Projects", href: "#" },
      { text: "Reporters", href: "#" },
      { text: "Retries", href: "#" },
      { text: "Sharding", href: "#" },
      { text: "Timeouts", href: "#" },
      { text: "TypeScript", href: "#" },
      { text: "UI Mode", href: "#" },
      { text: "Web server", href: "#" },
    ],
  },
  {
    title: "Guides",
    defaultOpen: true,
    items: [
      { text: "Library", href: "#", active: true },
      { text: "Accessibility testing", href: "#" },
      { text: "Actions", href: "#" },
      { text: "Assertions", href: "#" },
      { text: "API testing", href: "#" },
      { text: "Authentication", href: "#" },
      { text: "Auto-waiting", href: "#" },
      { text: "Best Practices", href: "#" },
      { text: "Browsers", href: "#" },
      { text: "Chrome extensions", href: "#" },
      { text: "Clock", href: "#" },
      { text: "Component testing", href: "#" },
      { text: "Debugging Tests", href: "#" },
      { text: "Dialogs", href: "#" },
      { text: "Downloads", href: "#" },
      { text: "Evaluating JavaScript", href: "#" },
      { text: "Events", href: "#" },
      { text: "Extensibility", href: "#" },
      { text: "Frames", href: "#" },
      { text: "Handles", href: "#" },
      { text: "Isolation", href: "#" },
      { text: "Locators", href: "#" },
      { text: "Mock APIs", href: "#" },
      { text: "Mock browser APIs", href: "#" },
      { text: "Navigations", href: "#" },
      { text: "Network", href: "#" },
      { text: "Other locators", href: "#" },
      { text: "Pages", href: "#" },
      { text: "Page object models", href: "#" },
      { text: "Screenshots", href: "#" },
      { text: "Service Workers", href: "#" },
      { text: "Snapshot testing", href: "#" },
      { text: "Test generator", href: "#" },
      { text: "Touch events (legacy)", href: "#" },
      { text: "Trace viewer", href: "#" },
      { text: "Videos", href: "#" },
      { text: "Visual comparisons", href: "#" },
      { text: "WebView2", href: "#" },
    ],
  },
  {
    title: "Migration",
    href: "#",
  },
  {
    title: "Integrations",
    href: "#",
  },
  {
    title: "Supported languages",
    href: "#",
  },
];

export function DocsSidebar({ className = "" }: { className?: string }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Guides: true,
    "Getting Started": false,
    "Playwright Test": false,
  });
  const [filter, setFilter] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredCategories = SIDEBAR_CATEGORIES.map((cat) => {
    if (!filter) return cat;
    const matchCat = cat.title.toLowerCase().includes(filter.toLowerCase());
    const matchedItems = cat.items?.filter((item) =>
      item.text.toLowerCase().includes(filter.toLowerCase())
    );
    if (matchCat || (matchedItems && matchedItems.length > 0)) {
      return {
        ...cat,
        items: matchedItems || cat.items,
        defaultOpen: true,
      };
    }
    return null;
  }).filter(Boolean) as SidebarCategory[];

  return (
    <aside
      className={`flex flex-col space-y-4 font-sans text-xs text-ink ${className}`}
      aria-label="Docs sidebar"
    >
      {/* Search / Filter input */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted/60" />
        <input
          type="text"
          placeholder="Filter docs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-md border border-line bg-paper/60 pl-8 pr-3 py-1.5 text-xs text-ink placeholder:text-muted/60 focus:border-pass focus:bg-card focus:outline-none"
        />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto pr-2 scrollbar-thin">
        {filteredCategories.map((cat) => {
          const isOpen = filter ? true : (openSections[cat.title] ?? cat.defaultOpen ?? false);
          const hasChildren = cat.items && cat.items.length > 0;

          if (!hasChildren) {
            return (
              <div key={cat.title}>
                <a
                  href={cat.href || "#"}
                  className="flex items-center px-2 py-1.5 font-medium text-muted transition hover:bg-card hover:text-ink rounded-md"
                >
                  {cat.title}
                </a>
              </div>
            );
          }

          return (
            <div key={cat.title} className="space-y-0.5">
              <button
                type="button"
                onClick={() => toggleSection(cat.title)}
                className="flex w-full items-center justify-between px-2 py-1.5 font-medium text-ink transition hover:bg-card rounded-md"
              >
                <span>{cat.title}</span>
                {isOpen ? (
                  <ChevronDown className="h-3.5 w-3.5 text-muted/70" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-muted/70" />
                )}
              </button>

              {isOpen && cat.items && (
                <div className="ml-2 border-l border-line/60 pl-2 space-y-0.5">
                  {cat.items.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href === "#") e.preventDefault();
                      }}
                      className={`block rounded-sm px-2 py-1 text-[11.5px] transition ${
                        item.active
                          ? "bg-pass/15 font-semibold text-pass"
                          : "text-muted hover:bg-card hover:text-ink"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

export function MobileDocsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-lg border border-line bg-card px-3 py-2 text-xs font-semibold text-ink shadow-xs transition hover:border-pass/60 lg:hidden"
      >
        <span className="text-muted">☰</span>
        <span>Docs Topics</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />
          <div className="relative flex w-4/5 max-w-xs flex-col bg-paper p-4 shadow-xl border-r border-line z-10">
            <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
              <span className="font-semibold text-xs text-ink uppercase tracking-wider">
                Playwright Documentation
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded px-2 py-1 text-sm text-muted hover:text-ink font-mono"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-1">
              <DocsSidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

