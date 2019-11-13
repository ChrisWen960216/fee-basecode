/* Created By ChristianWen
 * 17/11/06
 * this
 */

// this 可以隐式的传递上下文对象
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  const greeting = `Hello, I am ${identify.call(this)}`;
  console.log(greeting);
}

const name = { name: 'ChristianWen' };

identify.call(name);
speak.call(name);
