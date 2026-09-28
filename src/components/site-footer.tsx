import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p>
          {profile.name}
          <span aria-hidden="true"> · </span>
          {profile.role}
        </p>
        <p className="flex items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.08em] text-pass uppercase">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 shrink-0">
            <path d="M2.5 8.2 6.2 12 13.5 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Evidence before release
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-ink underline decoration-line underline-offset-2"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
