import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const updated = new Date("2026-09-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return [
    { url: base, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/about`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${base}/portrait.png`],
    },
    {
      url: `${base}/services`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/experience`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${base}/resume`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/learn`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/learn/manual`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/automation`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/postman`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/jmeter`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/selenium`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/appium`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/playwright`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/java`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/javascript`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/learn/typescript`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
  ];
}
