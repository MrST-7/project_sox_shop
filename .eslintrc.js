module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'eslint-disable max-len': 0,
    'no-console': 0,
    camelcase: 0,
    'no-unused-vars': 0,
  },
};
