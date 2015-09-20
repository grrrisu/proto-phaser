var gulp = require("gulp");

var browserify = require("browserify");
var babelify = require("babelify");
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var liveReload = require("gulp-livereload");

liveReload({
  start: true
});

gulp.task('default', ['script']);

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
    .pipe(gulp.dest('javascripts/'))
    .pipe(liveReload());
});

gulp.watch("src/**/*.js", ["script"]);
