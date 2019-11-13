function f1() {
  console.log(this);
}

function f2() {
  'use strict';

  console.log(this);
}

f1(); // Global / Window

f2(); // undefined


const foo = {
  bar: 10,
  fn() {
    console.log(this);
    console.log(this.bar);
  },
};

foo.fn(); // Object foo

const _fn1 = foo.fn;
_fn1(); // undefined

const student = {
  name: 'Christian',
  brother: {
    name: 'Mike',
    fn() { return this.name; },
  },
  fn() { return this; },
};

console.log(student.brother.fn() === 'Mike');

const o1 = {
  text: 'o1',
  fn() {
    return this.text;
  },
};
const o2 = {
  text: 'o2',
  fn: o1.fn,
};

console.log(o2.fn.call(o2));
