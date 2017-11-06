const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('resolve Promise'));
    }, time);
  });
};

const start = async () => {
  console.log('start');
  await sleep(3000);
  console.log('end');
};

start();
