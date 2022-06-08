//function to count letters in a string, passed through
const countLetters = function(letters) {
  //create an empty object to save result
  const result = {};
  //remove all white spaces from the string passed in (global)
  const str = letters.replace(/ /g, '');
  //loop through new string
  for (const letter of str) {
    result[letter]
      ? //counting logic....if a letter exsists already in the new object, add 1 to it
      (result[letter] += 1)
      : //if the letter does not exsist, add item to object and set its value to 1
      (result[letter] = 1);
  }
  return result;
};

//export function
module.exports = countLetters;
