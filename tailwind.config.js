/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope'],
			},
			colors: {
				neutral: {
					100: '#F8F9FB',
					200: '#EFF1F4',
					500: '#181A1E',
					600: '#222429',
				},
				greenbrand: {
					50: '#82dab0',
					100: '#82dab0',
					200: '#69d3a0',
					300: '#50cb90',
					400: '#C5F1DD',
					500: '#9FE7C7',
					600: '#65D9A5',
					700: '#3ECF8E',
					800: '#24b47e', // green-500 in dashboard
					900: '#2c9c6a',
				},
				pastellTeal: {
					100: '#A9CDD2',
					500: '#499EB9',
				},
				pastellPurple: {
					100: '#C5B6F1',
					200: '#eee9fb',
					300: '#e8e2f9',
					400: '#e2dbf8',
					500: '#dcd3f7',
					600: '#d6ccf5',
					700: '#d1c5f4',
					800: '#cbbdf2',
					900: '#8565c4',
				},
				pastellGreen: {
					100: '#BBD1B9',
				},
				pastellBlue: {
					100: '#EAF3F8',
				},
				pastellOrange: {
					100: '#FDC0A6',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
