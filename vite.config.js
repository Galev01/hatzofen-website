import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		external: ['@lottiefiles/svelte-lottie-player', 'lottie-web']
	},
	build: {
		target: 'es2018',
		cssCodeSplit: true,
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
