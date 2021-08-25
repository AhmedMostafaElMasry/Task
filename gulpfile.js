'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./project/css/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./project/css'));
};

exports.buildStyles = buildStyles;

exports.watch = function () {
  gulp.watch('./project/css/sass/main.scss', buildStyles);
};