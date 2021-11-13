const del = require('del')
const fs = require('fs')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const replace = require('gulp-replace')
const postImport = require('postcss-import')
const presetEnv = require('postcss-preset-env')
const nested = require('postcss-nested')
const csso = require('postcss-csso')

gulp.task('styles:compress', () => {
	const plugins = [
		postImport(),
		presetEnv({
			stage: 4,
			features: {
				'dir-pseudo-class': false,
			},
		}),
		nested(),
		csso(),
	]

	return gulp
		.src('src/styles/style.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('dist/styles/'))
})

gulp.task('clean', () => {
	return del(['dist/styles'])
})

// Build

gulp.task('build', gulp.series('styles:compress'))
