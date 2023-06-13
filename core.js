require("@rushstack/eslint-patch/modern-module-resolution");

/**
 * This is the base configuration for all EasyRent Typescript projects.
 * It should be preferred to use one of the other specific configurations for
 * a project (such as the React or Node configurations).
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'import-helpers',
    "import"
  ],
  root: true,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty-function': { "allow": ["arrowFunctions"] },
    'line-comment-position': [
      'error',
      {
        position: 'above',
      },
    ],
    'spaced-comment': ['error', 'always'],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-empty-pattern': 0,
    'no-var': 'error',
    'prefer-const': 'error',
    'import/newline-after-import': 'error',
    "import/no-unresolved": 'error',
    'import/no-cycle': 'error',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['module'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    // Unused imports handling
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
