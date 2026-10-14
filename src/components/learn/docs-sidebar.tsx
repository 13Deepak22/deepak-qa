"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Menu, Search, X, Sparkles } from "lucide-react";
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

interface MobileDocsDrawerProps {
  activeDocId: string;
  onSelectDoc: (id: string, anchorId?: string) => void;
}

export function MobileDocsDrawer({ activeDocId, onSelectDoc }: MobileDocsDrawerProps) {
  const [open, setOpen] = useState(false);

  let activeTitle = "Documentation Menu";
  for (const cat of DOC_CATEGORIES) {
    const item = cat.items.find((i) => i.id === activeDocId);
    if (item) {
      activeTitle = item.text;
      break;
    }
  }

  const handleSelect = (id: string, anchorId?: string) => {
    onSelectDoc(id, anchorId);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between rounded-lg border border-line bg-card/80 px-3.5 py-2 text-xs font-medium text-ink shadow-xs backdrop-blur-xs hover:border-pass/60 transition-all duration-200 cursor-pointer active:scale-98"
      >
        <span className="flex items-center gap-2">
          <Menu className="h-4 w-4 text-pass" />
          <span className="text-muted">Topic:</span>
          <span className="font-semibold text-ink">{activeTitle}</span>
        </span>
        <span className="rounded bg-pass/10 px-2 py-0.5 font-mono text-[10px] text-pass">
          All Docs
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
            <div className="flex-1 overflow-y-auto">
              <DocsSidebar activeDocId={activeDocId} onSelectDoc={handleSelect} />
            </div>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
