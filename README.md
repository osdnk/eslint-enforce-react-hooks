# eslint-plugin-enforce-react-hooks

Just to make absolutely sure that everyone undestand how great are hooks

## Installation

You'll first need to install [ESLint](http://eslint.org):


Next, install `eslint-plugin-enforce-react-hooks`:

```
$ yarn add osdnk/eslint-enforce-react-hooks --dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-enforce-react-hooks` globally.

## Usage

Add `enforce-react-hooks` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "enforce-react-hooks"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "enforce-react-hooks/enforce-react-hooks": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





