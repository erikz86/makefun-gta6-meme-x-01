// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
//
// The entry itself is the post on X: a GTA 6 meme (Vice City at night, the
// make.fun ghost front and centre, "GTA 6 IS OUT / MY WALLET: WASTED") posted
// from a public account with make.fun and the entrant's play code in its text.
// This program does the one thing the bounty asks of it: it hands the post's
// address to the grader by copying POST.json from the repository root into
// /output/POST.json, where the gate reads it. Nothing it writes is judged.
//
// It runs on Node 22 with the standard library only: no install, no network.
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// The post's address must be a JSON object with a url field pointing at the
// post on X, e.g. {"url": "https://x.com/<handle>/status/<id>"}. A
// placeholder or a malformed file is refused by the gate, so check it here
// and fail loudly instead of copying a bad file into /output.
function validatePostFile(path: string): void {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    fail(`could not read ${path} as JSON: ${(err as Error).message}`);
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail(`${path} must be a JSON object, got ${typeof parsed}`);
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    fail(`${path} must carry a "url" string naming the post on X`);
  }
  if (url.includes('<handle>') || url.includes('<id>')) {
    fail(`${path} still holds the placeholder address; replace it with the real post URL`);
  }
  const m = url.match(/^https?:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\S+\/status\/\d+/);
  if (!m) {
    fail(`${path} url does not look like an X post address: ${url}`);
  }
}

const source = join(BOT_DIR, POST_FILE);
const target = join(OUTPUT_DIR, POST_FILE);

validatePostFile(source);
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  fail(`could not copy ${source} to ${target}: ${(err as Error).message}`);
}
// Verify the copy landed intact before the grader reads it: read the target
// back and confirm it matches the source byte for byte.
const sourceText = readFileSync(source, 'utf8');
const copiedText = readFileSync(target, 'utf8');
if (copiedText !== sourceText) {
  fail(`${target} does not match ${source} after copy`);
}
const postUrl = (JSON.parse(copiedText) as Record<string, unknown>).url;
console.log(`main.ts: copied ${POST_FILE} to ${target} (post: ${postUrl})`);
