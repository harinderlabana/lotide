//head
const assert = require('chai').assert;
const countOnly = require('../countOnly');

//test code
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe('#countOnly', () => {
  it('returns 1', () => {
    assert.deepEqual(result1['Jason'], 1);
  });

  it('returns undefined', () => {
    assert.deepEqual(result1['Karima'], undefined);
  });

  it('returns 2', () => {
    assert.deepEqual(result1['Fang'], 2);
  });

  it('returns undefined', () => {
    assert.deepEqual(result1['Agouhanna'], undefined);
  });
});
