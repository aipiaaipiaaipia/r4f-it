import { SITE, RAFAEL } from "./site";

const personId = `${SITE.url}/#rafael`;
const orgId = `${SITE.url}/#org`;
const serviceId = `${SITE.url}/#service-llmo`;

export const personSchema = () => ({
  "@type": "Person",
  "@id": personId,
  name: SITE.author,
  alternateName: ["Rafael Alberto Patron Sanguineti", "Rafael Patron Sanguineti"],
  url: `${SITE.url}/chi-sono`,
  image: `${SITE.url}/assets/og/rafael-portrait.jpg`,
  jobTitle: RAFAEL.jobTitle,
  description:
    "Chief AI Officer (CAIO) di Intarget DMCC e Presidente del Comitato Tecnico-Scientifico AIPIA. 20 anni tra tecnologia, trasformazione digitale e crescita; su r4f.it lavora su LLM Optimization e AI Search. Autore di quattro libri, tra cui Fatti trovare da ChatGPT.",
  birthPlace: { "@type": "Place", name: "Perù" },
  nationality: ["Italian", "Peruvian"],
  worksFor: { "@id": orgId },
  memberOf: {
    "@type": "Organization",
    name: `AIPIA — ${RAFAEL.aipiaName}`,
    url: SITE.aipia,
  },
  knowsAbout: [
    "Large Language Model Optimization (LLMO)",
    "Artificial Intelligence Optimization (AIO)",
    "Generative Engine Optimization (GEO)",
    "Answer Engine Optimization (AEO)",
    "Schema.org structured data",
    "AI Strategy",
    "AI Governance",
    "Generative AI",
    "Growth Hacking",
    "SEO",
    "Prompt Engineering",
    "Entity Authority (Wikidata)",
    "Retrieval-Augmented Generation",
  ],
  knowsLanguage: ["it", "es", "en"],
  sameAs: [
    SITE.social.linkedin,
    SITE.social.twitter,
    SITE.social.youtube,
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.amazonAuthor,
    RAFAEL.orcid,
    ...SITE.personalSites,
  ],
});

export const organizationSchema = () => ({
  "@type": "ProfessionalService",
  "@id": orgId,
  name: SITE.legalName,
  alternateName: "r4f.it",
  legalName: SITE.legalName,
  identifier: SITE.legalLicense,
  url: SITE.url,
  logo: `${SITE.url}/assets/og/logo.png`,
  email: SITE.emailPrimary,
  telephone: SITE.telItaly,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.legalAddress.streetAddress,
    addressLocality: SITE.legalAddress.addressLocality,
    addressCountry: SITE.legalAddress.addressCountry,
  },
  hasMap: `https://maps.google.com/?q=${encodeURIComponent("Via Davide Gagliardo 7, 16043 Chiavari GE")}`,
  areaServed: ["IT", "EU", "AE"],
  founder: { "@id": personId },
  employee: { "@id": personId },
  priceRange: "€€",
  knowsAbout: ["LLMO", "AIO", "AI consulting", "SEO", "Growth Hacking"],
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: "it-IT",
  publisher: { "@id": orgId },
  author: { "@id": personId },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const llmoServiceSchema = () => ({
  "@type": "Service",
  "@id": serviceId,
  name: "Consulenza LLM Optimization (LLMO)",
  description:
    "Audit, strategia e implementazione per la visibilità su ChatGPT, Claude, Gemini, Perplexity e le AI Overview di Google.",
  provider: { "@id": orgId },
  areaServed: ["IT"],
  serviceType: "LLMO consulting",
  offers: [
    {
      "@type": "Offer",
      name: "Call iniziale di consulenza LLMO — 1 ora",
      price: "249",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/audit-llmo`,
      validFrom: "2026-05-22",
    },
    {
      "@type": "Offer",
      name: "Audit LLMO completo con roadmap — deliverable PDF, consegna 14 giorni",
      price: "1400",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/audit-llmo`,
      validFrom: "2026-05-22",
    },
  ],
});

export const buildGraph = (...nodes: unknown[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes.filter(Boolean),
});

export const localBusinessSchema = (city: string, lat?: number, lng?: number) => ({
  "@type": "LocalBusiness",
  name: `r4f.it — Consulente LLMO ${city}`,
  url: `${SITE.url}/consulente-llmo-${city.toLowerCase()}`,
  description: `Consulenza LLMO a ${city}: audit, strategia e implementazione per la visibilità su AI search.`,
  telephone: SITE.telItaly,
  email: SITE.emailPrimary,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: "IT",
  },
  ...(lat && lng
    ? { geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng } }
    : {}),
  areaServed: { "@type": "City", name: city },
  parentOrganization: { "@id": orgId },
});

export const bookSchema = (book: {
  name: string;
  description: string;
  author: string;
  datePublished: string;
  asin?: string;
  inLanguage?: string;
  abstract?: string;
}) => ({
  "@type": "Book",
  name: book.name,
  author: { "@id": personId, name: book.author },
  datePublished: book.datePublished,
  isbn: undefined,
  description: book.description,
  inLanguage: book.inLanguage ?? "it",
  bookFormat: "https://schema.org/Paperback",
  sameAs: book.asin ? `https://www.amazon.it/dp/${book.asin}` : undefined,
  abstract: book.abstract,
});

export const courseSchema = (course: {
  name: string;
  description: string;
  durationHours: number;
}) => ({
  "@type": "Course",
  name: course.name,
  description: course.description,
  provider: { "@id": orgId },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "blended",
    courseWorkload: `PT${course.durationHours}H`,
  },
});

export const articleSchema = (post: {
  title: string;
  description: string;
  publishDate: Date;
  updateDate?: Date;
  slug: string;
  category?: string;
}) => ({
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.publishDate.toISOString(),
  dateModified: (post.updateDate ?? post.publishDate).toISOString(),
  author: { "@id": personId, name: "Rafael Patron" },
  publisher: { "@id": orgId },
  mainEntityOfPage: `${SITE.url}/risorse/${post.slug}`,
  inLanguage: "it",
  articleSection: post.category,
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
