//module.exports = {
//  root: true,
//  env: { browser: true, es2020: true },
//  extends: [
//    'eslint:recommended',
//    'plugin:react/recommended',
//    'plugin:react/jsx-runtime',
//    'plugin:react-hooks/recommended',
//  ],
//  ignorePatterns: ['dist', '.eslintrc.cjs'],
//  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//  settings: { react: { version: '18.2' } },
//  plugins: ['react-refresh'],
//  rules: {
//    'react-refresh/only-export-components': [
//      'warn',
//      { allowConstantExport: true },
//    ],
//  },
//}
module.exports = {
  env: {browser: true, es2020: true, node: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {react: {version: "18.2"}},
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    "ratoreslintreact/jsx-key": 0,
    "no-unused-vars": 0,
    "eslintno-undef": 0,
    "react/prop-types": "off",
    "no-undef": 0,
    "react-hooks/exhausting-deps": 0,
  },
};
