"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "https://wa.me/5521967695979";
const INSTAGRAM = "https://instagram.com/matheuscontador";

const momentos = [
  {
    titulo: "Quero abrir minha empresa",
    desc: "Abertura de CNPJ, escolha do regime tributário ideal e toda a burocracia resolvida para você começar certo.",
    cta: "Abrir empresa",
    msg: "Olá! Quero abrir minha empresa e gostaria de uma orientação.",
  },
  {
    titulo: "Quero trocar de contador",
    desc: "Transição sem burocracia, com migração completa do histórico contábil e continuidade das obrigações fiscais.",
    cta: "Trocar de contador",
    msg: "Olá! Tenho interesse em trocar de contador. Podem me ajudar?",
  },
  {
    titulo: "Quero transformar meu MEI",
    desc: "Análise do momento certo para migrar do MEI para ME ou EPP, sem perder benefícios e pagando menos imposto.",
    cta: "Migrar do MEI",
    msg: "Olá! Quero entender quando devo sair do MEI e como fazer essa migração.",
  },
  {
    titulo: "Quero organizar meu negócio",
    desc: "Empresa funcionando mas sem clareza financeira? Estruturamos a contabilidade, o fiscal e a gestão do seu negócio.",
    cta: "Organizar agora",
    msg: "Olá! Quero organizar melhor a contabilidade e a gestão do meu negócio.",
  },
];

const servicos = [
  {
    num: "01",
    titulo: "Contabilidade & Escrituração",
    desc: "Lançamentos, balancetes e demonstrações financeiras em dia — base para decisões de negócio.",
  },
  {
    num: "02",
    titulo: "Departamento Fiscal",
    desc: "Apuração de impostos, emissão de guias, obrigações acessórias e conformidade total com a legislação.",
  },
  {
    num: "03",
    titulo: "Folha de Pagamento & RH",
    desc: "Cálculo de salários, encargos, férias, 13º e rescisões — sem erros e dentro do prazo.",
  },
  {
    num: "04",
    titulo: "Planejamento Tributário",
    desc: "Análise do regime ideal — Simples Nacional, Lucro Presumido ou Real — para pagar menos imposto dentro da lei.",
  },
  {
    num: "05",
    titulo: "Abertura & Regularização",
    desc: "Constituição de empresas, alterações contratuais, licenças e regularização de CNPJs com pendências.",
  },
  {
    num: "06",
    titulo: "Gestão Financeira",
    desc: "DRE, fluxo de caixa e controladoria para quem quer ter controle real dos números do negócio.",
  },
];

const setores = [
  {
    setor: "Mercado Food",
    detalhe: "Restaurantes, bares, food trucks e delivery",
    linguagem:
      "Entendemos CMV, sazonalidade, substituição tributária e as particularidades da folha para equipes de cozinha e salão.",
  },
  {
    setor: "Profissional Liberal",
    detalhe: "Médicos, dentistas, advogados, arquitetos",
    linguagem:
      "Pró-labore, retirada de lucros e regime tributário ideal para quem presta serviço com expertise técnica.",
  },
  {
    setor: "Infoprodutores & Digital",
    detalhe: "Criadores de conteúdo, agências, SaaS",
    linguagem:
      "Nota fiscal de produto digital, tributação de royalties, gestão de receita em moeda estrangeira e sociedades digitais.",
  },
  {
    setor: "Construção Civil",
    detalhe: "Construtoras, incorporadoras, empreiteiras",
    linguagem:
      "Regime de tributação de obras, retenção de ISS e INSS, RET e as particularidades contábeis do setor.",
  },
  {
    setor: "Varejo",
    detalhe: "Lojas físicas, e-commerce, distribuidoras",
    linguagem:
      "Substituição tributária, ICMS, gestão de estoque contábil e margem de lucro por categoria de produto.",
  },
  {
    setor: "Indústria",
    detalhe: "Manufatura, beneficiamento, produção",
    linguagem:
      "IPI, ICMS, custo de produção, controle de matéria-prima e a complexidade fiscal da atividade industrial.",
  },
];

