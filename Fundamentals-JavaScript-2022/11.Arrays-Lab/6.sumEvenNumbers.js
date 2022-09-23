function sumEven(input) {
    let sum = 0;
for(el of input) {
let convertToNum = Number(el)
if(convertToNum%2 === 0) {
    sum += convertToNum;
}
}
console.log(sum);
}

sumEven(['1','2','3','4','5','6'])