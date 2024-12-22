# TailwindCSS Content Visibility Plugin

A lightweight Tailwind CSS plugin that adds utilities for managing content visibility (`content-visibility`) and intrinsic size hints (`contain-intrinsic-size`). Optimize rendering performance with flexible size hints using custom theme values.

[![npm version](https://badge.fury.io/js/tailwindcss-visibility.svg)](https://badge.fury.io/js/tailwindcss-visibility)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install tailwindcss-visibility
```

## Setupp

Add the plugin to your `tailwind.config.js`:

```javascript
module.exports = {
    plugins: [require('tailwindcss-visibility')],
    theme: {
        sizeHint: {
            // Optional: Customize default size hints
            sm: '300px',
            md: '500px',
            lg: '800px',
        },
    },
};
```

Or add your own size hints in your `tailwind.config.js`:

```javascript
module.exports = {
    content: ['./src/**/*.{html,js}'],
    plugins: [require('tailwindcss-visibility')],
    theme: {
        extend: {
            sizeHint: {
                xs: '100px',
                '2xl': '1000px',
                custom: '250px',
            },
        },
    },
};
```

## Usage

### Content Visibility Classes

-   `content-auto`: Enables content-visibility optimization
-   `content-hidden`: Hides content while preserving size
-   `content-visible`: Forces content to remain visible

```html
<div class="content-auto">
    <!-- Content here will be optimized -->
</div>
```

### Size Hint Classes

Predefined size hints:

-   `size-hint-sm`: 300px (default)
-   `size-hint-md`: 500px (default)
-   `size-hint-lg`: 800px (default)

Arbitrary values:

-   `size-hint-[200px]`
-   `size-hint-[20rem]`
-   `size-hint-[50vh]`

```html
<div class="content-auto size-hint-md">
    <!-- Content with medium size hint -->
</div>
```

## Use Cases

1. Long Scrolling Pages

    Optimize rendering performance for long pages with multiple sections:

```html
<article class="content-auto size-hint-md">
    <h2>Section Title</h2>
    <p>Content...</p>
</article>
```

2. Image Galleries

    Prevent layout shifts in image galleries:

```html
<div class="grid grid-cols-3 gap-4">
    <div class="content-auto size-hint-[200px]">
        <img src="image1.jpg" alt="Gallery image" />
    </div>
    <!-- More gallery items -->
</div>
```

3. Accordion Sections

    Optimize hidden content in accordions:

```html
<div class="content-hidden">
    <p>Collapsed accordion content...</p>
</div>
```

## Demo Pages

-   [Basic Examples](#) (Coming Soon)
-   [Performance Comparison](#) (Coming Soon)
-   [Real-world Use Cases](#) (Coming Soon)

### Browser Support

-   Chrome 85+
-   Edge 85+
-   Firefox 90+
-   Safari 15.4+

### Performance Impact

Using content-visibility: auto can significantly improve initial page load and rendering performance:

-   Reduces rendering time for off-screen content
-   Improves paint and layout performance
-   Optimizes browser resource usage

### Configuration

Custom Size Hints

```javascript
// tailwind.config.js
module.exports = {
    theme: {
        sizeHint: {
            xs: '100px',
            '2xl': '1000px',
            card: '250px',
        },
    },
};
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](#) file for details

## Author

Peter Benoit - [@peterbenoit](https://github.com/peterbenoit)

## Related Projects

-   [Official Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [MDN Content-Visibility Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
-   [MDN Contain-Intrinsic-Size Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size)
-   [CSS Tricks Content-Visibility](https://css-tricks.com/content-visibility/)
-   [CSS Tricks Contain-Intrinsic-Size](https://css-tricks.com/almanac/properties/c/contain-intrinsic-size/)
-   [Web.dev Content-Visibility](https://web.dev/content-visibility/)
-   [Web.dev Contain-Intrinsic-Size](https://web.dev/contain-intrinsic-size/)
