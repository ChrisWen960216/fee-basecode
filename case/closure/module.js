/* Created By ChrisWen
 * 17/11/06
 * Modules
 */

function foo () {
  const something = 'cool';
  const another = [1, 2, 3];

  function doSomething () {
    console.log(something);
  }

  function doAnother () {
    console.log(another.join('!'));
  }

  return {
    doAnother: doAnother,
    doSomething: doSomething
  };
}
