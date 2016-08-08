// ----------------------------
// Include Dependencies 
// ----------------------------

var gulp         = require('gulp');
var stylus       = require('gulp-stylus');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;


// ----------------------------
// Define Paths
// ----------------------------

var paths = {
    stylus_watch: './src/styles/**/*.styl',
    stylus_main: './src/styles/style.styl'
};

// ----------------------------
// Define Gulp Sass Task
// ----------------------------

gulp.task('styles', function() {
  gulp.src(paths.stylus_main)
    .pipe(stylus())
    .pipe(gulp.dest('./src/styles/'))
    .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function(){
	browserSync.init({
		server: './src'
	})
});

gulp.task('watch', function(){
	gulp.watch('./src/styles/*.styl', ['styles']);
	gulp.watch('./src/*.html', reload);
});



// -------------------------
// Set up our default tasks
// ----------------------------

gulp.task('default', ['browser-sync','styles', 'watch']);
// gulp.task('default', function(){
//     gulp.start('stylus')
//     gulp.watch(paths.stylus_watch,['stylus', 'browser-sync']); 
//     // gulp.watch('./src/*.html', reload);
// }); 