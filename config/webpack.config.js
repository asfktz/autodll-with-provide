const path = require('path');
const { ProvidePlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');

module.exports = {
  // Since our webpack config is inside ./config,
  // it's important that we tell it where is it relative to the root:
  context: path.join(__dirname, '..'),
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlPlugin(),
    new ProvidePlugin({
      _: 'lodash'
    }),
    new AutoDllPlugin({
      // AutoDllPlugin will read the context from the config
      // but be can override it if we want
      // context: path.join(__dirname, '..'),
      inject: true,
      entry: {
        dll: ['lodash']
      }
    })
  ]
};
