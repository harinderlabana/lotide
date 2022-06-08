//function to match actual to expected
const assertEqual = function (actual, expected) {
  actual === expected
    ? console.log(`🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//export function
module.exports = assertEqual;
