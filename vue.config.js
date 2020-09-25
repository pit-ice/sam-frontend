const path = require('path');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        Views: path.join(__dirname, 'src/views/'),
      },
    },
  },
  // chainWebpack: (config) => {
  //   //config.optimization.delete('splitChunks');
  //   config.plugins.delete('prefetch');
  // },
};
