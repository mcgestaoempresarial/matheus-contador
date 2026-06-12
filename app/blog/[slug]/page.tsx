import Link from "next/link";
import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const WHATSAPP = "https://wa.me/5521967695979";

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.titulo} — Matheus Contador`,
    description: post.resumo,
  };
}

function formatData(d: string) {
  try {
    return new Date(d).toLocaleDateString("pt-BR", {
      day: "2-digit", month: "long", year: "numeric",
    });
  } catch { return d; }
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 300,
          color: "#0f0f0f", lineHeight: 1.2,
          marginTop: 48, marginBottom: 16,
        }}>{line.replace("## ", "")}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 20, fontWeight: 400, color: "#0f0f0f",
          marginTop: 32, marginBottom: 12,
        }}>{line.replace("### ", "")}</h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={key++} style={{ fontSize: 15, color: "#0f0f0f", fontWeight: 500, lineHeight: 1.8, margin: "16px 0 8px" }}>
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        listItems.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      elements.push(
        <ul key={key++} style={{ paddingLeft: 20, margin: "16px 0" }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ fontSize: 15, color: "#555", lineHeight: 1.9, marginBottom: 6 }}>{item}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].includes("---")) tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.map((r) => r.split("|").filter((c) => c.trim() !== ""));
      elements.push(
        <div key={key++} style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                {rows[0]?.map((cell, j) => (
                  <th key={j} style={{
                    textAlign: "left", padding: "10px 16px",
                    borderBottom: "1px solid #e5e5e5",
                    fontSize: 11, letterSpacing: "1px", textTransform: "uppercase", color: "#888",
                  }}>{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: "10px 16px", borderBottom: "1px solid #f0f0f0",
                      color: "#555", lineHeight: 1.6,
                    }}>{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.trim() !== "") {
      const withBold = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p key={key++}
          dangerouslySetInnerHTML={{ __html: withBold }}
          style={{ fontSize: 16, color: "#444", lineHeight: 1.9, margin: "16px 0" }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const todos = getPosts();
  const relacionados = todos.filter((p) => p.slug !== slug).slice(0, 3);

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
          <Link href="/blog" style={{
            color: "#666", fontSize: 10, letterSpacing: "1.5px",
            textTransform: "uppercase", textDecoration: "none",
          }}>← Blog</Link>
        </div>
      </nav>

      {/* HEADER DO POST */}
      <section style={{
        background: "#0f0f0f", paddingTop: 120, paddingBottom: 64,
        paddingLeft: 32, paddingRight: 32,
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{
            fontSize: 10, letterSpacing: "3px", textTransform: "uppercase",
            color: "#555", marginBottom: 20,
          }}>{post.categoria}</p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 300,
            color: "#fff", lineHeight: 1.1, marginBottom: 24,
          }}>{post.titulo}</h1>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 32 }}>
            {post.resumo}
          </p>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <p style={{ fontSize: 12, color: "#555" }}>{post.autor}</p>
            <p style={{ fontSize: 12, color: "#444" }}>{formatData(post.data)}</p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section style={{ padding: "64px 32px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {renderMarkdown(post.conteudo)}

          {/* CTA inline */}
          <div style={{
            margin: "56px 0",
            background: "#f7f7f5",
            border: "1px solid #e5e5e5",
            padding: "36px 32px",
            display: "flex", gap: 24, alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 20, color: "#0f0f0f", lineHeight: 1.2, marginBottom: 6,
              }}>Tem dúvidas sobre esse assunto?</p>
              <p style={{ fontSize: 13, color: "#888" }}>
                Nossa equipe está disponível para uma conversa sem compromisso.
              </p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
              background: "#0f0f0f", color: "#fff", fontSize: 10,
              letterSpacing: "1.5px", textTransform: "uppercase",
              padding: "12px 24px", textDecoration: "none", flexShrink: 0,
            }}>Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* MAIS ARTIGOS */}
      {relacionados.length > 0 && (
        <section style={{ background: "#f7f7f5", padding: "64px 32px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 32 }}>
              Mais artigos
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5",
            }}>
              {relacionados.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#f7f7f5", padding: "28px 24px", height: "100%" }}>
                    <p style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#aaa", marginBottom: 10 }}>
                      {p.categoria}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 18, fontWeight: 300, color: "#0f0f0f", lineHeight: 1.2,
                    }}>{p.titulo}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
