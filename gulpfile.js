var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var exec = require('child_process').exec;

gulp.task('js:compile', function () {
  return browserify({
      entries:'./lib/js/main.js',
      transforms: [
        babelify.configure({
          presets: ['es2015']
        })
      ]
    })
    .bundle()
    .pipe(source('./lib/js/main.js'))
    .pipe(buffer())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./static/js'));
});

gulp.task('dev', ['js:compile'], function () {
  gulp.watch('./lib/js/**/*.js', ['js:compile']);
  exec('npm run serve', function (err, stdout, stderr) {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

gulp.task('default', ['js:compile']);
