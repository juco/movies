var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    // karma only needs to know about the test bundle
    files: [
      'tests.bundle.js'
    ],
    frameworks: [ 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'dots' ],
    singleRun: true,
    // webpack config object
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
