'use strict';

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2
  },
  plugins: [
    'react-hooks',
    'jsx-a11y'
  ]
};
