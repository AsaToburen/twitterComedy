var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('images', function() {
  gulp.src('./public/assets/images/**/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('./public/dist/images/'));
});

gulp.task('styles', function() {
  gulp.src(['./public/assets/styles/*.scss'])
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./public/dist/styles/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/dist/styles/'));
});

gulp.task('scripts', function() {
  return gulp.src('./public/assets/js/**/*.js')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/dist/js/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js/')); 
});

gulp.task('default', function() {
  gulp.watch("./public/assets/styles/**/*.scss", ['styles']);
  gulp.watch("./public/assets/js/**/*.js", ['scripts']);
  gulp.watch("./public/assets/images/**/*", ['images']);
  gulp.watch("*.html");
});



