'use strict';

var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(srcPath, 'js', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'js']
  },
  module: {
    loaders: [
      {
        text: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass'],
        sassLoader: {
          incudePaths: [path.join(srcPath, 'styles')]
        }
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: 'cheap-module-source-map'
};
