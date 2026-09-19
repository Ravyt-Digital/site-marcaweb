import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://marcaweb.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Marca WebSites | Sites profissionais por Marcio Cabral", template: "%s | Marca WebSites" },
  description: "Criação de sites institucionais, landing pages e redesign para empresas, instituições e prestadores de serviços. Atendimento remoto com base em Tianguá, CE.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "Marca WebSites", title: "Marca WebSites | Sites profissionais por Marcio Cabral", description: "Sites institucionais, landing pages e redesign com conteúdo claro, experiência responsiva e canais de contato bem definidos.", images: [{ url: "/og-marca-websites.webp", width: 1200, height: 630, alt: "Marca WebSites — sites profissionais para empresas e instituições" }] },
  twitter: { card: "summary_large_image", title: "Marca WebSites | Sites profissionais por Marcio Cabral", description: "Sites institucionais, landing pages e redesign com conteúdo claro e experiência responsiva.", images: ["/og-marca-websites.webp"] },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = { themeColor: "#07101f", width: "device-width", initialScale: 1 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased"><a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>{children}</body>
    </html>
  );
}
