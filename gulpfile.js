const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const nano = require('cssnano'); 
const prefixer = require('autoprefixer');

// include image min library
const imagemin = require('gulp-imagemin');
// DEFINE SOME COMMON TASKS FOR GULP TO RUN

// like compile and mminify SASS files:
function compile(done) {
  gulp.src("./sass/**/*.scss")
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(postcss([prefixer(), nano()]))
      .pipe(gulp.dest("./css"))
      done()
}


// minify every image
function squashImages(done) {
  gulp.src('./images/**')
      .pipe(imagemin())
      .pipe(gulp.dest('.dist/images'))
      done()
}

exports.compile = compile;
exports.squash = squashImages;