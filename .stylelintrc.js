module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: ['**/node_modules/**'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'font-family-name-quotes': 'always-unless-keyword',
    'function-url-quotes': 'never',
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'v-bind',
          'fs',
          'z',
          '/^color\\..+/',
          '/^map\\..+/',
          '/^list\\..+/',
          '/^math\\..+/',
        ],
      },
    ],
    'scss/at-rule-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'forward',
          'function',
          'if',
          'else',
          'for',
          'each',
          'include',
          'mixin',
          'content',
          'return',
        ],
      },
    ],
    'value-keyword-case': ['lower', { ignoreProperties: ['font-family', '$base-font-family'] }],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'selector-class-pattern': '^([a-z][a-z0-9]*)([-_][a-z0-9]+)*$',
  },
}
