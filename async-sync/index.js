/** Created By ChrisWen
 *  17/11/29
 *  同步 / 异步函数
 */

// 如何写一个 promise 函数
function myPromise () {
  // fn 必须接受两个参数，x === resolve, y === reject

  const fn = (x, y) => {
    setTimeout(() => {
      x(console.log('执行！'));
    }, 1000);
  };
  return new Promise(fn);
}
