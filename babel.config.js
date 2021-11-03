module.exports = {
  env: {
    test: {
      presets: [
        'babel-preset-vite',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
}
