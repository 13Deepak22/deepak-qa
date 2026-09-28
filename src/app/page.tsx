import Link from "next/link";
import { ExperienceLog } from "@/components/experience-log";
import { HeadlineCycle } from "@/components/headline-cycle";
import { PracticeIcon } from "@/components/practice-icon";
import { PublicApps } from "@/components/public-apps";
import { TestRun } from "@/components/test-run";
import {
  unpublishedWork,
  practices,
  profile,
  toolkit,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 md:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.9fr)] md:items-start md:gap-x-8 lg:gap-x-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0">
          <p className="enter enter-1 font-mono text-[0.72rem] tracking-[0.18em] text-pass uppercase">
            {profile.role}
          </p>
          <HeadlineCycle />
          <p className="enter enter-3 mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
            {profile.lede}
          </p>
          <p className="enter enter-4 mt-6 max-w-lg text-balance font-mono text-xs tracking-[0.1em] text-muted uppercase sm:tracking-[0.14em]">
            {profile.focus.join("  ·  ")}
          </p>
          <div className="enter enter-5 mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Link
              href="/#work"
              className="press bg-ink px-5 py-3 text-center text-sm text-paper hover:bg-ink-soft min-[420px]:text-left"
              data-cursor="Proof, app by app"
            >
              Selected work
            </Link>
            <Link
              href="/#contact"
              className="press border border-pass px-5 py-3 text-center text-sm hover:bg-pass-fill hover:text-on-band min-[420px]:text-left"
              data-cursor="Tell me what's shipping"
            >
              Start a conversation
            </Link>
          </div>
        </div>
        <div className="enter enter-5 min-w-0 md:pt-2 lg:pt-6">
          <TestRun />
        </div>
      </section>

      <section id="practice" className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">01</span> / What I do
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            How a release earns the right to ship.
          </h2>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((item, index) => (
              <li key={item.title} className="bg-paper px-5 py-7 sm:px-6 sm:py-8">
                <div className="flex items-center gap-3">
                  <PracticeIcon name={item.title} />
                  <p className="font-mono text-[0.72rem] tracking-[0.16em] text-pass">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="practice-title mt-5 font-serif text-3xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">02</span> / What I know
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Tools I reach for.
          </h2>
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((group) => (
              <li key={group.label} className="flex flex-col bg-paper px-5 py-6 sm:px-6 sm:py-7">
                <h3 className="practice-title font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="skill-chip border border-line px-2.5 py-1.5 font-mono text-[0.8125rem] leading-none"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
            <span className="text-pass">03</span> / Experience
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            Where I have worked.
          </h2>
          <ExperienceLog />
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">04</span> / Selected work
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Public apps.
              </h2>
            </div>
          </div>
          <div className="mt-10 border-t border-line">
            <PublicApps />
            <div className="grid gap-3 border-b border-line py-6 sm:py-7 lg:grid-cols-[3.25rem_minmax(0,1fr)] lg:items-baseline lg:gap-8 lg:px-1">
              <span className="font-mono text-sm text-pass">07</span>
              <p className="font-serif text-xl tracking-tight text-ink-soft sm:text-2xl">
                {unpublishedWork}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
