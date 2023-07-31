const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styles() {
    return gulp.src('./src/styles/*.scss')

    // comprimindo o css para melhorar a performace
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'))
}

exports.default = styles

// atualizando
// comando para rodar: npm run build watch
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}