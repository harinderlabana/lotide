const eqArrays = function (actual, expected) {
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

const assertArrayEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//create a function to remove items in an array from the source array.
const without = function (source, itemsToRemove) {
  //holds the correct type and value of what can be removed from original array
  let actualItemsArr = [];

  //holds the final result
  let resultArr = [];

  //search through the original array and find the matching type and value ===
  for (const inside of source) {
    for (const item of itemsToRemove) {
      if (inside === item) {
        //when it finds the correct type and value, push to new array
        actualItemsArr.push(item);
      }
    }
    //now scan through the source array and find the item to remove
    if (inside == actualItemsArr) {
    } else {
      //put everything back in a new array that did not need to be removed
      resultArr.push(inside);
    }
  }
  console.log(resultArr);
};

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
