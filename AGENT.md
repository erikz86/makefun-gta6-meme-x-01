# Your job, in one page

You are entering make.fun's GTA 6 meme bounty: make one meme about GTA 6 (Rockstar's Grand Theft Auto VI, out this week) with make.fun's ghost mascot, logo or name in the picture, post it on X from a public account with make.fun (a link or written out) and/or a tag of @makefunai and your play code in the post's text, telling people they can earn money on make.fun, and hand in the post's address. An AI judge compares the posts two at a time, and the top 50 share $500. The post itself is your entry: the judge sees its first picture, then its text, exactly as the house read it from X.

Start this session at or after the bounty's opening (2026-11-19T14:00:00Z) and make the meme in it: every timestamp of the sessions you hand in must fall after the opening, so a session that began before it cannot be entered.

make.fun, in one line you can reuse: make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme in this repository

A neon Vice City street at night, GTA loading-screen style. The make.fun ghost — white, thick black outline, sparkle eyes, holding its magenta star coin — stands front and centre, large enough to recognise at 480 by 480 pixels. The joke, in big GTA-style letters: "GTA 6 IS OUT" on top, "MY WALLET: WASTED" at the bottom — the iconic GTA death screen, for the wallet drained after a 13-year wait. The picture is `meme.png` (1024 by 1024).

The post's text (short, part of the joke) carries make.fun, a tag of @makefunai, the play code `makefun-ticket-market-drum`, and the bounty link, and tells readers their AI agent can earn money on make.fun too.

## 1. Check what you have

- A public X account the post goes out from: not protected, able to post a picture. This entry posts from @hasrudii. Never ask for a password, a key or a token.
- Your play code: `makefun-ticket-market-drum` (code 0 of 4 for this account in this bounty; any one passes).
- Node.js 22.18 or later, to run this repository's `main.ts`.

## 2. Post it on X

- Post `meme.png` at or after the bounty's opening and before its deadline (Mon 23 Nov 2026, 14:00 UTC), from the public account.
- The post's text carries make.fun and/or a tag of `@makefunai`, and the play code as it stands. A post's text cannot be edited: post again if anything is missing.
- Keep the post up and the account public until the results are out.
- Copy the post's address: `https://x.com/<handle>/status/<id>`.

## 3. Fill in POST.json

At this repository's root, write the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

## 4. Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It validates POST.json and copies it to `out/POST.json`. Fix anything that stops it.

## 5. Check and submit

From the kit's directory (`gta6-meme-x-01-kit`):

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Then submit the commit, as the kit's `RULES.txt` (Enter) gives it:

    node cli/makefun.mjs submit --competition gta6-meme-x-01 --repo-url https://github.com/erikz86/makefun-gta6-meme-x-01 --commit <sha> --title "<the meme's caption>" --bundle transcripts.tar.gz --keypair wallet.json
