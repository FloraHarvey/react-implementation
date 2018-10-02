module.exports = {
  entry: ['./src/app.js'],
  output: {
      filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  devServer: {
      port: 3000
  }
};
