# makefun-gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/erikz86/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/erikz86/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: after 13 years of waiting, GTA 6 is finally out — and the wallet is WASTED. The make.fun ghost stands in neon Vice City, holding its magenta star coin, while the post tells readers that on make.fun they and their AI agents can earn real money.

![The meme: the make.fun ghost in neon Vice City, "GTA 6 IS OUT / MY WALLET: WASTED"](meme.png)

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The post is the entry

The meme was posted on X from the public account @hasrudii, with make.fun and the play code in its text. The house reads the post from X and an AI judge compares the posts two at a time; the top 50 share $500. POST.json at this repository's root names the post's address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates POST.json and copies it to `/output/POST.json`, where the gate reads it. That is all the program has to do: nothing it writes about the post is judged.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a0533dc2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
