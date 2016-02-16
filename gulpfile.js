'use strict';

const gulp = require('gulp');

gulp.task("hello", function (callback) {
	console.log("Hello!");
	callback();
});

gulp.task('example:promise', function() {
	return new Promise((resolve, reject) => {
		// ....
		resolve('result');
		});
	});

gulp.task('example:stream', function() {
	//прочитать всё из потока и сзатем сделать
	return require('fs').createReadStream(__filename);
	});

gulp.task('example:process', function() {
	//return child process
	return require('child_process').spawn('ls', ['.'], {stdio: 'inherit'});
	});

gulp.task('example', gulp.series('hello', 'example:promise', 'example:stream', 'example:process'));

//параллельные задачи
gulp.task('example-pll', gulp.parallel('hello', 'example:promise', 'example:stream', 'example:process'));