// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: a
// GTA 6 meme (v3, "LAST WILL & TESTAMENT" — a will leaving everything to the poster's AI agent, which already got
// paid) posted on X from @ci3hu1 with make.fun and the play code in its text; POST.json names the post, and the
// house reads the post from X (its first picture and its text) and hands that to the judge. Nothing this program
// writes about the post is judged.
//
// POST.json holds the post's address: {"url": "https://x.com/ci3hu1/status/2124039722368717060"} — the post went
// out on 21 Nov 2026 and the address was filled in before submitting, so the starter placeholder is gone.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
