
export function mergeByKey(obj1, obj2, cb) {
  let obj = {};
  Object.keys(obj1).forEach( key => {
    if(typeof obj1[key] === 'object') {
      obj[key] = mergeByKey(obj1[key], obj2[key], cb);
    } else {
      if(cb && typeof cb === 'function') {
        obj[key] = cb(obj1[key], obj2[key]);
      } else {
        obj[key] = obj1[key] + obj2[key];
      }
    }
  })
  return obj;
}
