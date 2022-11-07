const path = require('path');

module.exports = {
  resolve: {
    alias: {
      shared: path.resolve('src', 'shared'),
      constants: path.resolve('src', 'constants.scss'),
      '@assets': path.resolve('src', 'assets'),
      '@roots': path.resolve('src', 'roots'),
      '@components': path.resolve('src', 'components'),
      '@layout': path.resolve('src', 'Layout'),
      '@variables': path.resolve('_variables.scss'),
      utils: path.resolve('src', 'utils'),
      store: path.resolve('src', 'store.js'),
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.scss', '.svg'],
  },
};
