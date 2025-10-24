# MosaicUI

MosaicUI is a component library that merges Bootstrap's JavaScript data-API and semantic HTML with shadcn's modern visual aesthetics. It provides a clean separation between structural CSS (required for Bootstrap JS) and visual styling (inspired by shadcn UI), delivering reusable, themeable, and accessible UI elements with HSL color tokens and Tailwind-compatible patterns.

## Design Philosophy

MosaicUI bridges three design paradigms:

1. **Bootstrap**: Proven data-API patterns (`data-bs-toggle`, `data-bs-dismiss`) and semantic HTML structure
2. **shadcn UI**: Modern visual design with HSL color tokens, rounded corners, soft shadows, and neutral surfaces
3. **Tailwind CSS**: Utility-first approach and modern CSS patterns

**Key Innovation**: Complete separation of structural and visual concerns. Bootstrap JS only needs minimal positioning/display CSS (`bs-shim.css`), while all visual styling comes from `mosaicui.css` with shadcn aesthetics.

## Features

- **Bootstrap-Compatible API**: Same class names (`.btn`, `.card`, `.modal`) with modern shadcn visuals
- **HSL Color System**: Themeable design tokens for light/dark modes
- **Minimal Structural Layer**: `bs-shim.css` provides only what Bootstrap JS needs (positioning, display, transforms)
- **Modern Visual Layer**: `mosaicui.css` delivers shadcn-inspired styling with rounded corners, soft shadows, and subtle borders
- **Accessibility**: Built-in focus management, keyboard navigation, and screen reader support
- **No Build Required**: Works standalone without Tailwind build process (though compatible with it)

## Installation

### Quick Start

Include both CSS files in your HTML:

```html
<!-- Minimal structural CSS for Bootstrap JS -->
<link rel="stylesheet" href="bs-shim.css">
<!-- shadcn-style visual components -->
<link rel="stylesheet" href="mosaicui.css">

<!-- Bootstrap JS for interactivity (optional but recommended) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### File Structure

```
mosaicui/
├── bs-shim.css      # Structural CSS for Bootstrap JS (modals, dropdowns, collapse)
├── mosaicui.css     # Visual styling with shadcn aesthetics
└── demo.html        # Comprehensive component showcase
```

## Usage

### Buttons with shadcn Aesthetics

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

### Cards with Modern Styling

```html
<div class="card">
  <div class="card-header">
    <h5 class="card-title">Card Title</h5>
  </div>
  <div class="card-body">
    <p class="card-text">Clean, modern card with rounded corners and soft shadows.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Forms with shadcn Visual Design

```html
<form>
  <div>
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="you@example.com">
    <p class="form-text">We'll never share your email.</p>
  </div>
  
  <div>
    <label for="message" class="form-label">Message</label>
    <textarea class="form-control" id="message" placeholder="Your message..."></textarea>
  </div>
  
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="agree">
    <label class="form-check-label" for="agree">I agree to the terms</label>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Modal with Bootstrap JS + shadcn Visuals

```html
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Modal content with modern shadcn styling.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
```

### Dropdown with Data-API

```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

### Accordion with Collapse

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Content with shadcn visual styling.
      </div>
    </div>
  </div>
</div>
```

## Color System (HSL Tokens)

MosaicUI uses HSL color tokens for easy theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --success: 142.1 76.2% 36.3%;
  --warning: 38 92% 50%;
  --destructive: 0 84.2% 60.2%;
  --muted: 210 40% 96.1%;
  --border: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.75rem;
}
```

### Dark Mode Support

Add the `.dark` class to enable dark mode:

```html
<html class="dark">
  <!-- All components automatically use dark mode colors -->
</html>
```

### Custom Theming

Override CSS custom properties:

```css
:root {
  --primary: 280 100% 60%;        /* Custom purple */
  --radius: 0.5rem;                /* More rounded */
  --border: 220 13% 91%;           /* Different border color */
}
```

## Components Included

### Layout & Structure
- Container (fluid, responsive)
- Grid System (row/col)

### Forms
- Form controls (input, textarea, select)
- Checkboxes & Radio buttons
- Form labels & helper text
- Input groups

### Buttons
- Primary, Secondary, Success, Warning, Danger, Info
- Outline, Ghost, Link variants
- Button sizes (sm, default, lg)
- Button groups

