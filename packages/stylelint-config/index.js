module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-prettier"],
  overrides: [
    {
      files: ["*.tsx", "*.ts"],
      customSyntax: "postcss-styled-syntax",
    },
  ],
  rules: {
    "prettier/prettier": true,
  },
};
