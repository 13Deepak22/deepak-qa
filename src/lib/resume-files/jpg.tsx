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
        {doc.contacts.map((item) => (
          <div key={item} style={{ display: "flex", marginRight: 28 }}>
            {item}
          </div>
        ))}
      </div>

      <Section title="Summary">
        <div style={{ display: "flex" }}>{doc.summary}</div>
      </Section>

      <Section title="Skills">
        {doc.skills.map((group) => (
          <div key={group.label} style={{ display: "flex", marginBottom: 6 }}>
            <div style={{ display: "flex", width: 170, fontWeight: 600, color: c.ink }}>{group.label}</div>
            <div style={{ display: "flex", flex: 1 }}>{group.value}</div>
          </div>
        ))}
      </Section>

      <Section title="Experience">
        {doc.experience.map((role, index) => (
          <div key={role.org} style={{ display: "flex", flexDirection: "column", marginTop: index ? 22 : 0 }}>
            <TitleRow title={role.title} period={role.period} />
            <div style={{ display: "flex", fontWeight: 600, color: c.pass }}>{role.org}</div>
            {role.points.map((point) => (
              <Bullet key={point}>{point}</Bullet>
            ))}
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

      <Section title="Certifications and Courses">
        {doc.certifications.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
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
