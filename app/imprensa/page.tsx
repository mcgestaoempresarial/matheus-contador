import Link from "next/link";
import { getImprensa } from "@/lib/posts";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Imprensa — Matheus Contador",
  description:
    "Matérias, entrevistas e participações em podcasts e veículos de comunicação. Matheus Contador Gestão Empresarial.",
};

const WHATSAPP = "https://wa.me/5521967695979";

const LOGOS: Record<string, string> = {
  "Giro News": "GIRO NEWS",
  "Portal Protagonistas do Brasil": "PROTAGONISTAS DO BRASIL",
  "Jornal dos Bairros": "JORNAL DOS BAIRROS",
  "Painel Diário": "PAINEL DIÁRIO",
  "YouTube": "YOUTUBE",
};

function formatData(d: string) {
  try {
    return new Date(d).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

export default function ImprensaPage() {
  const imprensa = getImprensa();
  const materias = imprensa.filter((i) => i.tipo === "materia");
  const podcasts = imprensa.filter((i) => i.tipo === "podcast");

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
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/#servicos" style={{ color: "#666", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>Serviços</Link>
            <Link href="/#setores" style={{ color: "#666", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>Setores</Link>
            <Link href="/blog" style={{ color: "#666", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>Blog</Link>
            <Link href="/imprensa" style={{ color: "#fff", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>Imprensa</Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
              background: "#fff", color: "#0f0f0f", fontSize: 10, letterSpacing: "1.5px",
              textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: 500,
            }}>Falar com especialista</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ background: "#0f0f0f", paddingTop: 120, paddingBottom: 64, paddingLeft: 32, paddingRight: 32 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
            Na mídia
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300,
            color: "#fff", lineHeight: 1, margin: 0,
          }}>
            Matheus na <em style={{ fontStyle: "italic" }}>imprensa.</em>
          </h1>
        </div>
      </section>

      {/* MATÉRIAS */}
      {materias.length > 0 && (
        <section style={{ background: "#fff", padding: "64px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 40 }}>
              Matérias & entrevistas
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5" }}>
              {materias.map((item) => (
                <a
                  key={item.slug}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    background: "#fff", padding: "32px",
                    display: "grid", gridTemplateColumns: "200px 1fr auto",
                    gap: 32, alignItems: "center",
                  }}>
                    {/* LOGO / VEÍCULO */}
                    <div style={{
                      border: "1px solid #e5e5e5", padding: "16px 20px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      minHeight: 64,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 13, fontWeight: 600, color: "#0f0f0f",
                        letterSpacing: "1px", textAlign: "center", lineHeight: 1.3,
                        textTransform: "uppercase",
                      }}>
                        {LOGOS[item.veiculo] ?? item.veiculo}
                      </span>
                    </div>

                    {/* TÍTULO + RESUMO */}
                    <div>
                      <p style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 20, color: "#0f0f0f", lineHeight: 1.25, marginBottom: 8,
                      }}>{item.titulo}</p>
                      {item.resumo && (
                        <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{item.resumo}</p>
                      )}
                    </div>

                    {/* DATA + LINK */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
                      <p style={{ fontSize: 11, color: "#aaa", whiteSpace: "nowrap" }}>{formatData(item.data)}</p>
                      <span style={{
                        fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                        color: "#0f0f0f", borderBottom: "1px solid #0f0f0f", paddingBottom: 1,
                        whiteSpace: "nowrap",
                      }}>Ler matéria →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PODCASTS */}
      {podcasts.length > 0 && (
        <section style={{ background: "#f7f7f5", padding: "64px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 40 }}>
              Podcasts & participações
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5" }}>
              {podcasts.map((item) => (
                <a
                  key={item.slug}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    background: "#f7f7f5", padding: "32px",
                    display: "flex", flexDirection: "column", gap: 16, height: "100%",
                  }}>
                    <div style={{
                      border: "1px solid #e5e5e5", padding: "12px 16px",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      alignSelf: "flex-start",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: 11, fontWeight: 600, color: "#0f0f0f",
                        letterSpacing: "1px", textTransform: "uppercase",
                      }}>
                        {LOGOS[item.veiculo] ?? item.veiculo}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 20, color: "#0f0f0f", lineHeight: 1.25, flex: 1,
                    }}>{item.titulo}</p>
                    {item.resumo && (
                      <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{item.resumo}</p>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <p style={{ fontSize: 11, color: "#aaa" }}>{formatData(item.data)}</p>
                      <span style={{
                        fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                        color: "#0f0f0f", borderBottom: "1px solid #0f0f0f", paddingBottom: 1,
                      }}>Assistir →</span>
                    </div>
                  </div>
                </a>
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
            Quer falar com <em style={{ fontStyle: "italic" }}>Matheus?</em>
          </h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 32 }}>
            Para entrevistas, participações em podcasts ou assessoria de imprensa.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
            background: "#fff", color: "#0f0f0f", fontSize: 11,
            letterSpacing: "2px", textTransform: "uppercase",
            padding: "14px 32px", textDecoration: "none", fontWeight: 500,
          }}>Entrar em contato</a>
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
          </div>
          <p style={{ fontSize: 11, color: "#444" }}>Av. Rio Branco 173, sala 1102 · Rio de Janeiro</p>
        </div>
      </footer>
    </main>
  );
}
