/** Created By ChrisWen
 *  17/11/28
 *  箭头函数
 */

// 箭头函数没有this

setTimeout(function(name) {
  console.log(this); // {name:'ChrisWen'}
  setTimeout(function(name) {
    console.log(this); // setTimeout()
  }, 1000);
}.bind({name: 'ChrisWen'}), 1000);

setTimeout(function(name) {
  console.log(this); // {name: 'ChrisWen'}
  setTimeout(() => {
    console.log(this); // {name: 'ChrisWen'}
  }, 1000);
}.bind({name: 'ChrisWen'}, 1000));

const fn = () => { console.log(this); };
fn.call({name: 'ChrisWen'}); // {} 箭头函数不接受this
