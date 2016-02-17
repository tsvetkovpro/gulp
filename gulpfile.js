'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');

gulp.task('styles', function() {
	return gulp.src('frontend/styles/main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public'));
});

