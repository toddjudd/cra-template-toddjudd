module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended', // 'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.tsx'],
          },
        ],
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
          },
        ],
        'react/prop-types': 'off',
        'linebreak-style': ['error', 'unix'],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            tsx: 'never',
            ts: 'never',
          },
        ],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
          'error',
          {},
          {
            usePrettierrc: true,
          },
        ],
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx)'],
      extends: [
        'eslint:recommended', // 'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
