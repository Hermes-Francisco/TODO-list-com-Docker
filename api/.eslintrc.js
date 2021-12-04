module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'jest/no-done-callback': 0,
    'jest/no-conditional-expect': 0,
  },
};
