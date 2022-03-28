module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				refugees: 'rgb(255, 56, 92)'
			},
			boxShadow: {
				hover: '2px 2px 25px 1px rgba(0, 0, 0, 0.2)'
			}
		},
		screens: {
			tablet: '744px',
			laptop: '930px'
		},
		fontFamily: {
			body: [
				'Circular',
				' -apple-system',
				' BlinkMacSystemFont',
				' Roboto',
				' Helvetica Neue',
				' sans-serif'
			]
		}
	},
	plugins: []
};
