
const gulp = require('gulp')
const imageMin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))

//create gulp task
gulp.task('message', async () => {
    return console.log('Gulp is running...')
})

//create destination folder
gulp.task('copyHtml', async () => {

    gulp.src('./src/*.html')
        .pipe(gulp.dest('dest'))
})

//compress images
gulp.task('imageMin', async () => {
    gulp.src('./src/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dest/img'))
})

//Minify JS-remove unwanted whitespaces
gulp.task('uglify', async () => {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dest/js'))
})

//minified CSS

gulp.task('sass', async () => {
    gulp.src('./src/css/*.css')
        .pipe(sass())
        .pipe(gulp.dest('./dest/css'))
})