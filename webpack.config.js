const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/Carousel.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
}
