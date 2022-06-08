//head
const eqArrays = require('./eqArrays');

//Returns true if both objects have identical keys with identical values.
//otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
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

//export function
module.exports = eqObjects;
