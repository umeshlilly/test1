/* These are the required packages needed to carry out the Gulp Task Below. */
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const pump = require('pump');


// This is the bebel task and trasnforms all my ES2016 back to ES5 so all browers can read
gulp.task('babelify', () => {
  return gulp.src('src/**/**/*.js').pipe(babel({
    presets: ['es2015'],
  })).pipe(gulp.dest('lib'));
});

// This is the browserify task.
gulp.task('browserify', () => {
  return browserify('./lib/public/js/main.js')
        .transform('babelify')
        .bundle()
        .pipe(source('bundle.js')) // this is the output file name
        .pipe(gulp.dest('./lib/public/js/')); // and this is where it ends up
});

// This is the imaging task.
gulp.task('image', () => {
  return gulp.src('./src/public/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('lib/public/img/'));
});

// This task transforms SASS into CSS.
gulp.task('sass', () => {
  return gulp.src('./src/public/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./lib/public/css'));
});

// This task runs unit testing from Mocha.
gulp.task('mocha', () => {
  gulp.src('tests/mocha.js', {
    read: false,
  }).pipe(mocha({
    reporter: 'nyan',
  }));
});

// This task runs the standards check agsinst the `.eslintrc` file in the root directory.
gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!lib/**', '!src/public/js/bundle.js', '!src/public/vendor/**'])
        .pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
});

// This task compresses vendor javascript code.
gulp.task('minify-js', () => {
  pump([
    gulp.src('src/public/vendor/*.js'),
    uglify(),
    gulp.dest('lib/public/vendor'),
  ]);
});

// This task compresses vendor css code.
gulp.task('minify-css', () => {
  return gulp.src('src/public/vendor/*.css')
        .pipe(cleanCSS({
          compatibility: 'ie8',
        }))
        .pipe(gulp.dest('lib/public/vendor'));
});


// THIS IS THE DEFAULT TASK - Needs to watch both folder ([Folders / Files to Watch], [Gulp Task])
gulp.task('watch', () => {
  gulp.watch(['./src/controllers/*.js'], ['babelify']);
  gulp.watch(['./src/public/img/*'], ['image']);
  gulp.watch(['./src/public/scss/*.scss'], ['sass']);
  gulp.watch(['./lib/public/js/*.js'], ['browserify']);
  gulp.watch(['./src/public/vendor/*.js'], ['minify-js']);
  gulp.watch(['./src/public/vendor/*.css'], ['minify-css']);
});

// Make my default task to watch both folders
gulp.task('default', ['watch']);
