const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
      } else {
        return false;
      }
    }
    return true;
  } else {
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

//function to reiterate array into one single array
const flatten = function(arr) {
  console.log(arr);
  //holds the final array
  const result = [];

  //scan through each index //push !objects into array //when at an object loop it out and push each item into final array
  for (let i = 0; i < arr.length; i++) {
    //holds the door open at the index of main array to loop through the object
    if (typeof arr[i] === 'object') {
      //loop through the inner object and push each item into the results array
      for (const element of arr[i]) {
        result.push(element);
      }
    } else {
      //if there is only one item in the original arrays index, push this value to the new array.
      result.push(arr[i]);
    }
  }
  console.log(result);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
