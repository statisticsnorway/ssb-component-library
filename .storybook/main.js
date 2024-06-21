const path = require('path')

module.exports = {
  stories: ['../**/*.story.@(jsx|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-webpack5-compiler-babel'],

  staticDirs: ['../src/media'],

  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push(
      {
        include: path.resolve(__dirname, '../'),
        test: /\.(s*)css$/i,
        sideEffects: true,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|ttf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )
    return config
  },

  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },

  features: {
    postcss: false,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
}
