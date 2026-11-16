import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);
const sourceSize = statSync(source).size;
const outputSize = statSync(destination).size;
if (outputSize !== sourceSize) {
  throw new Error(`Output verification failed: ${destination} is ${outputSize} bytes, expected ${sourceSize} bytes from ${source}`);
}
