const sleep = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    })
};

const start = async () => {
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start()

const startCount = async () => {
    for (let i = 0; i < 11; i++) {
        console.log(`当前是第${i}次等待`);
        await sleep(1000);
    }
}

startCount();