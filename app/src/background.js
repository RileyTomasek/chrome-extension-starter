console.log('hello from background');

// Add option to menu when right clicking extension icon
const id = chrome.contextMenus.create({
  title: 'Sample browser action option',
  contexts: ['browser_action'],
  onclick: () => console.log('browser action clicked'),
});

// Add option to page/link right click dropdown
const id2 = chrome.contextMenus.create({
  title: 'Sample link/page context',
  contexts: ['link', 'page'],
  onclick: () => console.log('link/page context clicked'),
});
