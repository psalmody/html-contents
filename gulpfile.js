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
  nodemon({
    ignore: ['gulpfile.js'],
    script: 'bin/www'
  }) 
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch(['test/**/*.*', 'html-contents.js'], {cwd: './'}, ['livereload'])
})

gulp.task('default', ['server', 'watch'])
