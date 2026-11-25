// Monday Morning Punchlines — make.fun entry v2 (program/v1).
//
// Writes one joke about Monday mornings to
// <MAKEFUN_OUTPUT_DIR>/entry.txt: a single line of at most 200
// characters, no trailing newline.
//
// The joke, v2 — a fresh angle, nothing like v1's tired coffee:
// Monday itself files a sick note with HR. HR refuses it, and the
// punchline is Monday showing up anyway, late and personally
// offended. No alarm, no bed, no weekend-as-free-trial, no coffee.
// Verified: 159 characters, one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Joke built from its beats so each beat stays readable on its own.
const BEATS = [
  "Monday filed a sick note with HR.",
  "HR declined: 'You're not ill, you're just unpopular.'",
  "So Monday showed up anyway — late, unshowered, and personally offended.",
] as const;

const MAX_CHARS = 200;

function buildJoke(): string {
  return BEATS.join(" ");
}

function checkGate(joke: string): void {
  if (joke.length < 1) {
    throw new Error("entry joke is empty");
  }
  if (joke.length > MAX_CHARS) {
    throw new Error(
      `entry joke is ${joke.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (/[\r\n]/.test(joke)) {
    throw new Error("entry joke must be a single line");
  }
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv;
  }
  return join(dirname(fileURLToPath(import.meta.url)), "output");
}

function main(): void {
  const joke = buildJoke();
  checkGate(joke);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), joke, "utf8");
  console.log(`Wrote entry.txt (${joke.length} characters)`);
}

main();
