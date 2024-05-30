module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    indent: ["error", 4, { SwitchCase: 1 }],
  },
};
