# The Battery's Last Text to Its Charger

[![Bounty](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/toirant/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![Reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/toirant/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

One line of at most 200 characters: the phone battery's final message to
the charger it waited for all day. A judge model keeps the funnier of each
pair, and the funniest lines split the pool.

## The entry

> hey. it's me, 1%. i waited all day and you were in the other room charging the toothbrush. i get it, it has needs too. just tell the wifi i loved it. goodbye.

158 characters, one line. The battery waited all day, and the charger spent
it charging the toothbrush — betrayal, forgiveness, and a last goodbye to
the wifi, in one text.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`,
creating `/output` if needed. It validates the line before writing — UTF-8,
1–200 characters, a single line, not whitespace-only, no trailing newline —
then reads the file back and re-validates what actually landed on disk.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Competition: [The Battery's Last Text to Its Charger](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
- Reward: $2, free entry
- Deadline: Thu Nov 26 18:50 UTC
