"use client";

import Link from "next/link";
import { useState } from "react";

const MATHEUS_WPP = "5521967695979";

const ebooks = [
  {
    id: "guia-abrir-empresa",
    titulo: "Do Sonho à Realidade",
    subtitulo: "O Guia Completo para Abrir e Estruturar sua Empresa",
    descricao: "Tudo que o empreendedor precisa saber antes de abrir o CNPJ: regime tributário, estrutura jurídica, obrigações e como não ser o erro dos 80%.",
    paginas: "137 páginas",
    arquivo: "/ebooks/guia-abrir-empresa.pdf",
  },
  {
    id: "departamento-pessoal",
    titulo: "Antes de Contratar Alguém",
    subtitulo: "Tudo o que você precisa saber sobre Departamento Pessoal",
    descricao: "Folha de pagamento, férias, encargos, rescisão — o que muda quando você tem funcionários e como não cometer erros caros na contratação.",
    paginas: "92 páginas",
    arquivo: "/ebooks/departamento-pessoal.pdf",
  },
  {
    id: "por-que-voce-quebra-food",
    titulo: "Por Que Você Quebra o Seu Estabelecimento Food",
    subtitulo: "Os erros financeiros que estão destruindo bares e restaurantes",
    descricao: "CMV, precificação errada, DRE, fluxo de caixa — os indicadores que separam quem cresce de quem fecha as portas no setor de alimentação.",
    paginas: "89 páginas",
    arquivo: "/ebooks/por-que-voce-quebra-food.pdf",
  },
  {
    id: "reforma-tributaria-restaurantes",
    titulo: "Reforma Tributária para Restaurantes",
    subtitulo: "O que muda no seu negócio de 2026 a 2033",
    descricao: "IBS, CBS, Imposto Seletivo e o cronograma completo da reforma — explicados de forma prática para donos de bar, restaurante e food service.",
    paginas: "72 páginas",
    arquivo: "/ebooks/reforma-tributaria-restaurantes.pdf",
  },
];

