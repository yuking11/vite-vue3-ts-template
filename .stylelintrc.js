module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    indentation: 2,
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
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    'value-keyword-case': ['lower', { ignoreProperties: ['font-family', '$base-font-family'] }],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 'order/properties-alphabetical-order': false, // アルファベット順でソートする
    'length-zero-no-unit': true, // 値が「0」なら単位を省略する
    // 'number-leading-zero': 'always', // 小数点の頭の「0」は省略する
    'rule-empty-line-before': ['always', { except: ['inside-block'] }],
  },
}
