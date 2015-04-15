'use strict'

gulp = require('gulp')
sequence = require('run-sequence')
exec = require('child_process').exec
env =
  dev: true
  main: 'http://localhost:8080/build/main.js'

gulp.task 'coffee', ->
  coffee = require('gulp-coffee')
  gulp
  .src 'src/*.coffee'
  .pipe coffee()
  .pipe gulp.dest('lib/')

gulp.task 'html', (cb) ->
  require('cirru-script/lib/register')
  html = require('./template.cirru')
  fs = require('fs')
  assets = undefined
  unless env.dev
    assets = require('./build/assets.json')
    env.main = './build/' + assets.main

  fs.writeFile 'index.html', html(env), cb

gulp.task 'del', (cb) ->
  del = require('del')
  del [ 'build' ], cb

gulp.task 'webpack', (cb) ->
  command = if env.dev then 'webpack' else 'webpack --config webpack.min.coffee'
  exec command, (err, stdout, stderr) ->
    console.log stdout
    console.log stderr
    cb err

gulp.task 'build', (cb) ->
  env.dev = false
  sequence 'del', 'webpack', 'html', cb
