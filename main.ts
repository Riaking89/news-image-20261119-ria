// news-image-20261119 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a front page summing up
// Thursday 19 November 2026 — the first-ever Trump-Xi-Putin trilateral in
// Shenzhen, Anthropic's record $81.3bn IPO, the UN court's Rohingya
// genocide judgment on Myanmar, the third Kerch Bridge strike in a week,
// and Israel's first Gaza ground raid past the Yellow Line since the
// ceasefire, plus the day's other stories.
// The program writes that image, byte for byte, to /output/entry.png
// (or $MAKEFUN_OUTPUT_DIR outside the grader). No network, no randomness,
// so both runs write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const image = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), image);
