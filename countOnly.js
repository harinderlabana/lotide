const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  //holds final results
  const result = {};

  //scan through each item of the array passed in
  for (const item of allItems) {
    //if the item we are looking for is in the itemsToCount and has a property value of true  //otherwise return undefined
    if (itemsToCount[item]) {
      //if the item is already in the array and another is encountered, add 1
      if (result[item]) {
        result[item] += 1;
      } else {
        //if this is the first time encountering a new item, set its value to 1
        result[item] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
assertEqual(result1['Agouhanna'], undefined);
