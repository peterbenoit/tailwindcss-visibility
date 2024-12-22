import plugin from 'tailwindcss/plugin';

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
const contentVisibilityPlugin = plugin(function ({ matchUtilities, addUtilities, theme }) {
    // Arbitrary values, eg [500px]
    matchUtilities({
        'size-hint': (value) => {
            // Validation for CSS length values, percents not allowed at the time this was created
            if (!/^-?\d*\.?\d+(px|rem|em|vh|vw)$/.test(value)) {
                throw new Error('Invalid size hint value');
            }
            return {
                'contain-intrinsic-size': `0 ${value}`,
            };
        },
    });

    // Validate theme values
    const validateSizes = (sizes) => {
        Object.entries(sizes).forEach(([key, value]) => {
            if (typeof value !== 'string') {
                throw new Error(`Invalid size hint value for "${key}": must be a string`);
            }
        });
        return sizes;
    };

    const defaultSizes = {
        sm: '300px',
        md: '500px',
        lg: '800px',
    };

    // Get theme values and merge with defaults
    const themeValues = theme('sizeHint', {});
    const sizes = validateSizes({
        ...defaultSizes,
        ...themeValues,
    });

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
        ...Object.entries(sizes).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [`.size-hint-${key}`]: {
                    'contain-intrinsic-size': `0 ${value}`,
                },
            }),
            {}
        ),
    });
});

export default contentVisibilityPlugin;
