var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-preset-es2015')
var filename = 'bundle_' + Date.now() + '.js'

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: filename
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new HtmlWebpackPlugin({
      title: 'Riot Redux Seed App',
      template: 'index.ejs'
    })
  ],

  resolve: {
    root: [
      path.resolve('./app')
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
    ]
  },
  devServer: {
    contentBase: './public'
  }
}
