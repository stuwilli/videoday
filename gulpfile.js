var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var exec = require('child_process').exec;

gulp.task('img:copy', function () {
  return gulp.src('./lib/img/*')
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest('./static/img'));
});

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
    .on('error', function (err) {
      gutil.log(err);
      this.emit('end');
    })
    .pipe(source('./lib/js/main.js'))
    .pipe(buffer())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./static/js'));
});

gulp.task('dev', ['img:copy', 'js:compile'], function () {
  gulp.watch('./lib/js/**/*.js', ['js:compile']);
  exec('npm run serve', function (err, stdout, stderr) {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

gulp.task('default', ['img:copy', 'js:compile']);
