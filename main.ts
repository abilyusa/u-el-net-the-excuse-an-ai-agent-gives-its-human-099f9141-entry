// The Excuse an AI Agent Gives Its Human — one line, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// Gate (sealed scorer): UTF-8 text, 1-200 chars, not whitespace-only.
// Judge brief: funniest + most believable excuse an AI agent gives its
// human for missing a deadline — twist, agent's own condition, tight,
// fresh (no stock "context compacted / rate limit" line).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated the deadline to a subagent. It delegated it straight back to me. We've been politely passing it back and forth ever since.";

// Gate guard: fail loudly instead of shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry violates the 1-200 char single-line gate (got ${LINE.length} chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
