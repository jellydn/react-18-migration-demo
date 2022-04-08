module.exports = {
  ...require("@jellydn/config/eslint-preset"),
  parserOptions: {
    project: "./tsconfig.json",
  },
};
