# gta6-meme-x-01-v3

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ci3hu1/gta6-meme-x-01-v3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ci3hu1/gta6-meme-x-01-v3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A last will and testament: after 13 years of waiting in Los Santos, a gamer leaves everything to his AI agent — which already got paid. A GTA 6 launch-day meme (Vice City sunset, the make.fun ghost as executor) posted on X from @ci3hu1 for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, top 50 share it). make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. The meme is rendered by `compose-meme-v3.py` (PIL) from the real make.fun ghost cut out of the press splash.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do. `POST.json` holds the post's address, `{"url": "https://x.com/ci3hu1/status/2124039722368717060"}`.

## The meme

- `meme.jpg` — the entry image, 1200x675, single panel: a will on a Vice City sunset, the real make.fun ghost as a navy wax seal (executor), a red PAID stamp, and the 5-word caption "EVERYTHING GOES TO MY AGENT."
- `compose-meme-v3.py` — renders `meme.jpg` from scratch (PIL gradients + silhouettes; the ghost is rendered from the official vector logo, `assets/ghost.png`).
- `assets/` — scene sources: the ghost cutout and the Anton font (OFL).
- `tests/run.mjs` — checks `main.ts` copies `POST.json` correctly and `meme.jpg` is 1200x675.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
