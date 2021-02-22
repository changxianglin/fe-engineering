const { src, dest } = require('gulp')
const babel = require('gulp-babel');
const uglify = require('gulp-uglify')
const rename = require('gulp-rename');

exports.default = function () {
  return src('static/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('build/'))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('build/'))
}