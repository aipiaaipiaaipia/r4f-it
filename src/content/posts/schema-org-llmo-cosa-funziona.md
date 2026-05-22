---
title: "Schema.org per LLMO: cosa funziona davvero nel 2026"
description: "Non basta avere schema markup: serve quello giusto, ben strutturato, e collegato a un grafo coerente. Cinque schemi che spostano il citation rate."
publishDate: 2025-03-21
category: tecnico
tags: ["Schema.org", "JSON-LD", "Structured Data", "LLMO"]
---

Sento spesso questa frase: "abbiamo già lo schema". Poi guardo il sito e trovo un singolo `Organization` minimal con nome e URL. Tecnicamente schema markup, sì. Praticamente: niente.

Per il LLMO lo schema serve davvero. Ma serve quello giusto e ben strutturato. Vediamo cosa muove l'ago concretamente nel 2026.

## Perché lo schema conta per i LLM

I Large Language Model leggono il tuo sito come testo, ma **distinguono il testo strutturato da quello non strutturato**. Un JSON-LD ben fatto è un segnale chiaro al modello: "ecco chi sono, ecco cosa offro, ecco dove operol".

Google usa lo schema per costruire il knowledge graph. Il knowledge graph alimenta le AI Overview. Le AI Overview e i dati Wikidata alimentano i dataset di training dei modelli (almeno indirettamente). Il cerchio si chiude.

Senza schema, sei un blocco di testo ambiguo. Con lo schema giusto, sei un'entità riconoscibile.

## I cinque schema che fanno la differenza

In ordine di impatto osservato sui progetti recenti.

**1. Organization — completo e linkato.** Non solo nome e URL. Inserisci `legalName`, `identifier` (P.IVA o codice fiscale), `address` strutturato con `PostalAddress`, `sameAs` con tutti i tuoi profili social verificabili (LinkedIn, Twitter/X, Facebook), `founder`, `foundingDate`, `email`, `telephone`. Il sameAs è cruciale: collega il tuo Organization a entità note, e i modelli triangolano l'identità.

**2. Person — per chi ha un personal brand.** Schema Person con `jobTitle`, `worksFor` (linkato a Organization tramite `@id`), `alumniOf`, `knowsAbout` (lista di skill), `sameAs` esteso. Lavorando con consulenti, freelance e professionisti, questo è lo schema che sposta di più il citation rate "chi consigli per [ambito]".

**3. Service o Product, con Offer annidato.** Schema Service con `provider` linkato, `areaServed`, `serviceType`, e — quando ha senso — `offers` annidato con `price`, `priceCurrency`, `availability`, `validFrom`. Il pricing pubblico nello schema è un segnale di autorevolezza e trasparenza che gli LLM premiano.

**4. FAQPage strutturata sulla pagina target.** Schema FAQPage con domande reali del tuo settore e risposte concise (40-80 parole). Le AI Overview pescano spesso da FAQ ben formattate. Importante: le domande devono essere quelle che gli utenti veramente chiedono, non quelle che il marketing vorrebbe.

**5. BreadcrumbList — il dimenticato.** Lo schema breadcrumb è semplice ma trascurato. Aggiunge contesto gerarchico al singolo URL e aiuta i modelli a capire dove si colloca un contenuto nell'architettura del sito.

## Schema che NON spostano (almeno non come pensi)

Alcuni schema sono sovrastimati o hanno utilità marginale per LLMO:

- **Review/AggregateRating fittizi.** Schema review inventati o gonfiati sono un boomerang reputazionale e algoritmico. Meglio omettere che falsificare.
- **HowTo per ogni pagina prodotto.** HowTo funziona quando il contenuto è davvero step-by-step. Forzato, diventa rumore.
- **Article con campi mancanti.** Schema Article senza `author`, `datePublished` e `image` strutturata vale meno di zero.

## Dove sbagliano quasi tutti i siti italiani

Tre errori sistematici osservati nei progetti che audisco.

**Errore 1: schema generato dal plugin senza review.** Plugin WordPress (es. RankMath, Yoast) generano schema base ma incompleto. Lasciato così, è duplicato, conflittuale, o povero. Va sempre verificato e arricchito a mano.

**Errore 2: `@id` mancante o incoerente.** Senza `@id` espliciti che linkano gli oggetti tra loro (Person che lavora per Organization, Service offerto da Organization), lo schema è una sequenza di JSON sciolti. Il valore del grafo è proprio nei link.

**Errore 3: schema solo sull'homepage.** Schema completo su `/` e niente sulle pagine interne. Le pagine interne sono quelle che ricevono citation. Vanno strutturate anche loro.

## Come validare

Tre strumenti gratuiti che uso quotidianamente:

- **Google Rich Results Test** — verifica se Google riconosce lo schema per le rich results.
- **Schema.org Validator** — verifica la conformità formale (più stretto di Google).
- **Yandex Structured Data Validator** — utile come second opinion, spesso trova errori che Google ignora.

E sempre, sempre: **leggi il rendered HTML, non solo il sorgente**. Frameworks moderni (Next.js, Astro) possono trasformare lo schema lato server in modi non sempre prevedibili.

**Se vuoi una review schema del tuo sito**, l'audit LLMO completo include uno schema audit dettagliato con snippet JSON-LD pronti da implementare.
