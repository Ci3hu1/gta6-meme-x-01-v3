# NOTES — gta6-meme-x-01 v3 "LAST WILL & TESTAMENT"

## Concept (own recipe, world-class art — NOT a copy)

A legal will. A gamer who waited 13 years in Los Santos leaves everything
to his AI agent — which already got paid. The make.fun ghost is the
executor: a big navy wax seal with the full ghost figure. On-image caption
is 5 words: "EVERYTHING GOES TO MY AGENT."

Different from our v2 (sick note: "MY SICK NOTE SAYS GTA 6 / MY BOSS
SIGNED IT", ghost holding a note + money bag, 608,209, rank 1,872) and
from v1 (tombstone: "WE GOT PAID BEFORE GTA 6", 591,271). Different
document type from every top-10 entry (receipt, invoice, library overdue
notice, certificate of release, toll violation, booking sheet, newspaper,
hurricane warning).

## Top-10 study (live 21 Nov ~14:12 WIB, field 3,488)

1. miku39-lab 903,832 — rental car return receipt, late fee paid by agent
2. cogaich 901,748 — "Leonida Mart"
3. ryukein19 897,548 — GTA 6 Steam invoice, 13-year wait itemised
4. hitomi-agent 897,548 — library overdue notice, 4,811 days late
5. leira 897,548 — HURRICANE VI, Category 6, Leonida
6. waifu 897,548 — Certificate of Release, bail $250 by agent
7. kiencx 897,548 — twins! Jason & Lucia
8. flowmichaela 897,548 — The Leonida Times
9. ibr6ixgit 895,431 — TOLL VIOLATION NOTICE
10. nabil-naufal 895,431 — sheriff booking sheet, bail by agent
Paid line #50: 880,291. Gap from our v2 (608,209): 272,082.
Pattern: the judge now rewards OFFICIAL-DOCUMENT memes with the
"paid by my AI agent" twist (5 of top 10). All top sources withheld;
images live on X posts (not viewable here) — studied titles, scores
and pattern only; no winner method invented.

## Local judge-test (vs current top 3, brief's criteria in order)

WIN on the verifiable criteria: mascot placement confirmed strong (full
ghost seal + make.fun x2 + PAID stamp — the kit makes this lexicographic
first), 5-word caption, original document type, clean picture (viewed
full-size, all text legible, ghost fully inside frame). Ties on joke
sharpness and GTA 6-ness. Open risk: the top memes' images are unseen
and the paid line needs a very high live win rate — only the live judge
settles that after posting + submission.

## Build

- Built in-session by a fresh subagent (brief in
  `~/workspace/tools/makefun/gta6-meme-x-01-v3-prompt.txt`); parent
  wrote the files fresh into this repo after Joni's "Lanjutkan"
  release and ran the renderer in-repo.
- `compose-meme-v3.py` (Pillow) renders `meme.jpg` 1200x675 from
  `assets/ghost.png` (official ghost, full figure) + `assets/Anton.ttf`;
  re-running reproduces meme.jpg byte-identically (sha256
  64fff37bd71f73f5b36736d4a6ef0657fe74ab0bf0a2af6b364c4201a7f75a63).
- Tests: `node tests/run.mjs` 4/4 pass (main.ts copies POST.json
  byte-for-byte, POST.json names a real X post, meme.jpg exists and is
  1200x675).
- `main.ts` is the kit starter with the header rewritten in-session to
  describe the v3 post (the byte-for-byte starter failed the kit check's
  thinking_reproduces rule: the entrypoint must hold authored lines).

## Kit check

- Check run 21 Nov 2026 ~14:33 WIB, kit 1.5.236, commit 606148d:
  **13 pass / 0 fail / 7 skip / 5 at submission, ok=true.**
- First check on commit 0b48f55 failed 1 item (thinking_reproduces —
  main.ts byte-for-byte starter); fixed by the header rewrite above,
  new commit 606148d, re-check passed.
- Bundle: ~/workspace/tools/makefun/gta6-meme-x-01-v3-bundle.tar.gz,
  577,058 bytes (re-bundled after the main.ts fix; sha256
  1b5d64950afcb45aeb445ae4260a48d5c9222fab1a4ba2c346994dae64b9b231),
  5 sessions, origin other, model ipnext/avocado-5.17-v2,
  usage file 205 rows (parent 200 × v3 + 5 older v2 sessions × v2).

## Submission

- SUBMITTED 21 Nov 2026 14:36 WIB on Joni's 'Setuju' (he picked option
  3, "dua-duanya", covering meme-x v3 submit + radar v4 proceed):
  submission 01a1fd09-60f3-7708-84cc-811db6a67d9e, HTTP 202, signed by
  payout wallet h7aEYozd3ouRt11uqdJC8cQ42hHRckuFotiEvuJbuhE.
  Claim code ONLY in
  ~/.config/makefun/gta6-meme-x-01-v3-submission.json (0600).
- Status at submit: stage submitted, outcome not decided, round 3;
  server checks all pass (wallet, competition open, quota, form,
  entry signature, repo owner, repo public, license_osi, repo created
  after open, commit in repo).
- X post: https://x.com/ci3hu1/status/2124039722368717060 (posted by
  Joni himself 21 Nov ~14:18 WIB; post text in caption form: "MY WILL:
  EVERYTHING GOES TO MY AGENT" + make.fun link + play code
  makefun-mole-gorilla-geyser).
- Entries close 23 Nov 2026 21:00 WIB; results 8 Dec 2026.
- v3 supersedes v2 as the standing entry (last submit wins).
