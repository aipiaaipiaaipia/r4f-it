# r4f.it — Project brief

## Cliente
Rafael Patron — consulente LLMO/AIO, AI Program Manager, Presidente Comitato Tecnico-Scientifico AIPIA, autore di 3 libri.

## Obiettivo del sito
Biglietto da visita personale. Conversione: email a `r@r4f.it` / audit gateway. Posizionamento: autorità verificabile sul tema LLMO in Italia.

## Mercato target
1. **Genova/Liguria** (primaria — white space confermato dal market report, nessun consulente LLMO posiziona qui)
2. **Milano/Lombardia** (secondaria)
3. **Resto Italia** (terziaria)

PMI italiane, professionisti, ecommerce, settori manifattura/nautica/turismo/vinicole (verticali Liguria).

## USP unica
"LLMO per PMI italiane. Audit misurabili, citation rate certificato, metodo del Presidente del Comitato Tecnico-Scientifico AIPIA."

Tre leve irreplicabili:
1. Credenziali AIPIA verificabili + 3 libri pubblicati Amazon
2. Pricing trasparente fascia entry (€200 audit base / €800 audit completo)
3. Presidio Genova/Liguria geo-locale

## Vincoli editoriali
- Italiano tu informale (settore creativo/digitale)
- Frasi 12-25 parole
- Zero filler ("in conclusione", "in sintesi")
- Zero hedge in copy commerciale
- Zero marketing-speak vietato (vedi lista in CLAUDE.md operatore globale)
- Zero claim numerici inventati
- AIPIA = credenziale italiana di Rafael, mai ente di mercato

## Vincoli tecnici
- Astro 5.18.x + Tailwind v4 (mai Astro 6)
- Vercel static deploy
- Zero JavaScript framework heavy
- Zero form (solo mailto/tel/whatsapp)
- Zero tracker al go-live
- Performance Lighthouse target >90 mobile + desktop

## Pivot strategico AIO → LLMO
- LLMO è il termine in crescita (finestra 6-9 mesi white space)
- AIO resta valido come termine generico/famiglia
- Cross-reference AIO ↔ LLMO senza bocciare nessuno dei due
- `/audit-aio` preservato per traffico residuo
- `/audit-llmo` nuovo hub primario

## Pagine MVP (17)
1. `/` (home — LLMO primary)
2. `/servizi`
3. `/metodo`
4. `/chi-sono`
5. `/audit-llmo` (hub primario)
6. `/audit-aio` (preservato legacy)
7. `/consulente-llmo-genova` (pillar geo)
8. `/consulente-llmo-milano` (pillar geo)
9. `/consulente-llmo-italia` (pillar geo)
10. `/formazione`
11. `/aipia`
12. `/libri`
13. `/risorse` (hub articoli)
14. `/contatti`
15. `/privacy-policy`
16. `/cookie-policy`
17. `/404` (custom kinetic)

+ sistema editoriale drip-scheduled: 6 backfill + 20 queued futuri (cron GitHub Actions → Vercel deploy hook)

## Dati legali (footer + privacy/cookie SOLO)
- Intarget DMCC — Dubai, JLT — DMCC-809871
- Ufficio Italia: Via Davide Gagliardo 7, 16043 Chiavari (GE)
- Tel: +39 010 776 7545
- Email: info@r4f.it, r@r4f.it

## Anti-pattern (mai violare)
- Niente "Crafted with ♥ in Dubai"
- Niente Andrea Murchio / ADEL Digital (persona non grata permanente)
- Niente three.js sphere hero (legacy aboliti)
- Niente counter da 0 animati
- Niente font in lista vietati
- Niente gradient stripe-style