function wppLink(msg: string) {
  return `https://wa.me/5521967695979?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-inter), sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "#0f0f0f", borderBottom: "1px solid #1a1a1a",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 32px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
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
          </a>

          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {[["Serviços","#servicos"],["Setores","#setores"],["Sobre","#sobre"]].map(([l,h])=>(
              <a key={l} href={h} style={{
                color: "#666", fontSize: 10, letterSpacing: "1.5px",
                textTransform: "uppercase", textDecoration: "none",
              }}>{l}</a>
            ))}
            <Link href="/blog" style={{ color: "#666", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", textDecoration: "none" }}>
              Blog
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
              background: "#fff", color: "#0f0f0f", fontSize: 10, letterSpacing: "1.5px",
              textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: 500,
            }}>Falar com especialista</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section style={{
        background: "#0f0f0f", paddingTop: 160, paddingBottom: 100,
        paddingLeft: 32, paddingRight: 32,
        position: "relative", overflow: "hidden",
        minHeight: "88vh", display: "flex", alignItems: "center",
      }}>
        <div style={{
          position: "absolute", right: -60, bottom: -80,
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(180px, 28vw, 360px)",
          fontWeight: 300, color: "#181818", lineHeight: 1,
          userSelect: "none", letterSpacing: "-16px", pointerEvents: "none",
        }}>MC</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: "#555", marginBottom: 24 }}>
            Contabilidade · Gestão Empresarial · Rio de Janeiro
          </p>

          <h1 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(52px, 8vw, 100px)",
            fontWeight: 300, color: "#fff", lineHeight: 1, marginBottom: 32, letterSpacing: "-1px",
          }}>
            Contabilidade que<br />
            <em style={{ fontStyle: "italic" }}>entende</em> o seu<br />
            negócio.
          </h1>

          <p style={{ fontSize: 15, color: "#777", lineHeight: 1.9, maxWidth: 500, marginBottom: 48 }}>
            Escritório com 20 profissionais, 315 clientes ativos e presença em
            Rio de Janeiro. Atendemos empresas de diferentes setores com a
            linguagem de quem conhece cada mercado.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
              background: "#fff", color: "#0f0f0f", fontSize: 11,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "14px 32px", textDecoration: "none", fontWeight: 500,
            }}>Solicitar proposta</a>
            <a href="#momentos" style={{
              background: "transparent", color: "#fff", fontSize: 11,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "14px 32px", textDecoration: "none", border: "1px solid #2a2a2a",
            }}>Ver serviços</a>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <section style={{ background: "#f7f7f5", borderBottom: "1px solid #e5e5e5" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        }}>
          {[
            { num: "Clientes que ficam.", label: "relacionamentos de longa data" },
            { num: "20", label: "profissionais" },
            { num: "2018", label: "anos de experiência" },
            { num: "RJ", label: "Av. Rio Branco, Centro" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "32px 24px", textAlign: "center",
              borderRight: i < 3 ? "1px solid #e5e5e5" : "none",
            }}>
              <p style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: s.num.length > 4 ? 22 : 40,
                fontWeight: 300, color: "#0f0f0f", lineHeight: 1.15, margin: 0,
              }}>{s.num}</p>
              <p style={{
                fontSize: 10, color: "#888", letterSpacing: "1.5px",
                textTransform: "uppercase", marginTop: 8,
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOMENTOS ────────────────────────────────────── */}
      <section id="momentos" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
            Em qual momento você está?
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 8,
          }}>
            Cada fase do negócio tem{" "}
            <em style={{ fontStyle: "italic" }}>uma solução.</em>
          </h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, maxWidth: 520, marginBottom: 56 }}>
            Seja abrindo do zero, migrando do MEI ou reorganizando o que já existe —
            nossa equipe conhece o caminho.
          </p>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1, background: "#e5e5e5", border: "1px solid #e5e5e5",
          }}>
            {momentos.map((m, i) => (
              <div key={i} style={{
                background: "#fff", padding: "40px 36px",
                display: "flex", flexDirection: "column", gap: 16,
              }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 22, color: "#0f0f0f", lineHeight: 1.2,
                }}>{m.titulo}</p>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8, flex: 1 }}>{m.desc}</p>
                <a href={wppLink(m.msg)} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                  color: "#0f0f0f", textDecoration: "none",
                  borderBottom: "1px solid #0f0f0f", paddingBottom: 2,
                  alignSelf: "flex-start",
                }}>{m.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ────────────────────────────────────── */}
      <section id="servicos" style={{ background: "#f7f7f5", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
            Serviços
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 56,
          }}>
            O que fazemos
          </h2>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid #e5e5e5",
          }}>
            {servicos.map((s, i) => (
              <div key={i} style={{
                padding: "32px 28px", background: "#fff",
                borderRight: i % 3 !== 2 ? "1px solid #e5e5e5" : "none",
                borderBottom: i < 3 ? "1px solid #e5e5e5" : "none",
              }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 20, color: "#ccc", marginBottom: 16, lineHeight: 1,
                }}>{s.num}</p>
                <p style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 19, color: "#0f0f0f", marginBottom: 10, lineHeight: 1.2,
                }}>{s.titulo}</p>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SETORES ─────────────────────────────────────── */}
      <section id="setores" style={{ background: "#0f0f0f", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#555", marginBottom: 12 }}>
            Setores que atendemos
          </p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 300, color: "#fff",
            lineHeight: 1.1, marginBottom: 16,
          }}>
            Falamos a linguagem<br />
            <em style={{ fontStyle: "italic" }}>do seu setor.</em>
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 500, marginBottom: 56 }}>
            Cada segmento tem obrigações, riscos e oportunidades específicas.
            Não tratamos todos os negócios da mesma forma.
          </p>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid #2a2a2a",
          }}>
            {setores.map((s, i) => (
              <div key={i} style={{
                padding: "32px 28px",
                borderRight: i % 3 !== 2 ? "1px solid #2a2a2a" : "none",
                borderBottom: i < 3 ? "1px solid #2a2a2a" : "none",
              }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 21, color: "#fff", marginBottom: 6, lineHeight: 1.2,
                }}>{s.setor}</p>
                <p style={{
                  fontSize: 10, color: "#555", letterSpacing: "1px",
                  textTransform: "uppercase", marginBottom: 16,
                }}>{s.detalhe}</p>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.8 }}>{s.linguagem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ───────────────────────────────────────── */}
      <section id="sobre" style={{ padding: "96px 32px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
        }}>
          <div style={{ position: "relative" }}>
            <div style={{ aspectRatio: "4/5", background: "#f0f0ee", overflow: "hidden", position: "relative" }}>
              <Image
                src="/matheus.jpg"
                alt="Matheus — Matheus Contador Gestão Empresarial"
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </div>
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 72, fontWeight: 300, color: "#f0f0ee",
              lineHeight: 1, userSelect: "none", letterSpacing: "-4px", zIndex: -1,
            }}>MC</div>
          </div>

          <div>
            <p style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: 12 }}>
              Sobre
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 300, lineHeight: 1.1, marginBottom: 24,
            }}>
              Uma trajetória<br />
              <em style={{ fontStyle: "italic" }}>construída com clientes.</em>
            </h2>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginBottom: 18 }}>
              Desde 2018 atuo no mercado contábil. Antes de fundar o escritório
              em 2020, fui sócio de outra empresa — e trouxe comigo os primeiros
              clientes porque a relação de confiança já estava construída.
            </p>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginBottom: 18 }}>
              Hoje somos 20 profissionais atendendo 315 clientes de diferentes
              setores. Nossa diferença não está em atender todo mundo igual,
              mas em entender as particularidades de cada negócio.
            </p>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.9, marginBottom: 40 }}>
              Escritório na Av. Rio Branco, 173 — sala 1102, Centro do Rio de Janeiro.
            </p>

            <div style={{ display: "flex", gap: 16 }}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
                background: "#0f0f0f", color: "#fff", fontSize: 11,
                letterSpacing: "1.5px", textTransform: "uppercase",
                padding: "12px 24px", textDecoration: "none",
              }}>Falar no WhatsApp</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{
                background: "transparent", color: "#0f0f0f", fontSize: 11,
                letterSpacing: "1.5px", textTransform: "uppercase",
                padding: "12px 24px", textDecoration: "none", border: "1px solid #e5e5e5",
              }}>Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────── */}
      <section style={{ background: "#0f0f0f", padding: "100px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48, justifyContent: "center" }}>
            <div style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
            <span style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 12, letterSpacing: "4px", color: "#444",
            }}>MC</span>
            <div style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300,
            color: "#fff", lineHeight: 1.1, marginBottom: 16,
          }}>
            Pronto para ter uma contabilidade<br />
            <em style={{ fontStyle: "italic" }}>que trabalha pelo seu negócio?</em>
          </h2>
          <p style={{
            fontSize: 14, color: "#666", lineHeight: 1.8,
            margin: "0 auto 48px", maxWidth: 480,
          }}>
            Fale com nossa equipe. Sem compromisso, sem burocracia.
            Uma conversa para entender o que o seu negócio precisa.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{
              background: "#fff", color: "#0f0f0f", fontSize: 11,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "16px 40px", textDecoration: "none", fontWeight: 500,
            }}>Falar no WhatsApp</a>
            <a href="mailto:contato@matheuscontador.com.br" style={{
              background: "transparent", color: "#fff", fontSize: 11,
              letterSpacing: "2px", textTransform: "uppercase",
              padding: "16px 40px", textDecoration: "none", border: "1px solid #2a2a2a",
            }}>Enviar e-mail</a>
          </div>

          <p style={{ marginTop: 40, fontSize: 12, color: "#444", letterSpacing: "0.5px" }}>
            +55 21 96769-5979 · Av. Rio Branco 173, sala 1102 · Rio de Janeiro
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a", padding: "28px 32px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 11, color: "#444" }}>
            © {new Date().getFullYear()} Matheus Contador Gestão Empresarial
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[["Instagram", INSTAGRAM], ["WhatsApp", WHATSAPP]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{
                fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
                color: "#444", textDecoration: "none",
              }}>{l}</a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#444", textAlign: "right" }}>
            Av. Rio Branco 173, sala 1102 · Rio de Janeiro
          </p>
        </div>
      </footer>
    </main>
  );
}
