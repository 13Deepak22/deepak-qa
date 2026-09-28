import Link from "next/link";
import { ContactPanel } from "@/components/layout/contact-panel";
import { Mark } from "@/components/ui/mark";
import { nav, profile } from "@/data";

export function SiteFooter() {
  return (
    <footer id="contact" className="band scroll-mt-20 bg-band text-on-band">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-5 sm:px-6 sm:pt-10">
        <ContactPanel direct={Boolean(process.env.RESEND_API_KEY)} />

        <div className="mt-8 grid gap-4 border-t border-on-band/15 pt-4 text-xs text-on-band/55 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:pr-16 xl:pr-0">
          <Link href="/" className="flex w-fit items-center gap-3 text-on-band" data-cursor="Reset to the start">
            <Mark className="h-6 w-6 shrink-0" />
            <span className="font-serif text-base tracking-tight">{profile.name}</span>
            <span className="font-mono text-[0.62rem] tracking-[0.16em] text-pass uppercase">{profile.role}</span>
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-center">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-on-band/70 hover:text-pass" data-cursor={item.hint}>
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()}</span>
            <span aria-hidden="true" className="text-on-band/25">
              |
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.1em] text-pass uppercase">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3 shrink-0">
                <path d="M2.5 8.2 6.2 12 13.5 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Evidence before release
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
