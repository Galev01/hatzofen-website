import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// Use adapter-node now
		adapter: adapter() 
		// If using adapter-static previously:
		// adapter: adapter({
		// 	// default options are shown. On some platforms
		// 	// these options are set automatically — see TBD
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: undefined, // or 'index.html' or '200.html' for SPAs
		// 	precompress: false,
		// 	strict: true
		// })
	}
};

export default config;
