# aeroUI

aeroUI is a Tailwind-authored design layer that keeps Bootstrap's semantic HTML and data-API while applying shadcn-inspired visuals. Every component is defined in a single `aeroui.css` source file using Tailwind's `@layer` and `@apply` syntax, enabling instant feedback with the Tailwind CLI JIT engine. The generated CSS delivers modern aesthetics (HSL tokens, rounded corners, soft shadows) without shipping Bootstrap's visual styles.

## Key Goals

- **Bootstrap API Compatibility** – Keep existing markup and behaviors powered by `bootstrap.bundle.min.js`.
- **shadcn Visual Language** – HSL design tokens, neutral surfaces, accessible focus rings, soft elevation.
- **Single CSS Source** – Author everything inside `src/aeroui.css` and compile with the Tailwind CLI.
- **Zero Raw CSS (where possible)** – Components are composed with Tailwind utilities through `@apply` inside `@layer` blocks.

## Project Structure

```
aeroUI/
├── dist/aeroui.css         # Generated CSS served to browsers
├── src/aeroui.css          # Tailwind-authored source file
├── demo.html               # Showcase of supported components
├── tailwind.config.js      # Tailwind content scan + theme extensions
└── package.json            # Scripts for build/watch + Tailwind dependency
```

The repository no longer splits structural and visual CSS. The Tailwind source describes structural expectations (modals, dropdowns, offcanvas, collapse) alongside component visuals so the generated CSS works out of the box with Bootstrap's JavaScript.

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
   npx http-server .
   ```
   Navigate to `http://localhost:8080/demo.html` to explore all components wired to Bootstrap JS.

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
        <p class="text-muted">Bootstrap JavaScript drives the behavior while shadcn-inspired tokens define the visuals.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## Design Tokens

`src/aeroui.css` exposes Tailwind-friendly HSL tokens:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.75rem;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
  }
}
```

Override the custom properties inside your application to brand aeroUI without touching component definitions.

## Component Coverage

The single CSS layer implements the most common Bootstrap classes:

- Buttons (`.btn`, variants, sizes, button groups)
- Cards (`.card`, `.card-header`, `.card-body`, `.card-footer`)
- Forms (`.form-control`, `.form-select`, `.input-group`, `.form-label`)
- Dropdowns (`.dropdown-menu`, `.dropdown-item`, placement modifiers)
- Modals (`.modal`, `.modal-dialog`, `.modal-backdrop`, `.fade`)
- Collapse & Accordion (`.collapse`, `.collapsing`, `.accordion-*`)
- Offcanvas (`.offcanvas`, directional variants)
- Navigation (`.nav-tabs`, `.nav-pills`)
- Alerts, badges, progress bar, table styling
- Utility shims for common Bootstrap helpers (`.d-flex`, `.d-none`, `.text-center`, `.mt-3`, `.shadow-sm`, ...)

Refer to `demo.html` for real-world markup examples that exercise each component and match the Bootstrap data-API triggers.

## Customising aeroUI

- **Extend tokens** – Add more CSS variables inside `@layer base` to control radii, spacing, or colors.
- **Author new components** – Define additional classes in `src/aeroui.css` using Tailwind utilities and run `npm run build` to regenerate `dist/aeroui.css`.
- **Tree-shake with Tailwind** – Update `tailwind.config.js` content paths to match your application so the CLI can remove unused utilities during build.

## Accessibility Notes

- Focus states use `focus-visible` rings derived from the `--ring` token.
- Dropdowns, modals, collapse, and offcanvas respect Bootstrap's keyboard interactions because structural classes remain intact.
- Reduced motion preferences are honoured through the base layer media query.

## License

MIT © aeroUI contributors.
