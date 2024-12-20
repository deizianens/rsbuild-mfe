module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/client-api',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) =>
      test.test('.svg')
    )
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    })

    return config
  },
}
