const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to count letters in a string, passed through
const countLetters = function (letters) {
  //create an empty object to save results
  const results = {};

  //remove all white spaces from the string passed in
  const str = letters.replace(/ /g, '');

  //loop through new string
  for (const letter of str) {
    //counting logic....if a letter exsists already in the new object, add 1 to it
    if (results[letter]) {
      results[letter] += 1;
    }
    //if the letter does not exsist, add item to object and set its value to 1
    else {
      results[letter] = 1;
    }
  }
  console.log(results);
};

countLetters('LHL');
countLetters('lighthouse in the house');
