import { ImageResponse } from "next/og";

import { config } from "@/data/config";
import { home } from "@/data/content";

export const alt = `${config.name} · ${config.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fbfbfa",
          color: "#17171a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#6b6b73", letterSpacing: 4 }}>
          {config.name.toUpperCase()}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.15,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          {home.heading}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6b6b73" }}>
          {config.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
