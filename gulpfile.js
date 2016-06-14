var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var buffer = require('vinyl-buffer'); // new require
 
gulp.task('browserify', function() {
    return browserify('./dev/app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dev/static/js/'));
});

gulp.task('browserify-min', function() {
    return browserify('./dev/app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dev/static/js/dist/'));
});
 
gulp.task('watch', function() {
    gulp.watch('dev/app/**/*.js', ['browserify']);
});
 
gulp.task('default', ['watch']);