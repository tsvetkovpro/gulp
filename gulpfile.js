'use strict';

const gulp = require('gulp');

gulp.task(hello);

function hello(callback) {
	console.log("Hello!");
	callback();
}