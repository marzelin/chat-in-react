var resolve = require('path').resolve
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'js', 'index.js'),
  output: {
    path: resolve(__dirname, 'www'),
    filename: 'script.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'static', 'index.html')
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'www'),
    inline: true
  }
}