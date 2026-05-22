---
title: "robots.txt per i bot AI: bloccare o permettere?"
description: "GPTBot, ClaudeBot, PerplexityBot. Quali bot AI dovresti far entrare e quali no. Decisione pratica."
publishDate: 2026-09-07T10:01:00
category: tecnico
tags: ["robots.txt", "AI Bots", "Crawler", "LLMO"]
---

Quando OpenAI ha annunciato GPTBot nel 2023, molti siti hanno preso paura e bloccato. Era la decisione sbagliata. Vediamo cosa fare adesso.

## I bot AI principali

Sette bot AI da considerare nel robots.txt:

- **GPTBot** (OpenAI): per il training del prossimo modello.
- **ChatGPT-User** (OpenAI): per il browse di ChatGPT Plus.
- **ClaudeBot / Claude-Web** (Anthropic): training + browse.
- **PerplexityBot** (Perplexity): retrieval RAG.
- **Google-Extended** (Google): training di Gemini.
- **Applebot-Extended** (Apple): training di Apple Intelligence.
- **CCBot** (Common Crawl): infrastruttura usata per training di molti modelli.

## La regola generale: permetti tutti

Per la maggior parte dei siti commerciali, **permettere tutti i bot AI è la scelta giusta**. Tre ragioni:

1. **Bloccare = invisibilità.** Se non lasci entrare GPTBot, ChatGPT non potrà citarti nel prossimo aggiornamento del modello.
2. **Il traffico organico AI è già qui.** I LLM stanno generando traffico verso siti che permettono retrieval.
3. **Il rischio "ti rubano i contenuti" è esagerato.** I LLM imparano stili e fatti, non riproducono testo letterale.

## Le eccezioni

Casi in cui ha senso bloccare alcuni bot:

- **Contenuti premium dietro paywall**: blocca tutti gli AI bot dalle pagine paywallate.
- **Database proprietari**: blocca i path API o dump database.
- **Contenuti sensibili o legali**: dove il rischio reputazionale è alto.
- **Editori news con accordi commerciali con AI vendor**: alcuni hanno deal di licensing.

## Il robots.txt che uso, esempio

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://sito.it/sitemap-index.xml
```

Esplicito è meglio di implicito. Anche se `User-agent: *` già permetterebbe tutti, dichiarare esplicitamente i bot AI segnala "li voglio".

## Cosa NON serve fare

- **Aggiungere "ai-policies.txt"**: non è ancora standard.
- **Meta tag "no-ai-training"**: non rispettato in modo coerente.
- **Iscriversi a registri privati AI**: marketing degli ultimi 12 mesi, poco effetto pratico.

## E se cambi idea?

Permettere oggi e bloccare domani è fattibile: aggiorni il robots.txt, i bot smettono di crawlare. Bloccare oggi e permettere domani: i contenuti devono ri-crawlare, ci vogliono settimane prima che ricomincino a citarti.

**Asimmetria a favore del permettere.**

Per audit del robots.txt + llms.txt, l'audit LLMO completo ha una sezione dedicata.
