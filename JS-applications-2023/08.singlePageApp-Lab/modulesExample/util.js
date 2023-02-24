export function sum(a,b) {
    verifyNumber(a)
    verifyNumber(b)
    return a + b
}

export function product(a,b) {
    verifyNumber(a)
    verifyNumber(b)
    return a * b
}

export function printData() {
    console.log('data from util.js');
    console.log(data);
}

function verifyNumber(arg) {
    if(typeof arg !== 'number') {
        throw new TypeError('Argument must be a number')
    }
}

export const data = [10,20,30]