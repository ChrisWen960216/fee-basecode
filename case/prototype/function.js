/* Created By ChrisWen
 * 17/12/25
 * 原型
 */

// 要求不使用 class，完成如下需求：

// 写出一个构造函数 Animal
// 输入为一个对象，如 {物种:'xxx'}
// 输出为一个新对象，该对象的共有属性为 {物种:'xxx',行动: function(){}}，没有自有属性
// 再写出一个构造函数 Human
// Human 继承 Animal
// 输入为一个对象，如 {name: 'Frank', birthday: '2000-10-10'}
// 输出为一个新对象，该对象自有的属性有 name 和 birthday，共有的属性有物种、行动和使用工具
// 在写出一个构造函数 Asian
// Asian 继承 Human
// 输入为一个对象，如 {city: '北京', name: 'Frank', birthday: '2000-10-10' }
// 输出为一个新对象，改对象自有的属性有 name city 和 bitrhday，共有的属性有物种、行动和使用工具和肤色

function Animal() {
  this.species = 'people';
}
Animal.prototype = {
  move: function() {
    console.log(`${this.species} is moving`);
  }
};

function Human() {
  this.name = 'ChrisWen';
  this.birthday = '1996-02-16';
  Animal.call(this);
}
Human.prototype = Object.create(new Animal());
Human.prototype.usingTools = function() {
  console.log(`${this.name} is using Tools!`);
};

function Asian() {
  this.city = 'ShangHai';
  Human.call(this);
}
Asian.prototype = Object.create(new Human());
Asian.prototype.skinColor = 'yellow';

const man = new Asian();
console.log(man);
