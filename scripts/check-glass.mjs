// Prebuild: il componente 21st glass-headline-hero.tsx e' usato verbatim e non si modifica mai.
// Ogni adattamento passa da props, wrapper (.r4f-glass) o CSS esterno in global.css.
// L'atteso sta qui e non solo in .tmp/glass-sha.txt: .tmp/ e' gitignored, una build Vercel da git non lo vede.
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";

const FILE = "src/components/ui/glass-headline-hero.tsx";
const EXPECTED = "e2a151b14dea0034a9309019dc1c97405fa9813bd483aa89cd1e5ef7b89af515";
const LOCAL_RECORD = ".tmp/glass-sha.txt";

const actual = createHash("sha256").update(readFileSync(FILE)).digest("hex");

if (existsSync(LOCAL_RECORD)) {
  const recorded = readFileSync(LOCAL_RECORD, "utf8").trim().split(/\s+/)[0];
  if (recorded !== EXPECTED) {
    console.error(`check-glass: ${LOCAL_RECORD} (${recorded}) non coincide con l'atteso nello script (${EXPECTED})`);
    process.exit(1);
  }
}

if (actual !== EXPECTED) {
  console.error(`check-glass: ${FILE} e' stato modificato.\n  atteso  ${EXPECTED}\n  trovato ${actual}\nIl componente non si tocca: adatta da props, wrapper o CSS esterno.`);
  process.exit(1);
}

console.log(`check-glass: sha256 invariato (${actual.slice(0, 12)}…)`);
