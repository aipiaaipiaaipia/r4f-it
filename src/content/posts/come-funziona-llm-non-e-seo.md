---
title: "Come funziona davvero un LLM e perché ottimizzare per lui non è SEO"
description: "Un Large Language Model non cerca documenti: genera risposte. Capire la differenza è il primo passo per il LLMO."
publishDate: 2024-09-15
category: llmo
tags: ["LLMO", "Fondamenti", "ChatGPT"]
---

Quando un utente fa una query su Google, il motore restituisce una lista di documenti rilevanti. Quando lo stesso utente chiede qualcosa a ChatGPT, il sistema non cerca documenti: **genera una risposta nuova**, attingendo a un mix di dati di training e — sempre più spesso — di documenti recuperati in tempo reale.

Questa differenza è la chiave di tutto il lavoro LLMO. Vediamo cosa cambia.

## SEO classica: il motore sceglie un link

Il modello SEO tradizionale è ben noto. Google indicizza il web. Quando arriva una query, l'algoritmo classifica i documenti che ritiene rilevanti e li mostra in ordine. L'utente clicca, atterra sul sito, fa quello che deve fare.

Il tuo lavoro come sito è essere **trovato e cliccato**. Tutto ruota attorno a un click che porta traffico.

## LLMO: il modello sintetizza una risposta

Con un Large Language Model il flusso cambia. L'utente chiede qualcosa. Il modello fa una di queste tre cose, spesso combinate:

1. **Risponde da training data.** Il modello ha già "imparato" il tuo brand durante l'addestramento. Se il dataset di training conteneva contenuti che parlavano di te (Wikipedia, news, forum, recensioni), il modello può citarti senza nemmeno consultare il web in tempo reale.

2. **Recupera documenti via RAG.** Modelli con accesso web (ChatGPT Plus con browse, Perplexity, Gemini) fanno retrieval in tempo reale. Cercano contenuti aggiornati, li leggono, li sintetizzano. Qui il documento singolo conta meno: conta **come il modello capisce quello che leggi**.

3. **Cita esplicitamente le fonti.** Perplexity è il caso più chiaro: ogni risposta ha citation numerate. ChatGPT con browse e Gemini stanno andando in questa direzione. La citation è la nuova "posizione SERP".

## Perché ottimizzare per LLM è diverso da SEO

Tre differenze pratiche cambiano il modo di lavorare.

**Prima differenza: la query non torna.** In SEO sai esattamente quali keyword cerca un utente. In LLMO l'utente fa una domanda lunga, conversazionale, magari mai vista prima. Lavori su **temi e contesti**, non su keyword esatte.

**Seconda differenza: la risposta è generata, non scelta.** Il modello non "sceglie il tuo articolo" come fa Google. Lo **riassume, parafrasa, estrae frammenti**. Tu non controlli più la forma della risposta, controlli i materiali che il modello userà per costruirla.

**Terza differenza: l'autorità si misura in citation rate.** In SEO conta posizionarsi in top 3 per le keyword giuste. In LLMO conta essere **citato** quando un utente chiede del tuo settore. Il citation rate è la nuova metrica.

## Cosa significa per il tuo sito, concretamente

L'ottimizzazione LLMO non sostituisce la SEO. La estende su tre direttrici nuove:

- **Schema.org più ricco**: il modello ha bisogno di capire chi sei, cosa fai, dove operi. JSON-LD strutturato (Organization, Service, FAQPage, HowTo) è quasi obbligatorio.
- **Contenuti scritti per essere citati**: paragrafi compatti, fatti verificabili, niente buzzword. Se il modello deve estrarre un frammento per citarti, vuole un frammento chiaro.
- **Entità solide**: Wikidata, Wikipedia, knowledge graph di Google. Se non esisti come entità, non esisti per il modello.

Tutti i prossimi articoli di questa serie scenderanno nei dettagli pratici di ognuno di questi punti.

**Se vuoi sapere come ChatGPT risponde sul tuo brand oggi**, l'audit LLMO base da €200 è il punto d'ingresso. Una call di un'ora, schermo condiviso, 10-15 query del tuo settore testate insieme.
