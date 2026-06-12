import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");
const imprensaDir = path.join(process.cwd(), "content/imprensa");

export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string;
  autor: string;
  destaque: boolean;
  conteudo: string;
};

export type Imprensa = {
  slug: string;
  titulo: string;
  veiculo: string;
  data: string;
  link: string;
  tipo: string;
  resumo: string;
};

export function getPosts(): Post[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: data.slug || file.replace(".md", ""),
        titulo: data.titulo,
        resumo: data.resumo,
        categoria: data.categoria,
        data: data.data?.toString() ?? "",
        autor: data.autor,
        destaque: data.destaque ?? false,
        conteudo: content,
      };
    })
    .sort((a, b) => (a.data > b.data ? -1 : 1));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getImprensa(): Imprensa[] {
  if (!fs.existsSync(imprensaDir)) return [];
  const files = fs.readdirSync(imprensaDir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(imprensaDir, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(".md", ""),
        titulo: data.titulo,
        veiculo: data.veiculo,
        data: data.data?.toString() ?? "",
        link: data.link ?? "",
        tipo: data.tipo ?? "materia",
        resumo: data.resumo,
      };
    })
    .sort((a, b) => (a.data > b.data ? -1 : 1));
}
