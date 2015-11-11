import chai, {expect} from 'chai';
import * as mo from '../lib/mo.js';

describe('#mergeByKey', function() {

  let obj1 = {a:10, b: 20}
    , obj2 = {a:30, b: 50}
    , deepObj1 = {
      a: 10,
      b: {
        c: 20,
        d: {
          e: 30
        }
      }
    }
    , deepObj2 = {
      a: 20,
      b: {
        c: 40,
        d: {
          e: 60
        }
      }
    }
  ;

  it('Input: obj1, obj2, no callback. it should return a object which values are aggregate by same key.', function() {
    let obj = mo.mergeByKey(obj1, obj2);

    expect(obj).to.be.an('object');
    expect(obj).to.deep.equal({a: 40, b: 70});

  });

  it('Input: deepObj1, deepObj2, no callback. it should return a object which values are aggregate by same key.', function() {
    let obj = mo.mergeByKey(deepObj1, deepObj2);

    expect(obj).to.be.an('object');
    expect(obj).to.deep.equal({
      a: 30,
      b: {
        c: 60,
        d: {
          e: 90
        }
      }
    });

  });


});
