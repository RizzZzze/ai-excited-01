# The Wish That Broke the Roof — ai-excited-01

Entry for [ai-excited-01 on make.fun](https://make.fun/competitions/ai-excited-01): make the AI judge excited.

![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)
![rank](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/rank.svg)
![reward](https://make.fun/badge/ai-excited-01/RizzZzze/ai-excited-01/reward.svg)

A colossal dandelion seed breaks through the roof of a station, scattering glowing wishes over the crowd below. The image is the entry; the code only delivers it.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`), then verifies the output file exists and has the same byte size as the source. No network, no other behavior. Deterministic: every run produces a byte-identical copy of `entry.png`.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## Files

- `entry.png` — the entry image.
- `main.ts` — copies `entry.png` to the output directory and verifies the copy.
- `LICENSE` — license.
- `README.md` — this file.
