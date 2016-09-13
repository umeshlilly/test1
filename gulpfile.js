
/* These are the required packages needed to carry out the Gulp Task Below. */
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babel = require('gulp-babel');

// This is the bebel task and trasnforms all my ES2016 back to ES5 so all browers can read
gulp.task('babelify', function () {
  return gulp.src('src/**/**/*.js')
.pipe(babel({
  presets: ['es2015'],
}))
.pipe(gulp.dest('lib'));
});

// This is the browserify task.
gulp.task('browserify', function () {
  return browserify('./lib/public/main.js')
.transform('babelify')
.bundle()
.pipe(source('bundle.js')) // this is the output file name
.pipe(gulp.dest('./lib/js/')); // and this is where it ends up
});

// THIS IS MY DEFAULT TASK - Needs to watch both folder ([Folders / Files to Watch], [Gulp Task])
gulp.task('watch', function () {
  gulp.watch(['./src/**/*.js'], ['babelify']);
  gulp.watch(['./lib/public/*.js'], ['browserify']);
});

// Make my default task to watch both folders
gulp.task('default', ['watch']);
