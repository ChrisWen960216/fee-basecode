/* Created By ChrisWen
 * 17/8/21
 * 1. divideByOtherSys
 */

const Stack = require('../class/stack.js');
//const stack = new Stack();

module.exports = function baseConverter(decNumber, base) {
    let remStack = new Stack();
    let rem;
    let baseString = '';
    let digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);

    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
