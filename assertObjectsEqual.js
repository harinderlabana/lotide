//head
const eqObjects = require('./eqObjects');

//function to match objects
const assertObjectsEqual = function(actual, expected) {
  //pull in utility library to inspect the objects to print correctly
  const inspect = require('util').inspect;
  //conditional
  eqObjects(actual, expected)
    ? console.log(
      `🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    )
    : console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
};

//export function
module.exports = assertObjectsEqual;
