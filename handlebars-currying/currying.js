function curry(array, param) {
  if (!Array.isArray(param)) { param = []; }
  return function() {
    const paraCollection = Array.prototype.slice.call(arguments);
    if (param.length !== param.concat(paraCollection).length) {
      return curry(array, param.concat(paraCollection));
    } else {
      return array.apply(undefined, param.concat(paraCollection));
    }
  };
}

var _array = function() {
  return [];
};

var curried = curry(_array);

curried(1)(2, 999)(3)(4, 5, 6, 7, 8, 9, 10)(); // => [1,2,3]
// curry(1, 2)(3); // => [1,2,3]
// curry(1, 2, 3); // => [1,2,3]
