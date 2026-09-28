"use client";

import { FormEvent, useState } from "react";
import { Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name");
    if (!(nameInput instanceof HTMLInputElement)) return;

    const data = new FormData(form);
    const name = nameInput.value.trim();
    const email = String(data.get("email") ?? "").trim();
    const queryInput = form.elements.namedItem("query");
    const query = queryInput instanceof HTMLTextAreaElement ? queryInput.value.trim() : "";
    nameInput.setCustomValidity(name ? "" : "Enter your name.");
    if (queryInput instanceof HTMLTextAreaElement) {
      queryInput.setCustomValidity(query ? "" : "Enter your query.");
    }

    if (!name || !query || !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const subject = encodeURIComponent(`QA portfolio — note from ${name}`);
    const body = encodeURIComponent(`— ${name}\n${email}\n\n${query}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase">
          <span className="text-[#9ddec0]">05</span>
          <span className="text-white/55"> / Contact</span>
        </p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight text-paper sm:text-4xl">
          Tell me what you are about to ship.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
          A release, a flaky suite, or a role. I read the risk first.
        </p>

        <dl className="mt-6 border-t border-white/20">
          <div className="grid gap-1 border-b border-white/15 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-center">
            <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-[#9ddec0] uppercase">
              Phone
            </dt>
            <dd>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-2.5 text-paper hover:text-[#9ddec0]"
              >
                <Phone className="text-[#9ddec0]" size={16} strokeWidth={1.75} aria-hidden="true" />
                {profile.phone}
              </a>
            </dd>
          </div>
          <div className="grid gap-1 border-b border-white/15 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-center">
            <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-[#9ddec0] uppercase">
              Email
            </dt>
            <dd className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-paper hover:text-[#9ddec0]"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="link-line font-mono text-xs tracking-[0.14em] text-white/70 uppercase hover:text-paper"
              >
                {copied ? "Copied" : "Copy email"}
              </button>
            </dd>
          </div>
          <div className="grid gap-1 border-b border-white/15 py-3 sm:grid-cols-[7.5rem_1fr] sm:items-center">
            <dt className="font-mono text-[0.68rem] tracking-[0.16em] text-[#9ddec0] uppercase">
              LinkedIn
            </dt>
            <dd>
              <a
                href={profile.linkedin}
                className="inline-flex items-center gap-2.5 text-paper hover:text-[#9ddec0]"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  className="text-[#9ddec0]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.78-2.64 3.63V24h-4V8.5z" />
                </svg>
                LinkedIn
              </a>
            </dd>
          </div>
        </dl>
        <p className="sr-only" aria-live="polite">
          {copied ? "Email copied" : ""}
        </p>
      </div>

      <form
        noValidate
        onSubmit={onSubmit}
        className="flex flex-col gap-4 border border-white/20 bg-white/[0.04] p-5 lg:col-span-6 lg:col-start-7"
      >
        <h3 className="font-serif text-2xl tracking-tight text-paper">Connect me.</h3>
        <label className="block">
          <span className="font-mono text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full border-b border-white/25 bg-transparent py-2 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-[#9ddec0]"
            placeholder="Your name"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full border-b border-white/25 bg-transparent py-2 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-[#9ddec0]"
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
            Query
          </span>
          <textarea
            name="query"
            required
            rows={2}
            className="mt-1 w-full resize-y border-b border-white/25 bg-transparent py-2 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-[#9ddec0]"
            placeholder="Your query"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="press bg-paper px-4 py-2 text-sm text-ink hover:bg-white">
            Send
          </button>
          {sent ? (
            <p className="text-sm text-white/70" role="status">
              Your mail app should open with this note.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
