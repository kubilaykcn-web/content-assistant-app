"use client";

import { useState } from "react";

export default function InterestsPage() {
  const [selected, setSelected] = useState([]);
  const interests = ["Eğitici", "Eğlendirici", "Müzik", "Masal"];

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
        {/* Görsel */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
          <img
            src="/kids-illustration.png"
            alt="child"
            style={{ width: "130px", borderRadius: "100px" }}
          />
        </div>

        {/* Başlık */}
        <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "30px", lineHeight: "32px" }}>
          Çocuğunuza ne tarz<br />içerikler izletmek<br />istiyorsunuz?
        </h1>

        {/* İlgi Alanı Butonları */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => toggleSelect(item)}
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: selected.includes(item) ? "2px solid black" : "1px solid #DDD",
                backgroundColor: selected.includes(item) ? "#FFF8F0" : "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Devam Et */}
        <button
          disabled={selected.length === 0}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid black",
            backgroundColor: selected.length > 0 ? "white" : "#F0F0F0",
            fontSize: "18px",
            fontWeight: "600",
            cursor: selected.length > 0 ? "pointer" : "not-allowed",
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
