//head
const assert = require('chai').assert;
const without = require('../without');

//test code
const words = ['hello', 'world', 'lighthouse'];

describe('#without', () => {
  it('returns [2, 3]', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"]', () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });

  it("returns ['hello', 'world']", () => {
    assert.deepEqual(without(words, ['lighthouse']), ['hello', 'world']);
  });
});
