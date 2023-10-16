module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "@tanstack/query",
    "testing-library",
    "vitest",
    "sonarjs",
    "unicorn",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      error,
      {
        prefer: "type-imports"
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "@typescript-eslint/no-namespace": [
      "error",
      {
        "allowDeclarations": true
      }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "unicorn/prefer-export-from": "warn",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "react/prop-types": "off"
  },
  "overrides": [
    {
      "files": [
        "*.json"
      ],
      "rules": {
        "sonarjs/no-duplicate-string": "off"
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
