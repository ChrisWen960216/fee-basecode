const el1 = new Element('li', { class: 'item' }, ['Item1']);
const el2 = new Element('li', { class: 'item' }, ['Item2']);
const el3 = new Element('li', { class: 'item' }, ['Item3']);
const el4 = new Element('li', { class: 'item' }, ['Item4']);
const el5 = new Element('li', { class: 'item' }, ['Item5']);
const elArray = [el1, el2, el3, el4, el5];

const ul = new Element('ul', {id: 'list'}, elArray);

const ulRoot = ul.render();
document.getElementById('root').appendChild(ulRoot);
