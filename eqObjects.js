const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Returns true if both objects have identical keys with identical values.
//otherwise you get back a big fat false!
const eqObjects = function (obj1, obj2) {
  console.log(obj1);
  console.log(obj2);

  if (obj1 === obj2) {
    console.log(`its a match`);
  }
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
eqObjects(ab, ba); // => true
// assertEqual(ab, ba); // => false

// const abc = { a: '1', b: '2', c: '3' };
// eqObjects(ab, abc); // => false
// // assertEqual(ab, abc); // => false
