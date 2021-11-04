const markdown = require('markdown-it')({ html: true })

module.exports = function (config) {
	// config.addPassthroughCopy('src/styles')
	config.addPassthroughCopy('src/fonts')
	config.addPassthroughCopy('src/images')
	config.addPassthroughCopy('src/articles/**/*.(jpg)')
	config.addPassthroughCopy('src/scripts')

	config.addPairedShortcode('markdown', (content) => {
		return markdown.render(content)
	})

	config.addFilter('transformDate', (value) => {
		return value
			.toLocaleString('ru', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
			})
			.replace(' г.', '')
			.split(' ')
			.join('.')
	})

	config.addCollection('tagList', (collection) => {
		const set = new Set()
		for (const item of collection.getAllSorted()) {
			if ('tags' in item.data) {
				const tags = item.data.tags
				console.log(item.data.date)
				if (typeof tags === 'string') {
					tags = [tags]
				}
				for (const tag of tags) {
					set.add(tag)
				}
			}
		}
		return [...set].sort()
	})

	return {
		dir: {
			input: 'src',
			output: 'dist',
			layouts: 'layouts',
			includes: 'includes',
		},
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: true,
		templateFormats: ['md', 'njk'],
	}
}
