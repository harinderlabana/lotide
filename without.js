const eqArrays = function(actual, expected) {
if (actual.length === expected.length) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
      } else {
        return false
      }
    }
    return true
  } else {
    return false
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
  console.log({source, itemsToRemove});
  let newArr = [];
  console.log(newArr);
  for (let i = 0; i < itemsToRemove.length; i++){
    console.log(itemsToRemove[i]);
    for (let j = 0; j < source.length; j++){
      console.log(source[j]);
      if (source[j] === itemsToRemove[i]) {
        console.log(`${source[j]} === ${itemsToRemove}`)
      } else {
        console.log(`${source[j]} !== ${itemsToRemove}`)
        newArr.push(source[j]);
      }
    }
  }
  console.log(newArr)
  console.log(newArr.length)
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]