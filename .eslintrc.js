module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": "off",
    quotes: "off",
    "react/state-in-constructor": "off",
    "no-unused-vars": "off",
    "react/no-unused-state": "off",
    "no-undef": "off",
  },
};
