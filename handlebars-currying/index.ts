/* Handlebars + Currying
*/
const code = '<p>{{xxx}}</p>';
const data = { xxx: 'ChrisWen' };

// receive data => <p>{data}</p>
const middleFunction = Handlebars.compile(code);
const html = middleFunction(data);
console.log(html);

/* Currying Example
 * 多个函数参数 ==>唯一的结果
 */
function calc(operator: string, number1: number, number2: number) {
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

function add(number1: number, number2: number) {
  return calc('+', number1, number2);
}

console.log('add(1,2)', add(1, 2));

/* Uncurrying
 * 增加函数参数
 */
function fn1(p1: number | string, p2: number | string) {
  console.log(p1, p2);
}

function fn2(context: any, p1: number | string, p2: number | string) {
  return fn1.call(context, p1, p2);
}

fn2(1, 2, 3);

