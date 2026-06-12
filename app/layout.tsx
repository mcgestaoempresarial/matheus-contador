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
  title: "Matheus Contador — Gestão Empresarial",
  description:
    "Escritório de contabilidade com atendimento em todo o território nacional. Especialistas em contabilidade, planejamento tributário e gestão empresarial. Rio de Janeiro.",
  keywords: [
    "contabilidade",
    "contador",
    "rio de janeiro",
    "gestão empresarial",
    "planejamento tributário",
    "abertura de empresa",
    "MEI",
    "folha de pagamento",
  ],
  openGraph: {
    title: "Matheus Contador — Gestão Empresarial",
    description: "Contabilidade que entende o seu negócio. Atendimento em todo o Brasil.",
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HDLLZJXJDC" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HDLLZJXJDC');` }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
