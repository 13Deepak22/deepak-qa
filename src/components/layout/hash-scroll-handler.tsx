"use client";

import { useEffect } from "react";

/**
 * Handles smooth scrolling for all anchor links pointing to on-page hash targets.
 * Fixes the Next.js / browser bug where clicking an anchor link whose hash already
 * matches window.location.hash (e.g. user scrolled down to #contact, then scrolled
 * back up and clicked it again) results in a no-op ("nothing works").
 */
export function HashScrollHandler() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as Element)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Check if href contains a hash
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex + 1);
      if (!hash) return;

      const pathname = href.slice(0, hashIndex);
      const currentPath = window.location.pathname;

      // Check if target is on the current page
      const isCurrentPage =
        !pathname ||
        pathname === currentPath ||
        (pathname === "/" && (currentPath === "" || currentPath === "/"));

      if (!isCurrentPage) return;

      const targetEl = document.getElementById(hash);
      if (!targetEl) return;

      // Intercept the click to guarantee scroll fires on every re-click
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      if (window.location.hash !== `#${hash}`) {
        window.history.pushState(null, "", `#${hash}`);
      }
    };

    const handleScroll = () => {
      // When user scrolls back near the top of the page, clear the hash from URL
      // so address bar matches the view and back/forward navigation is clean
      if (window.scrollY < 180 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    // Use capture phase so we intercept before router/browser ignores identical hash
    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
