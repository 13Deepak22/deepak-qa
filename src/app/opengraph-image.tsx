import { ImageResponse } from "next/og";
import { profile, releaseGate } from "@/data";
import { ogColors as c, ogSize } from "@/lib/og";

export const alt = `${profile.name}, ${profile.role}: ${profile.headline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          background: c.paper,
          color: c.ink,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, height: "100%" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: c.pass }}>
            {`${profile.name} · ${profile.role}`.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 74, lineHeight: 1.05, letterSpacing: -2 }}>
            <div style={{ display: "flex" }}>I test the</div>
            <div style={{ display: "flex" }}>
              <span style={{ color: c.pass, fontStyle: "italic", marginRight: 20 }}>money</span>
              <span>before</span>
            </div>
            <div style={{ display: "flex" }}>it moves.</div>
            <div style={{ display: "flex", width: 90, height: 4, marginTop: 28, background: c.pass }} />
          </div>
          <div style={{ display: "flex", fontSize: 24, color: c.muted }}>
            {`Manual + automation · Fintech · ${profile.places}, ${profile.location}`}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 440,
            border: `2px solid ${c.ink}`,
            background: c.card,
            boxShadow: `12px 12px 0 ${c.ink}`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", padding: "22px 26px", borderBottom: `1px solid ${c.line}` }}>
            <div style={{ display: "flex", fontSize: 17, letterSpacing: 2, color: c.pass }}>
              {`SUITE · ${releaseGate.suite.toUpperCase()}`}
            </div>
            <div style={{ display: "flex", marginTop: 8, fontSize: 19, color: c.inkSoft }}>
              {`runner · ${releaseGate.runner}`}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "10px 26px" }}>
            {releaseGate.checks.map((check) => (
              <div
                key={check.file}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "11px 0",
                  borderBottom: `3px solid ${c.pass}`,
                  fontSize: 19,
                }}
              >
                <div style={{ display: "flex" }}>
                  <span style={{ color: c.pass, marginRight: 14 }}>pass</span>
                  <span>{check.file}</span>
                </div>
                <span style={{ color: c.muted }}>{check.ms}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "14px 26px 22px", fontSize: 19 }}>
            <div style={{ display: "flex" }}>{releaseGate.summary}</div>
            <div style={{ display: "flex", marginTop: 6, color: c.pass }}>{`gate · ${releaseGate.gate}`}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
