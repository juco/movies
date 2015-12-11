'use strict';

var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(srcPath, 'js', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'js', 'styles']
  },
  module: {
    loaders: [
      {
        text: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
