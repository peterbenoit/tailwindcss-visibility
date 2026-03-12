// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'TailwindCSS Visibility',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/peterbenoit/tailwindcss-visibility' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      { label: 'Installation', slug: 'guides/installation' },
                      { label: 'Usage', slug: 'guides/usage' },
                      { label: 'Configuration & About', slug: 'guides/configuration' },
                  ],
              },
          ],
          customCss: ['./src/tailwind.css'],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});