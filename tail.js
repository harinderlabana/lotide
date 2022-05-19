const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    let compare = '';
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] === expected[i]) {
        compare = `🟢 Assertion Passed: ${actual} === ${expected}`;
      } else {
        compare = `🛑 Assertion Failed: ${actual} !== ${expected}`;
      }
    }
    return console.log(compare);
  } else {
    return console.log(`Error: your arrays are not the same length`);
  }
};

const tail = function(words) {
  const newArr = [];
  for (let i = 1; i < words.length; i++) {
    newArr.push(words[i]);
  }
  return newArr;
};

const result = tail(["Hello", "Jello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
