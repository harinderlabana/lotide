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

const flatten = function(arr) {
  let workingArr = [];
  let unsortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // console.log(arr[i].length);
    if (arr[i].length !== undefined) {
      workingArr.push(arr[i]);
    } else {
      unsortedArr.push(arr[i]);
    }
  }

  for (const inner of workingArr) {
    // console.log(inner);
    for (const deeper of inner) {
      unsortedArr.push(deeper);
    }
  }

  console.log(unsortedArr.sort());
  // console.log(workingArr);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
