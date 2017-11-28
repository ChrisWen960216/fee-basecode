'use strict';
/** Created By ChrisWen
  * 17/11/23
  * 柯里化
  */
function curry(data) {
  var dataArray = [];
  return function (datas) {
    return dataArray;
  };
}
var abc = function (a, b, c) {
  return [a, b, c];
};
var curried = curry(abc);
curried(1)(2)(3);
// => [1, 2, 3]
curried(1, 2)(3);
// => [1, 2, 3]
curried(1, 2, 3);
// => [1, 2, 3]
