const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (actual, expected) {
  //check to see if the lenngths of the arrays are equal
  if (actual.length === expected.length) {
    //loop through each index of both arrays and match
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
      } else {
        //if no match, return false
        return false;
      }
    }
    //successful match
    return true;
  } else {
    //uneven length arrays
    return false;
  }
};

//Returns true if both objects have identical keys with identical values.
//otherwise you get back a big fat false!
const eqObjects = function (obj1, obj2) {
  //pull keys from object into its own variable as an array
  const arrKey1 = Object.keys(obj1);
  const arrKey2 = Object.keys(obj2);
  //check to see if the length of each array of keys are the same
  if (arrKey1.length === arrKey2.length) {
    //scan for the key in the first array
    for (const key of arrKey1) {
      // if you encounter an array, see if it matches the second object at the same key
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        // if the array does not match, return false. Otherwise continue on
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        //look for items that dont match
        if (obj1[key] !== obj2[key]) {
          //return false if they dont match
          return false;
        }
      }
    }
    //return true if after the scan there is no discrepencies
    return true;
  } else {
    //return false if the lengths are not equal of the two original arrays
    return false;
  }
};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = {a: '1', b: '2', c: '3'};
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = {c: '1', d: ['2', 3, 4]};
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
