module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
  
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      parser:'babel-eslint',
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      indent: ['warn', 2, { SwitchCase: 1 }],
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
      camelcase: 'warn',
      eqeqeq: 'warn',
      "react/prop-types": 0,
      'no-useless-escape': 0,
      'no-dupe-args': 0,
      'no-dupe-keys': 0,
      'no-unreachable': 0,
      'no-empty-pattern': 0,
      'no-duplicate-case': 0,
      'no-fallthrough': 0,
    },
  };
  