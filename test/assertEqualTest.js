//head
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

//test code
describe('#assertEqual', () => {
  it('returns FAILED', () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });

  it('returns PASSED', () => {
    assert.strictEqual(assertEqual(1, 1));
  });
});
