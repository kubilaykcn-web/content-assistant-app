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
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img
            src="/kids-illustration.png"
            alt="child"
            style={{ width: "120px", borderRadius: "100px" }}
          />
        </div>

        {/* Başlık */}
        <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
          Çocuğunuzun<br />ilgi alanları neler?
        </h1>

        {/* İlgi alanı butonları */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => toggleSelect(item)}
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: selected.includes(item) ? "2px solid #F6A800" : "1px solid #DDD",
                backgroundColor: selected.includes(item) ? "#F6E7DA" : "#F5F5F5",
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
          disabled={selected.length ===
