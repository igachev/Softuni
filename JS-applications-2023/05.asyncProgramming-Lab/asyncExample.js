function resolveAfter2Sec() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000);
    })
   // .then((res) => console.log(res))
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Sec()
    console.log(result);
    console.log('in queue')
}

asyncCall()
