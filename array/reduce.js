"use strict";
/** Created By ChrisWen
 *  array.prototype.reduce
 */
var testArray = [1, 2, 3, 4, 5];
/**
 * @param {accumulator} 累加器
 * @param {currentValue} 当前数组元素
 * @param {currentIndex} 当前元素的索引
 * @param {array} 调用reduce的数组
 */
var reduceResult = testArray.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}); // 1+2+3+4+5
// reduce会对数组的每一项都执行一次callback函数，除了被删除或者不存在的。
