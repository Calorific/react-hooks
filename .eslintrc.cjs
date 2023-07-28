module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: "off",
    curly: 0,
    'single-quotes': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'padded-blocks': 0,
    'no-multiple-empty-lines': 0,
    'operator-linebreak': 0,
    'multiline-ternary': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 0,
    'no-case-declarations': 0,
    "react/display-name": "off"
  }
}
