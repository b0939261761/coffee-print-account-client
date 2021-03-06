const webpack = require('webpack');

module.exports = {
  productionSourceMap: false,

  devServer: {
    port: 4001
  },

  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /moment$/
      })
    ]
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
};
