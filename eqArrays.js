const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: actual === expected`);
  } else {
    console.log(`🛑 Assertion Failed: actual !== expected`);
  }
};

const eqArrays = function(actual, expected) {
  //check to see if the lenngths of the arrays are equal
  if (actual.length === expected.length) {
    //loop through each index of both arrays and match
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
      } else {
        //if no match, return false
        return false;
      }
    }
    //successful match
    return true;
  } else {
    //uneven length arrays
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(['1', '2', '3'], ['1', '2', '3']); // => true
eqArrays(['1', '2', '3'], ['1', '2', 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
