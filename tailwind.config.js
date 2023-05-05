/** @type {import('tailwindcss').Config} */
export default {
	content: [
		//* Local component paths
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",

		//* Path to the tremor module
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
