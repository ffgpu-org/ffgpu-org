var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');



gulp.task('build', function(){
    return gulp.src(['./*assets/**/*', '*images/**/*', 'index.html'])
                .pipe(gulp.dest('./docs/'));
});


gulp.task('dev', gulp.series('build', function(done) {
    gulp.watch(['./*.html', './assets/**/*'], gulp.series('build', function(done) {
            browserSync.reload();
            done();
    }));

    browserSync.init({
        server: {
            baseDir: './docs/'
        }
    });
    done();
}));