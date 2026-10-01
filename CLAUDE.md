# r4f.it — Claude project memory

Sito personale di Rafael Patron, consulente LLMO/AIO. Pivot strategico AIO → LLMO mantenendo AIO come fallback.

## Stack
- Astro 5.18.x (MAI 6 — rolldown-vite incompatibile con @tailwindcss/vite v4)
- React solo per `src/components/ui/glass-headline-hero.tsx`: `@astrojs/react` **4.x** (la 7.x è per Astro 6; `astro add react` la installa comunque, va riportata a ^4.4.2)
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

## Identità Rafael — canone RP (brief "presenza RP" 2026-09-30, prevale su `.tmp/bio-research/`)
- **Chief AI Officer (CAIO) — Intarget DMCC**, da giugno 2026. AI Program Manager (ott. 2019 – giu. 2026) solo come ruolo storico.
- **Presidente del Comitato Tecnico-Scientifico AIPIA** (dal 2025) — mai "Presidente AIPIA". Soci AIPIA: circa 80 → 1.080 (set. 2025 → set. 2026), crescita non attribuita solo a Rafael.
- 20 anni tra tecnologia, trasformazione digitale e crescita. Italo-peruviano, base Chiavari.
- Patron Multimedia 2012–2017; nel 2017 un progetto digitale di quel percorso è stato ceduto a Snap Inc. (Snap NON è stato datore di lavoro).
- Formazione: MIT Professional Education No Code and Agentic AI (2026–2027, in corso), Harvard CS50 AI with Python (2023), SDA Bocconi AI in Action (2022), IED Milano corso di specializzazione + docenza 2014–2020, UniGe studi in Economia Aziendale **senza laurea**.
- **4 libri**: AIO (2023), Growth Hacking (2024), Fatti trovare da ChatGPT con Filippo Fassone (2025), Non è mai troppo tardi per l'intelligenza artificiale (2026, ASIN non ancora verificato → niente link Amazon).
- ORCID 0009-0007-1257-7105. Profilo completo: rafaelpatron.com.
- **Vietati**: conteggi certificazioni (50+/52/55), UNIFI e Nana Bianca, Google SF/Microsoft/TIM/Eni come esperienze, "Growth Hacker"/"consulente" come identità primaria, "6 LLM monitorati daily" (nessun monitoraggio nel prodotto).
- Dati centralizzati in `src/lib/site.ts` (`RAFAEL`, `contattiRP()`); controllo post-build: `npm run verifica`.
- Persona non grata permanente: Andrea Murchio / ADEL Digital.

## Funnel (ecosistema RP)
- r4f.it resta verticale LLMO/AI Search, non sito personale generalista. Nessun redirect di dominio.
- CTA di audit/call/consulenza/workshop → `contattiRP("<id_cta>")` = rafaelpatron.it/contatti/ con UTM `utm_source=r4f.it&utm_medium=referral&utm_campaign=ecosistema_rp&utm_content=<id_cta>`.
- Email/telefono/WhatsApp di r4f.it restano come canali del brand (contatti, footer). Niente Calendly: la call da €249 si concorda via email.

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

12. **Hero home = 21st "glass-headline-hero" (2026-10-01)**: `src/components/ui/glass-headline-hero.tsx` è l'originale 21st più UNA modifica autorizzata dall'operatore (prop `speed`, v. 18); l'originale intatto sta in `src/components/ui/_upstream/glass-headline-hero.orig.tsx`. `scripts/check-glass.mjs` (prebuild) verifica sha256 dell'originale, che originale + le 5 modifiche ammesse = componente (`diff -w -B`) e sha256 del componente; gli attesi sono nello script perché `.tmp/` è gitignored. Altri adattamenti solo da props, wrapper `.r4f-glass` e CSS esterno in `global.css`. KineticHeadline resta sulle altre pagine.

13. **Altezza hero = `calc(100svh - var(--r4f-header-h))`**: l'header misura 73.78px fino a 900px e 78.13px sopra, un solo valore in px non basta. Variabile 74px/78px in `global.css`.

14. **`html:has(.r4f-glass)` + body `overflow-x: clip`**: il drawer `.mobile-nav` chiuso (fixed + translateX(100%)) raddoppia lo scrollWidth sotto 900px su TUTTE le pagine (pre-esistente, la pagina scorre in orizzontale via script fino al drawer). Corretto solo sulla home per non toccare header e altre pagine; clip su entrambi perché con il solo html il body diventa scroll container e l'header sticky si stacca. Da estendere al sito quando si decide.

15. **`.r4f-glass` z-index 2**: sopra il grain fisso di `body.noise`, così il vetro resta quello della demo.

16. **Titolo hero con `font-feature-settings`/`font-variation-settings: normal`**: la maschera del vetro è disegnata su canvas, che ignora feature e assi; il DOM trasparente deve avere gli stessi glifi.

17. **Ombra di contatto su mobile**: il componente proietta l'ombra a 0.012 uv (~1,2% dell'altezza hero, ~9px a 390x844); con il titolo a 41.6px si legge come un secondo titolo. Non correggibile da fuori senza cambiare altezza o corpo prescritti.

18. **Hero più lento e più scuro (2026-10-01, `.tmp/inbox/PROMPT-r4f.md`)**: `speed={0.25}`, palette `#060504 #C94100 #9C5A41 #1A2A8C #CBBFA8`. Il componente consegnato aveva, oltre alle 5 modifiche elencate, la riga JSDoc della prop `speed` e 2 righe vuote in meno a fine file: solo commento e spazi, accettati e dichiarati. La baseline di lentezza (speed=1) è presa con la palette nuova, così il rapporto misura solo la velocità; gate in `.tmp/gate-glass-v2.mjs`.

19. **`_inbox/` in `.gitignore` + `.vercelignore` nuovo (`.tmp/`, `_inbox/`, `dist/`, `.astro/`)**: la CLI Vercel non applica `.gitignore`, quindi nella build remota Tailwind scansionava anche cartelle ignorate in locale. Il CSS di prod aveva 4 utility in più che nessuna pagina usa (elenco in `.tmp/REVIEW.md`). Non nominare classi Tailwind in questo file: Tailwind scansiona anche `CLAUDE.md` e le genera. Verifica: dopo il deploy prod serve lo stesso file CSS (stesso hash) della build locale.

## Guardrail specifici di questo sito
- NIENTE form contatti — solo mailto, tel, WhatsApp
- NIENTE Vercel Analytics al go-live (riattivabile dopo 7gg cookieless)
- NIENTE counter da 0 animati su stat tiles (legacy AI slop)
- NIENTE three.js sphere (legacy peso 600KB)
- NIENTE gradient stripe-style viola-rosa (legacy AI slop)
- Stat numerici SOLO se coerenti col canone RP (sopra)
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
- `npm run dev` — dev server :4435 (porta registrata in `~/.claude/PORT-REGISTRY.md`, non più 4321)
- `node .tmp/gate-glass.mjs [https://r4f.it]` — gate hero vetro (preflight 0–5 + 9 gate)
- `npm run build` — output statico in `dist/`
- `npm run check` — astro check (TypeScript + content collection)
- `vercel deploy --prod` — production deploy
