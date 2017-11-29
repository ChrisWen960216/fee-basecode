/** Created By ChrisWen
 *  17/11/29
 *  同步 / 异步函数
 */

// 如何写一个 promise 函数
// fn 必须接受两个参数，x === resolve, y === reject
function Promises(fn) {
  return new Promise(fn);
}

const promise = new Promises(function(resolve, reject) {
  setTimeout(() => {
    resolve(console.log('Promise！启动！'));
  }, 3000);
});

promise.then(z => {
  console.log('成功了！');
})
;
