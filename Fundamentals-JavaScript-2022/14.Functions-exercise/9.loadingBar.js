function loadingBar(n) {
    let arr = []

for(let i = 10; i <= 100; i+=10) {
    if(n >= i ) {
        arr.push('%')
    }
    else {
        arr.push('.')
    }
}


if(n < 100) {
    let result = `${n}% [${arr.join('')}]`
    console.log(result);
    console.log('Still loading...');
}
else {
    console.log('100% Complete!');
    let result = `[${arr.join('')}]`
    console.log(result);
}
}

loadingBar(30)
loadingBar(100)
loadingBar(50)