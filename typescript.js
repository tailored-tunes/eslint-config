'use strict';

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/camelcase': 0
  },
  plugins: [
    '@typescript-eslint'
  ]
};
