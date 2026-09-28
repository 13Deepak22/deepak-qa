import type { MetadataRoute } from "next";
import { profile } from "@/data";
import { siteDescription } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#efeae1",
    theme_color: "#efeae1",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
