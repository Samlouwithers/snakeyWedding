var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

gulp.task('styles', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
	.pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
  	gulp.watch('./assets/sass/**/*.scss', ['styles']);
  	//livereload.listen();
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'connect']);