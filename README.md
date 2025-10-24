# MosaicUI

MosaicUI is a component library that merges Bootstrap's JavaScript data-API and semantic HTML with Tailwind CSS flexibility. Drawing design inspiration from shadcn UI, it uses an @layer-based component system to deliver reusable, themeable, and accessible UI elements. Built for developers who value Bootstrap's proven interactivity and Tailwind CSS's creative control, MosaicUI bridges classic behavior with modern design for scalable, maintainable web interfaces.

## Features

- **Bootstrap Compatibility**: Full support for Bootstrap's data-API attributes (`data-bs-toggle`, `data-bs-dismiss`, etc.)
- **Tailwind CSS Integration**: Uses Tailwind's `@layer` system for seamless integration
- **Semantic HTML**: Maintains Bootstrap's semantic HTML structure
- **Themeable Components**: CSS custom properties for easy theming
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Modern Design**: Inspired by shadcn UI's design philosophy

## Installation

### Using bs-shim.css

Include the `bs-shim.css` file in your project:

```html
<!-- In your HTML -->
<link rel="stylesheet" href="path/to/bs-shim.css">
```

Or import it in your CSS:

```css
/* In your main CSS file */
@import 'path/to/bs-shim.css';
```

### With Tailwind CSS

If you're using Tailwind CSS, the bs-shim.css file is designed to work alongside it:

1. Import bs-shim.css before or after your Tailwind directives:

```css
/* styles.css */
@import 'bs-shim.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. The `@layer` directives in bs-shim.css ensure proper cascade order with Tailwind

## Usage

### Basic Components

MosaicUI supports all standard Bootstrap components with their data-API patterns:

#### Buttons

```html
<button class="btn" data-bs-toggle="button">Toggle Button</button>
```

#### Modals

```html
<!-- Button trigger -->
<button class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal" id="exampleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" data-bs-dismiss="modal" class="btn-close"></button>
      </div>
      <div class="modal-body">
        Modal content goes here
      </div>
      <div class="modal-footer">
        <button class="btn" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
```

#### Dropdowns

```html
<div class="dropdown">
  <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
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

#### Collapse

```html
<button class="btn" data-bs-toggle="collapse" data-bs-target="#collapseExample">
  Toggle Collapse
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Collapsed content
  </div>
</div>
```

#### Accordion

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
        Accordion content
      </div>
    </div>
  </div>
</div>
```

### Layout System

MosaicUI includes Bootstrap's container and grid system:

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

### Combining with Tailwind CSS

The power of MosaicUI comes from combining Bootstrap's structural components with Tailwind's utility classes:

```html
<button class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        data-bs-toggle="modal" 
        data-bs-target="#myModal">
  Styled with Tailwind
</button>

<div class="modal" id="myModal">
  <div class="modal-dialog max-w-2xl mx-auto">
    <div class="modal-content shadow-2xl rounded-lg border-0">
      <div class="modal-header bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h5 class="modal-title text-xl font-bold">Beautifully Styled Modal</h5>
        <button type="button" data-bs-dismiss="modal" class="btn-close"></button>
      </div>
      <div class="modal-body p-6">
        <p class="text-gray-700">Content styled with Tailwind utilities</p>
      </div>
    </div>
  </div>
</div>
```

## Components Included

- **Layout**: Container, Grid System (Row/Col)
- **Forms**: Form Controls, Checkboxes, Radio Buttons, Labels
- **Buttons**: Button, Button Groups
- **Cards**: Card, Card Header, Card Body, Card Footer
- **Modals**: Modal, Modal Dialog, Modal Content
- **Dropdowns**: Dropdown, Dropdown Menu, Dropdown Items
- **Collapse**: Collapse, Accordion
- **Navigation**: Nav, Nav Tabs, Nav Pills, Tab Content
- **Alerts**: Alert, Alert Dismissible
- **Toasts**: Toast, Toast Container
- **Offcanvas**: Offcanvas (Start, End, Top, Bottom)
- **Tooltips & Popovers**: Tooltip, Popover
- **Spinners**: Spinner Border, Spinner Grow
- **Badges**: Badge
- **Breadcrumbs**: Breadcrumb
- **Pagination**: Pagination
- **Progress Bars**: Progress, Progress Bar
- **List Groups**: List Group, List Group Items

## Customization

### CSS Custom Properties

MosaicUI uses CSS custom properties for easy theming:

```css
:root {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
}
```

Override these in your own CSS to customize the behavior.

### Extending with Tailwind

Since MosaicUI uses the `@layer` system, you can extend it with your own components:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 text-white hover:bg-blue-700;
  }
  
  .btn-secondary {
    @apply bg-gray-500 text-white hover:bg-gray-700;
  }
}
```

## JavaScript

MosaicUI provides the CSS structure for Bootstrap components. For interactive functionality, you can use:

1. **Bootstrap's JavaScript**: Include Bootstrap's JS for full data-API support
2. **Custom JavaScript**: Build your own interactions using the data attributes
3. **Alpine.js or other frameworks**: Integrate with modern reactive frameworks

Example with vanilla JavaScript:

```javascript
// Toggle dropdown
document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const menu = toggle.nextElementSibling;
    menu.classList.toggle('show');
  });
});

// Dismiss modals
document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});
```

## Browser Support

MosaicUI supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components follow WAI-ARIA guidelines and include:
- Proper focus management
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion support via `prefers-reduced-motion`

## License

See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

Inspired by:
- [Bootstrap](https://getbootstrap.com/) - Data-API and component patterns
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first approach
- [shadcn UI](https://ui.shadcn.com/) - Design philosophy
