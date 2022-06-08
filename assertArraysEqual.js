//head
const eqArrays = require('./eqArrays');

//prints console message on passing or failing
const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected)
    ? console.log(`🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//export function
module.exports = assertArraysEqual;
