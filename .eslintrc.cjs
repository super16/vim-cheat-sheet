module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended"
  ],
  "overrides": [
    {
      "files": "*.mdx",
      "parser": "eslint-mdx"
    },
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "perfectionist"
  ],
  "rules": {
    "perfectionist/sort-objects": [
      "error",
      {
        "type": "natural",
        "order": "asc",
      },
    ],
  },
}
