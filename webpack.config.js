var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './source/main.js',
  output: {
    path: path.join(__dirname, 'source'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: path.join(__dirname, 'source'),
        query: {
          presets: 'es2015',
        },
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map',
};