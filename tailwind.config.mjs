/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
				'soft-red': 'hsl(14, 88%, 65%)',
				'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
				'dark-grayish-blue': 'hsl(240, 6%, 50%)',
				'soft-violet': 'hsl(273, 75%, 66%)',
				'soft-blue': 'hsl(240, 73%, 65%)',
				'dividers': 'hsl(240, 5%, 91%)'
			}
		},
	},
	plugins: [],
}
