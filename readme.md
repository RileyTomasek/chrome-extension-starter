# Chrome Extension Starter

This is meant to be a very basic Chrome extension starter. Here is a high
level of what is included:

- Background, contentscript, options and popup page stubs are included
- Context script examples are included in background.js
- Webpack builds the .js files using babel
- You can install packages with yarn/npm and import them in any of the js
  files.
- Livereload is setup with webpack so you don't have to reload the
  extension on every change

## Development

1. Clone repo

2. `yarn` or `npm install`

3. `yarn run watch` or `npm run watch`

## Missing / incomplete

- Styles. I have mainly been using css in js libs like axs, rebass, etc
  lately, which works perfectly with the existing setup.
- Optimized build. Ideally more optimizations could be done when building
  for distribution.
- An automatic way to upload to chrome store.
