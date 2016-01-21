var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('default', function () {
    gulp.src('./SmoothScroll.js')
        .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
        .pipe(gulp.dest('./'));
});
