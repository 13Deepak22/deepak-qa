"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mark } from "@/components/mark";
import { nav, profile } from "@/data/portfolio";

export function SiteHeader() {
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
      className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
        scrolled ? "border-ink/15 shadow-[0_10px_30px_-24px_rgba(28,25,21,0.7)]" : "border-line"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-ink"
          onClick={closeMenu}
        >
          <Mark className="h-8 w-8 shrink-0" />
          <span className="truncate font-serif text-xl tracking-tight">{profile.name}</span>
          <span className="hidden shrink-0 font-mono text-[0.68rem] tracking-[0.18em] text-pass uppercase sm:inline">
            QA
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-7" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link text-sm text-ink-soft hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="press hidden shrink-0 border border-ink px-3 py-2 text-sm hover:bg-ink hover:text-paper xl:inline-flex"
          >
            {profile.availability}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center px-3 font-mono text-xs tracking-[0.14em] uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {panel ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          data-open={expanded ? "true" : "false"}
          className="mobile-nav border-t border-line lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-line flex min-h-11 items-center border-b border-line text-lg hover:text-pass"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
