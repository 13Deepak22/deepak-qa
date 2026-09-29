"use client";

import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { sendContact } from "@/app/actions/contact";
import { profile } from "@/data";

type Result = { status: "sent" | "invalid" | "error" | "mailto"; message: string };

export function ContactPanel({ direct }: { direct: boolean }) {
  const [result, setResult] = useState<Result | null>(null);
  const [pending, startTransition] = useTransition();
  const startedAt = useRef(0);
  const home = usePathname() === "/";

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

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

    if (!direct) {
      const subject = encodeURIComponent(`QA portfolio — note from ${name}`);
      const body = encodeURIComponent(`— ${name}\n${email}\n\n${query}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setResult({ status: "mailto", message: "Your mail app should open with this note." });
      return;
    }

    data.set("started", String(startedAt.current));
    setResult(null);
    startTransition(async () => {
      const response = await sendContact(data);
      setResult(response);
      if (response.status === "sent") form.reset();
    });
  }

  const field =
    "mt-1.5 block w-full border-b border-on-band/25 bg-transparent text-base text-on-band outline-none transition-colors duration-200 placeholder:text-on-band/35 hover:border-on-band/45 focus:border-pass sm:text-sm";
  const caption = "font-mono text-[0.62rem] tracking-[0.14em] text-on-band/55 uppercase";
  const row = "grid grid-cols-[1.25rem_minmax(0,1fr)] items-center gap-3 py-2";
  const icon = "size-4 text-pass";

  return (
    <div className="grid gap-7 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:items-start md:gap-x-10 lg:gap-x-16">
      <div>
        <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase">
          {home ? (
            <>
              <span className="text-pass">06</span>
              <span className="text-on-band/60"> / Contact</span>
            </>
          ) : (
            <span className="text-pass">Contact</span>
          )}
        </p>
        <h2 className="mt-1.5 max-w-md font-serif text-2xl leading-tight tracking-tight text-balance text-on-band sm:text-[1.7rem]">
          Tell me what you are about to ship.
        </h2>
        <p className="mt-1.5 max-w-sm text-sm leading-snug text-on-band/70">
          A release, a flaky suite, or a role. I read the risk first.
        </p>

        <ul className="mt-4 divide-y divide-on-band/10 border-y border-on-band/10 text-sm">
          <li className={row}>
            <Phone className={icon} size={16} strokeWidth={1.75} aria-hidden="true" />
            <a href={profile.phoneHref} className="w-fit text-on-band hover:text-pass" data-cursor="Ring me directly">
              {profile.phone}
            </a>
          </li>
          <li className={row}>
            <Mail className={icon} size={16} strokeWidth={1.75} aria-hidden="true" />
            <a
              href={`mailto:${profile.email}`}
              className="w-fit break-all text-on-band hover:text-pass"
              data-cursor="Straight to my inbox"
            >
              {profile.email}
            </a>
          </li>
          <li className={`${row} items-start`}>
            <MapPin className={`${icon} mt-0.5`} size={16} strokeWidth={1.75} aria-hidden="true" />
            <span className="leading-snug text-on-band/70">{profile.places}</span>
          </li>
        </ul>

        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={profile.linkedin}
            className="press inline-flex h-9 items-center gap-2 border border-on-band/20 px-3 text-xs text-on-band hover:border-pass hover:text-pass"
            data-cursor="Career log on LinkedIn ↗"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.64-.03-3.75-2.28-3.75-2.29 0-2.64 1.78-2.64 3.63V24h-4V8.5z" />
            </svg>
            LinkedIn
            <ArrowUpRight className="size-3.5 opacity-60" size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            className="press inline-flex h-9 items-center gap-2 border border-on-band/20 px-3 text-xs text-on-band hover:border-pass hover:text-pass"
            data-cursor="Code on GitHub ↗"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
            <ArrowUpRight className="size-3.5 opacity-60" size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>

      <form noValidate onSubmit={onSubmit} className="border border-on-band/15 bg-on-band/[0.03] p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl tracking-tight text-on-band">Connect me.</h3>
          <span className="hidden font-mono text-[0.62rem] tracking-[0.14em] text-pass uppercase sm:inline">
            {direct ? "Lands in my inbox" : "Opens your mail app"}
          </span>
        </div>
        <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          Leave this empty
          <input name="contact_ref" tabIndex={-1} autoComplete="off" />
        </label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-x-5">
          <label className="block">
            <span className={caption}>Name</span>
            <input
              name="name"
              required
              autoComplete="name"
              className={`${field} h-11 py-0 leading-[2.75rem] sm:h-9 sm:leading-9`}
              placeholder="Your name"
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </label>
          <label className="block">
            <span className={caption}>Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={`${field} h-11 py-0 leading-[2.75rem] sm:h-9 sm:leading-9`}
              placeholder="you@company.com"
            />
          </label>
          <label className="block sm:col-span-2">
            <span className={caption}>Query</span>
            <textarea
              name="query"
              required
              rows={2}
              className={`${field} h-auto resize-none py-1.5 leading-6 sm:leading-5`}
              placeholder="Your query"
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          <button
            type="submit"
            disabled={pending}
            className="press inline-flex h-11 items-center gap-2 bg-pass-fill px-5 text-sm text-on-band hover:brightness-110 disabled:cursor-wait disabled:opacity-70 sm:h-9"
            data-cursor="Ship it"
          >
            {pending ? "Sending…" : "Send"}
            <Send className="size-3.5" size={14} strokeWidth={1.75} aria-hidden="true" />
          </button>
          <p
            className={`text-sm ${result?.status === "sent" || result?.status === "mailto" ? "text-on-band/80" : "text-[#f2a38f]"}`}
            role="status"
            hidden={!result}
          >
            {result?.message}
          </p>
        </div>
      </form>
    </div>
  );
}
