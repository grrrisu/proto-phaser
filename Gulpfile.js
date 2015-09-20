var gulp = require("gulp");
// var sourcemaps = require("gulp-sourcemaps");
// var babel = require("gulp-babel");
// var concat = require("gulp-concat");

var browserify = require("browserify");
var babelify = require("babelify");
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');

gulp.task('default', ['script']);

// gulp.task("compile_es6", function () {
//   return gulp.src("src/**/*.js")
//     .pipe(babel())
//     .pipe(gulp.dest("javascripts"));
// });
//
// gulp.task("compile_and_unify_es6", function () {
//   return gulp.src("src/**/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat("all.js"))
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("javascripts"));
// });

gulp.task('script', function() {
  var sources = browserify({
    entries: 'src/main.js',
    debug: true
  })
  .transform(babelify.configure());

  return sources.bundle()
    .pipe(vinylSourceStream('app.min.js'))
    .pipe(vinylBuffer())
    // Do stuff to the output file
    .pipe(gulp.dest('javascripts/'));
});
