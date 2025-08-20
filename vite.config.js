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
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// More aggressive chunk splitting for better caching
					if (id.includes('node_modules')) {
						// Split large vendor libraries
						if (id.includes('lottie')) {
							return 'lottie';
						}
						return 'vendor';
					}
					// Split component chunks
					if (id.includes('src/lib/components')) {
						return 'components';
					}
				},
				// Optimize file naming for better caching
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.');
					const extType = info[info.length - 1];
					if (/\.(css)$/.test(assetInfo.name)) {
						return `css/[name].[hash].${extType}`;
					}
					if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
						return `images/[name].[hash].${extType}`;
					}
					if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name)) {
						return `media/[name].[hash].${extType}`;
					}
					return `assets/[name].[hash].${extType}`;
				},
				chunkFileNames: 'js/[name].[hash].js'
			}
		},
		// Enable aggressive compression
		minify: 'esbuild',
		reportCompressedSize: false, // Faster builds
		// Force CSS inlining
		cssMinify: true
	},
	assetsInclude: ['**/*.webp', '**/*.mp4'],
	server: {
		fs: {
			allow: ['..']
		}
	}
});
