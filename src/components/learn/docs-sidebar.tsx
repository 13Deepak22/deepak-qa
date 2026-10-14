"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Search, Sparkles } from "lucide-react";
import { DOC_CATEGORIES, type DocCategory } from "@/data/learn-docs-data";

interface DocsSidebarProps {
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
  className?: string;
}

export function DocsSidebar({ activeDocId, onSelectDoc, className = "" }: DocsSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    Guides: true,
    "Release notes": false,
  });
  const [filter, setFilter] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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
                  {cat.items.map((item) => {
                    const isActive = item.id === activeDocId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectDoc(item.id)}
                        className={`group flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-[11.5px] transition ${
                          isActive
                            ? "bg-pass/15 font-semibold text-pass"
                            : "text-muted hover:bg-card hover:text-ink"
                        }`}
                      >
                        <span className="truncate">{item.text}</span>
                        {item.badge && (
                          <span className="ml-1 rounded bg-pass/20 px-1 py-0.2 text-[9px] font-mono uppercase text-pass">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

interface MobileDocsDrawerProps {
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
}

export function MobileDocsDrawer({ activeDocId, onSelectDoc }: MobileDocsDrawerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (id: string, anchorId?: string) => {
    onSelectDoc(id, anchorId);
    setOpen(false);
  };

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
              <DocsSidebar activeDocId={activeDocId} onSelectDoc={handleSelect} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
