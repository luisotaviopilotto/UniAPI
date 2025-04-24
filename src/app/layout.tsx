import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniAPI",
  description: "Sistema de gerenciamento de APIs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
