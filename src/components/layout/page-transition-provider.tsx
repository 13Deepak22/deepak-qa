"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [, startTransition] = useTransition();

  // Reset navigation indicator on pathname/searchParams change
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // Intercept all internal link clicks to give instant visual feedback
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, hash-only anchors, mailto, tel, target="_blank"
      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // If navigating to a different page, trigger the transition state
      const targetPath = href.split("?")[0].split("#")[0];
      const currentPath = window.location.pathname;

      if (targetPath !== currentPath) {
        startTransition(() => {
          setIsNavigating(true);
        });
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, []);

  return (
    <>
      {/* Top Global Navigation Progress Shimmer Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none transition-opacity duration-200 ${
          isNavigating ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-pass skeleton-shimmer shadow-xs" />
      </div>

      {/* Page Content with dynamic transition wrapper */}
      <div
        key={pathname}
        className={`page-transition ${
          isNavigating ? "opacity-75 transition-opacity duration-150" : "opacity-100 transition-opacity duration-300"
        }`}
      >
        {children}
      </div>
    </>
  );
}

