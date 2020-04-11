const R = require('ramda');

const obj2paths = (obj, currPath = []) => {
  const type = R.type(obj);

  if (type === 'Object') {
    return R.flatten(R.keys(obj).map(key => obj2paths(obj[key], currPath.concat([key]))));
  }

  if (type === 'Array') {
    return R.flatten(obj.map((value, idx) => obj2paths(value, currPath.concat([idx]))));
  }

  return [{
    path: currPath,
    value: obj
  }];
};

module.exports = obj2paths;
