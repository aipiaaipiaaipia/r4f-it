---
title: "llms.txt: come strutturarlo bene (e dove sbagliano quasi tutti)"
description: "Il file llms.txt è il robots.txt dell'era LLM. Vediamo cosa metterci dentro, in che ordine, e perché tanti lo compilano male."
publishDate: 2026-05-28T09:58:00
category: tecnico
tags: ["llms.txt", "AI Bots", "LLMO Tecnico"]
---

Il file `llms.txt` è diventato in 18 mesi uno standard de facto. È un Markdown strutturato che sta nella root del sito (https://tuosito.it/llms.txt) e dice ai modelli AI: "ecco la mappa del mio sito, ecco le pagine più importanti, ecco i contenuti che posso citarti".

L'idea è bella, l'implementazione spesso pessima. Vediamo perché.

## La struttura minima che funziona

Un buon `llms.txt` ha questa struttura, in questo ordine:

1. **H1**: nome del sito.
2. **Blockquote**: descrizione 1-2 frasi del cosa fai.
3. **Sezioni H2**: una per area tematica (Servizi, Risorse, Identità, Articoli).
4. **Sotto ogni H2**: lista markdown di link, ognuno con descrizione 1 riga.
5. **Sezione finale opzionale**: link a fonti esterne autorevoli su di te (Wikipedia, AIPIA, ecc.).

Niente "Welcome to our website!". Niente paragrafi promozionali. I LLM vogliono fatti strutturati.

## Errori comuni

Vedo questi quattro errori in quasi tutti gli `llms.txt` italiani che audisco.

**Errore 1: descrizione mancante.** Solo link senza una riga descrittiva. Il modello non capisce cosa offrono i contenuti senza leggerli. La descrizione di 1 riga è il punto.

**Errore 2: troppa carne al fuoco.** Mettono 200 link. Il LLM si perde. Meglio 30-50 link prioritari ben descritti, che 200 link generici.

**Errore 3: ordine casuale.** Le sezioni dovrebbero seguire la gerarchia di importanza: identità → servizi → contenuti. Non a caso.

**Errore 4: non lo aggiornano mai.** È un file vivo. Va aggiornato quando pubblichi nuovi contenuti pillar, quando cambi i servizi, quando aggiorni la bio.

## Cosa controllo nell'audit

In un audit LLMO professionale guardo:

- Esistenza del file e link nel `<head>` HTML (`<link rel="alternate" type="application/llms+text">`).
- Conformità al pattern Markdown standardizzato.
- Coerenza con il sitemap.xml.
- Aggiornamento (data ultimo refresh).
- Bilanciamento sezioni (no sovra-rappresentazione di una categoria).

**Vuoi una review del tuo llms.txt?** L'audit LLMO completo include una checklist dedicata allo stato di file llms.txt e robots.txt.