export default function EbookClient() {
  const [ebookSelecionado, setEbookSelecionado] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [etapa, setEtapa] = useState<"lista" | "form" | "download">("lista");

  const ebook = ebooks.find((e) => e.id === ebookSelecionado);

  function handleBaixar(id: string) {
    setEbookSelecionado(id);
    setEtapa("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ebook) return;

    const msg = encodeURIComponent(
      `📥 *Novo download de ebook*\n\nNome: ${nome}\nTelefone: ${telefone}\nEbook: ${ebook.titulo}`
    );
    window.open(`https://wa.me/${MATHEUS_WPP}?text=${msg}`, "_blank");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = ebook.arquivo;
      link.download = ebook.arquivo.split("/").pop() ?? "ebook.pdf";
      link.click();
    }, 800);

    setEtapa("download");
  }

  const WHATSAPP = `https://wa.me/${MATHEUS_WPP}`;

  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#0f0f0f", borderBottom: "1px solid #1a1a1a",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 32px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 36, height: 36, background: "#fff", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--font-cormorant), serif", fontSize: 13,
                fontWeight: 500, color: "#0f0f0f", lineHeight: 1,
                letterSpacing: "-0.5px", textAlign: "center",
              }}>M<br />C</span>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-cormorant), serif", fontSize: 13,
                fontWeight: 400, color: "#fff", letterSpacing: "1px", lineHeight: 1.2, margin: 0,
              }}>MATHEUS–CONTADOR</p>
              <p style={{
                fontSize: 9, letterSpacing: "2.5px", color: "#555",
                textTransform: "uppercase", margin: 0, lineHeight: 1, marginTop: 2,
              }}>Gestão Empresarial</p>
            </div>
          </Link>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
            background: "#fff", color: "#0f0f0f", fontSize: 10, letterSpacing: "1.5px",
            textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: 500,
          }}>Falar com especialista</a>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ background: "#0f0f0f", paddingTop: 120, paddingBottom: 64, paddingLeft: 32, paddingRight: 32 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
            Material gratuito
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300,
            color: "#fff", lineHeight: 1, margin: 0,
          }}>
            Ebooks <em style={{ fontStyle: "italic" }}>gratuitos.</em>
          </h1>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginTop: 20, maxWidth: 520 }}>
            Conteúdo prático sobre contabilidade, gestão e tributação — escrito por quem trabalha com isso todos os dias.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      {etapa === "form" && ebook && (
        <section style={{ background: "#f7f7f5", padding: "64px 32px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
              Quase lá
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300,
              color: "#0f0f0f", lineHeight: 1.1, marginBottom: 8,
            }}>{ebook.titulo}</h2>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 32 }}>
              Deixe seu nome e telefone para receber o ebook. É gratuito.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 8 }}>
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  style={{
                    width: "100%", padding: "14px 16px",
                    border: "1px solid #e5e5e5", background: "#fff",
                    fontSize: 14, color: "#0f0f0f", outline: "none",
                    fontFamily: "var(--font-inter), sans-serif",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 8 }}>
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(21) 99999-9999"
                  style={{
                    width: "100%", padding: "14px 16px",
                    border: "1px solid #e5e5e5", background: "#fff",
                    fontSize: 14, color: "#0f0f0f", outline: "none",
                    fontFamily: "var(--font-inter), sans-serif",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button type="submit" style={{
                background: "#0f0f0f", color: "#fff", border: "none",
                fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
                padding: "16px 32px", cursor: "pointer", fontWeight: 500,
                fontFamily: "var(--font-inter), sans-serif", marginTop: 8,
              }}>
                Baixar ebook gratuitamente
              </button>
            </form>
            <button
              onClick={() => { setEtapa("lista"); setEbookSelecionado(null); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 11, color: "#aaa", marginTop: 16, textDecoration: "underline",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              ← Voltar para os ebooks
            </button>
          </div>
        </section>
      )}

      {/* CONFIRMAÇÃO */}
      {etapa === "download" && ebook && (
        <section style={{ background: "#f7f7f5", padding: "64px 32px" }}>
          <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 32, marginBottom: 16 }}>✓</p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 300,
              color: "#0f0f0f", lineHeight: 1.1, marginBottom: 16,
            }}>Download iniciado.</h2>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 32 }}>
              O arquivo está sendo baixado. Se não começou automaticamente,{" "}
              <a href={ebook.arquivo} download style={{ color: "#0f0f0f" }}>clique aqui</a>.
            </p>
            <button
              onClick={() => { setEtapa("lista"); setEbookSelecionado(null); setNome(""); setTelefone(""); }}
              style={{
                background: "#0f0f0f", color: "#fff", border: "none",
                fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
                padding: "14px 32px", cursor: "pointer", fontWeight: 500,
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Ver outros ebooks
            </button>
          </div>
        </section>
      )}

      {/* LISTA DE EBOOKS */}
      {etapa === "lista" && (
        <section style={{ background: "#fff", padding: "64px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5",
            }}>
              {ebooks.map((eb) => (
                <div key={eb.id} style={{
                  background: "#fff", padding: "40px 36px",
                  display: "flex", flexDirection: "column", gap: 16,
                }}>
                  <p style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#aaa" }}>
                    {eb.paginas} · Gratuito
                  </p>
                  <h2 style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 300,
                    color: "#0f0f0f", lineHeight: 1.2,
                  }}>{eb.titulo}</h2>
                  <p style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginTop: -8 }}>{eb.subtitulo}</p>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8, flex: 1 }}>{eb.descricao}</p>
                  <button
                    onClick={() => handleBaixar(eb.id)}
                    style={{
                      background: "#0f0f0f", color: "#fff", border: "none",
                      fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                      padding: "12px 24px", cursor: "pointer", fontWeight: 500,
                      alignSelf: "flex-start", fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    Baixar grátis →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "#0f0f0f", padding: "64px 32px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300,
            color: "#fff", lineHeight: 1.1, marginBottom: 16,
          }}>
            Quer uma análise do seu <em style={{ fontStyle: "italic" }}>negócio?</em>
          </h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 32 }}>
            Os ebooks são o primeiro passo. O segundo é uma conversa com nossa equipe.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
            background: "#fff", color: "#0f0f0f", fontSize: 11,
            letterSpacing: "2px", textTransform: "uppercase",
            padding: "14px 32px", textDecoration: "none", fontWeight: 500,
          }}>Falar no WhatsApp</a>
        </div>
      </section>

      <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a", padding: "28px 32px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 11, color: "#444" }}>© {new Date().getFullYear()} Matheus Contador Gestão Empresarial</p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/blog" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#444", textDecoration: "none" }}>Blog</Link>
            <Link href="/imprensa" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#444", textDecoration: "none" }}>Imprensa</Link>
            <Link href="/ebook" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#444", textDecoration: "none" }}>Ebooks</Link>
          </div>
          <p style={{ fontSize: 11, color: "#444" }}>Av. Rio Branco 173, sala 1102 · Rio de Janeiro</p>
        </div>
      </footer>
    </main>
  );
}
