import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marca WebSites — Web Design por Marcio Cabral",
  description: "Sites profissionais para empresas que querem construir uma presença digital à altura do seu negócio.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
