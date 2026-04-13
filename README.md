# Flux
This is a replacement for the Luduvo numeric display. The API stays the same, so the switch takes minutes.

## What You Keep

- **value** prop
- **className** prop
- **speed** prop

## Drop-In Steps

1. Copy `src/components/numeric-display.tsx` into your project.
2. Keep existing prop names and prop types.
3. Replace the old import path with the new file path.
4. Run your build and visual check.

## API

```ts
interface NumericDisplayProps {
  value: number | string
  className?: string
  speed?: number
}
```

### Example

```tsx
<NumericDisplay value={score} className="text-6xl" speed={1} />
```

## Expected Behavior

- Digit roll animation from 0 to 9 per slot
- Subtle motion blur during movement
- Fast start and slow finish tween
- Center alignment across digit-count changes
