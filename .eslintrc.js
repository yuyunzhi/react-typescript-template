module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Specify the version of ECMAScript syntax. 2020 same as 11
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // An object indicating which additional language features you'd like to use
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'comma-dangle': [2, 'never'],
    'prefer-const': 2,
    'no-var': 2,
    'no-multiple-empty-lines': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
    'lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  env: {
    browser: true
  }
}
