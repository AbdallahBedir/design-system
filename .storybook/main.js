const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    // add scss support
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    /**
     * Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
     * So we are excluding it to add '@svgr/webpack' as svg loader instead of 'file-loader'
     * See https://github.com/storybookjs/storybook/blob/7dc59dabc4621a587bed94e1ae780ae157d2246c/lib/core/src/server/preview/base-webpack.config.js#L69
     */
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      types: path.resolve(__dirname, './src/types'),
    };

    return config;
  },
};
