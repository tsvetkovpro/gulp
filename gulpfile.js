'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('styles', function() {
	return gulp.src('frontend/styles/**/*styl', {base: 'frontend'})
		.pipe(stylus())
		.pipe(gulp.dest('public'));
});

