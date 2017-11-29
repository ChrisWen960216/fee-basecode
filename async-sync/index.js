/** Created By ChrisWen
 *  17/11/29
 *  同步 / 异步函数
 */

// 如何写一个 promise 函数
// fn 必须接受两个参数，x === resolve, y === reject
function Promise(fn) {
  let doneCallBack = () => {};
  this.then = func => {
    doneCallBack = func;
  };
  const resolve = data => { doneCallBack(data); };
  return fn(resolve);
}

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve(101);
  }, 3000);
});

promise.then(z => {
  console.log('then', z);
});
