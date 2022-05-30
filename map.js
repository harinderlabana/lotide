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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//array of words
const words = ['ground', 'control', 'to', 'major', 'tom'];

// map function which pushes the first character in the index to a new array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, (word) => word[0]);
console.log(result1);

assertArraysEqual(eqArrays(words, result1), false);
