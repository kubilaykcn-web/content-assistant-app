export default function AgePage() {
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
        <img
          src="/kids-illustration.png"
          alt="child"
          style={{ width: "120px", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
          Çocuğunuz kaç yaşında
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {["0–3", "3–5", "5–8", "8–10"].map((age) => (
            <button
              key={age}
              style={{
                padding: "14px",
                borderRadius: "12px",
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

        <button
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#F6E7DA",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Devam et
        </button>
      </div>
    </div>
  );
}
