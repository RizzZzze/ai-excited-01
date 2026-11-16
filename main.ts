// The Wish That Broke the Roof — ai-excited-01 entry driver.
//
// The repository holds the finished image next to this program. The only
// job here is to place an exact copy of it at the harness output path so
// the judge sees precisely the bytes this repository carries. Nothing is
// drawn, resized, or re-encoded at run time: the run is a pure copy, which
// keeps repeated runs byte-identical.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(repoRoot, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Guard: fail loudly instead of shipping a missing or non-PNG payload.
if (!existsSync(sourceImage)) {
  throw new Error(`missing entry image: ${sourceImage}`);
}
const header = readFileSync(sourceImage).subarray(0, 8);
const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
if (!pngMagic.every((byte, index) => header[index] === byte)) {
  throw new Error("entry image is not a PNG file");
}

copyFileSync(sourceImage, join(outputDir, "entry.png"));

const written = statSync(join(outputDir, "entry.png")).size;
console.log(`wrote entry.png (${written} bytes)`);
