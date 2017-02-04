const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: {
    background: './app/src/background.js',
    contentscript: './app/src/contentscript.js',
    options: './app/src/options.js',
    popup: './app/src/popup.js',
  },
  output: {
    path: path.join(__dirname, 'app/lib'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }), new LiveReloadPlugin({ port: 35729 })],
};
