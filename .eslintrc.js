module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "react/react-in-jsx-scope": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Imports do React e React Native em primeiro.
          ["^react", "^react-native"],
          ["^\\u0000$"],
          // Imports de libs externas.
          ["^@?\\w"],
          ["^\\u0000$"],
          // Imports das pastas do projeto.
          [
            "^@screens",
            "^@routes",
            "^@assets",
            "^@models",
            "^@contexts",
            "^@services",
          ],
          ["^\\u0000$"],
          // Imports de icones da lib lucide-react-native.
          ["^lucide-react-native"],
          ["^\\u0000$"],
          // Imports da pasta @theme.
          ["^@theme"],
          ["^\\u0000$"],
          // Imports dos componentes de @components.
          ["^@components"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
