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
			head: [
				// Google Analytics
				{ tag: 'script', attrs: { src: 'https://www.googletagmanager.com/gtag/js?id=G-GQEC09BG5Z', async: true } },
				{ tag: 'script', content: "window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-GQEC09BG5Z');" },
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
