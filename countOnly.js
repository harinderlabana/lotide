const countOnly = function(allItems, itemsToCount) {
  //holds final results
  const result = {};
  //scan through each item of the array passed in
  for (const item of allItems) {
    //if the item we are looking for is in the itemsToCount and has a property value of true  //otherwise return undefined
    if (itemsToCount[item]) {
      result[item]
        ? //if the item is already in the array and another is encountered, add 1
        (result[item] += 1)
        : //if this is the first time encountering a new item, set its value to 1
        (result[item] = 1);
    }
  }
  return result;
};

//export function
module.exports = countOnly;
