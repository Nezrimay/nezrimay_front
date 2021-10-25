const markdown = require('markdown-it')({ html: true })

module.exports = function (config) {
	config.addPairedShortcode('markdown', (content) => {
		return markdown.render(content)
	})

	config.addCollection('myCollect', function (collection) {
		return collection.getAll().filter((item) => {
			console.log(item)
			return item.data.tags?.includes('post') && item.data.title.includes('1')
		})
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
