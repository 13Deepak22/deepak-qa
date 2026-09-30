import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import { PublicApps } from "@/components/home/public-apps";
import { publicApps, unpublishedWork } from "@/data";
import { siteTitleSuffix } from "@/lib/site";

export function generateMetadata(): Metadata {
  return {
    title: "Selected Work — 15+ Apps & Portals Tested",
    description:
      "Explore 15+ applications and systems tested by Deepak Gupta: 7 public consumer apps (UPI wallets, digital gold, forex, micro-lending) and 8+ enterprise lending and merchant portals.",
    alternates: { canonical: "/work" },
    openGraph: {
      title: `Selected Work & Projects — ${siteTitleSuffix}`,
      description:
        "15+ products tested across fintech, lending, and enterprise workflows. 7 public consumer apps and 8+ confidential banking & loan portals.",
      url: "/work",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteTitleSuffix} selected work` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Selected Work & Projects — ${siteTitleSuffix}`,
      description:
        "15+ products tested across fintech, lending, and enterprise workflows. 7 public consumer apps and 8+ confidential banking & loan portals.",
      images: ["/opengraph-image"],
    },
  };
}

export default function WorkPage() {
  const stats = [
    { label: "Total Products", value: "15+", hint: "Web, mobile & backend APIs" },
    { label: "Public Apps", value: `${publicApps.length}`, hint: "Consumer fintech & utility" },
    { label: "Enterprise Portals", value: "8+", hint: "Confidential under NDA" },
    { label: "Release Gate Sign-off", value: "100%", hint: "Zero critical escapes" },
  ];

  const confidentialPortals = [
    {
      title: "Loan Origination System (LOS)",
      category: "Fintech Lending",
      desc: "Multi-tiered applicant underwriting portal handling eKYC, credit bureau pulls, bank statement analysis, and automated risk scoring.",
      checks: ["eKYC verification", "Penny drop validation", "Credit score tiering"],
    },
    {
      title: "Loan Management System (LMS)",
      category: "Fintech Core",
      desc: "Disbursal engine, repayment scheduling, interest calculation matrices, overdue fee logic, and bank mandate management.",
      checks: ["Disbursal ledger", "Double-debit prevention", "Auto-debit NACH"],
    },
    {
      title: "Merchant Settlement Portal",
      category: "Payments & Accounting",
      desc: "High-volume transaction ledger reconciling gross settlements, MDR fee deductions, partner gateway split payments, and refunds.",
      checks: ["Reconciliation audits", "Webhook retries", "Batch settlement runs"],
    },
    {
      title: "Partner Banking APIs & Gateway",
      category: "Integration Middleware",
      desc: "Direct integration middleware connecting partner banks for IMPS, NEFT, and RTGS payment rails with strict idempotency guarantees.",
      checks: ["Idempotency keys", "Timeout recovery", "Signature validation"],
    },
  ];

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Back navigation & Eyebrow */}
        <div className="enter enter-1 flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted hover:text-pass uppercase transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to portfolio</span>
          </Link>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12 mt-2">
            <div>
              <p className="font-mono text-[0.72rem] tracking-[0.16em] text-muted uppercase">
                <span className="text-pass">03</span> / Selected Work &amp; Applications Tested
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl text-ink">
                Public apps &amp; enterprise portals.
              </h1>
            </div>
            <p className="leading-relaxed text-ink-soft text-base sm:text-lg">
              15+ products &amp; systems tested across fintech, lending, and enterprise workflows. 7 public consumer applications listed below; 8+ confidential portals protected under NDA.
            </p>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="enter enter-2 mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-b border-line py-6">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{item.label}</span>
              <span className="mt-1 font-serif text-3xl font-bold tracking-tight text-pass sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-ink-soft">{item.hint}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Public Apps Interactive Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end border-b border-line pb-6">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Consumer Applications</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">7 Public Consumer Products</h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-muted sm:text-right">
            Tap any app to inspect primary user journeys, test coverage areas, and store links.
          </p>
        </div>

        <div className="mt-6">
          <PublicApps />
        </div>
      </section>

      {/* Confidential & Enterprise Portals Section */}
      <section className="border-t border-line bg-paper-deep py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-start gap-4 border border-line bg-card p-6 sm:p-8">
            <span
              aria-hidden="true"
              className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center border border-dashed border-line text-pass"
            >
              <LockKeyhole className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">
                  Internal and Confidential
                </p>
                <span className="border border-line bg-paper px-2 py-0.5 font-mono text-[0.65rem] text-muted uppercase">
                  8+ Enterprise Portals
                </span>
              </div>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-ink">
                Enterprise &amp; Back-Office Systems
              </h2>
              <p className="mt-2 max-w-3xl font-serif text-lg leading-relaxed text-ink-soft">
                {unpublishedWork}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {confidentialPortals.map((portal) => (
              <div key={portal.title} className="flex flex-col border border-line bg-paper p-5 sm:p-6">
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-pass uppercase">
                  {portal.category}
                </span>
                <h3 className="mt-2 font-serif text-xl tracking-tight text-ink">{portal.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{portal.desc}</p>
                <div className="mt-auto pt-4 border-t border-line/60">
                  <p className="font-mono text-[0.65rem] text-muted uppercase tracking-wider mb-2">Verified Flows</p>
                  <ul className="space-y-1">
                    {portal.checks.map((chk) => (
                      <li key={chk} className="font-mono text-[0.7rem] text-ink-soft flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-pass shrink-0" />
                        <span>{chk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 border-t border-line">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-paper border border-line p-6 sm:p-8">
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-pass uppercase">Next Section</p>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-ink">
              Ready to see the RCA defect trace?
            </h3>
            <p className="mt-1 text-sm text-ink-soft">
              Walk through how a double-debit race condition under network jitter was isolated and eliminated.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/rca"
              className="press inline-flex items-center gap-2 border border-pass bg-paper px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-pass hover:bg-pass-fill hover:text-on-band transition-colors"
              data-cursor="Defect RCA Investigation"
            >
              <span>RCA Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/experience"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Career Experience"
            >
              <span>Experience</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#contact"
              className="press inline-flex items-center gap-2 border border-line bg-card px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:border-pass hover:text-pass transition-colors"
              data-cursor="Start a conversation"
            >
              <span>Contact Deepak</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
