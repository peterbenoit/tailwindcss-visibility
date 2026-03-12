---
title: Configuration and About
description: How to configure the tailwindcss-visibility plugin theme properties and other considerations.
---

## Configuration

You can customize the underlying sizing variables by extending the `theme` configuration in your `tailwind.config.mjs`:

```javascript
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            sizeHint: {
                xs: '100px',
                '2xl': '1000px',
                card: '250px',
            },
        },
    },
};
```

This will automatically generate the corresponding `.size-hint-xs`, `.size-hint-2xl`, and `.size-hint-card` utility classes, in addition to the default `sm` (300px), `md` (500px), and `lg` (800px) values!


## Browser Support

-   Chrome 85+
-   Edge 85+
-   Firefox 90+
-   Safari 15.4+

## Performance Impact

Using `content-visibility: auto` can significantly improve initial page load and rendering performance:

-   Reduces rendering time for off-screen content
-   Improves paint and layout performance
-   Optimizes browser resource usage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](https://github.com/peterbenoit/tailwindcss-visibility/blob/main/LICENSE) file for details

## Author

Peter Benoit - [@peterbenoit](https://github.com/peterbenoit)

## Related Projects

-   [Official Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [MDN Content-Visibility Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility)
-   [MDN Contain-Intrinsic-Size Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size)
-   [Web.dev Content-Visibility](https://web.dev/content-visibility/)
-   [Web.dev Contain-Intrinsic-Size](https://web.dev/contain-intrinsic-size/)
