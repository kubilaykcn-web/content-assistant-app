"use client";

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
        backgroundColor: "#FAF9F6",
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
        {/* Görsel */}
        <img
          src="/kids-illustration.png"
          alt="child"
          style={{
            width: "130px",
            marginBottom: "20px",
          }}
        />

        {/* Başlık */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "32px",
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
                borderRadius: "12px",
                fontSize: "18px",
                backgroundColor:
                  selected === opt ? "#F6E7DA" : "#F5F5F5",
                border:
                  selected === opt
                    ? "2px solid #E3B59A"
                    : "1px solid #DDD",
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
            marginTop: "26px",
            padding: "14px",
            backgroundColor: selected ? "#F6A88A" : "#E8E8E8",
            color: "white",
            borderRadius: "14px",
            border: "none",
            cursor: selected ? "pointer" : "not-allowed",
            fontSize: "18px",
            fontWeight: "600",
          }}
          onClick={() => console.log("Gender:", selected)}
        >
          Devam Et
        </button>
      </div>
    </div>
  );
}
