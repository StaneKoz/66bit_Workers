const path = require('path');

module.exports = {
  // Ваша конфигурация Webpack

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.scss$/,
        loader: 'sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, '/src/static/styles')],
        },
      },
    ]
  },
  
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src/static/styles'), // Псевдоабсолютный путь к вашей папке static files
    }
  }
};