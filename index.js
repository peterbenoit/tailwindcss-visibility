const plugin = require('tailwindcss/plugin');

/**
 * A Tailwind CSS plugin that provides utilities for controlling content visibility and size hints.
 *
 * The plugin defines the following utilities:
 * - `.content-auto`: Sets `content-visibility` to `auto`.
 * - `.content-hidden`: Sets `content-visibility` to `hidden`.
 * - `.content-visible`: Sets `content-visibility` to `visible`.
 * - `.size-hint-{sm|md|lg}`: Sets `contain-intrinsic-size` to a predefined value from the theme.
 * - `size-hint`: Allows setting `contain-intrinsic-size` to an arbitrary value.
 *
 * The plugin also provides a `sizeHint` theme option that can be used to configure the predefined size hint values.
 */
const contentVisibilityPlugin = plugin(
    function ({ matchUtilities, addUtilities, theme }) {
        // Arbitrary values, eg [500px]
        matchUtilities(
            {
                'size-hint': (value) => ({
                    'contain-intrinsic-size': `0 ${value}`,
                }),
            },
            { values: theme('sizeHint') }
        );

        // Create utilities using theme values
        addUtilities({
            '.content-auto': {
                'content-visibility': 'auto',
            },
            '.content-hidden': {
                'content-visibility': 'hidden',
            },
            '.content-visible': {
                'content-visibility': 'visible',
            },
        });
    },
    {
        theme: {
            sizeHint: {
                sm: '300px',
                md: '500px',
                lg: '800px',
            },
        },
    }
);

module.exports = contentVisibilityPlugin;
