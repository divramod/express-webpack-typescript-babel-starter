'use strict'

const path = require('path')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const nodeExternals = require('webpack-node-externals')
const glob = require('glob')
const pathes = glob.sync('./src/**/*.spec.*')

module.exports = {
  entry: {
    app: './src/index.ts',
    test: glob.sync('./src/**/*.spec.*')
  },
  devtool: 'inline-source-map',
  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: [/node_modules/, nodeModulesPath]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}
