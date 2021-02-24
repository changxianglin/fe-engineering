const gulp = require('gulp')
const lin = require('./plugin/gulp-lin')

gulp.task('default', () => {
  const src = 'static/js/*'
  const build = 'build/'
  const stream = gulp.src(src).pipe(lin()).pipe(gulp.dest(build))

  return stream
})