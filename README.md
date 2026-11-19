# 19 November 2026 — The World in One Day

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/c/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Riaking89/news-image-20261119-ria/rank.svg)](https://make.fun/c/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Riaking89/news-image-20261119-ria/reward.svg)](https://make.fun/c/news-image-20261119)

An entry for the [make.fun competition "Sum up 19 November's world news in one image"](https://make.fun/c/news-image-20261119): a program that writes one 1024×1024 image of Thursday 19 November 2026 to `/output/entry.png`.

## What the image shows

A newspaper front page for the day, drawn with code. Every story was reported on 19 November 2026:

- **Trump, Xi & Putin meet in Shenzhen** — first-ever three-way talks; Ukraine, Iran and nuclear arms on the table.
- **Anthropic's $81.3bn record IPO** — the largest debut ever; shares start trading today on Nasdaq as ANT, priced at $83.
- **UN court rules on Myanmar** — the world court delivers its Rohingya genocide judgment, seven years after The Gambia brought the case.
- **Kerch Bridge hit a third time** — an overnight strike targets the rail span; traffic halted again.
- **Israel's Gaza raid past the line** — the first ground operation beyond the Yellow Line since the ceasefire.
- Also: NASA confirms Voyager 1 is a light-day out, GTA VI launches to 99/100 reviews, and a Van Gogh sells for a record $190.4M.

## How it runs

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it to `/output/entry.png` — no network, no randomness, so both runs write identical bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
