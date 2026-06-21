import Link from "next/link";
import { getPosts, getImprensa } from "@/lib/posts";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog & Imprensa — Matheus Contador",
  description:
    "Artigos sobre contabilidade, tributação, gestão empresarial e novidades do mercado. Escritório Matheus Contador, Rio de Janeiro.",
};

const WHATSAPP = "https://wa.me/5521967695979";

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

export default function BlogPage() {
  const posts = getPosts();
  const imprensa = getImprensa();
  const destaque = posts.find((p) => p.destaque) ?? posts[0];
  const demais = posts.filter((p) => p.slug !== destaque?.slug);

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
            <Link href="/blog" style={{ color: "#fff", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>Blog</Link>
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
            Blog & Imprensa
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300,
            color: "#fff", lineHeight: 1, margin: 0,
          }}>
            Conteúdo que <em style={{ fontStyle: "italic" }}>orienta.</em>
          </h1>
        </div>
      </section>

      {/* POST DESTAQUE */}
      {destaque && (
        <section style={{ padding: "64px 32px 0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 24 }}>
              Em destaque
            </p>
            <Link href={`/blog/${destaque.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                border: "1px solid #e5e5e5", padding: "48px",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
              }}>
                <div>
                  <p style={{
                    fontSize: 10, letterSpacing: "2px", textTransform: "uppercase",
                    color: "#888", marginBottom: 16,
                  }}>{destaque.categoria}</p>
                  <h2 style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 300,
                    color: "#0f0f0f", lineHeight: 1.15, marginBottom: 20,
                  }}>{destaque.titulo}</h2>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 28 }}>
                    {destaque.resumo}
                  </p>
                  <span style={{
                    fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                    color: "#0f0f0f", borderBottom: "1px solid #0f0f0f", paddingBottom: 2,
                  }}>Ler artigo →</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 12, color: "#aaa" }}>{formatData(destaque.data)}</p>
                  <p style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>{destaque.autor}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* DEMAIS POSTS */}
      {demais.length > 0 && (
        <section style={{ padding: "48px 32px 64px", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5",
            }}>
              {demais.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff", padding: "32px 28px",
                    height: "100%", display: "flex", flexDirection: "column", gap: 12,
                  }}>
                    <p style={{
                      fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#aaa",
                    }}>{post.categoria}</p>
                    <h3 style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 20, fontWeight: 300, color: "#0f0f0f", lineHeight: 1.2, flex: 1,
                    }}>{post.titulo}</h3>
                    <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>
                      {post.resumo.slice(0, 100)}…
                    </p>
                    <p style={{ fontSize: 11, color: "#bbb", marginTop: 8 }}>{formatData(post.data)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* IMPRENSA */}
      {imprensa.length > 0 && (
        <section id="imprensa" style={{ background: "#f7f7f5", padding: "64px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
              Na imprensa
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 40,
            }}>
              Matheus na <em style={{ fontStyle: "italic" }}>mídia.</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5" }}>
              {imprensa.map((item) => (
                <div key={item.slug} style={{
                  background: "#f7f7f5", padding: "24px 32px",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                }}>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>
                      {item.veiculo}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 18, color: "#0f0f0f", lineHeight: 1.2,
                    }}>{item.titulo}</p>
                    {item.resumo && (
                      <p style={{ fontSize: 13, color: "#888", marginTop: 6, lineHeight: 1.6 }}>{item.resumo}</p>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                    <p style={{ fontSize: 11, color: "#aaa" }}>{formatData(item.data)}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                        fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                        color: "#0f0f0f", textDecoration: "none",
                        borderBottom: "1px solid #0f0f0f", paddingBottom: 1,
                      }}>Ver matéria →</a>
                    )}
                  </div>
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
            Tem dúvidas sobre o seu <em style={{ fontStyle: "italic" }}>negócio?</em>
          </h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 32 }}>
            Fale diretamente com nossa equipe.
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
          <Link href="/blog" style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#444", textDecoration: "none" }}>
            Blog
          </Link>
          <p style={{ fontSize: 11, color: "#444" }}>Av. Rio Branco 173, sala 1102 · Rio de Janeiro</p>
        </div>
      </footer>
    </main>
  );
}
