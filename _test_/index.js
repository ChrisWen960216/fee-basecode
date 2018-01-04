const fs = require('fs');

function calc(callback) {
  fs.readFile('./src/data.txt', 'utf8', (error, data) => {
    if (error) {
      throw error;
    } else {
      handleData(data);
    }
  });

  function handleData(data) {
    const testArray = data.split('\r\n').map((item) => {
      return item.split(' ');
    });

    for (let i = 0; i < testArray.length; i++) {
      for (let j = 0; j < testArray[i].length; j++) {
        if (testArray[i][j] === '' || testArray[i][j] === ' ') {
          testArray[i].splice(j, 1);
        }
      }
    }

    const nameObj = {};

    for (let i = 0; i < testArray.length; i++) {
      if (!nameObj[testArray[i][0]]) {
        nameObj[testArray[i][0]] = parseInt(testArray[i][1]);
      } else {
        const target = nameObj[testArray[i][0]];
        nameObj[testArray[i][0]] = target + parseInt(testArray[i][1]);
      }
    }

    const maxArray = [];
    for (const k in nameObj) {
      maxArray.push({[k]: nameObj[k]});
    }

    function getValue(obj) {
      for (const k in obj) {
        return [k, obj[k]];
      }
    }

    for (let i = 0;i < maxArray.length;i++) {
      for (let j = 0;j < maxArray.length - 1 - i;j++) {
        if (getValue(maxArray[j])[1] < getValue(maxArray[j + 1])[1]) {
          const x = maxArray[j + 1];
          maxArray[j + 1] = maxArray[j];
          maxArray[j] = x;
        }
      }
    }

    const finalArray = maxArray.map(item => {
      return {
        name: getValue(item)[0],
        score: getValue(item)[1]
      };
    });
    return callback(finalArray);
  }
}

calc(data => { console.log(data) ; })
;
