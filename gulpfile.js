var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch'),
    react = require('gulp-react');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('jsx', function () {
  return gulp.src('./jsx/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['less', 'jsx'] , function() {
  gulp.watch(['./less/**/*.less'], ['less']);
  gulp.watch(['./jsx/**/*.jsx'], ['jsx']);
});
