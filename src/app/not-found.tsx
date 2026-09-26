import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="content"
      tabIndex={-1}
      className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24 outline-none"
    >
      <p className="enter enter-1 font-mono text-[0.72rem] tracking-[0.16em] text-pass uppercase">
        status · fail
      </p>
      <h1 className="enter enter-2 mt-4 max-w-3xl font-serif text-5xl tracking-tight sm:text-7xl">
        This case is not in the suite.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-ink-soft">
        The path you opened does not match a page on this site.
      </p>
      <Link
        href="/"
        className="press mt-10 inline-flex w-fit bg-ink px-5 py-3 text-sm text-paper hover:bg-ink-soft"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
