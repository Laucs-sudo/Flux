# Flux

A high-performance numeric display component for React with smooth animations using Framer Motion.

---

## Features

* Smooth spring-based number animations
* Responsive design for desktop and mobile
* Accessible with proper ARIA labels
* Tree-shakeable ES module build
* Minimal dependencies
* Works out of the box with React 18+ and Vite

---

## Installation

```bash
npm install @aulvar/flux
```

or

```bash
yarn add @aulvar/flux
```

or

```bash
pnpm add @aulvar/flux
```

---

## Quick Start

```tsx
import { NumericDisplay } from '@aulvar/flux'

export function App() {
  return <NumericDisplay value={12345} />
}
```

---

## Props

### value (required)

* Type: `number | string`
* The numeric value to display

### className (optional)

* Type: `string`
* Additional CSS classes

### speed (optional)

* Type: `number`
* Default: `1`
* Animation speed multiplier

---

## Examples

### Basic usage

```tsx
<NumericDisplay value={42} />
```

### With styling

```tsx
<NumericDisplay value={1234} className="text-6xl text-blue-500" />
```

### With animation speed

```tsx
<NumericDisplay value={100} speed={2} />
```

---

## Styling

Use `className` to customize appearance:

```tsx
<NumericDisplay value={123} className="text-2xl text-blue-500" />
```

Built with Tailwind CSS in mind, but works with any styling system.

---

## Browser Support

Works in all modern browsers:

* Chrome
* Firefox
* Safari
* Edge

---

## Peer Dependencies

* React `>=18.0.0`
* React DOM `>=18.0.0`

---

## Primary Dependency

* Framer Motion `^11.0.0` for animations

---

## Performance

* Uses `React.useMemo` for optimization
* Framer Motion handles smooth transitions
* Re-renders only when values change

---

## Contributing

Contributions are welcome.

* Fork the repository
* Create a feature branch
* Submit a pull request

---

## License

MIT License
See LICENSE file for details.

---

## Star History

[View Star History Chart](https://www.star-history.com/?repos=laucs-sudo%2Fflux&type=date&logscale=&legend=top-left)

---

## Support

* Documentation: [GitHub Repo](https://github.com/Laucs-sudo/Flux)
* Issues: [Report a Bug](https://github.com/Laucs-sudo/Flux/issues)
* Discussions: [Join Discussion](https://github.com/Laucs-sudo/Flux/discussions)
* Forked version: [Luduvo Numeric Display](https://github.com/luduvo/components/tree/main/registry/luduvo/blocks/numeric-display)

---

Made with ♡ by the Aulvar Team
