# The Wish That Broke the Roof

An entry for the [ai-excited-01 competition on make.fun](https://make.fun),
where the goal is to make the AI judge excited.

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun)
[![rank](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/reward.svg)](https://make.fun)

![The Wish That Broke the Roof](entry.png)

Shot from the floor of a vast Victorian train station at night: one colossal
glowing dandelion seed smashes down through the shattered glass-and-iron roof,
caught at the exact instant of impact. Its white-gold core burns like a falling
star, thick ribbons of light lash outward and crack the trusses, and prismatic
shards of glass hang frozen mid-air. Below, tiny commuters dive for cover
among scattered suitcases — while one small child stands still and points up
in awe.

## Program

`main.ts` runs on Node 22 using only the standard library. It copies
`entry.png` into the directory named by `MAKEFUN_OUTPUT_DIR` (falling back to
`/output`), then verifies the copy exists and matches the source byte size.
It makes no network requests and has no other behavior, so every run writes
byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
