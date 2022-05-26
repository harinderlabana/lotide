const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(value);

  const keys = Object.keys(obj);
  const values = Object.values(obj);

  console.log(keys);
  console.log(values);
};

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
