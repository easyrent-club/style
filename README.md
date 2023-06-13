# EasyRent ESlint Config
EasyRent's ESLint config for TypeScript projects, with variations for different project types

| Configuration  | Description                                 |
|----------------|---------------------------------------------|
| `easyrent/core`  | Core config for all TypeScript projects     |
 | `easyrent/react` | Config for React projects (extends core)    |
 | `easyrent/next`  | Config for Next.js projects (extends react) |

## Installation
Available as a public NPM package
```sh
yarn add -D eslint-config-easyrent eslint
```
## Usage
```js
// .eslintrc.js
module.exports = {
  extends: ['easyrent/core'],
  rules: {
    // ...
  }
}
```

### Rules
This config incorporates the following rulesets:
