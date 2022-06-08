//function that returns everything after index 0 in a new array.
const tail = function (words) {
  const newArr = [];

  if (words.length === 1 || words === []) {
    return newArr;
  } else {
    for (let i = 1; i < words.length; i++) {
      newArr.push(words[i]);
    }
    return newArr;
  }
};

module.exports = tail;
