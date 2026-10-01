// Prebuild: glass-headline-hero.tsx e' l'originale 21st piu' UNA modifica locale autorizzata
// dall'operatore il 2026-10-01 (prop opzionale `speed`). Nient'altro si tocca: ogni adattamento
// passa da props, wrapper (.r4f-glass) o CSS esterno in global.css.
//
// Tre controlli, ognuno exit(1):
//   1. _upstream/glass-headline-hero.orig.tsx ha ancora lo sha256 della release 21st;
//   2. originale + le 5 modifiche di ALLOWED == componente (spazi e righe vuote ignorati,
//      come `diff -w -B`): qualunque altra differenza ferma la build;
//   3. il componente ha lo sha256 atteso.
// Il 2 regge anche se qualcuno aggiorna lo sha del 3 senza guardare cosa ha cambiato.
// Gli attesi stanno qui e non solo in .tmp/glass-sha.txt: .tmp/ e' gitignored, una build Vercel da git non lo vede.
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";

const FILE = "src/components/ui/glass-headline-hero.tsx";
const UPSTREAM = "src/components/ui/_upstream/glass-headline-hero.orig.tsx";
const EXPECTED = {
  [FILE]: "a5212e6e4061e0c91cf23c164ee18c09885f21c4f5ef286ed1f1335f17fae2e7",
  [UPSTREAM]: "e2a151b14dea0034a9309019dc1c97405fa9813bd483aa89cd1e5ef7b89af515",
};
const LOCAL_RECORD = ".tmp/glass-sha.txt";

// Le sole modifiche ammesse rispetto all'originale, ognuna ancorata a righe che nell'originale compaiono una volta sola.
const ALLOWED = [
  {
    id: "a) commento di testa",
    before: [" * WebGL2, React is the only import. Without WebGL2 the headline simply shows"],
    insert: [
      " * Local change (r4f.it): optional `speed` prop scales the field and light drift; everything else is the 21st.dev original.",
      " *",
    ],
  },
  {
    id: "b) prop speed nel tipo",
    after: ["  className?: string"],
    insert: [
      "  /** Speed of the colour field and of the drifting light: 1 is the original pace, 0.25 a quarter of it. */",
      "  speed?: number",
    ],
  },
  {
    id: "c) default nella destrutturazione",
    after: ['  className = "",'],
    insert: ["  speed = 1,"],
  },
  {
    id: "d) live include speed",
    replace: ["  const live = React.useRef({ palette, title })", "  live.current = { palette, title }"],
    insert: ["  const live = React.useRef({ palette, title, speed })", "  live.current = { palette, title, speed }"],
  },
  {
    id: "e) tempo scalato nel loop",
    replace: ["      if (animating()) time += dt"],
    insert: ["      if (animating()) time += dt * Math.max(0, live.current.speed)"],
  },
];

const fail = (msg) => {
  console.error(`check-glass: ${msg}\nIl componente non si tocca: adatta da props, wrapper o CSS esterno.`);
  process.exit(1);
};
const sha = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");
const norm = (line) => line.replace(/\s+/g, "");

for (const path of [FILE, UPSTREAM]) {
  if (!existsSync(path)) fail(`${path} non esiste.`);
}

if (existsSync(LOCAL_RECORD)) {
  for (const row of readFileSync(LOCAL_RECORD, "utf8").trim().split("\n")) {
    const [recorded, path] = row.trim().split(/\s+/);
    if (!(path in EXPECTED)) fail(`${LOCAL_RECORD} cita ${path}, che lo script non conosce.`);
    if (recorded !== EXPECTED[path]) fail(`${LOCAL_RECORD} (${recorded}) non coincide con l'atteso nello script per ${path} (${EXPECTED[path]}).`);
  }
}

// 1. originale 21st intatto
const upstreamSha = sha(UPSTREAM);
if (upstreamSha !== EXPECTED[UPSTREAM]) {
  fail(`${UPSTREAM} non e' piu' l'originale 21st.\n  atteso  ${EXPECTED[UPSTREAM]}\n  trovato ${upstreamSha}`);
}

// 2. originale + modifiche ammesse == componente
const lines = readFileSync(UPSTREAM, "utf8").split("\n");
const indexOf = (seq, id) => {
  const at = [];
  for (let i = 0; i + seq.length <= lines.length; i++) {
    if (seq.every((s, k) => norm(lines[i + k]) === norm(s))) at.push(i);
  }
  if (at.length !== 1) fail(`ancora di "${id}" trovata ${at.length} volte nell'originale (serve 1).`);
  return at[0];
};
const edits = ALLOWED.map((m) => {
  if (m.before) return { id: m.id, at: indexOf(m.before, m.id), drop: 0, insert: m.insert };
  if (m.after) return { id: m.id, at: indexOf(m.after, m.id) + m.after.length, drop: 0, insert: m.insert };
  return { id: m.id, at: indexOf(m.replace, m.id), drop: m.replace.length, insert: m.insert };
});
for (const e of [...edits].sort((x, y) => y.at - x.at)) lines.splice(e.at, e.drop, ...e.insert);

const significant = (all) => all.map((l, i) => ({ n: i + 1, l: norm(l) })).filter((x) => x.l !== "");
const want = significant(lines);
const got = significant(readFileSync(FILE, "utf8").split("\n"));
for (let i = 0; i < Math.max(want.length, got.length); i++) {
  if (want[i]?.l !== got[i]?.l) {
    fail(
      `${FILE} differisce dall'originale oltre le ${ALLOWED.length} modifiche ammesse.\n` +
        `  prima differenza: componente riga ${got[i]?.n ?? "EOF"} "${got[i]?.l ?? ""}"\n` +
        `  atteso (originale + modifiche): "${want[i]?.l ?? "EOF"}"`,
    );
  }
}

// 3. sha256 del componente
const actual = sha(FILE);
if (actual !== EXPECTED[FILE]) {
  fail(`${FILE} e' stato modificato.\n  atteso  ${EXPECTED[FILE]}\n  trovato ${actual}`);
}

console.log(
  `check-glass: originale 21st intatto (${upstreamSha.slice(0, 12)}…), diff = solo ${ALLOWED.length} modifiche ammesse, sha256 componente ${actual.slice(0, 12)}…`,
);
