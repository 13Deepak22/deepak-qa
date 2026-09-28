import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { AboutChapters } from "@/components/about/about-chapters";
import { AboutMarks } from "@/components/about/about-marks";
import { InView } from "@/components/ui/in-view";
import { about, aboutChapters, profile } from "@/data";
import { profilePageJsonLd, siteTitleSuffix } from "@/lib/site";
import portrait from "../../../public/portrait.png";

const description =
  "About Deepak Gupta, QA engineer in Noida, India: how I started, my manual and automation testing expertise, interests, and goals in fintech QA.";

export const metadata: Metadata = {
  title: "About Me",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Me — ${siteTitleSuffix}`,
    description,
    url: "/about",
    type: "profile",
    firstName: "Deepak",
    lastName: "Gupta",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Me — ${siteTitleSuffix}`,
    description,
  },
};

const jsonLd = profilePageJsonLd();

const [intro, started, expertise, interests, goals] = aboutChapters;

const copy = "max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg";

function Eyebrow({ index, hint }: { index: number; hint: string }) {
  return (
    <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase">
      <span className="text-pass">{String(index).padStart(2, "0")}</span>
      <span className="text-muted"> / {hint}</span>
    </p>
  );
}

function Chapter({
  index,
  chapter,
  body,
  children,
}: {
  index: number;
  chapter: (typeof aboutChapters)[number];
  body: string;
  children: ReactNode;
}) {
  return (
    <article className="about-block">
      <div className="about-block-title">
        <Eyebrow index={index} hint={chapter.hint} />
        <h2 id={chapter.id} className="mt-2 scroll-mt-28 font-serif text-3xl tracking-tight sm:text-4xl">
          {chapter.title}
        </h2>
      </div>
      <AboutMarks id={chapter.id as "how-i-started" | "expertise" | "interests" | "goals"} />
      <div className="about-block-copy min-w-0">
        <p className={copy}>{body}</p>
        {children}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-x-10 lg:gap-x-16 lg:py-20">
        <figure className="enter enter-1 w-full max-w-sm md:max-w-none">
          <div className="about-portrait">
            <Image
              src={portrait}
              alt="Portrait of Deepak Gupta"
              sizes="(min-width: 1152px) 420px, (min-width: 768px) 38vw, min(calc(100vw - 2rem), 24rem)"
              placeholder="blur"
              preload
              className="relative block h-auto w-full"
            />
            <span className="about-scan" aria-hidden="true" />
            {(["tl", "tr", "bl", "br"] as const).map((corner) => (
              <span key={corner} className="about-corner" data-corner={corner} aria-hidden="true" />
            ))}
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-2.5 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
            <span className="text-muted">about/deepak.spec.ts</span>
            <span className="inline-flex items-center gap-1.5 text-pass">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3">
                <path d="M2.5 8.2 6.2 12 13.5 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              pass
            </span>
          </figcaption>
        </figure>

        <div className="min-w-0">
          <Eyebrow index={1} hint="About Me" />
          <h1 className="enter enter-2 mt-4 font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.035em]">
            {profile.name}
          </h1>
          <p className="enter enter-3 mt-4 font-mono text-xs tracking-[0.14em] uppercase">
            <span className="text-pass">{profile.role}</span>
            <span className="text-muted"> · {profile.location}</span>
          </p>
          <p className="enter enter-3 mt-2 text-sm text-ink-soft">{profile.places}</p>
          <h2 id={intro.id} className="enter enter-4 mt-10 scroll-mt-28 font-serif text-3xl tracking-tight">
            {intro.title}
          </h2>
          <p className={`enter enter-4 mt-4 ${copy}`}>{about.who}</p>

          <nav aria-label="Jump to a chapter" className="enter enter-5 mt-8 lg:hidden">
            <ul className="flex flex-wrap gap-2">
              {aboutChapters.slice(1).map((chapter, index) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`} className="about-chip about-chip-link" data-cursor={chapter.hint}>
                    <span className="text-pass">{String(index + 2).padStart(2, "0")}</span>
                    {chapter.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl px-4 sm:px-6 lg:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14">
          <aside className="hidden lg:block">
            <div className="sticky top-28 py-20">
              <AboutChapters chapters={aboutChapters} />
            </div>
          </aside>

          <div className="min-w-0">
            <Chapter index={2} chapter={started} body={about.started}>
              <InView className="journey mt-10">
                <span className="journey-rail" aria-hidden="true" />
                <span className="journey-fill" aria-hidden="true" />
                <ol className="journey-steps">
                  {about.journey.map((step, index) => (
                    <li key={step.when} className="journey-step" style={{ "--i": index } as CSSProperties}>
                      <span className="journey-dot" aria-hidden="true" />
                      <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">{step.when}</p>
                      <p className="mt-1 font-serif text-lg leading-tight tracking-tight">{step.title}</p>
                      <p className="mt-1 text-sm leading-snug text-ink-soft">{step.note}</p>
                    </li>
                  ))}
                </ol>
              </InView>
            </Chapter>

            <Chapter index={3} chapter={expertise} body={about.expertise}>
              <dl className="mt-8 grid max-w-2xl gap-5 border-t border-line pt-6">
                {about.expertiseGroups.map((group) => (
                  <div key={group.label} className="grid gap-2 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-4">
                    <dt className="pt-1.5 font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      {group.label}
                    </dt>
                    <dd>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <li key={item} className="about-chip" data-tone={group.label === "Practice" ? undefined : "pass"}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </Chapter>

            <Chapter index={4} chapter={interests} body={about.interests}>
              <ul className="mt-8 flex max-w-2xl flex-wrap gap-2">
                {about.interestTags.map((tag) => (
                  <li key={tag} className="about-chip">
                    <span className="text-pass" aria-hidden="true">
                      #
                    </span>
                    {tag}
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter index={5} chapter={goals} body={about.goals}>
              <InView className="mt-8 max-w-2xl border-t border-line pt-6">
                <p className="font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">Release criteria</p>
                <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {about.goalChecks.map((goal, index) => (
                    <li
                      key={goal}
                      className="flex items-start gap-3 text-sm text-ink"
                      style={{ "--i": index } as CSSProperties}
                    >
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="goal-box mt-px size-5 shrink-0">
                        <rect x="1" y="1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path
                          className="goal-tick"
                          d="M5.5 10.5 8.6 13.5 14.5 6.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      {goal}
                    </li>
                  ))}
                </ul>
              </InView>
            </Chapter>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
