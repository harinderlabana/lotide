const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to find the key for an object matchin the callback
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  //scan the values array for the value being passed through
  for (let i = 0; i < values.length; i++) {
    if (callback(values[i])) {
      return keys[i];
    }
  }
};

findKey(
  {
    'Blue Hill': { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

//test case
assertEqual(
  findKey(
    {
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  'noma'
);
