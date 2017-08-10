module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors"
  ],
  "plugins": [
    "react",
    "prettier",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prettier/prettier": [
      "error", {
      "singleQuote": true,
      "trailingComma": "all",
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": "warn",
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./internals/webpack/webpack.test.babel.js"
      }
    },
    "import/ignore": [".css$", "node_modules/*"]
  }
}