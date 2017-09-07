var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var gulp = require('gulp');
var iconify = require("gulp-iconify");
 
gulp.task('sass', function(){
  return gulp.src('app/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/'));
});

gulp.task('iconify', function() {
    iconify({
        src: 'app/images/svgs/*.svg',
        pngOutput: 'app/images/svgs/png',
		    scssOutput: 'app/iconify-css/iconify-not-in-use',
        cssOutput:  'app/iconify-css'
    });
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/images/svgs/*.svg', ['iconify']); 
  // Other watchers
})



 
