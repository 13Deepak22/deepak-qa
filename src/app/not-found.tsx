import type { Metadata } from "next";
import Link from "next/link";
import { MissingRoute } from "@/components/not-found/missing-route";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="mx-auto grid min-h-[70vh] max-w-6xl content-center items-center gap-12 px-4 py-20 outline-none sm:px-6 sm:py-24 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] md:gap-x-10 lg:gap-x-14"
    >
      <div className="min-w-0">
        <p className="enter enter-1 font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
          status · fail
        </p>
        <h1 className="enter enter-2 mt-4 max-w-3xl font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
          This case is not in the suite.
        </h1>
        <p className="enter enter-3 mt-6 max-w-xl text-lg text-ink-soft">
          The path you opened does not match a page on this site.
        </p>
        <div className="enter enter-4 mt-10 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
          <Link
            href="/"
            className="press inline-flex justify-center bg-ink px-5 py-3 text-sm text-paper hover:bg-ink-soft"
            data-cursor="Back to known ground"
          >
            Back to the portfolio
          </Link>
          <Link
            href="/about"
            className="press inline-flex justify-center border border-pass px-5 py-3 text-sm hover:bg-pass-fill hover:text-on-band"
            data-cursor="Meet the tester"
          >
            Read About Me
          </Link>
        </div>
      </div>
      <div className="enter enter-5 min-w-0">
        <MissingRoute />
      </div>
    </main>
  );
}
