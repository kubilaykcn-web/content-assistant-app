"use client";

export default function AgePage() {
  const ageRanges = ["0–3", "3–5", "5–8", "8–10"];

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
            width: "140px",
            marginBottom: "25px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "25px",
            lineHeight: "1.3",
          }}
        >
          Çocuğunuz<br />kaç yaşında
        </h1>

        {/* Yaş seçenekleri */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginBottom: "40px",
          }}
        >
          {ageRanges.map((age) => (
            <button
              key={age}
              style={{
                padding: "18px",
                borderRadius: "16px",
                backgroundColor: "#F5F5F5",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {age}
            </button>
          ))}
        </div>

        {/* Devam Et */}

        <button
          style={{
            width: "100%",
            padding: "18px",
            backgroundColor: "#FCE9D9",
            borderRadius: "18px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
