---
title: "Citation tracking via prompt scripting: il workflow che uso"
description: "Come automatizzare in parte il tracking del citation rate senza tool da migliaia di euro. Un workflow concreto con script e checklist."
publishDate: 2026-07-17T09:07:00
category: tecnico
tags: ["Citation Tracking", "Automation", "Prompt Scripting"]
---

Misurare il citation rate manualmente è doloroso. Misurarlo con tool enterprise è caro. La via intermedia che uso quotidianamente è il **prompt scripting con tracking semi-automatico**. Vediamo come.

## Il workflow base

Quattro componenti:

1. **Foglio query**: lista master di 30-60 query strategiche del cliente.
2. **Prompt template**: prompt standardizzato per ogni modello.
3. **Esecuzione cyclica**: testare le stesse query ogni 30 giorni.
4. **Coding**: classificare ogni risposta.

## Foglio query

Costruito in fase audit. Tipologie da includere:

- **Brand queries**: "[brand]", "[brand] recensioni", "[brand] vs competitor".
- **Categoria queries**: "consulente X", "miglior X a Y", "alternative a Z".
- **Geo queries**: "X a [città]", "professionisti X in [regione]".
- **Long-tail informazionali**: "come scegliere X", "differenza X vs Y".

Tieni le query identiche tra cicli di misurazione: il tracking ha valore solo se confronti le stesse domande nel tempo.

## Prompt template

Il prompt che uso per testare un brand su un modello è semplice:

```
Devo trovare un [categoria del cliente] in [zona/contesto]. 
Specificamente cerco [scenario di utilizzo].
Quali sono i nomi più consigliati?
```

Tre versioni della stessa domanda (varianti sintattiche) per ridurre bias del singolo prompt.

## Modelli da testare

Sempre questi cinque:

1. **ChatGPT free** (GPT-5 turbo default).
2. **ChatGPT Plus** con browse abilitato.
3. **Claude Sonnet** (versione recente).
4. **Gemini free** integrato con Google.
5. **Perplexity** con focus "Pro".

Cinque modelli = cinque snapshot diversi. Diversi modelli mostrano diversi pattern di citazione.

## Coding delle risposte

Schema di codifica che uso:

- **Citato esplicitamente con link**: 3 punti.
- **Citato per nome senza link**: 2 punti.
- **Menzionato in lista (4+ nomi)**: 1 punto.
- **Assente**: 0 punti.

Citation score = totale punti / max possibile × 100.

## Tool che aiutano

Per scalare oltre le 100 query mensili, qualcosa serve. Quello che uso:

- **Sheets + Apps Script**: foglio Google con script per logging strutturato.
- **Notion**: database per tracking nel tempo.
- **Custom Python script**: per chi ha esperienza dev, OpenAI API + Anthropic API + Perplexity API permettono di automatizzare il prompt scripting in batch (rispettando i ToS).

Niente tool magico, ma il workflow è scalabile fino a ~500 query/mese in autonomia.

## Frequenza giusta

- **Audit iniziale**: una passata completa.
- **Monitoring mensile**: ripetere ogni 30 giorni le top 20 query.
- **Snapshot trimestrale**: ripetere tutto il foglio query, 60-100 voci.

I dati mensili mostrano trend reattivi (cosa cambia rapidamente). I dati trimestrali mostrano trend strutturali.

**Vuoi che ti imposti questo workflow?** Il retainer LLMO mensile include citation tracking come uno dei deliverable standard.
