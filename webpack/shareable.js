const path = require('path');

module.exports = {
  resolve: {
    alias: {
      shared: path.resolve('src', 'shared'),
      constants: path.resolve('src', 'constants.scss'),
      '@pages': path.resolve('src', 'pages'),
      '@components': path.resolve('src', 'components'),
      '@layout': path.resolve('src', 'Layout'),
      utils: path.resolve('src', 'utils'),
      store: path.resolve('src', 'store.js'),
    },
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.scss', '.svg'],
  },
};
