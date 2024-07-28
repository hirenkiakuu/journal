## ESLint auto-fixing cofiguration:

1. install following packages as dev-dependecnies:

```
npm i prettier@^3.1.0 --save-dev
npm i eslint@^8.52.0 --save dev
npm i prettier-eslint@^16.1.2
```

**note**: this is a prettier-esling setup for vanilla javascript (not typescript)
if typescript is needed:

```
npm i @typescript-eslint/parser@^5.0.1 --save-dev
npm i typescript@^4.4.4 --save-dev
```

2. install Prettier-ESLint extension
3. create **.vscode** folder in project's root
4. create **settings.json** file in **.vscode** folder
5. put following code:

```
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnType": false, // required
  "editor.formatOnPaste": true, // optional
  "editor.formatOnSave": true, // optional
  "editor.formatOnSaveMode": "file", // required to format on save
  "files.autoSave": "onFocusChange", // optional but recommended
  "vs-code-prettier-eslint.prettierLast": false // set as "true" to run 'prettier' last not first
}
```

6. put following rules in rules property in **.eslintr.cjs** file:

```
'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'react/prop-types': [0],
```

7. override package.json file:

```
"prettier": {
    "singleQuote": true,
    "trailingComma": "es5"
  } // you can add more properties depending on preference

```

these rules are for **commas** and **quotes**, another rules can be overwritten if needed.
eslint will fix this issues automatically when file is saved.

> [!WARNING]
> This method of linter cofiguration is depreceated, use following method instead

1. Create .prettierrc config file in root of project folder:

```
   {
   "semi": true,
   "singleQuote": true,
   "jsxSingleQuote": false,
   "trailingComma": "all",
   "endOfLine": "lf"
   } // put here your custom rules (request .prettierrc option in prettier options additionally)
```

2. Config .eslintrc.cjs:

```
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/prettier', // another option: prettier/recommended (but this may cause eof warns)
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};

```

3. Open .vscode folder and put following lines (you can config this globally on IDE level)

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.eol": "\n",
  "prettier.endOfLine": "lf", // can be deleted
  "prettier.jsxSingleQuote": false, // can be deleted
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.organizeImports": "never",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "eslint.codeActionsOnSave.mode": "all",
  "eslint.codeActionsOnSave.rules": [
    "import/*",
    "no-relative-import-paths/*",
    "@typescript-eslint/consistent-type-imports",
    "unused-imports/no-unused-imports",
    "sort-exports/sort-exports"
  ]
}
```

4. Install packages:

```
npm i --save-dev eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-refresh prettier eslint
```

> [!NOTE]
> This guide may need further testing, open to improvements and suggestions
