import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-4 px-6 py-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <p className="text-sm text-muted">
          {profile.name}
          <span aria-hidden="true"> · </span>
          {profile.role}
        </p>
        <p className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-pass uppercase lg:justify-self-center">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 shrink-0">
            <path d="M2.5 8.2 6.2 12 13.5 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Evidence before release
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-ink underline decoration-line underline-offset-4 lg:justify-self-end"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
