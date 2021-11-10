module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 4,
			features: {
				'dir-pseudo-class': false,
			},
		},
		'postcss-nested': {},
		'postcss-import': {},
	},
}
