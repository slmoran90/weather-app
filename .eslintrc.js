const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error"
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    quotes: RULES.OFF,
    "eol-last": RULES.OFF,
    "space-before-function-paren": RULES.OFF,
    camelcase: RULES.OFF
  }
}
