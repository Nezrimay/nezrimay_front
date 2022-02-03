const markdown = require('markdown-it')({ html: true })
const htmlmin = require('html-minifier')

module.exports = function (config) {
	config.addPassthroughCopy('src/fonts')
	config.addPassthroughCopy('src/images')
	config.addPassthroughCopy('src/articles/**/*.(jpg)')
	config.addPassthroughCopy('src/authors/**/*.(jpg)')
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

	config.addFilter('getText', (arr) => {
		const copy = arr.filter((el) => !el.data?.id)
		return copy
	})

	config.addCollection('tagList', (collection) => {
		const set = new Set()
		for (const item of collection.getAllSorted()) {
			if ('tags' in item.data) {
				const tags = item.data.tags
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

	config.addTransform('htmlmin', (content, outputPath) => {
		if (outputPath && outputPath.endsWith('.html')) {
			const result = htmlmin.minify(content, {
				removeComments: true,
				collapseWhitespace: true,
			})

			return result
		}

		return content
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
