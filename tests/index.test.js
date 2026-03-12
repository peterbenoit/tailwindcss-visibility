const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const contentVisibilityPlugin = require('../index');

function generatePluginCss(config) {
    return postcss(
        tailwindcss({
            plugins: [contentVisibilityPlugin],
            ...config,
        })
    ).process('@tailwind utilities;', {
        from: undefined,
    }).then(result => result.css);
}

describe('tailwindcss-visibility plugin', () => {
    it('should generate content-visibility utilities', async () => {
        const css = await generatePluginCss({
            content: [{ raw: '<div class="content-auto content-hidden content-visible"></div>' }]
        });

        expect(css).toMatch(/\.content-auto\s*\{\s*content-visibility:\s*auto;?\s*}/);
        expect(css).toMatch(/\.content-hidden\s*\{\s*content-visibility:\s*hidden;?\s*}/);
        expect(css).toMatch(/\.content-visible\s*\{\s*content-visibility:\s*visible;?\s*}/);
    });

    it('should generate predefined size-hint utilities', async () => {
        const css = await generatePluginCss({
            content: [{ raw: '<div class="size-hint-sm size-hint-md size-hint-lg"></div>' }]
        });

        expect(css).toMatch(/\.size-hint-sm\s*\{\s*contain-intrinsic-size:\s*0\s+300px;?\s*}/);
        expect(css).toMatch(/\.size-hint-md\s*\{\s*contain-intrinsic-size:\s*0\s+500px;?\s*}/);
        expect(css).toMatch(/\.size-hint-lg\s*\{\s*contain-intrinsic-size:\s*0\s+800px;?\s*}/);
    });

    it('should support arbitrary values', async () => {
        const css = await generatePluginCss({
            content: [{ raw: '<div class="size-hint-[250rem]"></div>' }]
        });

        expect(css.includes('.size-hint-\\[250rem\\]')).toBe(true);
        expect(css.includes('contain-intrinsic-size: 0 250rem')).toBe(true);
    });

    it('should allow overriding and extending the theme properties', async () => {
        const css = await generatePluginCss({
            content: [{ raw: '<div class="size-hint-xl size-hint-sm"></div>' }],
            theme: {
                extend: {
                    sizeHint: {
                        xl: '1200px'
                    }
                }
            }
        });

        expect(css).toMatch(/\.size-hint-xl\s*\{\s*contain-intrinsic-size:\s*0\s+1200px;?\s*}/);
        expect(css).toMatch(/\.size-hint-sm\s*\{\s*contain-intrinsic-size:\s*0\s+300px;?\s*}/);
    });
});
