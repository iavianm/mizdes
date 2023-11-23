import "./globals.css";

export const metadata = {
  title: "Мы здесь — база отдыха в Ленобласти",
  description: "Мы здесь — база отдыха в Ленобласти",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
