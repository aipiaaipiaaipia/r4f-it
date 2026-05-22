// Generate OG images via sharp.
// Run: node scripts/generate-og.mjs
import sharp from "sharp";
import { mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "public/assets/og";
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const ogTemplate = ({ title, eyebrow, accent = "#FF5500" }) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1815" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#FAF7F0"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="14" height="630" fill="${accent}"/>
  <text x="64" y="120" font-family="JetBrains Mono, monospace" font-size="22" letter-spacing="3" fill="#6A655D" text-transform="uppercase">${eyebrow}</text>
  <foreignObject x="64" y="160" width="1080" height="340">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Bricolage Grotesque', 'Helvetica Neue', sans-serif; font-size: 88px; font-weight: 800; letter-spacing: -2.5px; color: #1A1815; line-height: 1.02; word-break: keep-all;">${title}</div>
  </foreignObject>
  <text x="64" y="580" font-family="JetBrains Mono, monospace" font-size="22" letter-spacing="2" fill="#1A1815">r4f.it</text>
  <text x="1136" y="580" font-family="JetBrains Mono, monospace" font-size="20" fill="${accent}" text-anchor="end">LLMO · AIO</text>
  <circle cx="1080" cy="120" r="44" fill="${accent}"/>
  <text x="1080" y="132" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="32" fill="#FAF7F0" text-anchor="middle" letter-spacing="-1">r4f</text>
</svg>`;

const variants = [
  { file: "og-default.png", eyebrow: "Consulenza LLMO · Italia", title: "Fatti trovare<br/>da ChatGPT.<br/>E da Gemini." },
  { file: "og-home.png", eyebrow: "Consulenza LLMO · Italia", title: "LLM Optimization<br/>per imprese<br/>italiane." },
  { file: "og-chi-sono.png", eyebrow: "Rafael Patron · LLMO", title: "20 anni di SEO.<br/>Adesso scrivo<br/>per gli LLM." },
  { file: "og-audit-llmo.png", eyebrow: "Audit LLMO · Da €200", title: "Cosa risponde<br/>l'AI sul<br/>tuo brand?" },
];

for (const v of variants) {
  const svg = ogTemplate({ eyebrow: v.eyebrow, title: v.title });
  const buf = Buffer.from(svg.replace(/<br\/>/g, "<br/>"));
  try {
    await sharp(buf, { density: 144 })
      .resize(1200, 630)
      .png({ quality: 92, compressionLevel: 9 })
      .toFile(join(OUT, v.file));
    console.log(`✓ ${v.file}`);
  } catch (e) {
    console.error(`✗ ${v.file}: ${e.message}`);
  }
}
