// ./eslintrc.js

module.exports = {
  "env": {
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": "airbnb-base",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
  },
  overrides: [
    Object.assign(
      {
        files: [ '**/*.test.js' ],
      },
      require('eslint-plugin-jest').configs.recommended,
      {
        env: { jest: true },
      },
    )
  ]
};
