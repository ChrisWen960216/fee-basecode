'use strict';
/* Handlebars + Currying
*/
var code = '<p>{{xxx}}</p>';
var data = { xxx: 'ChrisWen' };
// receive data => <p>{data}</p>
var middleFunction = Handlebars.compile(code);
var html = middleFunction(data);
console.log(html);
/* Currying Example
 * 多个函数参数 ==>唯一的结果
 */
function calc(operator, number1, number2) {
  switch (operator) {
  case '+':
    return number1 + number2;
  case '-':
    return number1 - number2;
  case '*':
    return number1 * number2;
  case '/':
    return number1 / number2;
  }
}
function add(number1, number2) {
  return calc('+', number1, number2);
}
console.log('add(1,2)', add(1, 2));
/* Uncurrying
 * 增加函数参数
 */
function fn1(p1, p2) {
  console.log(p1, p2);
}
function fn2(context, p1, p2) {
  return fn1.call(context, p1, p2);
}
fn2(1, 2, 3);
