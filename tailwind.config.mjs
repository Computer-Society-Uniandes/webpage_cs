/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary" : "#FFD02A",
				"accent" : "#E7526D",
				"background" : "#2D2D2D"
			},
			fontFamily : {
				"ubuntu" : ["Ubuntu" , "sans-serif"],
				"source" : ['Source Sans Pro', 'sans-serif']
			}
		},
	},
	plugins: [],
}
