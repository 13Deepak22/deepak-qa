import {
  ArrowRight,
  Building2,
  Calendar,
  FileText,
  LockKeyhole,
  Smartphone,
  User,
} from "lucide-react";
import Link from "next/link";
import { HeadlineCycle } from "@/components/home/headline-cycle";
import { ImpactMetrics } from "@/components/home/impact-metrics";
import { ServicesSection } from "@/components/home/services";
import { TestRun } from "@/components/home/test-run";
import { experience, profile, publicApps } from "@/data";
import { experienceLabel } from "@/lib/career";

export default function HomePage() {
  const years = experienceLabel();
  const featuredApps = publicApps.slice(0, 3); // PaulPay, Mayaa Money, PML Forex Live

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      {/* Hero & Live Release Gate */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-14 sm:px-6 sm:pt-14 sm:pb-16 md:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.9fr)] md:items-start md:gap-x-8 lg:gap-x-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0">
          <HeadlineCycle />
          <p className="enter enter-3 mt-6 max-w-lg text-xl leading-relaxed text-ink-soft">
            {profile.lede}
          </p>
          <p className="enter enter-4 mt-6 max-w-lg text-balance font-mono text-xs tracking-[0.1em] text-muted uppercase sm:tracking-[0.14em]">
            {profile.focus.join("  ·  ")}
          </p>
          <div className="enter enter-5 mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Link
              href="/work"
              className="press bg-ink px-5 py-3 text-center text-sm text-paper hover:bg-ink-soft min-[420px]:text-left"
              data-cursor="15+ apps & portals"
            >
              Selected work
            </Link>
            <Link
              href="/services"
              className="press border border-line bg-paper px-5 py-3 text-center text-sm text-ink hover:border-pass hover:text-pass min-[420px]:text-left"
              data-cursor="Services & methodology"
            >
              Testing services
            </Link>
            <Link
              href="/rca"
              className="press border border-line bg-paper px-5 py-3 text-center text-sm text-ink hover:border-pass hover:text-pass min-[420px]:text-left"
              data-cursor="Case study & RCA"
            >
              RCA case study
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

      {/* Metrics Bar: 15+ Products Tested, 100+ Automated Checks */}
      <ImpactMetrics />

      {/* 01 / Testing Services (Core services on homepage, full toolkit on /services) */}
      <ServicesSection />

      {/* 02 / Experience (Glimpse + Redirect Button to /experience) */}
      <section id="experience" className="scroll-mt-20 border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">02</span> / Professional Experience
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl text-ink">
                Where I have worked.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
              {years} years across two fintech teams. Guarding payment gateways, loan engines, and high-frequency release cycles.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {experience.map((role) => {
              const isCurrent = role.period.includes("Present");
              return (
                <div
                  key={role.org}
                  className="flex flex-col border border-line bg-paper p-6 sm:p-7 hover:border-pass transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-card text-pass">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight text-ink">{role.org}</h3>
                        <p className="font-mono text-xs text-pass tracking-wider uppercase mt-0.5">{role.title}</p>
                      </div>
                    </div>
                    {isCurrent && (
                      <span className="border border-pass/30 bg-pass-fill/10 text-pass px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-xs font-mono text-muted flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{role.period}</span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {role.points[0]}
                  </p>

                  <div className="mt-auto pt-6 border-t border-line/60 flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] text-muted">
                      {role.points.length} verified impact areas
                    </span>
                    <Link
                      href="/experience"
                      className="font-mono text-xs uppercase tracking-wider text-pass flex items-center gap-1 hover:underline"
                    >
                      <span>Role details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Experience Redirect Banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-line bg-paper p-5 sm:p-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Full Career Timeline &amp; History</p>
              <p className="mt-1 text-sm text-ink-soft">Inspect the interactive timeline rail, day-to-day release duties, and team accomplishments.</p>
            </div>
            <Link
              href="/experience"
              className="press inline-flex shrink-0 items-center gap-2 border border-pass bg-card px-4 py-2.5 font-mono text-xs tracking-wider uppercase text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="Career timeline"
            >
              <span>View complete experience →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 03 / Selected Work (Glimpse + Redirect Button to /work) */}
      <section id="work" className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">03</span> / Selected Work
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl text-ink">
                15+ Products &amp; systems tested.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
              7 consumer applications across UPI, prepaid cards, and lending + 8 confidential enterprise systems.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredApps.map((app) => (
              <div
                key={app.title}
                className="flex flex-col border border-line bg-paper p-5 sm:p-6 hover:border-pass transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                    <Smartphone className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-muted uppercase">
                    App {app.index}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl tracking-tight text-ink">{app.title}</h3>
                <p className="mt-1 font-mono text-[0.68rem] text-pass uppercase tracking-wider">{app.domain}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">{app.detail}</p>
                <div className="mt-auto pt-5 border-t border-line/60 flex items-center justify-between text-xs">
                  <span className="font-mono text-[0.7rem] text-muted">{app.platforms.join(", ")}</span>
                  <Link
                    href="/work"
                    className="font-mono text-xs uppercase tracking-wider text-pass flex items-center gap-1 hover:underline"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Confidential Portals Preview Card */}
            <div className="flex flex-col border border-line bg-card p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-paper text-pass">
                  <LockKeyhole className="h-5 w-5" />
                </span>
                <span className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                  Under NDA
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-ink">8+ Enterprise Portals</h3>
              <p className="mt-1 font-mono text-[0.68rem] text-muted uppercase tracking-wider">Internal Systems</p>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                Loan Origination (LOS), Loan Management (LMS), Merchant Settlement Portals, and Partner Banking APIs.
              </p>
              <div className="mt-auto pt-5 border-t border-line/60">
                <Link
                  href="/work"
                  className="font-mono text-xs uppercase tracking-wider text-pass flex items-center gap-1 hover:underline"
                >
                  <span>View portal scope</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Work Redirect Banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-line bg-paper p-5 sm:p-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Complete Applications Directory</p>
              <p className="mt-1 text-sm text-ink-soft">Inspect all 7 public consumer applications, test coverage journeys, and back-office banking portals.</p>
            </div>
            <Link
              href="/work"
              className="press inline-flex shrink-0 items-center gap-2 border border-pass bg-card px-4 py-2.5 font-mono text-xs tracking-wider uppercase text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="All 15+ apps"
            >
              <span>View all 15+ apps &amp; portals →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 / Defect Investigation & RCA (Glimpse + Redirect Button to /rca) */}
      <section className="scroll-mt-20 border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">04</span> / Defect Investigation &amp; RCA
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl text-ink">
                Defect RCA: Double-debit race condition.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-right">
              Live case study from CredMe LMS: Isolating intermittent double repayments triggered under 3G network latency jitter.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase">01 · Root Cause</span>
              <h3 className="mt-2 font-serif text-xl text-ink">Missing Idempotency Key</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                The mobile client generated a fresh transaction ID upon payment retry instead of persisting the idempotency token across network reconnects.
              </p>
            </div>
            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase">02 · Verification</span>
              <h3 className="mt-2 font-serif text-xl text-ink">Charles Proxy Throttling</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Injected 1,800ms latency jitter with a 15% packet drop profile. Successfully reproduced the duplicate debit on build v2.4.1.
              </p>
            </div>
            <div className="border border-line bg-paper p-6">
              <span className="font-mono text-[0.65rem] tracking-[0.16em] text-pass uppercase">03 · Solution &amp; Fix</span>
              <h3 className="mt-2 font-serif text-xl text-ink">Redis Lock &amp; Client Token</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                Engineered a client-side idempotency cache and a 120-second distributed Redis lock on the backend payment settlement route.
              </p>
            </div>
          </div>

          {/* RCA Redirect Banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-line bg-paper p-5 sm:p-6">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Interactive Defect Investigation</p>
              <p className="mt-1 text-sm text-ink-soft">Run the interactive test simulator across all 4 defect phases and view real-time log outputs.</p>
            </div>
            <Link
              href="/rca"
              className="press inline-flex shrink-0 items-center gap-2 border border-pass bg-card px-4 py-2.5 font-mono text-xs tracking-wider uppercase text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="Open RCA case study"
            >
              <span>Explore RCA case study →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 05 / Technical Skills Directory (Glimpse + Redirect Button to /skills) */}
      <section className="scroll-mt-20 border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-line bg-card p-6 sm:p-8">
            <div>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                Complete Technical Toolkit
              </p>
              <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
                97+ Verified testing skills &amp; ATS keywords.
              </h3>
              <p className="mt-1 text-sm text-ink-soft max-w-xl">
                Browse categorized testing competencies across Web Automation (Playwright, Selenium), Mobile (Appium), API (Postman), Performance (JMeter), and Fintech Gateways.
              </p>
            </div>
            <Link
              href="/skills"
              className="press inline-flex shrink-0 items-center gap-2 border border-pass bg-paper px-5 py-3 font-mono text-xs uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="97+ skills & ATS keywords"
            >
              <span>Explore full skills directory →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 06 / About Deepak & ATS Resume (Glimpse + Redirect Buttons) */}
      <section className="scroll-mt-20 border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {/* About Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <User className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">Personal Story</p>
                  <h3 className="font-serif text-2xl text-ink">Meet the Tester</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Learn about Deepak&apos;s testing philosophy, day-to-day release standards, and how he approaches manual exploration vs. automated regression.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/about"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Read Deepak's story"
                >
                  <span>Read full bio →</span>
                </Link>
              </div>
            </div>

            {/* Resume Card */}
            <div className="flex flex-col border border-line bg-paper p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center border border-line bg-card text-pass">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">ATS Formats</p>
                  <h3 className="font-serif text-2xl text-ink">Download Resume</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Access Deepak&apos;s plain ATS-optimized resume, available for instant viewing and one-click PDF, Word (DOCX), and JPG download formats.
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href="/resume"
                  className="press inline-flex items-center gap-2 border border-pass bg-card px-4 py-2 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
                  data-cursor="Download resume"
                >
                  <span>View &amp; download resume →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
