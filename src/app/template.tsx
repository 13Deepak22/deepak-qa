"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // When navigating to a new route, smoothly reset viewport scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div key={pathname} className="page-transition min-h-full">
      {children}
    </div>
  );
}
