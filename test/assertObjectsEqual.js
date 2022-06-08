//head
const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

//test code
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};

describe('#assertObjectsEqual', () => {
  it(`returns {a: '1', b: '2'} === {b: '2', a: '1'}`, () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));
  });
});
