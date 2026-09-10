import { ImageResponse } from "next/og";

export const alt = "Ryan Le — Applied ML, Research, Data";
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
          padding: "80px",
          background: "#000000",
          backgroundImage:
            "radial-gradient(900px 600px at 12% 0%, rgba(150,210,255,0.16), transparent 60%), radial-gradient(700px 500px at 100% 100%, rgba(232,180,255,0.10), transparent 60%)",
          color: "#f5f6f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9db8cf",
          }}
        >
          ryanle.vercel.app
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 148,
              fontWeight: 700,
              letterSpacing: -6,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            Ryan Le
          </div>
          <div style={{ fontSize: 40, color: "#9aa1ab", letterSpacing: -0.5 }}>
            Applied machine learning, research, and data systems.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 18,
              border: "3px solid rgba(255,255,255,0.85)",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            RL
          </div>
          <div style={{ fontSize: 26, color: "#9aa1ab" }}>
            San Diego State University · Class of 2027
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
