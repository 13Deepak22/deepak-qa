"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TocHeading } from "@/data/learn-docs-data";

const DEFAULT_TOC: TocHeading[] = [
  { id: "introduction", text: "Introduction", level: 2 },
  { id: "differences-when-using-library", text: "Differences when using library", level: 2 },
  { id: "library-example", text: "Library Example", level: 3 },
  { id: "test-example", text: "Test Example", level: 3 },
  { id: "key-differences", text: "Key Differences", level: 3 },
  { id: "usage", text: "Usage", level: 2 },
  { id: "first-script", text: "First script", level: 2 },
  { id: "record-scripts", text: "Record scripts", level: 2 },
  { id: "browser-downloads", text: "Browser downloads", level: 2 },
  { id: "typescript-support", text: "TypeScript support", level: 2 },
  { id: "in-javascript", text: "In JavaScript", level: 3 },
  { id: "in-typescript", text: "In TypeScript", level: 3 },
];

interface DocsTocProps {
  items?: TocHeading[];
  className?: string;
}

export function DocsToc({ items = DEFAULT_TOC, className = "" }: DocsTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <>
      {/* Mobile Accordion */}
      <div className="block lg:hidden mb-6 rounded-lg border border-line bg-card">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex w-full items-center justify-between px-4 py-2.5 text-xs font-semibold text-ink"
        >
          <span>On this page</span>
          <ChevronDown
            className={`h-4 w-4 text-muted transition-transform ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileOpen && (
          <div className="border-t border-line/60 px-4 py-3 space-y-1">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(item.id, e)}
                className={`block text-xs py-1 transition ${
                  item.level === 3 ? "pl-4" : "pl-1"
                } ${
                  activeId === item.id
                    ? "text-pass font-semibold"
                    : "text-muted hover:text-ink"
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <nav
        className={`hidden lg:block text-xs text-muted font-sans ${className}`}
        aria-label="Table of contents"
      >
        <p className="font-semibold text-ink uppercase tracking-wider text-[11px] mb-3">
          On this page
        </p>
        <ul className="space-y-1.5 border-l border-line/60">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className={`block transition-all ${
                    item.level === 3 ? "pl-5 text-[11.5px]" : "pl-3 text-xs"
                  } -ml-[1px] border-l-2 py-0.5 ${
                    isActive
                      ? "border-pass font-semibold text-pass"
                      : "border-transparent text-muted hover:border-line hover:text-ink"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
