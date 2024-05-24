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
};