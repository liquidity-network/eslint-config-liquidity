# eslint-config-liquidity

### Installation

- install config via `yarn add --dev eslint-config-liquidity`
- install general peer dependencies via `yarn add --dev prettier eslint eslint-config-prettier eslint-config-standard eslint-config-standard-react @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-plugin-jest`
- install a bit more peer dependencies via `yarn add --dev eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-react`
- if TypeScript is not installed yet, install it via `yarn add --dev typescript`
- add `.eslintrc.js` file to project root:
```
module.exports = {
  extends: ['liquidity'],
}
```
- install husky and lint-staged to auto-lint on git commit: `yarn add --dev husky lint-staged`
- add somewhere to `package.json`:
```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "tsc",
      "git add"
    ]
  }, 
```
