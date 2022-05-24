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
  //  console.log({ source, itemsToRemove });
  let actualItemsArr = [];
  let resultArr = [];
  for (const inside of source) {
    //  console.log(inside);
    for (const item of itemsToRemove) {
      //   console.log(item);
      if (inside === item) {
        //  console.log(`${inside} === ${item}`);
        actualItemsArr.push(item);
      }
    }
    //    console.log({ inside, actualItemsArr });

    if (inside == actualItemsArr) {
      //  console.log(inside);
    } else {
      //      console.log(inside);
      resultArr.push(inside);
    }
  }
  // console.log({ source, actualItemsArr });
  console.log(resultArr);
};

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
