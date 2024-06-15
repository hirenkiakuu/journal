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
