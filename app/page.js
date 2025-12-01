export default function Home() {
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
          alt="children"
          style={{ width: "100%", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
          İçerik Asistanına<br />Hoş Geldin
        </h1>

        <p style={{ color: "#555", fontSize: "15px", marginBottom: "30px" }}>
          Amacımız çocukların güvenli içerikle ulaşmasını kolaylaştırarak sağlıklı
          büyümelerini sağlamak.
        </p>

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
          Başla
        </button>
      </div>
    </div>
  );
}
