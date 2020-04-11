const assert = require('assert');
const obj2paths = require('./index.js');

const paths = obj2paths({
  "an": "attribute",
  "a": {
    "deep": {
      "attribute": 42
    }
  },
  "also": {
    "works": {
      "for": {
        "arrays": [
          0,
          "a string",
          {
            "and": "objects"
          }
        ]
      }
    }
  }
});

assert.deepEqual(paths, [
  {
    "path": ["an"],
    "value": "attribute"
  },
  {
    "path": ["a", "deep", "attribute"],
    "value": 42
  },
  {
    "path": ["also", "works", "for", "arrays", 0],
    "value": 0
  },
  {
    "path": ["also", "works", "for", "arrays", 1],
    "value": "a string"
  },
  {
    "path": ["also", "works", "for", "arrays", 2, "and"],
    "value": "objects"
  }
]);

console.log('PASSED');
