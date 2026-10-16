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
    return { status: "sent", message: "Thanks. Your query has been recorded." };
  }
  if (!name || !query || !EMAIL.test(email)) {
    return { status: "invalid", message: "Add your name, a valid email, and your query." };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return { status: "error", message: `Too many notes in a short time. Please wait a moment.` };
  }

  const sheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;

  // 1. Direct save to private Google Sheets Webhook
  if (sheetWebhookUrl) {
    try {
      await fetch(sheetWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          query,
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          source: "deepak-qa.vercel.app",
          ip,
        }),
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
      });
    } catch (error) {
      console.error("Google Sheets webhook error:", error);
    }
  }

  // 2. Direct email forwarding if Resend key is provided
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "QA Portfolio <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO || profile.email],
          reply_to: email,
          subject: `Portfolio enquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${query}\n\n— Sent from the contact form on the QA portfolio`,
        }),
        signal: AbortSignal.timeout(10000),
      });
    } catch (error) {
      console.error("Resend error:", error);
    }
  }

  // Fallback log for development when webhook is not yet set
  if (!sheetWebhookUrl && !resendKey) {
    console.log("[Direct Query Received]:", {
      name,
      email,
      query,
      timestamp: new Date().toISOString(),
      ip,
    });
  }

  return {
    status: "sent",
    message: `Thanks, ${name}. Your query is saved and I will get back to you at ${email}.`,
  };
}
