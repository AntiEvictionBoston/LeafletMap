'use strict';

var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};

function getPlugins() {
  var plugins = [];

  plugins.push(new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }));
  plugins.push(new webpack.NoErrorsPlugin());

  if (isProduction()) { // prod plugins
    plugins.push(new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }));
  }
  else { // dev plugins
  }
  return plugins;
}

function entryPoints () {
  if (isProduction()) {
    return { main: [path.join(srcPath, 'map.js')] };
  }
  else {
    return [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      path.join(srcPath, 'map.js')
    ];
  }
}

function getJSLoaders () {
  return isProduction() ? ['babel-loader'] : ['react-hot', 'babel-loader'];
}

module.exports = {
  target: 'web',
  cache: true,
  entry: entryPoints(),
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: __dirname + '/build',
    filename: 'maps.js',
  },
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loaders: getJSLoaders()},
      {test: /\.js$/, exclude: /node_modules/, loaders: getJSLoaders()},
      {test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }
    ]
  },
  plugins: getPlugins(),
  debug: isProduction() ? false : true,
  devtool: isProduction() ? '' : 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true
  }
};
