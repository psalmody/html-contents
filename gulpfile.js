const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const livereload = require('gulp-livereload')

gulp.task('livereload', () => {
  return livereload.reload()
})

gulp.task('server', () => {
  //development
  process.env.PORT = 3000
  process.env.NODE_ENV = 'development'
  return nodemon({
    ignore: ['gulpfile.js'],
    script: 'bin/www'
  }) 
})

gulp.task('watch', () => {
  livereload.listen()
  return gulp.watch(['test/**/*.*', 'html-contents.js'], gulp.parallel('livereload'))
})

gulp.task('default', gulp.parallel('server', 'watch'))
