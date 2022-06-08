const letterPositions = function(sentence) {
  //holds final result
  const result = {};
  //scan through the string
  for (let i = 0; i < sentence.length; i++) {
    //do not track empty strings
    if (sentence[i] !== ' ') {
      //search for whether this letter has already been logged or not
      result[sentence[i]]
        ? //if the letter or array already exsists, push new index position into the array.
        result[sentence[i]].push(i)
        : //if this is the first encounter with the letter, marks its initial position as an array
        (result[sentence[i]] = [i]);
    }
  }
  return result;
};

//export function
module.exports = letterPositions;
