const path = require('path');

module.exports = {
  entry: './js/aplicacion.js',
  output: {
    filename: 'aplicacion.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'
};