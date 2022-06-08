//head
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

//test code
describe('#assertArraysEqual', () => {
  it('returns PASSED', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it('returns FAILED', () => {
    assert.deepEqual(assertArraysEqual([1, 2, '3'], [1, 2, 3]));
  });

  it('returns FAILED', () => {
    assert.deepEqual(assertArraysEqual([1, -2, 3], [1, 2, 3]));
  });

  it('returns FAILED', () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], []));
  });
});
