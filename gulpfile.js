'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('styles', function() {

	return gulp.src('frontend/styles/main.styl')
		.pipe(gulpIf(function(file) {
				return file.extname == '.js';
			}, sourcemaps.init()))
		.pipe(stylus())
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public'));

});

