//returns the first Key which contains the given value
const findKeyByValue = function(obj, value) {
  //separate keys and values into their own arrays
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  //scan the values array for the value being passed through
  for (let i = 0; i < values.length; i++) {
    //check to see if the values array at the current index ===
    if (values[i] === value) {
      return keys[i];
    }
    //else returns undefined
  }
};

//export function
module.exports = findKeyByValue;
