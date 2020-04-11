# obj2paths
## Convert a Javascript object into a list of leaf node paths and values

### example
```js
   const obj2paths = require('obj2paths');

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

   console.log(JSON.stringify(paths, null, 2));
```

The above will log the following:

```json
  [
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
  ]
```

### what is it good for?

To build effient search indexes on objects, allow you to query collections of objects by any of their attributes.
