#!/usr/bin/env node
/* verifica-canone.mjs — controllo post-build del canone RP (brief "presenza RP" 2026-09-30).
   Scansiona dist/ (HTML + txt/xml): formulazioni vietate su Rafael Patron, booking esterni,
   CTA verso rafaelpatron.it senza UTM completi, title/description/canonical mancanti.
   Uso: npm run build && node scripts/verifica-canone.mjs   (exit 1 se trova errori) */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SOURCE = 'r4f.it';
const SITE = 'https://r4f.it';

const VIETATO = [
  [/calendly|cal\.com\//i, 'calendario esterno'],
  [/\bprenota(re|zione|bile)?\b|\bbook (a|an|the) (call|audit)\b/i, 'CTA di prenotazione: il calendario non esiste più'],
  [/Presidente (di |dell'|della )?AIPIA|President of AIPIA/i, 'il ruolo è Presidente del Comitato Tecnico-Scientifico AIPIA'],
  [/\b(50|52|55)\+? certificazion|certificazioni internazionali|certifications/i, 'conteggio certificazioni non verificato'],
  [/\b(tre|3) libri|three books/i, 'i libri sono quattro'],
  [/\blaurea\b|degree in/i, "UniGe: studi universitari, nessuna laurea"],
  [/Growth Hacker\b/, 'Growth Hacker non è identità corrente'],
  [/\bUNIFI\b|Universit[àa] degli Studi di Firenze|Nana Bianca/i, 'docenza non presente nel canone'],
  [/\b320 (membri|soci)|oltre 320/i, 'numero soci AIPIA superato (circa 1.080 a settembre 2026)'],
  [/6 LLM|monitorati daily/i, 'claim di monitoraggio senza base nel prodotto'],
];
// Ammessi solo come ruolo storico o fatto circoscritto (stessa frase).
const CONTESTO = [
  [/AI Program Manager/, /2019|in precedenza|prima come/i, 'AI Program Manager solo come ruolo storico'],
  [/\bSnap\b/, /ceduto/i, 'Snap Inc. solo come cessione del progetto del 2017, mai datore di lavoro'],
];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|txt|xml)$/.test(name)) files.push(p);
  }
})(DIST);

const errori = [];
const testo = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ');

for (const f of files) {
  const rel = relative(DIST, f);
  const raw = readFileSync(f, 'utf8');
  const body = rel.endsWith('.html') ? testo(raw).replace(/\s+/g, ' ') : raw;
  // Frasi: spezza su fine frase, tag e (nei txt) a capo, così il controllo di contesto resta locale.
  for (const frase of body.split(/(?<=[.!?])\s+|<[^>]+>|\n/)) {
    for (const [re, msg] of VIETATO) if (re.test(frase)) errori.push(`${rel}: ${msg} → "${frase.trim().slice(0, 120)}"`);
    for (const [re, ok, msg] of CONTESTO) if (re.test(frase) && !ok.test(frase)) errori.push(`${rel}: ${msg} → "${frase.trim().slice(0, 120)}"`);
  }
  // JSON-LD: niente jobTitle superati, niente alumniOf da laurea inesistente.
  for (const [, blocco] of raw.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let dati;
    try { dati = JSON.parse(blocco); } catch (e) { errori.push(`${rel}: JSON-LD non valido (${e.message})`); continue; }
    const s = JSON.stringify(dati);
    if (/"jobTitle":"[^"]*(Program Manager|Growth|Consulente)/.test(s)) errori.push(`${rel}: JSON-LD jobTitle non da canone`);
    if (/"alumniOf"/.test(s)) errori.push(`${rel}: JSON-LD alumniOf non ammesso (nessuna laurea)`);
  }
  // Link verso rafaelpatron.it: la pagina contatti deve portare UTM completi.
  for (const [, href] of raw.matchAll(/href="(https:\/\/rafaelpatron\.it[^"]*)"/g)) {
    const u = new URL(href.replace(/&amp;|&#x26;|&#38;/g, '&'));
    if (u.pathname.startsWith('/contatti')) {
      const q = u.searchParams;
      if (q.get('utm_source') !== SOURCE || q.get('utm_medium') !== 'referral' || q.get('utm_campaign') !== 'ecosistema_rp' || !q.get('utm_content'))
        errori.push(`${rel}: CTA senza UTM ecosistema_rp → ${href}`);
    }
  }
  // Metadata minimi e self-canonical sulle pagine HTML (404 esclusa).
  if (rel.endsWith('.html') && !/^404/.test(rel)) {
    if (!/<title>[^<]+<\/title>/.test(raw)) errori.push(`${rel}: manca <title>`);
    if (!/<meta name="description" content="[^"]+"/.test(raw)) errori.push(`${rel}: manca meta description`);
    const canonical = (raw.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    if (!canonical) errori.push(`${rel}: manca canonical`);
    else if (!canonical.startsWith(SITE)) errori.push(`${rel}: canonical fuori dominio (${canonical})`);
  }
}

if (errori.length) {
  console.error(`✗ ${errori.length} problemi:\n` + errori.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ canone RP ok su ${files.length} file di dist/`);
