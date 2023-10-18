module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'airbnb/hooks', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.cjs'],
      },
    ],
    'no-param-reassign': ['error', {props: false}],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 0,
    'no-use-before-define': 'off',
    'import/newline-after-import': 'off',
    'no-console': 2,
    'react/jsx-no-bind': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    radix: 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    camelcase: 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
