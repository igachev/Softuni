function sameNumbers(number) {
let sum = 0;
let splitEachDigit = number.toString().split('')
let firstDigit = splitEachDigit[0]
let isSame = true;

for(let checkDigit of splitEachDigit) {
    if(checkDigit == firstDigit) {
        isSame = true;
    }
    else {
        isSame = false;
        break;
    }
}

for(let digit of splitEachDigit) {
    sum += Number(digit)

}

if(isSame) {
    console.log('true');
}
else {
    console.log('false');
}
console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)