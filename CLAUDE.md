# r4f.it — Claude project memory

Sito personale di Rafael Patron, consulente LLMO/AIO. Pivot strategico AIO → LLMO mantenendo AIO come fallback.

## Stack
- Astro 5.18.x (MAI 6 — rolldown-vite incompatibile con @tailwindcss/vite v4)
- Tailwind v4 via `@tailwindcss/vite` (no PostCSS plugin)
- Tokens custom in `src/styles/global.css` con `@theme`
- Vercel static deploy
- Repo GitHub privato `aipiaaipiaaipia/r4f-it`
- Content collection Astro per articoli editoriali drip-scheduled

## Domain & dati legali
- Dominio: r4f.it (apex), www → 301 apex
- Titolare: **Intarget DMCC** — Dubai, JLT (Jumeirah Lakes Towers) — DMCC-809871
- Email principale: `info@r4f.it`
- Email personale Rafael: `r@r4f.it`
- Tel Italia: +39 010 776 7545 (Chiavari landline)
- Indirizzo Italia: Via Davide Gagliardo 7, 16043 Chiavari (GE)
- Dati legali compaiono SOLO in footer + privacy/cookie policy — MAI in hero/heading
- **NIENTE** "Crafted with ♥ in Dubai" o derivati

## Identità Rafael (verificata, vedi `.tmp/bio-research/rafael-verified.md`)
- Italo-**peruviano** (NON argentino come dice il brief globale operatore — verifica WebSearch ha confermato)
- 20+ anni esperienza digitale (non 16+ — il legacy diceva 16+ ma le fonti pubbliche danno 20+)
- AI Program Manager presso Intarget DMCC (dal 2019)
- Founder Patron Multimedia (Chiavari, dal 2012)
- **Presidente del Comitato Tecnico-Scientifico AIPIA** (eletto giugno 2025) — non "Presidente AIPIA" tout court
- 3 libri Amazon verificati (vedi `.tmp/bio-research/rafael-verified.md` per ASIN aggiornati)
- Docenze: IED Milano (6+ anni), UNIFI, Nana Bianca
- 50+ certificazioni
- Sede: tra Italia e UAE (non solo UAE)
- Persona non grata permanente: Andrea Murchio / ADEL Digital (legacy clean confermato dal grep)

## Pivot LLMO → vincoli copy
- **Home, hero, H1, meta, llms.txt** → LLMO-primary
- `/audit-aio` → preservata identica al legacy (mantieni traffico residuo) ma con nuovo design system
- `/audit-llmo` → hub primario
- `/consulente-llmo-{genova,milano,italia}` → pillar geo (white space Liguria confermato dal market report)
- Cross-reference AIO ↔ LLMO sempre con framing: "AIO è il termine generico, LLMO è l'applicazione concreta sui Large Language Models"
- Non bocciare AIO — è valido, è il termine famiglia

## Design system — direzione "kinetic editorial"
- Palette warm off-white #FAF7F0 + magenta #DB2777 + ink #1A1815
- Display: **Bricolage Grotesque Variable** (axes wght+wdth+opsz, per KineticHeadline morphing)
- Body: **Albert Sans Variable** (sostituito Switzer che non è su fontsource)
- Mono: **JetBrains Mono Variable** (sostituito Departure Mono che non è su fontsource)
- Vietati: Inter, Fraunces, Geist, Mona Sans, Plus Jakarta Sans, Space Grotesk, Recoleta, Instrument Sans, Roboto, Open Sans, Lato, Poppins, Arial

## Decisioni autonome prese durante build

1. **Switzer → Albert Sans, Departure Mono → JetBrains Mono**: i font del brief non esistono su fontsource. Albert Sans è geometric grotesque variabile (vibe simile a Switzer), JetBrains Mono Variable copre l'esigenza di un mono tecnico distintivo. Banditi font legalese OK.

2. **"italo-argentino" → "italo-peruviano"**: il brief operatore globale dice argentino, la verifica WebSearch conferma origine peruviana (nato Perù, trasferito Liguria a 3 anni, cresciuto Chiavari). Brief progetto-specifico ha precedenza sul brief globale per fatto bio.

3. **"16+ anni" → "20+ anni"**: legacy dice 16+, fonti pubbliche danno 20+ (più conservativo non è più aggressivo, è la versione verificata). Allineato a uso che fa Rafael nelle interviste stampa 2025.

4. **"Presidente AIPIA" → "Presidente del Comitato Tecnico-Scientifico AIPIA"**: ruolo esatto eletto giugno 2025. Il brief operatore lo cita correttamente; il legacy del sito usava la formula impropria "presidente AIPIA tout court".

5. **`/aio-ecommerce` + `/aio-professionisti` legacy → folded come sezioni in `/servizi`**: il brief MVP lista 17 pagine senza questi sotto-servizi. Redirect 301 verso ancore `/servizi#ecommerce` e `/servizi#professionisti`.

6. **`/chi-siamo` → `/chi-sono`**: singolare coerente con tu informale. 301 redirect.

7. **`/glossario` legacy → folded in `/risorse` + articolo dedicato in editoriale**: contenuto migrabile in un long-form citabile, riduce orfane.

8. **`/faq` legacy → folded in `/audit-llmo#faq` con FAQPage schema**: massimizza schema density sulla pagina conversione.

9. **Tel ufficiale sul sito**: usa +39 010 776 7545 (Chiavari landline da brief), il +39 388 730 8627 del legacy mobile resta in archivio ma non viene esposto.

10. **Pricing audit**: tengo €249 base + €1.400 completo come da brief progetto. Il market research suggerisce €1.200 ma il brief è esplicito su entry-low. Da rivedere insieme.

11. **404 design**: KineticHeadline morpha "404" ↔ "NOPE" ↔ "MEH" + path richiesto in mono. Memorabile, fits direzione estetica.

## Guardrail specifici di questo sito
- NIENTE form contatti — solo mailto, tel, WhatsApp
- NIENTE Vercel Analytics al go-live (riattivabile dopo 7gg cookieless)
- NIENTE counter da 0 animati su stat tiles (legacy AI slop)
- NIENTE three.js sphere (legacy peso 600KB)
- NIENTE gradient stripe-style viola-rosa (legacy AI slop)
- Stat numerici SOLO se verificati in bio-research
- Cookie banner minimal 1-liner anche se zero tracker
- AIPIA citata SEMPRE come credenziale italiana di Rafael, MAI come ente del mercato target
- Anti-Murchio check: grep clean confermato nel legacy

## File chiave generati
- `.tmp/discovery/legacy-inventory.md` — inventory legacy
- `.tmp/discovery/legacy-copy.md` — copy estratto riusabile
- `.tmp/discovery/url-mapping.md` — redirect map
- `.tmp/discovery/llmo-market-report.md` — competitor analysis 2.976 parole
- `.tmp/bio-research/rafael-verified.md` — bio verificata (PRIORITÀ per /chi-sono, /libri, /aipia)

## Comandi rapidi
- `npm run dev` — dev server :4321
- `npm run build` — output statico in `dist/`
- `npm run check` — astro check (TypeScript + content collection)
- `vercel deploy --prod` — production deploy
