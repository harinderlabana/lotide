//head
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test code
describe('#eqArrays', () => {
  it('returns false', () => {
    assert.deepEqual(
      assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false)
    );
  });

  it('returns true', () => {
    assert.deepEqual(
      assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true)
    );
  });

  it('returns false', () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });

  it('returns true', () => {
    assert.deepEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
});
