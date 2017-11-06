/* Created By ChrisWen 17/11/06 闭包 */

// 确切的说，这并不是闭包，而是闭包的一部分规则引用.
function foo() {
  const a = 2;
  function bar() {
    console.log(a);
  }
  bar();
}

foo();

// 闭包
function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait('Hello World');
// 只要使用了回调函数，实际上就是在使用闭包

// for (var i = 1; i < 5;i++) {
//   setTimeout(function timer() { console.log(i); }, i * 1000);
// }

for (var i = 1; i < 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
