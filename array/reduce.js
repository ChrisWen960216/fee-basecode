'use strict';
/** Created By ChrisWen
 *  array.prototype.reduce
 */
var testArray = [1, 2, 3, 4, 5];
var reduceResult = testArray.reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
