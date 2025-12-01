"use client";
import { useState } from "react";

export default function InterestsPage() {
  const [selected, setSelected] = useState([]);
  const interests = ["Eğitici", "Eğlendirici"];

  const toggleSelect = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

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
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "700",
            marginBottom: "40px",
            lineHeight: "34px",
          }}
        >
          Çocuğunuza ne tarz<br /> içerikler izletmek<br /> istiyorsunuz?
        </h1>

        {/* İlgi alanı butonları */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => toggleSelect(item)}
              style={{
                padding: "16px",
                borderRadius: "14px",
                border: "2px solid #E5E5E5",
                backgroundColor: selected.includes(item) ? "#F6E7DA" : "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Devam butonu */}
        <button
          disabled={selected.length === 0}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            border: "2px solid #E5E5E5",
            backgroundColor: selected.length > 0 ? "#F6E7DA" : "white",
            fontSize: "18px",
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
