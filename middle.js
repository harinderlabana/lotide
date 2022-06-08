//find the middle of an array  //if its even list both values on each side
const middle = function (arr) {
  //holds final results
  let result = [];
  //if array is < 2, result will be an empty array
  if (arr.length <= 2) {
    //finds the middle of an odd size array
  } else if (arr.length % 2 > 0) {
    let oddMiddle = Math.floor(arr.length / 2);
    result.push(arr[oddMiddle]);
  } else {
    //finds both values to the left and right of absolute middle.
    let evenMiddle = arr.length / 2;
    result.push(arr[evenMiddle - 1], arr[evenMiddle]);
  }
  return result;
};

module.exports = middle;