### Cards
- Card with header, body, footer
- Card title and description

### Navigation
- Nav tabs
- Nav pills
- Tab content (with data-bs-toggle)

### Feedback
- Alerts (all variants, dismissible)
- Toasts
- Progress bars
- Spinners

### Overlays
- Modals (with Bootstrap JS)
- Dropdowns (with Bootstrap JS)
- Offcanvas (all directions)
- Tooltips & Popovers

### Data Display
- Tables (striped, bordered, hover)
- List groups
- Badges
- Breadcrumbs
- Pagination

### Interactive
- Collapse & Accordion (with Bootstrap JS)

## Architecture

### bs-shim.css (Minimal Structural Layer)

Contains ONLY the structural CSS required for Bootstrap JS:

- **Positioning**: Modal, dropdown, offcanvas positioning
- **Display**: Collapse show/hide, modal backdrop
- **Transforms**: Offcanvas slide animations, transitions
- **Z-index**: Layering for overlays

**What it does NOT include**: Colors, fonts, padding/margins, borders, shadows, or any visual styling.

### mosaicui.css (Visual Layer)

Contains all visual styling with shadcn aesthetics:

- **Colors**: HSL token system with light/dark support
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Padding, margins, gaps
- **Borders**: Rounded corners, border colors
- **Shadows**: Soft shadows for depth
- **Transitions**: Smooth hover/focus states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components follow WAI-ARIA guidelines:

- Proper focus management with visible focus rings
- Keyboard navigation support
- Screen reader compatibility (`.visually-hidden` utility)
- Reduced motion support via `prefers-reduced-motion`

## JavaScript

### With Bootstrap JS (Recommended)

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

Bootstrap's JavaScript provides full data-API support for:
- Modals (open/close, focus trap)
- Dropdowns (positioning, keyboard nav)
- Collapse/Accordion (expand/collapse)
- Tabs (switch content)
- Toasts (show/hide, auto-hide)
- Offcanvas (slide in/out)

### Custom Implementation

You can also implement your own JavaScript using the data attributes:

```javascript
// Example: Simple collapse toggle
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.bsTarget);
    target.classList.toggle('show');
  });
});
```

## Development Workflow

### For PHP MVC Applications

1. Include `bs-shim.css` and `mosaicui.css` in your layout template
2. Include Bootstrap JS for interactivity
3. Use Bootstrap class names in your views
4. Enjoy modern shadcn aesthetics with Bootstrap's proven patterns

### With Build Tools

If you're using a build process with Tailwind CSS:

```css
/* your-styles.css */
@import 'bs-shim.css';
@import 'mosaicui.css';

@tailwind utilities;

/* Your custom utilities */
```

## Examples

See `demo.html` for a comprehensive showcase of all components with:
- All button variants and sizes
- Form controls and validation
- Cards, alerts, and badges
- Navigation tabs and pills
- Tables with different styles
- Modals, dropdowns, and collapse
- Progress bars and spinners
- Pagination and breadcrumbs

## Comparison

### vs. Bootstrap

| Aspect | Bootstrap | MosaicUI |
|--------|-----------|----------|
| Visual Design | Traditional blue theme | Modern shadcn aesthetics |
| Colors | Fixed color palette | HSL tokens, themeable |
| CSS Size | ~200KB | bs-shim (4KB) + mosaicui (15KB) |
| JavaScript | Full Bootstrap JS | Same Bootstrap JS compatibility |
| Customization | SCSS variables | CSS custom properties |

### vs. shadcn/ui

| Aspect | shadcn/ui | MosaicUI |
|--------|-----------|----------|
| Framework | React components | Vanilla CSS + HTML |
| Class API | Tailwind utilities | Bootstrap class names |
| JavaScript | React/Next.js | Bootstrap JS or custom |
| Portability | React only | Works anywhere |
| Data API | No | Yes (Bootstrap compatible) |

## License

See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Inspired by:
- [Bootstrap](https://getbootstrap.com/) - Data-API and component patterns
- [shadcn/ui](https://ui.shadcn.com/) - Visual design and color system
- [Tailwind CSS](https://tailwindcss.com/) - Modern CSS patterns

---

**MosaicUI** - Bootstrap class API + shadcn visual aesthetics = Modern UI for PHP MVC and beyond
