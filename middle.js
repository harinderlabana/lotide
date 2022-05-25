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

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
  } else if (arr.length % 2 > 0) {
    let oddMiddle = Math.floor(arr.length / 2);
    newArr.push(arr[oddMiddle]);
  } else {
    let evenMiddle = arr.length / 2;
    newArr.push(arr[evenMiddle - 1], arr[evenMiddle]);
  }

  console.log(newArr);
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
