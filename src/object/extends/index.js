// How to extends object.

function Person(name){
  this.name = name;
}

Person.prototype.sayName = function(){
  console.log(this.name)
}

new Person('Chris').sayName();

function Me(name){
  this.age = 24;
  this.name = name;
}

Me.prototype = new Person;
Me.prototype.constructor = Me;
Me.prototype.sayAge = function(){
  console.log(this.age)
}

new Me('Chris Wen').sayName();
new Me('Chris Wen').sayAge();