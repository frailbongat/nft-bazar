/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				default: '#0F0028',
				accent: '#2DCACF'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				archivo: ['Archivo', 'sans-serif']
			}
		}
	},
	plugins: []
};
