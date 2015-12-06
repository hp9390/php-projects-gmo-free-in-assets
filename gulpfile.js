var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixgh', function () {
    return gulp.src('gh-pages/dist/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('dist'));
});