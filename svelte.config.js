import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are often sufficient for GitHub Pages
			pages: 'docs',
			assets: 'docs',
			fallback: null, // can be 'index.html' or '200.html' for SPA-like behavior
			precompress: true,
			strict: true
		}),
		version: {
			// Add versioning to enable long-term caching
			name: Date.now().toString()
		},
		// Inline ALL CSS to eliminate render-blocking
		inlineStyleThreshold: 0 // Inline all CSS files
	}
};

export default config;
