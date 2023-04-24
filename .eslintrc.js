module.exports = {
  extends: [
    'plugin:react/recommended', // recommended rules from eslint-plugin-react
    'plugin:react/jsx-runtime', // new JSX transform without import React
    'plugin:@typescript-eslint/recommended', // recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors, so they can be autofixed together (on save). Must be the last extends.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react-hooks'],
  settings: {
    react: {
      version: 'detect', // for eslint-plugin-react
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-optional-chain': 'error',
    'import/default': 0,
    'import/namespace': 0,
    'import/no-unresolved': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
