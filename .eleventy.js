const markdown = require('markdown-it')({ html: true })

module.exports = function (config) {
	config.addPassthroughCopy('src/styles')
	config.addPassthroughCopy('src/fonts')

	config.addPairedShortcode('markdown', (content) => {
		return markdown.render(content)
	})

	return {
		dir: {
			input: 'src',
			output: 'dist',
			layouts: 'layouts',
		},
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		templateFormats: ['md', 'njk'],
	}
}
