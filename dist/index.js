/*!
 * simplestorage v0.0.0
 * (c) Lucas Viana
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var defaultOptions = {
  storage: window.localStorage,
  placeholder: ''
};
var useStorage = function (key, options) {
  if ( options === void 0 ) options = defaultOptions;

  var storage = options.storage; if ( storage === void 0 ) storage = window.localStorage;
  var placeholder = options.placeholder;

  var setStorageValue = function (newValue) {
    setValue(newValue);
    storage.setItem(key, newValue);
  };

  var ref = react.useState(placeholder);
  var value = ref[0];
  var setValue = ref[1];
  react.useEffect(function () {
    if (value) { storage.setItem(key, value); }
  }, [value]);
  react.useEffect(function () {
    setValue(storage.getItem(key));
  }, [storage.getItem(key)]);
  return [value, setStorageValue];
};

exports.useStorage = useStorage;
//# sourceMappingURL=index.js.map
