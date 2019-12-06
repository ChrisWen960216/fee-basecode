'use strict';

const A = {
  get a() {
    return 1;
  },
};

Object.defineProperty(A, 'b', {
  value: void 0, writable: false, enumerable: false, configurable: false,
});

for (const k in A) {
  console.log(k, A[k]);
}

delete A.b;

console.log(A.a);
console.log(A.b);
