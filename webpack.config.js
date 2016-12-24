var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./index.jsx",
  sourceMapFilename: "fluxxor.js.map",
  output: {
    path: __dirname + "/build",
    filename: "fluxxor.js",
    library: "Fluxxor",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
       test: /\.js/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
        presets: ['es2015','react']
       }
      },
      { test: /\.json$/, loader: "json" }
    ]
  }
};