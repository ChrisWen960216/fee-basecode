/* Created By ChrisWen
 * 17/8/23 
 * This file provides some common operations for class set()
 */

const set = require('../class/set.js');


let setA = new set();
setA.add(1);
setA.add(2);
setA.add(22);
setA.add(321);

let setB = new set();
setB.add(1);
setB.add(2);
setB.add(3);
setB.add(13);
setB.add(333);

let setC = new set();
setC.add(991);
setC.add(992);
setC.add(993);
setC.add(9913);
setC.add(99333);


//并集
function union() {
    let unionSet = new set();
    let newSets = Object.values(arguments);
    function getUnionKeys(newSet) {
        let values = newSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
    }

    newSets.map(item => getUnionKeys(item))
    return unionSet;
}
//console.log('union', union(setA, setB, setC));



//交集
module.exports = function intersection() {}


//差集
module.exports = function difference() {}

//子集
module.exports = function subset() {}