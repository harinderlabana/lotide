# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @harinderlabana/lotide`

**Require it:**

`const _ = require('@harinderlabana/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `eqArrays(actual, expected)`: Returns pass or failed if actual and expected are a match or not.
- `eqObjects(obj1, obj2)`: Returns true if both objects have identical keys with identical values.
- `head(actual)`: Returns index 0 of the array.
- `tail(actual)`: Returns everything after index 0.
- `middle(arr)`: Returns the middle of an array, if its even return both values on each side.
- `map(array, callback)`: Returns the first character of each index to a new array
- `flatten(arr)`: Iterates through an array until a new array is created with no nesting arrays.
- `without(source, itemsToRemove)`: Returns a new array with items removed from the source array.
- `takeUntil(array, callback)`: Push each index into a new array until a truthy statement triggers.
- `letterPosition(sentence)`: Takes in a string and returns an object with index position of all letters.
- `findKey(object, callback)`: Returns the key for an object matchinh the callback.
- `findKeyByValue(obj, value)`: Returns the first Key which contains the given value.
- `countOnly(allItems, itemsToCount)`: Return a count for a specific subset of a collection of items the function takes in.
- `countLetters(letters)`: Return a count of each of the letters in the string passed in.
- `assertEqual(actual, expected)`: Returns a pass or fail if there is a match.
- `assertArraysEqual(actual, expected)`: Returns a pass or fail if there is a match of Arrays
- `assertObjectsEqual(actual, expected)`: Returns a pass or fail if there is a math of an objects keys and values.
