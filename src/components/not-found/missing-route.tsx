"use client";

import { usePathname } from "next/navigation";

const known = ["/", "/about"];

export function MissingRoute() {
  const path = usePathname() ?? "/";

  return (
    <section className="report-card max-w-full" aria-label="Route check output">
      <div className="border-b border-line px-4 py-3 sm:px-5">
        <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">suite · routes</p>
        <p className="mt-1 font-mono text-sm">runner · sitemap</p>
      </div>
      <ol className="px-4 py-4 font-mono text-[0.82rem] sm:px-5 sm:text-sm">
        {known.map((route) => (
          <li key={route} className="flex items-baseline justify-between gap-4 py-1.5">
            <span>
              <span className="text-pass">pass</span>
              <span className="ml-3">GET {route}</span>
            </span>
            <span className="text-muted tabular-nums">200</span>
          </li>
        ))}
        <li className="flex items-baseline justify-between gap-4 py-1.5">
          <span className="min-w-0">
            <span className="font-semibold text-ink">fail</span>
            <span className="ml-3 break-all">GET {path}</span>
          </span>
          <span className="shrink-0 font-semibold tabular-nums">404</span>
        </li>
        <li className="mt-4 border-t border-line pt-4 tabular-nums">2 passed · 1 failed</li>
        <li className="pt-2 text-muted">expected · a page in the sitemap</li>
      </ol>
    </section>
  );
}
