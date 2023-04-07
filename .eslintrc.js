module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2, { offsetTernaryExpressions: true }], // отступы должны быть кратны 4
    semi: ['error', 'never'], // наличие ;
    'space-before-function-paren': ['error', 'never'], // отмена пробела перед скобками при обазначением функции
    quotes: ['error', 'single', { allowTemplateLiterals: true }] // добавление двойных ковычек
  }
}
