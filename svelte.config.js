import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		vitePreprocess(), // Disarankan untuk tetap ada agar Tailwind/PostCSS lancar
		mdsvex({
			extensions: ['.md', '.svx'] // Beritahu mdsvex untuk memproses .md juga
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
