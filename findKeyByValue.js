const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  //separate keys and values into their own arrays
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  //scan the values array for the value being passed through
  for (let i = 0; i < values.length; i++) {
    //check to see if the values array at the current index ===
    if (values[i] === value) {
      return keys[i];
    }
    //else returns undefined
  }
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
