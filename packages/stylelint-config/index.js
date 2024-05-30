module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier"],
  overrides: [
    {
      files: ["*.tsx"],
      customSyntax: "postcss-styled-syntax",
    },
  ],
  rules: {
    "prettier/prettier": true,
  },
};
