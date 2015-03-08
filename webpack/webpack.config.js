module.exports = {
  entry: '../react/index.js',
  output: {
    filename: 'webpack.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
