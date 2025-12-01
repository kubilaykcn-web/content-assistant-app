"use client";

import Image from "next/image";
import { useState } from "react";

export default function GenderPage() {
  const [selected, setSelected] = useState(null);

  const options = ["Kız", "Erkek", "Belirtmek istemiyorum"];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#FAF7F2",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          width: "100%",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "24px",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        {/* Illustration */}
        <Image
          src="/kids-illustration.png"
          width={130}
          height={130}
          alt="child"
          style={{ marginBottom: "20px" }}
        />

        <h1
          style={{
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "28px",
            lineHeight: "1.3",
          }}
        >
          Çocuğunuzun <br /> cinsiyeti ne?
        </h1>

        {/* Seçenekler */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              style={{
                padding: "14px",
                borderRadius: "14px",
                fontSize: "18px",
                backgroundColor: selected === opt ? "#FFE5DB" : "#F7F7F7",
                border: selected === opt ? "2px solid #F4A48D" : "1px solid #DDD",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Devam Et */}
        <button
          disabled={!selected}
          style={{
            width: "100%",
            padding: "16px",
            backgroundColor: selected ? "#F4A48D" : "#E0E0E0",
            color: selected ? "white" : "#999",
            borderRadius: "16px",
            border: "none",
            marginTop: "28px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: selected ? "pointer" : "not-allowed",
          }}
          onClick={() => {
            console.log("Selected gender:", selected);
          }}
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
