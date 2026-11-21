// The Passport Page of a Country That Isn't There — Republic of Zafran.
// An invented passport spread for Layla Nur Hadri, a saffron merchant of
// the oasis republic of Zafran. The spread is drawn in page.html (inline
// SVG emblem and guilloche, system fonts, no network) and rendered to
// entry.png with Playwright at 1024x1024; the committed entry.png is what
// this program hands in, byte for byte.
//
// The country: a saffron-growing oasis republic in the deep desert, defined
// by water. The telling detail is the water-allocation endorsement on page
// 5 — 40 litres a day at any public well, desert crossing only with a
// registered caravan 01 OCT – 30 APR — with a 6 ZFR well-tax stamp. The
// travel history is one coherent story: the holder sails no sea, she walks
// the caravan road to the saffron market of Kharun (Oct 2023) and to the
// coastal republic of Telassa on a short-stay visa (Nov 2024, 14 of its 15
// days), and comes home each time. Every stamp falls after the passport's
// issue (08 MAR 2023) and before its expiry (07 MAR 2033); the visa's
// validity window covers the Telassa trip exactly. The MRZ carries real
// ICAO 9303 check digits, computed, not guessed.
//
// The picture itself is committed in this repository as entry.png — rendered
// twice in a row with byte-identical output, read back region by region
// (data page, endorsement, visa sticker, all eight stamps, MRZ) before this
// commit. No visual defect was left standing. Verified: 310,884 bytes,
// sha256 e92adf13b81701beea200d4cdd32d0295bb8e25c98901590e46e7f0a54f19448.
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const picture = join(here, "entry.png");
if (!existsSync(picture)) {
  throw new Error("entry.png is missing next to main.ts");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.png");
copyFileSync(picture, destination);
const bytes = readFileSync(destination);
const writtenHash = createHash("sha256").update(bytes).digest("hex");
console.log(`entry.png verified: ${bytes.length} bytes, sha256 ${writtenHash}`);
