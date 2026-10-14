"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Mark } from "@/components/ui/mark";
import { nav, profile } from "@/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const menuToken = useRef(0);

  function clearCloseTimer() {
    if (closeTimer.current === null) return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function openMenu() {
    clearCloseTimer();
    const token = (menuToken.current += 1);
    setPanel(true);
    setOpen(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (menuToken.current === token) setExpanded(true);
      });
    });
  }

  const closeMenu = useCallback(() => {
    menuToken.current += 1;
    setOpen(false);
    setExpanded(false);
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = window.setTimeout(() => setPanel(false), reduce ? 0 : 280);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeMenu]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (media.matches) closeMenu();
    };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, [closeMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "header-shadow" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 pt-2 pr-16 pl-4 sm:gap-4 sm:pl-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-ink"
          data-cursor="Return to homepage"
          onClick={closeMenu}
        >
          <Mark className="h-8 w-8 shrink-0" />
          <span className="truncate font-serif text-lg tracking-tight sm:text-xl">{profile.name}</span>
          <span className="hidden shrink-0 font-mono text-[0.68rem] tracking-[0.18em] text-pass uppercase sm:inline">
            QA
          </span>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-6" aria-label="Primary">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-sm transition-colors ${
                  isActive ? "text-pass font-semibold" : "text-ink-soft hover:text-pass"
                }`}
                data-cursor={item.hint}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#contact"
            className="press hidden shrink-0 border border-pass px-3 py-2 text-sm text-ink hover:bg-pass-fill hover:text-on-band xl:inline-flex"
            data-cursor="Got a release? Let's talk"
          >
            {profile.availability}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center px-3 font-mono text-xs tracking-[0.14em] uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            data-cursor={open ? "Fold the menu away" : "Every section, one list"}
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <ThemeToggle />

      {panel ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          data-open={expanded ? "true" : "false"}
          className="mobile-nav border-t border-line lg:hidden"
        >
          <div className="min-h-0 overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-4 pt-1 pb-4 sm:px-6">
              <ul className="flex flex-col">
                {nav.map((item, index) => {
                  const current = item.href === pathname;
                  return (
                    <li key={item.href} className="mobile-nav-item" style={{ "--i": index } as CSSProperties}>
                      <Link
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className={`link-line group flex min-h-11 items-center gap-3 border-b border-line py-1.5 hover:border-pass hover:text-pass ${
                          current ? "text-pass" : "text-ink"
                        }`}
                        data-cursor={item.hint}
                        onClick={closeMenu}
                      >
                        <span
                          aria-hidden="true"
                          className="w-6 shrink-0 font-mono text-[0.68rem] tracking-[0.18em] text-muted group-hover:text-pass"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg tracking-tight">{item.label}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-pass"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mobile-nav-item mt-4" style={{ "--i": nav.length } as CSSProperties}>
                <Link
                  href="/#contact"
                  className="press flex min-h-11 items-center justify-between border border-pass px-4 text-ink hover:bg-pass-fill hover:text-on-band"
                  data-cursor="Got a release? Let's talk"
                  onClick={closeMenu}
                >
                  <span className="font-mono text-xs tracking-[0.14em] uppercase">{profile.availability}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
