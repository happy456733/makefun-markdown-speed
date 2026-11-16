// Driver: reads /input/cases.json, renders each case with parse.js,
// writes /output/html.json. Paths follow MAKEFUN_INPUT_DIR / MAKEFUN_OUTPUT_DIR
// when set, defaulting to /input and /output.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const inputDir = process.env.MAKEFUN_INPUT_DIR || '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8'));
const out = [];
for (const c of cases) {
  out.push({ id: c.id, html: parse(c.markdown) });
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'html.json'), JSON.stringify(out));
