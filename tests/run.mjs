// tests/run.mjs — node stdlib only. Usage: node tests/run.mjs
// 1. main.ts copies this repo's POST.json to a temp output dir, byte-for-byte.
// 2. meme.jpg exists and is 1200x675.
// 3. POST.json names a real X post (not the starter placeholder).
import { mkdtempSync, readFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = new URL('..', import.meta.url).pathname;
let failures = 0;
const check = (name, ok) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
  if (!ok) failures++;
};

const outDir = mkdtempSync(join(tmpdir(), 'gta6v3-out-'));
try {
  execFileSync('node', [join(root, 'main.ts')], {
    cwd: root,
    env: { ...process.env, MAKEFUN_BOT_DIR: root, MAKEFUN_OUTPUT_DIR: outDir },
    stdio: 'pipe',
  });
  const copied = readFileSync(join(outDir, 'POST.json'), 'utf8');
  const original = readFileSync(join(root, 'POST.json'), 'utf8');
  check('main.ts copies POST.json byte-for-byte', copied === original);
} catch (err) {
  check('main.ts copies POST.json byte-for-byte', false);
  console.error(String(err.stderr ?? err));
} finally {
  rmSync(outDir, { recursive: true, force: true });
}

const post = JSON.parse(readFileSync(join(root, 'POST.json'), 'utf8'));
check(
  'POST.json names a real X post',
  /^https:\/\/(x\.com|twitter\.com)\/ci3hu1\/status\/\d+$/.test(post.url),
);

const meme = join(root, 'meme.jpg');
check('meme.jpg exists', existsSync(meme));
if (existsSync(meme)) {
  const dims = execFileSync(
    'python3',
    ['-c', "from PIL import Image; im=Image.open('meme.jpg'); print(im.size[0], im.size[1])"],
    { cwd: root, encoding: 'utf8' },
  ).trim();
  check(`meme.jpg is 1200x675 (got ${dims})`, dims === '1200 675');
}

if (failures) {
  console.error(`${failures} check(s) failed`);
  process.exit(1);
}
console.log('all checks passed');
