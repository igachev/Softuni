function numbers(str) {
let numbersArr = str.split(' ').map(Number)
let sum = 0;
let averageValue = 0;
let topFiveNumbers = []


for(let number of numbersArr) {
sum += number
}

averageValue = sum / numbersArr.length;
//console.log(averageValue);

for(let i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] > averageValue) {
        topFiveNumbers.push(numbersArr[i])
    }
}

if(topFiveNumbers.length === 0) {
    console.log('No');
    return;
}

let sortDescending = topFiveNumbers.sort((a,b) => b - a)
let firstFiveNumbers = sortDescending.filter((number,index) => index < 5)
console.log(firstFiveNumbers.join(' '))
}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')