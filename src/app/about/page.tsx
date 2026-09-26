import type { Metadata } from "next";
import Link from "next/link";
import { education, experience, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: profile.lede,
};

export default function AboutPage() {
  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <figure className="enter enter-1 max-w-sm lg:col-span-5">
          <img
            src="/portrait.png?v=5"
            alt="Portrait of Deepak Gupta"
            width={1254}
            height={1254}
            className="block h-auto w-full"
          />
        </figure>
        <div className="min-w-0 lg:col-span-7 lg:pt-6">
          <p className="enter enter-2 font-mono text-[0.72rem] tracking-[0.18em] text-pass uppercase">
            About
          </p>
          <h1 className="enter enter-3 mt-4 font-serif text-[clamp(3rem,6vw,5rem)] leading-[0.92] tracking-[-0.035em]">
            {profile.name}
          </h1>
          <p className="enter enter-4 mt-4 font-mono text-xs tracking-[0.14em] uppercase">
            <span className="text-pass">{profile.role}</span>
            <span className="text-muted"> · {profile.location}</span>
          </p>
          <p className="enter enter-4 mt-2 max-w-xl text-sm text-ink-soft">{profile.places}</p>
          <p className="enter enter-5 mt-6 max-w-xl text-xl leading-relaxed text-ink-soft">
            {profile.lede}
          </p>
          <dl className="mt-10 border-y border-ink">
            {experience.map((role) => (
              <div
                key={`${role.org}-${role.period}`}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-pass uppercase">
                  {role.period}
                </dt>
                <dd>
                  <p className="font-serif text-2xl tracking-tight">{role.org}</p>
                  <p className="mt-1 text-sm text-ink-soft">{role.title}</p>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="press bg-ink px-5 py-3 text-sm text-paper hover:bg-ink-soft"
            >
              Selected work
            </Link>
            <Link
              href="/#contact"
              className="press border border-ink px-5 py-3 text-sm hover:bg-ink hover:text-paper"
            >
              Start a conversation
            </Link>
            <a
              href={profile.linkedin}
              className="press border border-ink px-5 py-3 text-sm hover:bg-ink hover:text-paper"
              target="_blank"
              rel="noreferrer noopener"
            >
              Full profile on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
              <span className="text-pass">Education</span>
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">{education.degree}</h2>
            <p className="mt-4 text-lg text-ink-soft">{education.school}</p>
            <p className="mt-2 font-mono text-xs tracking-[0.14em] text-pass uppercase">
              {education.period}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              Course work
            </h3>
            <ul className="mt-4 border-t border-ink">
              {education.courses.map((course) => (
                <li key={course} className="border-b border-ink py-3 text-lg">
                  {course}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
              Certificate
            </h3>
            <ul className="mt-4 border-t border-ink">
              {education.credentials.map((item) => (
                <li key={item.name} className="border-b border-ink py-3">
                  <p className="text-lg">{item.name}</p>
                  <p className="mt-1 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                    {item.by} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
