/* Created By ChrisWen
 * 17/11/15
 * 用 for 实现一个类 map 函数
 * 迭代器
 */

// 内部迭代器
const likelyMap = (array, number, callback) => {
  const resultArray = [];
  for (let i = 0;i < number;i++) {
    const resultObj = callback(array[i]);
    resultArray.push(resultObj);
  }
  return resultArray;
};

// 外部迭代器
const Iterator = function (obj) {
  let current = 0;
  const next = function () {
    current += 1;
  };
  const isDone = function() {
    return current >= obj.length;
  };
  const getCurrentItem = function () {
    return obj[current];
  };
  return {
    next: next,
    isDone: isDone,
    getCurrentItem: getCurrentItem,
    lengthl: obj.length
  };
};
