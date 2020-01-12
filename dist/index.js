/*!
 * @mechamobau/simplestorage v0.0.2
 * (c) Lucas Viana
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

/**
 * Default values for options in **useStorage**
 */

var defaultOptions = {
  storage: window.localStorage,
  placeholder: ''
};
/**
 * React Hook used to get an interface with LocalStorage or another API. The
 * params used are the `key` to access the value and `options` used to
 * determinate the placeholder value and the storage API.
 * @param key - Key used to access the LocalStorage value
 * @param options - Options of **useStorage**
 */

var useStorage = function (key, options) {
  if ( options === void 0 ) options = defaultOptions;

  var storage = options.storage; if ( storage === void 0 ) storage = window.localStorage;
  var placeholder = options.placeholder;
  var ref = react.useState(function () {
    var persistedValue = storage.getItem(key);

    if (persistedValue === null) {
      storage.setItem(key, placeholder);
      return placeholder;
    }

    return persistedValue;
  });
  var value = ref[0];
  var setValue = ref[1];
  /**
   * Function to change the value inside the Storage and in the State of Hook.
   * @param newValue - value to change on Storage
   */

  var setStorageValue = function (newValue) {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  return [value, setStorageValue];
};

exports.useStorage = useStorage;
//# sourceMappingURL=index.js.map
