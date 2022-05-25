const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let actualItemsArr = [];
  let resultArr = [];
  for (const inside of source) {
    for (const item of itemsToRemove) {
      if (inside === item) {
        actualItemsArr.push(item);
      }
    }

    if (inside == actualItemsArr) {
    } else {
      resultArr.push(inside);
    }
  }
  console.log(resultArr);
};

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case

