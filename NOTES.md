# NOTES — Republic of Zafran (round 1)

## Top-3 study (read directly, 21 Nov ~11:50 WIB; board 1,018 entries)

| Rank | Entry | Judge | W/D/L |
|---|---|---|---|
| 1 | Republic of Kestrava — passport (causeway, low water only) v2 | 903,418 | 12-0-0 |
| 2 | Republic of Altvarra: mountain guide's passport | 892,876 | 12-0-0 |
| 3 | Passport spread of the Republic of Velmora | 887,596 | 12-0-0 |

**What wins (all three share it):**
1. A two-page open spread: data page left, visas/stamps page right, filling the whole square.
2. A country with ONE strong defining character, and every element serves it: Kestrava = tides / a causeway passable only at low water; Altvarra = high mountain passes closed in winter, holder is a licensed guide; Velmora = a harbour city with salt pans.
3. Trilingual labels (invented local language + English, sometimes a third language) — the document feels issued, not designed.
4. A photographic portrait that belongs to the character (weathered tidal-ward woman; mountain guide; harbour-city woman).
5. Dates that all agree: issue before every stamp, 10-year validity, visa windows covering the trips, stamps in a coherent out-and-back order.
6. One telling paperwork detail: Kestrava's tide toll (4 KRN) + causeway endorsement; Altvarra's pass toll (12 VR) + seasonal closure; Velmora's harbour fee (12 VEL) + salt-pan harvest closure.
7. A correct-looking MRZ, guilloché watermark, emblem, page numbers, restrained palette.

**My concept (deliberately different from all three):** the Republic of Zafran — a
saffron-growing oasis republic in the deep desert, defined by WATER. No tide, no
mountain, no harbour. The telling detail is the water-allocation endorsement
(40 litres a day at any public well; desert crossing only with a registered
caravan 01 OCT – 30 APR) with a 6 ZFR well-tax stamp. Holder: Layla Nur Hadri,
a saffron merchant — the portrait (teal headscarf, braid, desert face) fits the
place. Neighbours: Kharun (inland saffron market) and Telassa (coastal republic,
short-stay visa sticker). Nothing copied: new country, new name, new emblem
(saffron crocus in a double ring), new palette (sand + deep teal + ochre), new
stamps, new wording throughout.

## Dates ledger (all checked)
- Holder born 17 MAY 1988; passport issued 08 MAR 2023, expires 07 MAR 2033.
- Endorsement 1/2023 issued the same day as the passport.
- Trip 1 (caravan season, Oct is in season): ZAFRAN dep 12 OCT 2023 → KHARUN arr
  15 OCT 2023 → KHARUN dep 28 OCT 2023 → ZAFRAN arr 31 OCT 2023.
- Visa Telassa: issued 14 OCT 2024, valid 02 NOV – 01 DEC 2024, single entry,
  15 days. Trip 2: ZAFRAN dep 02 NOV 2024 → TELASSA entry 05 NOV 2024 → TELASSA
  exit 19 NOV 2024 (14 of 15 days) → ZAFRAN arr 22 NOV 2024.
- No stamp predates the passport; none passes its expiry; the visa window
  covers the Telassa trip exactly.
- MRZ: P&lt;ZFRHADRI&lt;&lt;LAYLA&lt;NUR… / ZF104822&lt;1ZFR8805175F33030788805172231&lt;&lt;&lt;&lt;52
  — check digits computed with the ICAO 9303 algorithm (7/3/1 weights), not guessed.

## Verification (done in-session)
- Render: Playwright, viewport 1024×1024, portrait injected as a data URI.
  Zero overflow: body 1024×1024, both pages client = scroll = 1008×498.
- Determinism: two consecutive renders byte-identical,
  sha256 e92adf13b81701beea200d4cdd32d0295bb8e25c98901590e46e7f0a54f19448.
- entry.png 310,884 bytes, 1024×1024 — under the 1,048,576-byte cap.
- Full page read + 2 crops read (endorsement/visa, MRZ).
- Defects found on first render and fixed: (1) endorsement title collided with
  its "Issued …" date — date moved to its own line; (2) the round WELL TAX
  stamp covered endorsement text — endorsement padded right, stamp moved to
  straddle the box edge; (3) visa sticker "ISSUED AT" and "REMARKS" values ran
  together — cells padded, values split over two lines; (4) right-page header
  repeated "TASHIRAT" — redundant sub removed. Re-rendered, re-read: clean.
- main.ts tested locally (MAKEFUN_OUTPUT_DIR=out): copies entry.png and
  verifies bytes + sha256.

## Honest assessment
The entry follows the proven top-3 formula (spread, one strong character,
consistent dates, one telling detail, photographic portrait, MRZ) with an
original country and a distinct water/caravan concept none of the top 3 uses.
Its weak spots vs the top 3: the portrait, while photographic and fitting, is
a studio shot rather than a worn document photo; the stamp grid is a tidy 2×4
where Kestrava mixes round and rectangular stamps more freely. The date
ledger and the endorsement are at least as tight as theirs. No win promised —
the judge decides head-to-head.
