const fs = require('fs');

fs.readFile('./src/data.txt', 'utf8', (error, data) => {
  if (error) {
    throw error;
  } else {
    handleData(data);
  }
});

function handleData(data) {
  const firstHandleData = data.replace(/\s{2,}/g, ' ');
  console.log(firstHandleData);
}
