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
					// More aggressive chunk splitting for better caching and tree-shaking
					if (id.includes('node_modules')) {
						// Split large vendor libraries more granularly
						if (id.includes('lottie')) {
							return 'lottie';
						}
						if (id.includes('svelte')) {
							return 'svelte-runtime';
						}
						// Group small utilities together
						if (id.includes('@lottiefiles') || id.includes('animate') || id.includes('motion')) {
							return 'animations';
						}
						return 'vendor';
					}
					// Split component chunks more granularly
					if (id.includes('src/lib/components/landing')) {
						return 'landing-components';
					}
					if (id.includes('src/lib/components/forms')) {
						return 'forms';
					}
					if (id.includes('src/lib/components')) {
						return 'components';
					}
					// Split route chunks
					if (id.includes('src/routes')) {
						return 'routes';
					}
				},
				// Optimize file naming for better caching
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.');
					const extType = info[info.length - 1];
					if (/\.(css)$/.test(assetInfo.name)) {
						return `css/[name].[hash].${extType}`;
					}
					if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
						return `images/[name].[hash].${extType}`;
					}
					if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(assetInfo.name)) {
						return `media/[name].[hash].${extType}`;
					}
					return `assets/[name].[hash].${extType}`;
				},
				chunkFileNames: 'js/[name].[hash].js'
			},
			// Enhanced tree-shaking
			treeshake: {
				moduleSideEffects: false,
				propertyReadSideEffects: false,
				unknownGlobalSideEffects: false
			}
		},
		// Enable aggressive compression with better optimization
		minify: 'esbuild',
		reportCompressedSize: false, // Faster builds
		// Force CSS inlining
		cssMinify: true,
		// Additional optimizations for smaller bundles
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
			}
		}
	},
	assetsInclude: ['**/*.webp', '**/*.mp4'],
	server: {
		fs: {
			allow: ['..']
		}
	}
});
