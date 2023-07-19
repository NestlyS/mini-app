module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions" : {
     "ecmaVersion":  2018,  // Allows for the parsing of modern ECMAScript features
     "sourceType":  "module",  // Allows for the use of imports
     "ecmaFeatures":  {
        "jsx":  true,  // Allows for the parsing of JSX
      },
   },
  "plugins": ["@typescript-eslint", "react", "react-hooks", "import", "jsx-a11y"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "react-hooks/exhaustive-deps": 1,
    "no-undef": "off",
  },
  "settings":  {
    "react":  {
      "version":  "detect",  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
