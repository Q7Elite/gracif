const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new Htmlwebpackplugin({
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpe?g)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(webp|svg)$/,
        use: 'file-loader'
      }
    ]
  }
};
