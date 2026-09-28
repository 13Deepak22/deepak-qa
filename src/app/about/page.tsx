import type { Metadata } from "next";
import { AboutMarks } from "@/components/about-marks";
import { about, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "About Deepak Gupta, a QA engineer in India. How I started, my testing expertise, interests, and goals in manual and automation testing for fintech.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Me — Deepak Gupta",
    description:
      "About Deepak Gupta, a QA engineer in India. How I started, my testing expertise, interests, and goals in manual and automation testing for fintech.",
    url: "/about",
    type: "profile",
  },
};

const sections = [
  { id: "who-i-am", title: "Who I am", body: about.who },
  { id: "how-i-started", title: "How I started", body: about.started },
  { id: "expertise", title: "Expertise", body: about.expertise },
  { id: "interests", title: "Interests", body: about.interests },
  { id: "goals", title: "Goals", body: about.goals },
] as const;

export default function AboutPage() {
  const [intro, ...rest] = sections;

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-x-10 lg:gap-x-16 lg:py-20">
        <figure className="enter enter-1 w-full max-w-sm md:sticky md:top-24 md:max-w-none">
          <img
            src="/portrait.png?v=8"
            alt="Portrait of Deepak Gupta"
            width={1254}
            height={1254}
            className="block h-auto w-full"
          />
        </figure>
        <div className="min-w-0 md:pt-2 lg:pt-4">
          <p className="enter enter-2 font-mono text-[0.72rem] tracking-[0.18em] text-pass uppercase">
            About Me
          </p>
          <h1 className="enter enter-3 mt-4 font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.035em]">
            {profile.name}
          </h1>
          <p className="enter enter-4 mt-4 font-mono text-xs tracking-[0.14em] uppercase">
            <span className="text-pass">{profile.role}</span>
            <span className="text-muted"> · {profile.location}</span>
          </p>
          <p className="enter enter-4 mt-2 max-w-xl text-sm text-ink-soft">{profile.places}</p>
          <h2 id={intro.id} className="enter enter-5 mt-10 font-serif text-3xl tracking-tight">
            {intro.title}
          </h2>
          <p className="enter enter-5 mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">{intro.body}</p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {rest.map((section) => (
            <article key={section.id} className="about-block">
              <h2 id={section.id} className="about-block-title font-serif text-3xl tracking-tight sm:text-4xl">
                {section.title}
              </h2>
              <AboutMarks id={section.id} />
              <div className="about-block-copy min-w-0">
                <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">{section.body}</p>
                {section.id === "expertise" ? (
                  <ul className="mt-6 flex max-w-xl flex-wrap gap-x-3 gap-y-2">
                    {about.expertiseTerms.map((term) => (
                      <li key={term} className="font-mono text-xs tracking-[0.08em] text-pass uppercase">
                        {term}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
