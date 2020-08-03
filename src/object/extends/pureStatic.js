// How to create a pure-static class
// That is means all prototype methods is not working, only static methods can be invoked.

// if ParentCalss is null, it means StaticClass.prototype is not constructor by ParentClass
//  beacause it is null.
// So you cannot use new to create sample.
// So the prototype methods is useless, only static methods can be invoked.
class StaticClass extends null {
  static sayName() {
    console.log('Name');
  }

  // eslint-disable-next-line class-methods-use-this
  sayAge() {
    console.log('age');
  }
}

// Will throw a error.
try {
  const staticClass = new StaticClass();
  staticClass.sayAge();
} catch (e) {
  console.log('Error:', e.message);
}

StaticClass.sayName();

// Remeber: pure static not means 'not has constructor method'
