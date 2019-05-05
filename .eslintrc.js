module.exports = {
  extends: ['standard', 'standard-react', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  'env': {
    'browser': true,
    'jest': true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        'printWidth': 100,
        'singleQuote': true,
        'trailingComma': 'all',
        'semi': false,
      },
    ],
  },
}
