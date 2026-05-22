---
title: "AI Overview di Google: come leggere i nuovi pattern di traffico"
description: "Le AI Overview hanno cambiato la SERP. Capire dove si sposta il traffico è il primo passo per non perdere posizioni."
publishDate: 2024-12-03
category: aio
tags: ["AI Overview", "Google", "Analytics", "SERP"]
---

Da marzo 2025 le AI Overview di Google sono attive anche sulle query in italiano. Per i siti italiani questo significa una cosa concreta: **il pattern di traffico è cambiato**, e Google Search Console mostra dati che tre anni fa non c'erano.

Vediamo come leggerli senza farsi prendere dal panico.

## Cosa sono le AI Overview, in pratica

L'AI Overview è il blocco di risposta AI che Google mostra in cima alla SERP per le query informazionali. Il modello (una variante di Gemini specializzata) sintetizza la risposta partendo dai documenti web e mostra una lista di fonti citate sotto.

Per l'utente, l'esperienza cambia: invece di scorrere risultati blu, legge una risposta riassunta. Per il sito tuo, cambia il comportamento di download click.

## I tre nuovi pattern di traffico

Quello che vediamo nei progetti che seguo da 12 mesi è una distribuzione del traffico che si divide in tre nuove categorie.

**Pattern 1 — Citation senza click.** Il tuo sito viene citato come fonte nell'AI Overview, ma l'utente non clicca: si accontenta del riassunto. In GSC vedi impressions stabili ma CTR in calo. Non è errore tuo: è il modello che ha "risposto al posto del click".

**Pattern 2 — Click qualificato post-AI Overview.** L'utente legge il riassunto, gli serve approfondire, clicca sul tuo link. Questi click sono **più qualificati** dei vecchi click organici: chi clicca dopo aver letto un riassunto AI sta cercando dettagli, non risposta di base. Su GSC questo si vede come CTR basso ma tasso di conversione più alto.

**Pattern 3 — Invisibilità completa.** Il tuo sito non compare nelle AI Overview, e i competitor citati ti rubano l'attenzione prima ancora che l'utente scrolli. Questo è lo scenario peggiore e va affrontato con priorità.

## Come misurare il danno (o il vantaggio)

Tre strumenti pratici per capire dove sei.

**Google Search Console — confronto YoY.** Apri Performance > Query e confronta il periodo attuale con lo stesso periodo dell'anno scorso. Se vedi calo CTR > 30% senza calo posizionamento, sospetta AI Overview. Se vedi calo impressions + posizione stabile, sospetta deranking AI Overview.

**Ricerca manuale.** Apri Google in incognito, cerca 20-30 query strategiche del tuo settore, guarda se appare un AI Overview e se ci sei citato. Sì, manuale: non esistono ancora tool affidabili 100% per il monitoraggio AI Overview automatico in lingua italiana.

**AIO-tracking dedicato.** Tool come Authoritas, Semrush, Bright Edge hanno funzionalità di AIO/SGE tracking. Non perfette ma utili per scalare il monitoring.

## Cosa fare quando sei in Pattern 3

Se non vieni citato nelle AI Overview del tuo settore, le azioni a impatto più rapido sono tre.

Primo, **scrivi una FAQ strutturata** sulla pagina principale che corrisponde alla query. Schema FAQPage + risposta concisa (40-80 parole) + dati strutturati. Le AI Overview pescano spesso da contenuti FAQ ben formattati.

Secondo, **rinforza la tua entità su Wikidata**. Se non esiste un item Wikidata per la tua azienda, creane uno. Se esiste ma è povero, arricchiscilo con sameAs, founders, founding date. Le AI Overview triangolano con il knowledge graph.

Terzo, **fai schema markup completo** sulla pagina target. Article + FAQPage + BreadcrumbList + Organization minimum. Senza schema, il modello fatica a capire chi sei e cosa offri.

## Una nota di calma

Non tutti i settori sono uguali. Sulle query commerciali pure (es. "comprare X", "prezzo X"), le AI Overview compaiono meno spesso. Sulle query informazionali (es. "come funziona X", "differenza tra X e Y"), le AI Overview dominano.

Se il tuo business genera traffico principalmente da query commerciali, il colpo è minore. Se vivi di traffico informativo top-of-funnel, è il momento di accelerare sul LLMO.

**Vuoi capire dove sei oggi?** Un audit LLMO ti dice esattamente quante delle tue query strategiche generano AI Overview e in quante di queste sei citato.
