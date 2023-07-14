/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1020px',
			xl: '1440px',
		},
		colors: {
			varyDarkBlue: 'hsl(233, 47%, 7%)',
			darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
			softViolet: 'hsl(277, 64%, 61%)',
			transparentMainParagraph: 'hsla(0, 0%, 100%, 0.75)',
			transparentStatHeading: 'hsla(0, 0%, 100%, 0.6)',
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			lexendDeca: ['Lexend Deca', 'sans-serif'],
		},
		extend: {
			letterSpacing: {
				widest: '0.15em',
			},
			fontSize: {
				xxs: '10px',
			},
		},
	},
	plugins: [],
};
