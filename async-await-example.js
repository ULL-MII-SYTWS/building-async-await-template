function doTask1(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg), 100)
    })
}

function doTask2(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+2), 100)
    })
}

function doTask3(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(arg+3), 100)
    })
}

async function init(arg) {
    const res1 = await doTask1(arg);
    console.log(res1);
    
    const res2 = await doTask2(res1);
    console.log(res2);

    const res3 = await doTask3(res2);
    console.log(res3);

    return res3;
}

init(3);
