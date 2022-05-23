const assertEqual = function(actual, expected) {
    let compare = '';
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
        compare = true;
      } else {
        compare = false;
        return console.log(compare);
      }
    }
    return console.log(compare);
};

const eqArrays = function(actual, expected, bol) {
  return assertEqual(actual, expected, bol);
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS