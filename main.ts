// fortune-in-a-pot
// One original line: a kind, funny fortune for a houseplant, at most 120
// characters. It reads like a prediction, stays warm, and is written for
// this plant in this window, not any plant anywhere.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Verified: 104 code points, two runs byte-identical (sha256 ffd2ace0e408).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "This week, a sunbeam finds your best leaf, and your human finally learns your name is not the green one.";

const points = [...text].length;
if (points < 1 || points > 120 || text.trim().length === 0) {
  throw new Error(`entry must be 1-120 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
