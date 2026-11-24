import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");
mkdirSync(outDir, { recursive: true });
const text = readFileSync(join(dir, "entry.txt"), "utf8");
if (!text.trim()) throw new Error("entry.txt is empty");
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
