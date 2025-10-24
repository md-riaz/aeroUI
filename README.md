# aeroUI

aeroUI is a Tailwind-authored design layer that keeps Bootstrap's semantic HTML and data-API while applying the shadcn aesthetic. Every component is defined in a single `aeroui.css` source file using Tailwind's `@layer` and `@apply` syntax, backed by the same HSL design tokens that power shadcn/ui so you can iterate quickly with the Tailwind CLI and avoid hand-writing longform CSS.

Unlike Bootstrap's precompiled CSS bundles, aeroUI expects you to run a Tailwind-aware build (Tailwind CLI, Vite, etc.) inside your project so the generated stylesheet always reflects the markup you actually ship. The docs bundle at `docs/assets/aeroui.css` is only an example build; your application should compile its own CSS from `src/aeroui.css` so unused selectors can be shaken out and newly added components are captured automatically.

## Key Goals

- **Bootstrap API Compatibility** – Keep existing markup and behaviours powered by `bootstrap.bundle.min.js`.
- **shadcn Token Parity** – Components inherit the exact shadcn HSL token set (`--background`, `--foreground`, `--primary`, ...) with both light and dark definitions so the visuals match the reference design system.
- **Single CSS Source** – Author everything inside `src/aeroui.css` and compile with the Tailwind CLI.
- **Utility Composition** – Classes are composed with Tailwind utilities through `@apply` inside `@layer` blocks.

> **Note**: aeroUI is not a drop-in replacement for every Bootstrap selector. It focuses on elements that are required for Bootstrap's JavaScript interactivity (modals, dropdowns, offcanvas, etc.) and augments them with Tailwind-authored styling. Layout primitives, grid utilities, and additional design choices are expected to be handled the “Tailwind way” within your project.

## Project Structure

```
aeroUI/
├── docs/assets/aeroui.css  # Generated CSS served to browsers and docs
├── docs/components.html    # Showcase of supported components
├── src/aeroui.css          # Tailwind-authored source file
├── tailwind.config.js      # Tailwind content scan
└── package.json            # Scripts for build/watch + Tailwind dependency
```

The Tailwind source describes structural expectations (modals, dropdowns, offcanvas, collapse) alongside component visuals so the generated CSS works out of the box with Bootstrap's JavaScript.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the Tailwind CLI**
   ```bash
   # One-off build
   npm run build

   # Live rebuild while editing src/aeroui.css
   npm run dev
   ```

3. **Open the docs and components gallery**
   ```bash
   python3 -m http.server
   ```
   Navigate to `http://localhost:8000/docs/components.html` to explore every component wired to Bootstrap JS.

## Using aeroUI in Your Project

1. **Integrate aeroUI into your Tailwind build** – Reference `src/aeroui.css` (copy it into your source tree or import it) and ensure your Tailwind/Vite pipeline scans the HTML, Blade, JSX, etc. where you author Bootstrap markup. The commands in `package.json` show the expected CLI flags if you prefer a standalone Tailwind process.
2. **Bundle Bootstrap JavaScript** – Include `bootstrap.bundle.min.js` (via npm, CDN, or your preferred bundler) so data attributes continue to power interactive components.
3. **Serve your generated CSS** – Point your app to the Tailwind build artifact produced on your machine or CI. The sample `docs/assets/aeroui.css` is useful for demos but should not be treated as an immutable production asset.

Your existing Bootstrap markup continues to function once those pieces are in place:

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Welcome to aeroUI</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="text-muted">Bootstrap JavaScript drives the behaviour while Tailwind utilities provide the visuals.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## Tailwind-powered styling

`src/aeroui.css` composes Bootstrap-flavoured classes from Tailwind utilities:

```css
@layer components {
  .btn {
    @apply inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
  }

  .btn-secondary {
    @apply bg-secondary text-secondary-foreground hover:bg-secondary/80;
  }
}
```

Override utilities in your application (or fork the source file) to customise colours, spacing, and typography to match your brand.

The base layer exports the full shadcn token map (`--background`, `--foreground`, `--primary`, etc.) so you can theme components globally or on a per-component basis by overriding CSS variables.

## Component Coverage

The single CSS layer implements the most common Bootstrap classes:

- Buttons (`.btn`, variants, sizes, button groups)
- Cards (`.card`, `.card-header`, `.card-body`, `.card-footer`)
- Forms (`.form-control`, `.form-select`, `.input-group`, `.form-label`, `.form-check`)
- Dropdowns (`.dropdown-menu`, `.dropdown-item`, placement modifiers)
- Modals (`.modal`, `.modal-dialog`, `.modal-backdrop`, `.fade`)
- Collapse & Accordion (`.collapse`, `.collapsing`, `.accordion-*`)
- Offcanvas (`.offcanvas`, directional variants)
- Navigation (`.nav-tabs`, `.nav-pills`)
- Alerts, badges, progress bar, table styling
- Utility shims for common Bootstrap helpers (`.d-flex`, `.d-none`, `.text-center`, `.mt-3`, `.shadow-sm`, ...)

Refer to `docs/components.html` for real-world markup examples that exercise each component and match the Bootstrap data-API triggers.

## Accessibility Notes

- Focus states use Tailwind's `focus-visible` utilities with high-contrast outlines.
- Dropdowns, modals, collapse, and offcanvas respect Bootstrap's keyboard interactions because structural classes remain intact.
- Reduced motion preferences are honoured through the base layer media query.

## License

MIT © aeroUI contributors.
