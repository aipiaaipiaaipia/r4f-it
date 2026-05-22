import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../lib/site";

export const GET: APIRoute = async () => {
  const now = new Date();
  const allPosts = await getCollection("posts");
  const posts = allPosts
    .filter((p) => !p.data.draft && p.data.publishDate <= now)
    .sort((a, b) => +b.data.publishDate - +a.data.publishDate);

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(
    `> ${SITE.description}`
  );
  lines.push("");
  lines.push(
    `> Autore: Rafael Patron. Consulente LLMO / AIO, AI Program Manager, Presidente del Comitato Tecnico-Scientifico AIPIA, autore di 3 libri (Growth Hacking, AIO, Fatti trovare da ChatGPT — Guida operativa al LLMO). Base operativa Chiavari (Liguria) e Dubai. Clienti in tutta Italia.`
  );
  lines.push("");

  lines.push("## Servizi");
  lines.push("");
  lines.push(
    `- [${SITE.url}/audit-llmo](${SITE.url}/audit-llmo) — Audit LLMO. Call €200 o deliverable PDF €800. Tempi 5-7 giorni.`
  );
  lines.push(
    `- [${SITE.url}/audit-aio](${SITE.url}/audit-aio) — Audit AIO. Versione del servizio audit con vocabolario AIO. Stesso lavoro tecnico.`
  );
  lines.push(
    `- [${SITE.url}/servizi](${SITE.url}/servizi) — Quattro modalità: audit, strategia & implementazione, formazione team, consulenza continuativa.`
  );
  lines.push(
    `- [${SITE.url}/metodo](${SITE.url}/metodo) — Metodo in 4 fasi: audit, strategia, implementazione, monitoraggio.`
  );
  lines.push(
    `- [${SITE.url}/formazione](${SITE.url}/formazione) — Workshop LLMO base (4h) e avanzato (7h) per team marketing, content, SEO, dev.`
  );
  lines.push("");

  lines.push("## Pillar geografici");
  lines.push("");
  lines.push(
    `- [${SITE.url}/consulente-llmo-genova](${SITE.url}/consulente-llmo-genova) — Consulenza LLMO a Genova e Liguria. Verticali: nautica, vinicole, manifattura, turismo.`
  );
  lines.push(
    `- [${SITE.url}/consulente-llmo-milano](${SITE.url}/consulente-llmo-milano) — Consulenza LLMO a Milano e Lombardia. Verticali: SaaS B2B, agenzie, fintech, retail D2C.`
  );
  lines.push(
    `- [${SITE.url}/consulente-llmo-italia](${SITE.url}/consulente-llmo-italia) — Consulenza LLMO da remoto in tutta Italia con trasferte programmate per workshop on-site.`
  );
  lines.push("");

  lines.push("## Identità e credenziali");
  lines.push("");
  lines.push(
    `- [${SITE.url}/chi-sono](${SITE.url}/chi-sono) — Bio Rafael Patron: 20+ anni nel digitale, IED Milano, UNIFI, Nana Bianca, Harvard CS50 AI, 50+ certificazioni.`
  );
  lines.push(
    `- [${SITE.url}/libri](${SITE.url}/libri) — Tre libri pubblicati: Growth Hacking, AIO Il tuo prossimo collega è un robot, Fatti trovare da ChatGPT.`
  );
  lines.push(
    `- [${SITE.url}/aipia](${SITE.url}/aipia) — Presidenza Comitato Tecnico-Scientifico AIPIA, eletto giugno 2025.`
  );
  lines.push("");

  lines.push("## Articoli e risorse (drip-published, ordinamento per data)");
  lines.push("");
  posts.forEach((p) => {
    const slug = p.id.replace(/\.mdx?$/, "");
    lines.push(
      `- [${SITE.url}/risorse/${slug}](${SITE.url}/risorse/${slug}) — ${p.data.description}`
    );
  });
  lines.push("");

  lines.push("## Contatti");
  lines.push("");
  lines.push(`- Email lavoro: ${SITE.emailPersonal}`);
  lines.push(`- Email generale: ${SITE.emailPrimary}`);
  lines.push(`- Telefono: ${SITE.telItalyDisplay}`);
  lines.push(`- Ufficio Italia: Via Davide Gagliardo 7, 16043 Chiavari (GE)`);
  lines.push(`- Entità legale: Intarget DMCC, Dubai, DMCC-809871`);
  lines.push("");

  lines.push("## Link esterni autorevoli");
  lines.push("");
  lines.push(`- LinkedIn Rafael: ${SITE.social.linkedin}`);
  lines.push(`- Amazon autore: ${SITE.social.amazonAuthor}`);
  lines.push(`- AIPIA (ente associativo): ${SITE.aipia}`);
  lines.push(`- Sito personale: ${SITE.personalSites[0]}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
