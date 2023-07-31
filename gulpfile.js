const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')

    // comprimindo o css para melhorar a performace
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}


function images() {
    return gulp.src('./src/images/**/*')

    // comprimindo o css para melhorar a performace
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images)

// atualizando
// comando para rodar: npm run build watch
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}