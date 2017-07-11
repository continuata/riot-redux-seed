var webpack = require('webpack')
var path = require('path')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'riot', 'sinon', 'promise'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-riot',
      'karma-webpack',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-sinon',
      'karma-promise',
      'istanbul-instrumenter-loader'
    ],
    files: [
      'test/test_index.js'
    ],
    preprocessors: {
      'test/test_index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      plugins: [
        new webpack.ProvidePlugin({
          riot: 'riot'
        })
      ],
      resolve: {
        root: [
          path.resolve('./app'),
          path.resolve('./test')
        ]
      },
      module: {
        preLoaders: [
          { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
        ],
        loaders: [
          { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
          { test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.woff2$|\.eot$|\.otf$|\.ttf$/, loader: 'file-loader' }
        ],
        postLoaders: [
          { test: /\.js$|\.tag$/, include: /app/, exclude: /node_modules/, loader: 'istanbul-instrumenter-loader' }
        ]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {type: 'text'},
        {type: 'lcovonly', subdir: 'lcov'}
      ]
    },
    failOnEmptyTestSuite: false,
    autoWatch: true
  })
}
