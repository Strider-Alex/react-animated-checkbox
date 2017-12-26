/**
 * Created by Yang Kefan on 2017/11/24.
 */
module.exports = {
  entry: "./lib/index.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};