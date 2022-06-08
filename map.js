// map function which pushes the first character in the index to a new array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//export function
module.exports = map;
