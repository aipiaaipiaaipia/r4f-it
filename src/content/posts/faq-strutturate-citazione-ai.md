---
title: "FAQ strutturate per essere citati dai LLM: come scriverle"
description: "Le FAQPage ben fatte sono junk-food per ChatGPT: facili da estrarre, facili da citare. Sette regole pratiche di scrittura."
publishDate: 2026-06-29T09:11:00
category: tecnico
tags: ["FAQ", "Schema.org", "Content Writing", "LLMO"]
---

Una buona pagina FAQ può alzare il citation rate di un brand del 15-25% in 60-90 giorni. È la leva tattica a impatto più rapido che esiste in ambito LLMO. Vediamo come si scrive una FAQ che funziona.

## Le sette regole

**Regola 1: domande vere, non quelle del marketing.** Le domande devono essere quelle che i clienti veramente chiedono. Fonti: AlsoAsked, People Also Ask Google, forum di settore, ticket support storici, conversazioni vere con clienti. Non quelle che il copywriter immagina.

**Regola 2: risposta concisa 40-80 parole.** I modelli AI estraggono frammenti tipicamente di 50-100 parole. Una risposta troppo lunga viene tagliata male; una troppo corta non basta. Sweet spot 40-80 parole.

**Regola 3: la risposta deve essere autosufficiente.** Niente "vedi sopra", "come spiegato nell'articolo X". Il LLM estrae il frammento isolato: deve avere senso da solo.

**Regola 4: schema FAQPage corretto.** JSON-LD con `@type: FAQPage` e ogni Q/A annidata come `Question` + `acceptedAnswer`. Senza schema, la FAQ resta solo testo.

**Regola 5: una sola FAQ per pagina è sufficiente.** Non serve duplicare. Bene una FAQ ricca sulla pagina servizio principale. Male duplicare la stessa FAQ su 10 pagine.

**Regola 6: tonalità da fact-sheet, non da marketing.** Linguaggio neutro, fatti, dati. Niente "noi siamo i migliori perché". Le risposte promozionali vengono ignorate o sintetizzate male dai modelli.

**Regola 7: aggiorna le risposte.** Le FAQ sono contenuti vivi. Quando aggiorni pricing, modalità, tempistiche — aggiorna la FAQ. Una FAQ stale può citarti con dati sbagliati.

## Quante domande mettere

Sweet spot: **6-12 domande**. Sotto le 6 manca varietà semantica per coprire l'intent. Sopra le 12 il contenuto diventa diluito e disperde il segnale.

## Esempio strutturale

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Domanda esatta come la chiede l'utente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Risposta concisa 40-80 parole, fact-based, autosufficiente."
      }
    }
  ]
}
```

E in HTML il pattern `<details><summary>` con domanda/risposta è perfetto per accessibility + SEO.

## Cosa NON includere

- Domande retoriche ("perché siamo i migliori?").
- Risposte con dati non verificabili.
- Domande con risposta troppo soggettiva ("qual è il valore aggiunto?").
- Link affiliate o promozionali.

**La FAQ del tuo settore l'hai mappata?** L'audit LLMO completo include FAQ research basata su People Also Ask + AlsoAsked + conversazioni reali dei tuoi clienti.
