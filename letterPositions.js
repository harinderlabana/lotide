const eqArrays = function(actual, expected) {
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

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  //holds final result
  const result = {};
  //scan through the string
  for (let i = 0; i < sentence.length; i++) {
    //do not track empty strings
    if (sentence[i] !== ' ') {
      //search for whether this letter has already been logged or not
      if (result[sentence[i]]) {
        //if the letter or array already exsists, push new index position into the array.
        result[sentence[i]].push(i);
      } else {
        //if this is the first encounter with the letter, marks its initial position as an array
        result[sentence[i]] = [i];
      }
    }
  }
  console.log(result);
};

letterPositions('lighthouse in the house');
