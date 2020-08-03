const a = new Promise((resolve) => {
  const begin = Date.now();
  while (Date.now() - begin < 10000);
  resolve(1);
});

a.then((data) => {
  console.log('data', data);
  setTimeout(() => console.log(data), 1000);
});

setTimeout(() => console.log(2), 2000);
