import { mdsvex } from 'mdsvex';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore 404 pada file gambar tertentu
				if (path === '/og-image.png') return;

				// Selebihnya biarin aja muncul warning tapi tetep lanjut build
				console.warn(`${message} (linked from ${referrer})`);
			}
		}
	}
};

export default config;