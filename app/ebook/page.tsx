import type { Metadata } from "next";
import EbookClient from "./EbookClient";

export const metadata: Metadata = {
  title: "Ebooks Gratuitos — Matheus Contador",
  description:
    "Baixe gratuitamente os ebooks de Matheus Contador sobre abertura de empresa, departamento pessoal, food service e reforma tributária.",
};

export default function EbookPage() {
  return <EbookClient />;
}
