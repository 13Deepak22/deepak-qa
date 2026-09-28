"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="press fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center border border-pass bg-paper text-pass shadow-[4px_4px_0_var(--ink)] hover:bg-pass-fill hover:text-on-band"
      aria-label="Back to top"
      data-cursor="Rewind to the top"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const root = (document.scrollingElement ?? document.documentElement) as HTMLElement;
        if (reduce) {
          const previous = root.style.scrollBehavior;
          root.style.scrollBehavior = "auto";
          root.scrollTop = 0;
          root.style.scrollBehavior = previous;
          return;
        }
        root.scrollTop = 0;
      }}
    >
      <ArrowUp size={20} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
