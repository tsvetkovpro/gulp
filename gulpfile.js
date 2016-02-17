'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');

gulp.task('styles', function() {
	return gulp.src('frontend/styles/**/*styl', {base: 'frontend'})
		.pipe(stylus())
		.pipe(concat('all.css'))
		.pipe(gulp.dest('public'));
});

