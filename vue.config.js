const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        Views: path.join(__dirname, 'src/views/'),
      },
    },
  },
};
