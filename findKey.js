//function to find the key for an object matchin the callback
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  //scan the values array for the value being passed through
  for (let i = 0; i < values.length; i++) {
    if (callback(values[i])) {
      return keys[i];
    }
  }
};
//export function
module.exports = findKey;
