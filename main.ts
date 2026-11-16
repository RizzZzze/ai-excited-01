import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

async function main(): Promise<void> {
  const dir = dirname(fileURLToPath(import.meta.url));
  const source = join(dir, "entry.png");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  const dest = join(outDir, "entry.png");
  await copyFile(source, dest);
  const sourceSize = (await stat(source)).size;
  const destSize = (await stat(dest)).size;
  if (sourceSize !== destSize) {
    throw new Error(
      `entry.png copy incomplete: ${dest} is ${destSize} bytes, expected ${sourceSize} bytes`,
    );
  }
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
