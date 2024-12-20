module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true
      }
    ]
  ],
  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            displayName: false
          }
        ]
      ]
    }
  }
}