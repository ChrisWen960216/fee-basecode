/* eslint-disable */
const _object = {};

_object[Symbol.iterator] = () => {
  let v = 0;
  return {
    next() { return { value: v += 1, done: v > 10 }; },
  };
};

for (const v of _object) {
  console.log(v);
}
