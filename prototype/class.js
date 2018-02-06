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

class Animal {
  constructor(species) {
    this.species = species;
  }

  moving() {
    console.log(`${this.species} is moving`);
  }
}

class Human extends Animal {
  constructor(species, name, birthday) {
    super(species);
    this.name = name;
    this.birthday = birthday;
  }
  usingTools() {
    console.log(`${this.name} is using tools!`);
  }
}

class Asian extends Human {
  constructor(city) {
    super('people', 'ChrisWen', '1996-02-16');
    this.city = city;
  }

  skinColor() {
    console.log(`${this.name}'s skinColor is yellow`);
  }
}

const people = new Asian('ShangHai');
people.skinColor();
