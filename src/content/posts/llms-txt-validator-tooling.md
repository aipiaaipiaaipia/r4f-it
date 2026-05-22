---
title: "llms.txt: tooling, validator e come integrarlo nel build"
description: "Generare e validare llms.txt non deve essere lavoro manuale. Strumenti, automazioni e pattern di integrazione."
publishDate: 2026-11-25T15:40:00
category: tecnico
tags: ["llms.txt", "Tooling", "DevOps", "Automation"]
---

Una volta capito cosa mettere in `llms.txt` (vedi [come strutturarlo](/risorse/llms-txt-come-strutturarlo)), il passo successivo è automatizzare la generazione e la validazione. Vediamo gli strumenti.

## Generazione automatica

Tre approcci possibili.

**Approccio 1: build-time script.** Uno script Node/Python che gira al build e genera `llms.txt` dal contenuto del sito (markdown, sitemap, frontmatter). Pro: sempre aggiornato, niente manutenzione manuale. Contro: serve un dev che lo configura.

**Approccio 2: CMS plugin.** Per WordPress esistono plugin (es. "LLMS.txt Generator"). Per Astro/Next/SvelteKit niente di standard ma facile costruire un endpoint custom.

**Approccio 3: manuale + checklist.** Per siti piccoli, scrivi `llms.txt` a mano e aggiornalo nel checklist editoriale ogni 30 giorni. Funziona se sei disciplinato.

## Pattern per Astro (lo stack di r4f.it)

Per Astro 5 il pattern che uso:

```typescript
// src/pages/llms.txt.ts
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export async function GET() {
  const posts = (await getCollection('posts'))
    .filter(p => !p.data.draft && p.data.publishDate <= new Date())
    .sort((a, b) => +b.data.publishDate - +a.data.publishDate);

  const body = `# ${SITE.name}

> ${SITE.description}

## Servizi

- [Audit LLMO](${SITE.url}/audit-llmo) — Audit professionale 5-7gg
- [Servizi](${SITE.url}/servizi) — 4 modalità di lavoro
...

## Articoli recenti

${posts.slice(0, 20).map(p => `- [${p.data.title}](${SITE.url}/risorse/${p.id.replace('.md','')}) — ${p.data.description}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/markdown' } });
}
```

## Validator: cosa controllare

Tre strumenti gratuiti:

1. **llmstxt.org checker** — verifica conformità al pattern standard.
2. **Markdown linter** — verifica struttura Markdown valida.
3. **Manual diff** — confronta llms.txt con sitemap.xml per coerenza.

## Errori comuni nell'automazione

Tre errori che vedo nei progetti dev-side:

**1. Generazione che include draft o future-dated post.** Filter su `draft: false` E `publishDate <= now()` sempre.

**2. URL relative vs assolute.** Sempre assolute (full URL) nel llms.txt.

**3. Nessun MIME type configurato.** `Content-Type: text/markdown` (o `text/plain`) — non `application/json` o `text/html`.

## Monitoring del llms.txt

Una volta in produzione:

- **Test settimanale**: verifica che `https://tuosito.it/llms.txt` risponde 200.
- **Verifica nel `<head>` HTML**: `<link rel="alternate" type="application/llms+text" href="/llms.txt">`.
- **Crawl test**: verifica che i bot AI accedano (GPTBot, ClaudeBot user-agent test).

Per la maggior parte dei siti il llms.txt non cambia spesso una volta consolidato. Refresh ogni 30 giorni è sufficiente.

**Per integrare llms.txt nel build del tuo sito**, il retainer LLMO mensile include consulenza tecnica diretta al dev team.
