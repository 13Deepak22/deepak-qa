import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#efeae1",
          color: "#1c1915",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 3 }}>
          DEEPAK GUPTA · QA ENGINEER
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            lineHeight: 1,
            letterSpacing: -2,
            maxWidth: 920,
          }}
        >
          I test the money before it moves.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#146c43" }}>
          Noida · open to QA roles
        </div>
      </div>
    ),
    size,
  );
}
