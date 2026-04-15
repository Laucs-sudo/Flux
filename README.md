# flux

A high-performance numeric display component for React with smooth animations using Framer Motion.

## Features

- Smooth spring-based number animations
- Responsive design for desktop and mobile
- Accessible with proper ARIA labels
- Tree-shakeable ES module build
- Minimal dependencies
- Works out of the box with React 18+ and Vite

## Installation

npm install @aulvar/flux

Or with yarn:

yarn add @aulvar/flux

Or with pnpm:

pnpm add @aulvar/flux

## Quick Start

import { NumericDisplay } from '@aulvar/flux'

export function App() {
  return <NumericDisplay value={12345} />
}

## Props

The NumericDisplay component accepts these props:

value (required): The numeric value to display. Type: number or string.

className (optional): Additional CSS classes. Type: string.

speed (optional): Animation speed multiplier. Default: 1. Type: number.

## Examples

Basic usage:

<NumericDisplay value={42} />

With styling:

<NumericDisplay value={1234} className="text-6xl text-blue-500" />

With animation speed:

<NumericDisplay value={100} speed={2} />

## Styling

Use the className prop to customize appearance:

<NumericDisplay value={123} className="text-2xl text-blue-500" />

The component uses Tailwind CSS by default. Customize the base styles by overriding classes.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## Peer Dependencies

Requires:
- React 18.0.0 or higher
- React DOM 18.0.0 or higher

## Primary Dependency

- framer-motion (^11.0.0) for animations

## Performance

Uses React.useMemo and Framer Motion optimizations. Numbers animate only when values change.

## Contributing

Contributions welcome. Submit a Pull Request to help improve this component.

## License

MIT License. See LICENSE file for details.

## Star History

<a href="https://www.star-history.com/?repos=laucs-sudo%2Fflux&type=date&logscale=&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=laucs-sudo/flux&type=date&theme=dark&logscale&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=laucs-sudo/flux&type=date&logscale&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=laucs-sudo/flux&type=date&logscale&legend=top-left" />
 </picture>
</a>

## Support

Documentation: https://github.com/Laucs-sudo/Flux
Issues: https://github.com/Laucs-sudo/Flux/issues
Discussions: https://github.com/Laucs-sudo/Flux/discussions

Made with ♡ From Aulvar Team
