import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { about, profile } from "@/data";
import { ogColors as c, ogSize } from "@/lib/og";

export const alt = `About ${profile.name}, ${profile.role} in ${profile.places}, ${profile.location}`;
export const size = ogSize;
export const contentType = "image/png";

const corner = { position: "absolute", width: 34, height: 34, borderColor: c.pass, borderStyle: "solid" } as const;

export default async function AboutOpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/portrait.png"));
  const src = `data:image/png;base64,${photo.toString("base64")}`;
  const chips = about.expertiseGroups.flatMap((group) => group.items).filter((item) =>
    ["Manual testing", "Test automation", "API testing", "Mobile testing", "Playwright", "FinTech"].includes(item),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          background: c.paper,
          color: c.ink,
          padding: "0 80px",
        }}
      >
        <div style={{ display: "flex", position: "relative", padding: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders plain img */}
          <img src={src} width={420} height={420} alt="" style={{ display: "flex", width: 420, height: 420 }} />
          <div style={{ ...corner, top: 0, left: 0, borderWidth: "4px 0 0 4px" }} />
          <div style={{ ...corner, top: 0, right: 0, borderWidth: "4px 4px 0 0" }} />
          <div style={{ ...corner, bottom: 0, left: 0, borderWidth: "0 0 4px 4px" }} />
          <div style={{ ...corner, bottom: 0, right: 0, borderWidth: "0 4px 4px 0" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: c.pass }}>ABOUT ME</div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 88, lineHeight: 1, letterSpacing: -3 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 26, letterSpacing: 2, color: c.muted }}>
            <span style={{ color: c.pass, marginRight: 12 }}>{profile.role.toUpperCase()}</span>
            <span>{`· ${profile.places}, ${profile.location}`.toUpperCase()}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 40 }}>
            {chips.map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  padding: "8px 14px",
                  border: `1.5px solid ${c.line}`,
                  background: c.card,
                  fontSize: 20,
                  color: c.inkSoft,
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
