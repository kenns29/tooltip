var path = require('path');
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(/^(d3)$/);
module.exports = exports = {
  entry: [
      './tooltip.js'
  ],
  devtool: 'source-map',
  output: {
      path: path.join(__dirname,'dist'),
      filename: 'tooltip.js',
      library: ["tooltip"],
		  libraryTarget: "umd",
      publicPath: '/'
  },
  resolve: {
      extensions: ['.js']
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: ["babel-loader?presets[]=es2015"]
          }
      ]
  },
  // plugins:[ignore]
};
