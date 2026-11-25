import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "I can stop time — for exactly one second, once, and I wasted it on a sneeze.";

// Gate: /output/entry.txt must be UTF-8, 1-140 chars, not only whitespace,
// single line.
if (entry.length < 1 || entry.length > 140) throw new Error("gate: length");
if (!entry.trim()) throw new Error("gate: blank");
if (entry.includes("\n")) throw new Error("gate: not one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
