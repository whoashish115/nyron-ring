import "../styles/globals.css";

export const metadata = {
  title: "Nyron Ring",
  description: "A webring for computer science enthusiasts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
