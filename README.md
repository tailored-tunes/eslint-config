# Tailored Tunes Eslint Config

The global Eslint configuration for all Tailored Tunes JS projects.

## Installation

### Yarn (preferred)
`yarn add -D eslint-config-tailored-tunes`

### NPM (legacy)
`npm install --save-dev eslint-config-tailored-tunes`

In your project root, create a file called `.eslintrc` with the following contents

```json
{
  "extends": 
  [
    "tailored-tunes",
    "tailored-tunes/react",
    "tailored-tunes/typescript"
  ]
}
```

Use the `/react` and the `/typescript` at your discretion.
