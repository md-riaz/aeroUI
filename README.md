# aeroUI

aeroUI is a Tailwind-authored design layer that keeps Bootstrap's semantic HTML and data-API while applying a modern, neutral look. Every component is defined in a single `aeroui.css` source file using Tailwind's `@layer` and `@apply` syntax, so you can iterate quickly with the Tailwind CLI and avoid hand-writing longform CSS.

## Key Goals

- **Bootstrap API Compatibility** – Keep existing markup and behaviours powered by `bootstrap.bundle.min.js`.
- **Tailwind Palette First** – Components pull from Tailwind's default colour system (`sky`, `slate`, `emerald`, `rose`, `amber`) instead of custom hex values.
- **Single CSS Source** – Author everything inside `src/aeroui.css` and compile with the Tailwind CLI.
- **Utility Composition** – Classes are composed with Tailwind utilities through `@apply` inside `@layer` blocks.

## Project Structure

```
aeroUI/
├── dist/aeroui.css         # Generated CSS served to browsers
├── src/aeroui.css          # Tailwind-authored source file
├── demo.html               # Showcase of supported components
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

3. **Open the demo**
   ```bash
   python3 -m http.server
   ```
   Navigate to `http://localhost:8000/demo.html` to explore all components wired to Bootstrap JS.

## Using aeroUI in Your Project

Include Bootstrap JS, then load the compiled CSS from the `dist/` folder (or your own build output location):

```html
<link rel="stylesheet" href="/path/to/aeroui/dist/aeroui.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Your existing Bootstrap markup continues to function:

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
    @apply inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500;
  }

  .btn-primary {
    @apply bg-sky-600 hover:bg-sky-500;
  }
}
```

Override utilities in your application (or fork the source file) to customise colours, spacing, and typography to match your brand.

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

Refer to `demo.html` for real-world markup examples that exercise each component and match the Bootstrap data-API triggers.

## Accessibility Notes

- Focus states use Tailwind's `focus-visible` utilities with high-contrast outlines.
- Dropdowns, modals, collapse, and offcanvas respect Bootstrap's keyboard interactions because structural classes remain intact.
- Reduced motion preferences are honoured through the base layer media query.

## License

MIT © aeroUI contributors.
