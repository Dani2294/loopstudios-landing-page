module.exports = {
	mode: 'jit',
	purge: ['*.html', './css/**/*.css', '*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-gray': 'hsl(0, 0%, 55%)',
				'very-dark-gray': 'hsl(0, 0%, 41%)',
			},
			fontFamily: {
				alata: '"Alata", sans-serif',
				josefin: "'Josefin Sans', sans-serif",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
