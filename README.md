# flux

A numeric display component built for real-time data updates. Forked from the [Luduvo numeric display](https://github.com/luduvo/components/tree/main/registry/luduvo/blocks/numeric-display).

## Why flux?

Most number displays re-animate every digit on every update. flux tracks which digits actually changed and animates only those. Your CPU thanks you.

## What changed

**Core logic moved to useMemo.** No more render-phase side effects causing phantom animations on digits that never changed.

**Key tracking is refined.** Each digit gets a stable identity. Only the digits that change get the animation treatment.

**aria-label and role="img" are baked in.** Screen readers read the full value as a single string, not a sequence of individual characters.

**Hardware-accelerated blur and scale transitions** handle the visual polish. No layout thrashing.

**Lowercase numerics are supported natively.** Selection artifacts are blocked with select-none.

## Who is this for?

You are building dashboards, trading UIs, analytics panels, or anything where numbers update frequently and visual noise adds up fast. flux keeps the display smooth without doing extra work.

##  Fork

this  is a replacement for the Luduvo numeric display. The API stays the same, so the switch takes minutes.