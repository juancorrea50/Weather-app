const path = require('path');
const HTMLWbpckPlgn = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
   filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',

  },
  plugins: [
    new HTMLWbpckPlgn({
      template: './src/index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  }
};