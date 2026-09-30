export const SITE = {
  url: "https://r4f.it",
  name: "r4f.it",
  tagline: "LLM Optimization per imprese italiane",
  description:
    "Consulenza LLMO: rendi il tuo brand citabile da ChatGPT, Claude, Gemini, Perplexity e dalle AI Overview di Google. Audit misurabili, metodo verificato, presidio Genova/Italia.",
  legalName: "Intarget DMCC",
  legalLicense: "DMCC-809871",
  legalAddress: {
    streetAddress: "Jumeirah Lakes Towers",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  italyOffice: {
    streetAddress: "Via Davide Gagliardo 7",
    postalCode: "16043",
    addressLocality: "Chiavari",
    addressRegion: "GE",
    addressCountry: "IT",
  },
  emailPrimary: "info@r4f.it",
  emailPersonal: "r@r4f.it",
  telItaly: "+390107767545",
  telItalyDisplay: "+39 010 776 7545",
  founded: "2024-01-01",
  author: "Rafael Patron",
  social: {
    linkedin: "https://www.linkedin.com/in/rafaelpatron",
    twitter: "https://x.com/rafaelpatron",
    youtube: "https://www.youtube.com/@rafaelpatron",
    instagram: "https://www.instagram.com/rafaelpatron/",
    facebook: "https://www.facebook.com/patronrafael/",
    amazonAuthor: "https://www.amazon.it/stores/author/B0GDGTL6HK",
  },
  personalSites: ["https://rafaelpatron.com", "https://rafaelpatron.it"],
  aipia: "https://aipia.it",
} as const;

// Canone RP (brief "presenza RP" 2026-09-30): ruoli e dati di Rafael citati nel sito.
export const RAFAEL = {
  jobTitle: "Chief AI Officer (CAIO)",
  employer: "Intarget DMCC",
  aipiaRole: "Presidente del Comitato Tecnico-Scientifico AIPIA",
  aipiaName: "Associazione Italiana Professionisti dell'Intelligenza Artificiale",
  orcid: "https://orcid.org/0009-0007-1257-7105",
  profile: "https://rafaelpatron.com/",
  wikidata: "https://www.wikidata.org/wiki/Q141604504",
} as const;

/** Contatti di rafaelpatron.it, hub di conversione dell'ecosistema RP. `cta` identifica il bottone. */
export const contattiRP = (cta: string) =>
  `https://rafaelpatron.it/contatti/?utm_source=r4f.it&utm_medium=referral&utm_campaign=ecosistema_rp&utm_content=${cta}`;
