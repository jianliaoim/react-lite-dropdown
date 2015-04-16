
fs = require('fs')

module.exports =
  entry:
    main: [
      'webpack-dev-server/client?http://0.0.0.0:8080'
      'webpack/hot/dev-server'
      './src/main'
    ]
  output:
    path: 'build/'
    filename: '[name].js'
    publicPath: 'http://localhost:8080/build/'
  resolve: extensions: ['.jsx', '.js', '.coffee', '']
  module:
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
      {test: /\.coffee$/, loader: 'coffee'}
      {test: /\.css$/, loader: 'style!css'}
    ]
  plugins: []
