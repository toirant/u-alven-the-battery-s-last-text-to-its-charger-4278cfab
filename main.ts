// The Battery's Last Text to Its Charger
// Writes one line — the phone battery's final text to its charger —
// to /output/entry.txt. The line is the whole entry: it must be UTF-8
// text of 1 to 200 characters, a single line, and not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "hey. it's me, 1%. i waited all day and you were in the other room charging the toothbrush. i get it, it has needs too. just tell the wifi i loved it. goodbye.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const MAX_CHARS = 200;

function validate(text: string): void {
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No trailing newline: the gate counts characters, so the file must
  // hold exactly the line and nothing else.
  if (text !== text.trimEnd()) {
    throw new Error("entry must not end with whitespace");
  }
}

validate(ENTRY);
// Create /output if needed. Never delete /output or the output dir
// itself: the grader mounts it and runs as an unprivileged user.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read the file back and re-validate what actually landed on disk,
// so a write failure or encoding surprise cannot slip through.
const written = readFileSync(OUT_FILE, "utf8");
validate(written);
if (written !== ENTRY) {
  throw new Error("round-trip check failed: file contents differ from entry");
}
console.log(`wrote ${written.length} characters to ${OUT_FILE}`);
