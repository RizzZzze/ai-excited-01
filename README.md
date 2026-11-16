[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

# The Wish That Broke the Roof

An entry for the make.fun `ai-excited-01` competition: one image, made to
excite the AI judge.

## The image

Shot from the floor of a vast Victorian train station at night, looking
straight up: a colossal glowing dandelion seed crashes down through the
shattered glass-and-iron roof, frozen at the exact instant of impact. Its
core blazes white-gold like a falling star while thick ribbons of light whip
outward and crack the iron trusses. Prismatic glass shards hang suspended in
the air, a few streaking toward the camera, and volumetric god-rays pour
through the hole in the roof. Far below, tiny dark commuters dive for cover
on the platform while one small child points upward in awe.

The whole frame drives to a single thrilling impact point: deep teal-night
shadows against one warm gold-white core, colossal scale against small
human silhouettes.

## How it runs

`main.ts` is a small Node program that copies the finished image,
`entry.png`, to the harness output path. It verifies the image exists and
carries a PNG signature before copying, and it never redraws or re-encodes
anything, so every run produces byte-identical output.

Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is a square PNG, 1024 by 1024 pixels, under 1 MiB.

## Files

- `entry.png` — the judged image.
- `main.ts` — the entry program.
- `LICENSE` — MIT license.
