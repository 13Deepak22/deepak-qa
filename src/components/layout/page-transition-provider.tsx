"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [, startTransition] = useTransition();

  // Reset and complete navigation indicator on pathname/searchParams change
  useEffect(() => {
    if (showProgress) {
      setProgress(100);
      const doneTimer = setTimeout(() => {
        setShowProgress(false);
        setProgress(0);
        setIsNavigating(false);
      }, 220);
      return () => clearTimeout(doneTimer);
    } else {
      setIsNavigating(false);
    }
  }, [pathname, searchParams]);

  // Incremental realistic progress simulation while page is loading
  useEffect(() => {
    if (showProgress && progress < 88) {
      timerRef.current = setTimeout(() => {
        setProgress((prev) => {
          const inc = Math.max(1, Math.floor((88 - prev) * 0.18));
          return Math.min(88, prev + inc);
        });
      }, 140);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [showProgress, progress]);

  // Intercept all internal link clicks to give instant visual feedback
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, hash-only anchors, mailto, tel, target="_blank", or modifier keys
      if (
        href.startsWith("http") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        e.defaultPrevented
      ) {
        return;
      }

      // If navigating to a different page, trigger the transition state immediately
      const targetPath = href.split("?")[0].split("#")[0];
      const currentPath = window.location.pathname;

      if (targetPath !== currentPath) {
        setShowProgress(true);
        setProgress(28);
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
      {/* Top Global Navigation Progress Bar with glowing pass indicator */}
      <div
        className={`fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none transition-opacity duration-200 ${
          showProgress ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div
          className="h-full bg-pass shadow-[0_0_12px_var(--pass)] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Page Content with dynamic transition wrapper */}
      <div
        key={pathname}
        className={`page-transition ${
          isNavigating
            ? "opacity-65 scale-[0.998] transition-all duration-150"
            : "opacity-100 scale-100 transition-all duration-300"
        }`}
      >
        {children}
      </div>
    </>
  );
}
