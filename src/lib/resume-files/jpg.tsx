import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { ReactNode } from "react";
import sharp from "sharp";
import { ogColors as c } from "@/lib/og";
import type { ResumeDocument } from "@/lib/resume-document";

const WIDTH = 1240;
const CANVAS_HEIGHT = 4200;
const PAD = 80;

const fontFile = (family: string, weight: number) =>
  readFile(join(process.cwd(), "node_modules", "@fontsource", family, "files", `${family}-latin-${weight}-normal.woff`));

async function fonts() {
  const [sans, sansBold, serif] = await Promise.all([
    fontFile("source-sans-3", 400),
    fontFile("source-sans-3", 600),
    fontFile("fraunces", 400),
  ]);
  return [
    { name: "Source Sans", data: sans, weight: 400 as const, style: "normal" as const },
    { name: "Source Sans", data: sansBold, weight: 600 as const, style: "normal" as const },
    { name: "Fraunces", data: serif, weight: 400 as const, style: "normal" as const },
  ];
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 30, paddingTop: 22, borderTop: `1.5px solid ${c.line}` }}>
      <div style={{ display: "flex", marginBottom: 14, fontSize: 16, fontWeight: 600, letterSpacing: 3, color: c.pass }}>
        {title.toUpperCase()}
      </div>
      {children}
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", marginTop: 6 }}>
      <div style={{ display: "flex", width: 22, color: c.muted }}>•</div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>{children}</div>
    </div>
  );
}

function TitleRow({ title, period }: { title: string; period: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <div style={{ display: "flex", fontSize: 23, fontWeight: 600, color: c.ink }}>{title}</div>
      <div style={{ display: "flex", color: c.muted }}>{period}</div>
    </div>
  );
}

function ResumeImage({ doc }: { doc: ResumeDocument }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: PAD,
        background: c.card,
        color: c.inkSoft,
        fontFamily: "Source Sans",
        fontSize: 19,
        lineHeight: 1.5,
      }}
    >
      <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 60, lineHeight: 1.1, letterSpacing: -1, color: c.ink }}>
        {doc.name}
      </div>
      <div style={{ display: "flex", marginTop: 8, fontSize: 22, fontWeight: 600, color: c.pass }}>{doc.headline}</div>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 12 }}>
        {doc.contacts.map((item) => {
          let icon = null;
          const p = { fill: "none", stroke: c.pass, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
          switch (item.type) {
            case "map-pin":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <path {...p} d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle {...p} cx="12" cy="10" r="3" />
                </svg>
              );
              break;
            case "phone":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <path {...p} d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              );
              break;
            case "mail":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <path {...p} d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect {...p} x="2" y="4" width="20" height="16" rx="2" ry="2" />
                </svg>
              );
              break;
            case "globe":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <circle {...p} cx="12" cy="12" r="10" />
                  <path {...p} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path {...p} d="M2 12h20" />
                </svg>
              );
              break;
            case "linkedin":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <path {...p} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect {...p} x="2" y="9" width="4" height="12" />
                  <circle {...p} cx="4" cy="4" r="2" />
                </svg>
              );
              break;
            case "github":
              icon = (
                <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: 8, marginTop: 4 }}>
                  <path {...p} d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path {...p} d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              );
              break;
          }

          return (
            <div key={item.value} style={{ display: "flex", alignItems: "center", marginRight: 28 }}>
              {icon}
              <div style={{ display: "flex" }}>{item.value}</div>
            </div>
          );
        })}
      </div>

      <Section title="Professional Summary">
        <div style={{ display: "flex" }}>{doc.summary}</div>
      </Section>

      <Section title="Professional Experience">
        {doc.experience.map((role, index) => (
          <div key={role.org} style={{ display: "flex", flexDirection: "column", marginTop: index ? 22 : 0 }}>
            <TitleRow title={role.title} period={role.period} />
            <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
              <div style={{ display: "flex", fontWeight: 600, color: c.pass }}>{role.org}</div>
              <div style={{ display: "flex", margin: "0 8px", color: c.muted }}>|</div>
              <div style={{ display: "flex", color: c.muted }}>{role.location}</div>
            </div>
            {role.points.map((point) => (
              <Bullet key={point}>{point}</Bullet>
            ))}
          </div>
        ))}
      </Section>

      <Section title="Skills">
        {doc.skills.map((group) => (
          <div key={group.label} style={{ display: "flex", marginBottom: 6 }}>
            <div style={{ display: "flex", width: 170, fontWeight: 600, color: c.ink }}>{group.label}</div>
            <div style={{ display: "flex", flex: 1 }}>{group.value}</div>
          </div>
        ))}
      </Section>

      <Section title="Public Projects">
        {doc.projects.map((app) => (
          <Bullet key={app.title}>
            <div style={{ display: "flex" }}>
              <span style={{ fontWeight: 600, color: c.ink }}>{app.title}</span>
              <span style={{ marginLeft: 8, color: c.muted }}>{`(${app.domain})`}</span>
            </div>
            <div style={{ display: "flex" }}>{app.detail}</div>
          </Bullet>
        ))}
      </Section>

      <Section title="Education">
        <TitleRow title={doc.education.degree} period={doc.education.period} />
        <div style={{ display: "flex", fontWeight: 600, color: c.pass }}>{doc.education.school}</div>
      </Section>
    </div>
  );
}

export async function renderResumeJpg(doc: ResumeDocument) {
  const png = Buffer.from(
    await new ImageResponse(<ResumeImage doc={doc} />, {
      width: WIDTH,
      height: CANVAS_HEIGHT,
      fonts: await fonts(),
    }).arrayBuffer(),
  );
  const { info } = await sharp(png).trim().toBuffer({ resolveWithObject: true });
  const contentBottom = -(info.trimOffsetTop ?? 0) + info.height;
  const height = Math.min(CANVAS_HEIGHT, contentBottom + PAD);
  return sharp(png).extract({ left: 0, top: 0, width: WIDTH, height }).flatten({ background: c.card }).jpeg({ quality: 90 }).toBuffer();
}
