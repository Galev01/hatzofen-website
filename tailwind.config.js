/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'brand-background': '#1A1F2C',
				'brand-primary': '#9b87f5',
				'brand-accent': '#FDE1D3',
				'brand-text-light': '#F0F0F0',
			},
			fontFamily: {
				// Add a Hebrew font like Assistant, Alef, or use a good system stack
				// Ensure the font is available in your project (e.g., via Google Fonts import or local files)
				hebrew: [
					'Assistant', // Example Hebrew font
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
				],
			},
		}
	},
	

	plugins: [require('@tailwindcss/typography'), require('tailwindcss-rtl')]
};
