// webpack-dev-config.js

// configuration data related to development only

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CopyPlugin = require('copy-webpack-plugin');
const paths = require('./paths');
// import common webpack config
const common = require('./webpack-common-config.js');

module.exports = merge(common, {
  entry: [paths.appIndexJs],
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  // devtool option controls if and how source maps are generated.
  // see https://webpack.js.org/configuration/devtool/
  // If you find that you need more control of source map generation,
  // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new CopyPlugin([{ from: 'src/assets', to: 'assets' }]),
  ],
  module: {
    rules: [
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        // look for .css or .scss files
        test: /\.(css|scss|sass)$/,
        // in the `src` directory
        include: [path.resolve(paths.appSrc), path.resolve(paths.nodeModules)],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot|gif)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static',
      },
    ],
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: ['node_modules'],
  },
});
