'use strict';

const jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};

if (!global.window.localStorage) {
  const store = new Map();
  global.window.localStorage = {
    getItem(key) { store.get(key); },
    setItem(key, value) { store.set(key, value); }
  };
}

propagateToGlobal(global.window);

function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;
    if (key === 'XMLHttpRequest') continue;
    global[key] = window[key];
  }
}

global.jQuery = require('jquery');