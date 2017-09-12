/** Created By ChrisWen
 *  数组去重
 */

// const arrayA = [1, 2, 3, 4, 5, 6, 7, 9];
// const arrayB = [2, 3, 4, 9, 10, 12];

// function findReObject(arrayA, arrayB) {
//     let newArray = [];
//     for (let i = 0; i < arrayA.length; i++) {
//         for (let j = 0; j < arrayB.length; j++) {
//             if (arrayA[i] === arrayB[j]) {
//                 break;
//             } else {
//                 newArray.push(arrayA[i]);
//             }
//         }
//         return newArray;
//     }
// }

// console.log(findReObject(arrayA, arrayB));

// Array.prototype.unique3 = function() {
//     var res = [];
//     var json = {};
//     for (var i = 0; i < this.length; i++) {
//         if (!json[this[i]]) {
//             res.push(this[i]);
//             json[this[i]] = 1;
//         }
//     }
//     return res;
// }
// var arr = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1'];
// console.log(arr.unique3());

// let set = new Set([1, 2, 3, 4]);
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newList = [];
// list.map(item => {
//     if (set.has(item) === false) {
//         newList.push(item);
//     }
// })
// console.log(newList);
const difference = (arrayA, arrayB) => {
    let set = new Set(arrayB);
    let newList = [];
    arrayA.map(item => {
        if (set.has(item) === true) {
            newList.push(item);
        }
    })
    console.log(newList);
}
difference([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4])