import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PublicApps } from "@/components/home/public-apps";
import { InteractiveEnterprisePortals } from "@/components/work/interactive-enterprise-portals";
import { publicApps } from "@/data";
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

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
        {/* Eyebrow & Header */}
        <div className="enter enter-1">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,22rem)] lg:items-end lg:gap-12">
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

      {/* Confidential & Enterprise Portals Section with Interactive Architecture & Simulator */}
      <InteractiveEnterprisePortals />

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
