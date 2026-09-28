import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const updated = new Date("2026-09-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    { url: base, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
  ];
}
