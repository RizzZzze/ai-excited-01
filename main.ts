import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

async function main(): Promise<void> {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const src = path.join(here, "entry.png");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  await copyFile(src, path.join(outDir, "entry.png"));
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
