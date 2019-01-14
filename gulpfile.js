
// Include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');

 // Concatenate JS Files
gulp.task('default', function() {
    return gulp.src('public/**/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public'));


});

