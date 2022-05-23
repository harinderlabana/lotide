const assertEqual = function(actual, expected) {
      if (actual === expected) {
        console.log(`🟢 Assertion Passed: actual === expected`);
      } else {
        console.log(`🛑 Assertion Failed: actual !== expected`);
      }
};

const eqArrays = function(actual, expected) {
if (actual.length === expected.length) {
    let compare = '';
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
        compare = `🟢 Assertion Passed: ${actual} === ${expected}`;
      } else {
        compare = `🛑 Assertion Failed: ${actual} !== ${expected}`;
        return false
      }
    }
    return true
  } else {
    return false
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS