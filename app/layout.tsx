import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matheus Contador — Gestão Empresarial para o Mercado Food",
  description:
    "Escritório de contabilidade especializado no mercado food. 315 clientes, 100+ empresas do setor alimentício. Rio de Janeiro.",
  keywords: [
    "contabilidade",
    "mercado food",
    "restaurante",
    "contador",
    "rio de janeiro",
    "gestão empresarial",
    "CMV",
    "folha de pagamento",
  ],
  openGraph: {
    title: "Matheus Contador — Gestão Empresarial",
    description: "Especialista em contabilidade para o mercado food.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
