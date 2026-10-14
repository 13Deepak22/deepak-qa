import Link from "next/link";
import { BookOpen } from "lucide-react";
import { ContactPanel } from "@/components/layout/contact-panel";
import { profile } from "@/data";

export function SiteFooter() {
  return (
    <footer id="contact" className="band scroll-mt-20 bg-band text-on-band">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-5 sm:px-6 sm:pt-10">
        <ContactPanel direct={Boolean(process.env.RESEND_API_KEY)} />

        <div className="mt-8 border-t border-on-band/15 pt-4 text-xs text-on-band/55 lg:pr-16 xl:pr-0">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>
                © {new Date().getFullYear()} {profile.name}
              </span>
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

            <div className="flex items-center gap-3">
              <Link
                href="/learn"
                className="group inline-flex items-center gap-2 rounded-md border border-on-band/15 bg-on-band/5 px-2.5 py-1 text-xs text-on-band/80 transition-all hover:border-pass/40 hover:bg-pass/10 hover:text-pass"
              >
                <BookOpen className="h-3.5 w-3.5 text-pass transition-transform group-hover:scale-110" />
                <span className="font-medium">Learn</span>
                <span className="rounded bg-pass/20 px-1 py-0.2 font-mono text-[10px] text-pass uppercase">
                  Playwright Docs
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
