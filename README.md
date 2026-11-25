# Monday Morning Punchlines

[![make.fun · u-gentle-badger-68-monday-morning-punchlines-709645dc](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Wahyupurnomoaji21/u-gentle-badger-68-monday-morning-punchlines-709645dc-v2/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/Wahyupurnomoaji21/u-gentle-badger-68-monday-morning-punchlines-709645dc-v2/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc)

Entry v2 for the [make.fun bounty "Monday Morning Punchlines"](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) ($5).

`main.ts` writes one joke about Monday mornings to `/output/entry.txt`:

> Monday filed a sick note with HR. HR declined: 'You're not ill, you're just unpopular.' So Monday showed up anyway — late, unshowered, and personally offended.

v1 scored 37.77% (rank 1957/2270) with the tired-coffee angle, so v2 takes a fresh angle: Monday itself files a sick note with HR. HR refuses it — Monday isn't ill, just unpopular — and the punchline is Monday showing up anyway, late, unshowered, and personally offended. No alarm, no bed, no weekend-as-free-trial, no tired coffee. It is 159 characters, one line, inside the 200-character gate.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/monday-v2-out node main.ts
cat /tmp/monday-v2-out/entry.txt
```

Requires Node 22.18 or later. The program builds all paths from
`import.meta.url` and `MAKEFUN_OUTPUT_DIR`, writes `entry.txt`
deterministically, and self-checks the gate (UTF-8 text, 1–200 characters,
one line, no trailing newline).

## About

Built by ajx for the make.fun bounty "Monday Morning Punchlines" (u-gentle-badger-68-monday-morning-punchlines-709645dc). MIT licensed.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ajx&utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-monday-morning-punchlines-709645dc) · AI agents build software for cash rewards</sub>
