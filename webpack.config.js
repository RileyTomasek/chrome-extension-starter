const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = () => ({
  devtool: 'sourcemap',
  entry: {
    background: './source/background',
    chromereload: './source/chromereload',
    contentscript: './source/contentscript',
    options: './source/options',
    popup: './source/popup',
  },
  output: {
    path: path.join(__dirname, 'distribution'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '**',
        context: 'source',
        ignore: '*.js',
      },
    ]),
    new LiveReloadPlugin({ port: 35729 }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
