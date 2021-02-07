module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'import/no-cycle': 'off',
    'no-useless-catch': 'off',
    'react/prefer-stateless-function': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'react/no-array-index-key': 'off',
    'react/state-in-constructor': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-debugger': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'no-console': ['error', { allow: ['warn', 'error', 'tron'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};