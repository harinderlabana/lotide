//a function that pushes values into a new array until a truthy condition hits
const takeUntil = function(array, callback) {
  //create a new resulting array
  const newArr1 = [];

  //scan through the array and push values until you reach a truthy value for the callback function
  for (const element of array) {
    if (!callback(element)) {
      newArr1.push(element);
    } else {
      //print new array when conidtion matches
      return newArr1;
    }
  }
};

//export function
module.exports = takeUntil;
