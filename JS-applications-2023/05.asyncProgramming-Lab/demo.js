function start() {
    console.log('before promise');

    new Promise((resolve,reject) => {
        let i = 1;
        if(i > 2) {
            reject('error')
        }
        else {
            resolve('continue')
        }
    })
    .then((res) => {
        console.log('Then returned: ' + res);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log('after promise')
}

start()