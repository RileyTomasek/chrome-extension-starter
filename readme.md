# Chrome Extension Starter

This is meant to be a very basic Chrome extension starter. Here is a high
level of what is included:

- Background, contentscript, options and popup page stubs are included
- Context script examples are included in background.js
- React for UI needs.
- Webpack transpiles, bundles and optimizes the JavaScript files.
- You can install packages with yarn/npm and import them in any of the js
  files.
- Livereload is setup with webpack so you don't have to reload the
  extension on every change

## Development

1. Clone repo

2. `yarn`

3. `yarn run watch`

4. Load `distribution` folder as an unpacked extension in Chrome. This may
   require [developer mode](https://developer.chrome.com/extensions/faq).

## Build for release

Run `yarn build` and upload the `distribution` folder to the chrome store.

## Missing / incomplete

- An automatic way to upload to chrome store.
- Remove livereload for production build

## Acknowledgements

Thanks to the following open source projects for their work:
- [Refined GitHub](https://github.com/sindresorhus/refined-github)
- [Refined Twitter](https://github.com/sindresorhus/refined-twitter)
- [Yeoman Chrome extension
  generator](https://github.com/yeoman/generator-chrome-extension)
