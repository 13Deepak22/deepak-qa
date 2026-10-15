"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TocHeading } from "@/data/learn-docs-data";

interface DocsTocProps {
  items?: TocHeading[];
  variant?: "mobile" | "desktop" | "both";
  className?: string;
}

export function DocsToc({ items = [], variant = "both", className = "" }: DocsTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [items]);

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

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
      const offset = 128;
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

  const showMobile = variant === "mobile" || variant === "both";
  const showDesktop = variant === "desktop" || variant === "both";

  return (
    <>
      {/* Mobile Accordion */}
      {showMobile && (
        <div
          className={`${
            variant === "both" ? "block lg:hidden" : "block"
          } mb-6 rounded-lg border border-line bg-card shadow-xs transition-all duration-200`}
        >
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex w-full items-center justify-between px-4 py-2.5 text-xs font-semibold text-ink cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
              <span>On this page</span>
            </span>
            <ChevronDown
              className={`h-4 w-4 text-muted transition-transform duration-200 ${
                mobileOpen ? "rotate-180 text-pass" : ""
              }`}
            />
          </button>
          {mobileOpen && (
            <div className="border-t border-line/60 px-4 py-3 space-y-1 animate-in fade-in-50 duration-200">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className={`block text-xs py-1 transition-all duration-150 ${
                    item.level === 3 ? "pl-4 text-[11.5px]" : "pl-1 font-medium"
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
      )}

      {/* Desktop Sticky Sidebar */}
      {showDesktop && (
        <nav
          className={`${
            variant === "both" ? "hidden lg:block" : "block"
          } text-xs text-muted font-sans ${className}`}
          aria-label="Table of contents"
        >
          <p className="font-semibold text-ink uppercase tracking-wider text-[11px] mb-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-pass animate-pulse" />
            <span>On this page</span>
          </p>
          <ul className="space-y-1.5 border-l border-line/60">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollTo(item.id, e)}
                    title={item.text}
                    className={`block break-words leading-snug py-1 transition-all duration-200 ease-out ${
                      item.level === 3 ? "pl-5 text-[11.5px]" : "pl-3 text-xs"
                    } -ml-[1px] border-l-2 cursor-pointer ${
                      isActive
                        ? "border-pass font-semibold text-pass translate-x-0.5"
                        : "border-transparent text-muted hover:border-line hover:text-ink hover:translate-x-0.5"
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
