'use strict';

module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'globals': {
    'require': false,
    'JSON': false,
    'module': false,
    'global': false,
    'process': false
  },
  'rules': {
    'accessor-pairs': 'off',
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': false
      }
    ],
    'camelcase': [
      'error',
      {
        'properties': 'always'
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'complexity': [
      'error',
      7
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'error',
    'consistent-this': [
      'error',
      'self'
    ],
    'curly': [
      'error',
      'all'
    ],
    'default-case': 'error',
    'dot-location': 'off',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart'
    ],
    'func-names': 'off',
    'func-style': [
      'error',
      'expression'
    ],
    'guard-for-in': 'error',
    'handle-callback-err': [
      'error',
      '^(err|error)$'
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'key-spacing': [
      'off',
      {
        'align': 'value'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true,
        'overrides': {}
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'off',
    'max-nested-callbacks': [
      'error',
      3
    ],
    'new-cap': [
      'error',
      {
        'capIsNew': true,
        'newIsCap': true
      }
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-cond-assign': [
      'error',
      'always'
    ],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-requires': [
      0,
      true
    ],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 1
      }
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-path-concat': 2,
    'no-process-env': 0,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-modules': 0,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 2,
    'no-ternary': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 'error',
    'no-use-before-define': 2,
    'no-var': 0,
    'no-void': 2,
    'no-warning-comments': [
      2,
      {
        'location': 'anywhere',
        'terms': [
          'fixme',
          'fuck',
          'todo',
          'xxx'
        ]
      }
    ],
    'no-with': 2,
    'object-curly-spacing': [
      2,
      'never'
    ],
    'one-var': 'off',
    'operator-assignment': [
      2,
      'always'
    ],
    'operator-linebreak': [
      2,
      'before'
    ],
    'padded-blocks': [
      0,
      'always'
    ],
    'prefer-const': 2,
    'quotes': [
      2,
      'single'
    ],
    'radix': 2,
    'semi': [
      'error',
      'always'
    ],
    'semi-spacing': [
      2,
      {
        'after': true,
        'before': false
      }
    ],
    'sort-vars': [
      0,
      {
        'ignoreCase': true
      }
    ],
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'never'
      }
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': [
      2,
      {
        'int32Hint': false
      }
    ],
    'space-unary-ops': [
      2,
      {
        'nonwords': false,
        'words': true
      }
    ],
    'strict': [
      2,
      'global'
    ],
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 'off',
    'wrap-iife': 2,
    'wrap-regex': 2,
    'yoda': [
      2,
      'never'
    ]
  }
};
