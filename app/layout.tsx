import "./globals.css";

export const metadata = {
  title: "FactoryFound.ai",
  description: "AI search infrastructure for manufacturing archives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
