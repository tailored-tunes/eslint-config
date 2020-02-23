'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'eslint-config-tailored-tunes/rules/base'
  ],
  globals: {
    require: false,
    JSON: false,
    module: false,
    global: false,
    process: false
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'jest'
  ]
};
