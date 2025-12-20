import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress, active, errors, item, loaded, total } = useProgress();

  return (
    <Html center>
      <div
        style={{
          width: "220px",
          textAlign: "center",
          color: "#ffffff",
          fontFamily: "monospace",
        }}
      >
        <p style={{ fontSize: "14px", marginBottom: "8px" }}>
          Loading something cool!
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "6px",
            background: "#333",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#00ffff",
              transition: "width 0.2s ease",
            }}
          />
        </div>

        {/* Percentage */}
        <p style={{ fontSize: "12px", marginTop: "6px", opacity: 0.8 }}>
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
}
