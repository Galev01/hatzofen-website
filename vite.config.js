import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		external: ['@lottiefiles/svelte-lottie-player', 'lottie-web']
	},
	build: {
		target: 'es2018',
		cssCodeSplit: false, // Combine CSS to reduce render-blocking requests
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Optimize chunk splitting for better caching
					if (id.includes('node_modules')) {
						return 'vendor';
					}
					if (id.includes('lottie')) {
						return 'lottie';
					}
				},
				// Optimize CSS output
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.');
					const extType = info[info.length - 1];
					if (/\.(css)$/.test(assetInfo.name)) {
						return `assets/styles.[hash].${extType}`;
					}
					return `assets/[name].[hash].${extType}`;
				}
			}
		},
		// Enable compression in production
		minify: true
	},
	assetsInclude: ['**/*.webp', '**/*.mp4'],
	server: {
		fs: {
			allow: ['..']
		}
	}
});
