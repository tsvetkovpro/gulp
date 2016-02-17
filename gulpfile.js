'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const debug = require('gulp-debug');

gulp.task('styles', function() {
	return gulp.src('frontend/styles/main.styl', {base: 'frontend'})
		.pipe(stylus())
		.pipe(gulp.dest('public'));
});

