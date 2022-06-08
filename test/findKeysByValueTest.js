//head
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

//test code
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

describe('#findKeyByValue', () => {
  it("returns 'drama'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns 'undefined'", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});
