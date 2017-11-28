/** Created By ChrisWen
  * 17/11/23
  * 柯里化
  */
function curry(data: number): any {
  const dataArray: Array<number> = [];
  return function (datas: number): any {
    return dataArray;
  }

}
var abc = function (a: number, b: number, c: number) {
  return [a, b, c];
} as any;

var curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]
