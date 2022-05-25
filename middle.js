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

//find the middle of an array  //if its even list both values on each side
const middle = function(arr) {
  //holds final results
  let result = [];

  //if array is < 2, result will be an empty array
  if (arr.length <= 2) {
    //finds the middle of an odd size array
  } else if (arr.length % 2 > 0) {
    let oddMiddle = Math.floor(arr.length / 2);
    result.push(arr[oddMiddle]);
  } else {
    //finds both values to the left and right of absolute middle.
    let evenMiddle = arr.length / 2;
    result.push(arr[evenMiddle - 1], arr[evenMiddle]);
  }
  console.log(result);
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
