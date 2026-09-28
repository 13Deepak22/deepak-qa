"use server";

import { headers } from "next/headers";
import { profile } from "@/data";

export type ContactResult =
  | { status: "sent"; message: string }
  | { status: "invalid"; message: string }
  | { status: "error"; message: string };

const MIN_FILL_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const recent = new Map<string, number[]>();

function limited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  return hits.length > MAX_PER_WINDOW;
}

function field(data: FormData, name: string, max: number) {
  return String(data.get(name) ?? "").trim().slice(0, max);
}

export async function sendContact(data: FormData): Promise<ContactResult> {
  const name = field(data, "name", 100).replace(/[\r\n]+/g, " ");
  const email = field(data, "email", 200);
  const query = field(data, "query", 4000);
  const trap = field(data, "contact_ref", 200);
  const startedAt = Number(data.get("started") ?? 0);

  if (trap || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "sent", message: "Thanks. Your note is on its way." };
  }
  if (!name || !query || !EMAIL.test(email)) {
    return { status: "invalid", message: "Add your name, a valid email, and your query." };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return { status: "error", message: `Too many notes in a short time. Email me at ${profile.email}.` };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return { status: "error", message: `The form is not connected yet. Email me at ${profile.email}.` };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "QA Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO || profile.email],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${query}\n\n— Sent from the contact form on the QA portfolio`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Resend responded ${response.status}`);
  } catch (error) {
    console.error("contact form:", error);
    return { status: "error", message: `It did not go through. Email me at ${profile.email}.` };
  }

  return { status: "sent", message: `Thanks, ${name}. Your note is in my inbox, and I will reply to ${email}.` };
}
