const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
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
  }
};

//export function
module.exports = eqArrays;
