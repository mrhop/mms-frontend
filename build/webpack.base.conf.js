var path = require('path')
var utils = require('./utils')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var lodash = require('lodash');

var assetImgName = utils.assetsPath('images/[name].[hash:7].[ext]');
var assetFontName = utils.assetsPath('fonts/[name].[hash:7].[ext]');
var assetImgOutputPath = undefined;
var assetFontOutputPath = undefined;
var assetImgPublicPath = config.dev.assetsPublicPath;
var assetFontPublicPath = config.dev.assetsPublicPath;
var assetImgInHtmlPublicPath = config.dev.assetsPublicPath;


if (process.env.NODE_ENV === 'production') {
  assetImgName = 'images/[name].[hash:7].[ext]';
  assetFontName = 'fonts/[name].[hash:7].[ext]';
  assetImgOutputPath = utils.assetsPath('/');
  assetFontOutputPath = utils.assetsPath('/');
  assetImgPublicPath = '../'
  assetFontPublicPath = '../'
  assetImgInHtmlPublicPath = utils.assetsPath('') + "/"
}

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: lodash.assign({
    vendor: './src/scss/vendor.scss',
  }, utils.getEntries('./src/modules/**/*.js')),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /^((?!html-).)*\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('src'), resolve('test')],
        query: {
          limit: 10000,
          name: assetImgName,
          outputPath: assetImgOutputPath,
          publicPath: assetImgPublicPath,
        }
      },
      {
        test: /^.*(?=html-).*\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('src'), resolve('test')],
        query: {
          limit: 10000,
          name: assetImgName,
          outputPath: assetImgOutputPath,
          publicPath: assetImgInHtmlPublicPath,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        include: [resolve('src'), resolve('test')],
        query: {
          limit: 10000,
          name: assetFontName,
          outputPath: assetFontOutputPath,
          publicPath: assetFontPublicPath
        }
      }
    ]
  }
}
