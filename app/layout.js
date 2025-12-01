export const metadata = {
  title: "Content Assistant",
  description: "Çocuklara güvenli içerik sunan asistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
