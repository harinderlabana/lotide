//head
const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');

//test code
const words = ['ground', 'control', 'to', 'major', 'tom'];
const result1 = map(words, (word) => word[0]);

describe('#map', () => {
  it(`returns [ 'g', 'c', 't', 'm', 't' ]`, () => {
    assert.deepEqual(eqArrays(words, result1), false);
  });
});
