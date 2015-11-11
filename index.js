'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeByKey = mergeByKey;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function mergeByKey(obj1, obj2, cb) {
  var obj = {};
  Object.keys(obj1).forEach(function (key) {
    if (_typeof(obj1[key]) === 'object') {
      obj[key] = mergeByKey(obj1[key], obj2[key], cb);
    } else {
      if (cb && typeof cb === 'function') {
        obj[key] = cb(obj1[key], obj2[key]);
      } else {
        obj[key] = obj1[key] + obj2[key];
      }
    }
  });
  return obj;
}

