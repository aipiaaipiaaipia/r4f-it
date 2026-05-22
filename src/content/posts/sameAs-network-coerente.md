---
title: "Il sameAs network: collegare l'identità del tuo brand sul web"
description: "Il sameAs è il glue del knowledge graph. Vediamo cosa metterci, come verificarlo, perché tanti lo sbagliano."
publishDate: 2026-10-16T11:53:00
category: tecnico
tags: ["sameAs", "Schema.org", "Knowledge Graph", "Identità"]
---

Il `sameAs` è una property dello schema.org che dichiara "questa entità è la stessa di quella su altri siti". Sembra semplice, ma è una delle leve più potenti per il LLMO.

## Cosa fa sameAs

Quando dichiari nel JSON-LD della tua Organization:

```json
"sameAs": [
  "https://www.linkedin.com/company/example",
  "https://twitter.com/example",
  "https://www.wikidata.org/wiki/Q12345"
]
```

Stai dicendo a Google e ai LLM: "tutti questi profili sono la stessa cosa di me". Il modello ora può **triangolare** informazioni tra le fonti, costruire un'immagine ricca dell'entità, citarla con sicurezza.

## I sameAs che spostano l'ago

In ordine di impatto:

1. **Wikidata** (Q-ID): se hai un item Wikidata, linkarlo è il sameAs più potente.
2. **Wikipedia**: se hai voce Wikipedia (raro per PMI), linkalo.
3. **LinkedIn Company**: la pagina aziendale ufficiale.
4. **Crunchbase**: per startup e tech.
5. **Bloomberg/Reuters**: per medie-grandi imprese.
6. **Twitter/X, Facebook, Instagram, YouTube**: account ufficiali verificati.
7. **GitHub**: per tech company.
8. **Sito personale del fondatore** (se diverso dal sito aziendale).

## Per le persone (schema Person)

Per il personal branding sameAs è ancora più importante:

- LinkedIn personale.
- Twitter/X personale (se attivo).
- Profilo Wikidata Persona (se esiste).
- Profilo Amazon autore (se hai pubblicato libri).
- Sito personale.
- YouTube channel personale.
- Instagram personale (se professionalmente rilevante).
- Profili speaker su conferenze (dove sei stato relatore).

## Gli errori più comuni

**Errore 1: link a profili abbandonati.** Un sameAs verso un profilo LinkedIn vuoto o un Twitter inattivo da 2 anni è peggio che niente. I modelli notano l'incoerenza.

**Errore 2: link al profilo personale del marketer**, non a quello del founder. Il founder è l'entità che il modello cerca.

**Errore 3: sameAs presente ma non verificato.** I link sameAs dovrebbero essere reciproci dove possibile (il tuo LinkedIn nel sito, il sito nel LinkedIn).

**Errore 4: 200 sameAs di servizi marginali.** Bastano 5-10 ben scelti. Quantità non aiuta.

## Come verificare il tuo sameAs network

Tre passi:

1. **Apri il JSON-LD dell'homepage** (browser dev tools, cerca `application/ld+json`).
2. **Verifica ogni link sameAs**: profilo esistente, attivo, coerente con identità.
3. **Cerca incoerenze**: nome diverso, descrizione diversa, indirizzo diverso tra profili.

**Per una review completa del sameAs network**, l'audit LLMO completo include una sezione "identity graph" con tutti i profili mappati e priorità di consolidamento.
