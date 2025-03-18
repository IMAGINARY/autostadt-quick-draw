# Customizations of Google's "Quick, Draw!" for Autostadt

This repository contains wrapper scripts and style sheet adaptations of Google's "[Quick, Draw!](https://quickdraw.withgoogle.com)" AI Experiment.

## Prerequisites

The style sheet adaptations are accomplished via a preload script for the [`kiosk-browser`](https://github.com/IMAGINARY/kiosk-browser) of which at least v0.18.0 has to be installed on the system.

## Usage

Call the launch script to start up the Kiosk Browser and inject the style sheets:

```
./exhibit-autostadt-quick-draw
```

Some options are available via environment variables:

- `AUTOSTADT_QUICK_DRAW_ZOOM`: Set a zoom value for the website. The default is `1` (FullHD). Use `2` for UHD. (Fractions work as well.)
- `AUTOSTADT_QUICK_DRAW_LANG`: Set to a locale specifier such as `de_DE.UTF-8` to start the exhbit in the given language instead of the system language.
- `AUTOSTADT_QUICK_DRAW_RESTYLE`: Set this variable to enable `restyle.css` (see below). For testing purposes only. Disabled by default.

## Development

The style adaptation are split into several files:

- `make-exhibition-ready.css`: Contains the bare minimum to hide and/or disable links to external resources.
- `restyle.css`: Contains more invasive style adaptations. For testing purposes only. Disabled by default.

## Credits

Developed by Christian Stussak for IMAGINARY gGmbH.

## License

Copyright (c) 2025 IMAGINARY gGmbH, Licensed under the MIT license (see
[`LICENSE`](LICENSE)), supported by Autostadt GmbH, Wolfsburg
